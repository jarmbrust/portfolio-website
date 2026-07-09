import { neon } from '@neondatabase/serverless';

console.log('DATABASE_URL is:', JSON.stringify(process.env.DATABASE_URL));
console.log('cwd:', process.cwd());
console.log(
  'files in cwd:',
  require('fs')
    .readdirSync(process.cwd())
    .filter((f) => f.startsWith('.env')),
);

export type Post = {
  id: number;
  slug: string;
  title: string;
  published_at: string;
  excerpt: string | null;
  body_markdown: string;
};

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('Missing DATABASE_URL env var');
}
const sql = neon(databaseUrl);

export async function getPosts(): Promise<Post[]> {
  return sql`
    SELECT id, slug, title, published_at, excerpt, body_markdown
    FROM posts
    ORDER BY published_at DESC
  ` as unknown as Post[];
}

export async function getPost(slug: string): Promise<Post | null> {
  const rows = (await sql`
    SELECT id, slug, title, published_at, excerpt, body_markdown
    FROM posts
    WHERE slug = ${slug}
    LIMIT 1
  `) as unknown as Post[];
  return rows[0] ?? null;
}
