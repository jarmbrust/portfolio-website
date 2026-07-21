# Portfolio Website

A Next.js app.


## Local Environment Setup

This project uses a Neon Postgres database for blog content, accessed via the `DATABASE_URL` environment variable.

Create a `.env.local` file in the project root (alongside `package.json`) with the following shape:

```
DATABASE_URL=postgresql://neondb_owner:<password>@<pooled-host>/neondb?sslmode=require
```

The pooled connection string comes from the Neon dashboard (Connection Details → "pooled"). The file must end with a single trailing newline. Lock permissions with `chmod 600 .env.local`.

`.env.local` is added to gitignored (as `.env*`). Never commit it; never type it into chat.
