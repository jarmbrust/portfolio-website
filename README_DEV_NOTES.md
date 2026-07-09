# If .env.local file is not detected when running locally

## Operational Note: APFS Ghost Directory Entry

*This issue stumped me for a bit too long, so noting it here, until, and if, I find a better place for it.*

While bootstrapping the Neon integration, a recurring "`Missing DATABASE_URL env var`" error was observed locally even though `ls -la` reported that `.env.local` existed. Investigation showed that the file appeared in directory listings but was **inaccessible via any direct path lookup** (`stat`, `cat`, `xattr`, `lsof`, `df`, and Python's `os.path.exists` all returned `ENOENT`).

### Symptom

`readdir()` reports a directory entry (with its inline size, mtime, owner, xattr indicator), but `lstat()` against the same path returns `No such file or directory`. The two POSIX code paths diverge.

```bash
$ ls -la                       # shows .env.local present, 163 bytes
-rw-r--r--@  1 name  staff  163 Jul  9 10:23 .env.local
$ ls -la .env.local             # but direct lookup fails
ls: .env.local: No such file or directory
$ cat .env.local
cat: .env.local: No such file or directory
$ python3 -c "import os; print(os.path.exists('.env.local'))"
False
```

### Diagnosis Steps

Run these in order to confirm the issue and isolate the path:

```bash
# 1. Directory listing — should report the file present
ls -la

# 2. Direct lookup — if this fails while step 1 succeeded, you have a ghost dirent
ls -la .env.local

# 3. Cross-check with absolute path forces the same code path lstat() uses
ls -la /absolute/path/to/.env.local
stat  /absolute/path/to/.env.local
cat  /absolute/path/to/.env.local

# 4. Confirm the volume is the standard APFS boot volume (rules out iCloud, FUSE, etc.)
mount | grep -E 'reactApps|portfolio-website|users'

# 5. Confirm with a non-shell tool
python3 -c "import os; print('exists:', os.path.exists('.env.local'))"
```

If steps 1-5 disagree (listing says present, all direct lookups say missing, mount is empty), the file is an **APFS tombstone directory entry**: the dirent name survives while the inode it points to has been unlinked.

### Recovery (Tier 1 — works for ghost dirents)

`touch` allocates a fresh inode and rebinds the existing directory entry to it. This almost always resolves the issue without root-cause investigation:

```bash
cd /Users/name/Code/reactApps/portfolio-website
touch .env.local
ls -la .env.local     # verify
stat    .env.local    # verify
cat     .env.local    # verify
```

If `touch .env.local` itself returns `No such file or directory`, escalate to:

1. `diskutil verifyVolume /` — read-only filesystem consistency check.
2. `diskutil repairVolume /` — live repair (may require reboot).
3. Reboot into Recovery mode → Disk Utility → First Aid on the boot APFS volume.

Once a real file exists, write content and lock permissions:

```bash
cat > .env.local << 'EOF'
DATABASE_URL=postgresql://neondb_owner:<password>@<pooled-host>/neondb?sslmode=require
EOF
chmod 600 .env.local
```

Then restart the dev server:

```bash
pkill -f "next dev" 2>/dev/null
sleep 1
npm run dev
```

### Root Causes

Most likely triggers, in order of probability on macOS with active Node.js development:

1. **Editor atomic-save pattern interrupted.** Modern editors write a temp file, then `rename()` (which is `link`+`unlink` on APFS) to swap it in place. Killing the editor or sleeping in the middle of this swap can leave a dirent pointing at a deleted inode.
2. **Background tool interleaving with foreground writes.** Spotlight, file-provider drivers, antivirus, backup clients, or other sync tools can opportunistically touch inodes.
3. **APFS clone lifting under churn.** `npm install`/uninstall churns many clones and generates many clone-lift events; small journal delays can produce tombstones under heavy load.
4. **Sleep or power event during a write transaction.** Modern APFS journaling mitigates most of this, but "mostly" is not "always".

### Prevention

- Let editors finish saves before quitting; don't force-quit during a write transaction.
- Run `diskutil verifyVolume /` once a month (read-only, harmless).
- Avoid dragging project files from Time Machine sparsebundles, network shares, or external drives directly into `~/Code/`. Use `ditto -V` instead.
- Avoid running heavy directory scans from non-Apple tools in `~/Code/` while `npm install` is active.
- Clean shutdown monthly rather than long sleep runs; clean shutdown replays the journal.
- `chmod 600` all `.env*` files; verify `.gitignore` covers `.env*.local`.
