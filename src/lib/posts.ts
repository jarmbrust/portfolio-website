import { neon } from '@neondatabase/serverless';

export type Post = {
  id: number;
  slug: string;
  title: string;
  published_at: string;
  excerpt: string | null;
  body_markdown: string;
};

export async function getPosts(): Promise<Post[]> {
  const sql = neon(process.env.DATABASE_URL!);
  return sql`
    SELECT id, slug, title, published_at, excerpt, body_markdown
    FROM posts
    ORDER BY published_at DESC
  ` as unknown as Post[];
}

export async function getPost(slug: string): Promise<Post | null> {
  const sql = neon(process.env.DATABASE_URL!);
  const rows = await sql`
    SELECT id, slug, title, published_at, excerpt, body_markdown
    FROM posts
    WHERE slug = ${slug}
    LIMIT 1
  ` as unknown as Post[];
  return rows[0] ?? null;
}