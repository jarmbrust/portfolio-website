import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { getPosts, getPost } from '@/lib/posts';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="flex-1 flex flex-col items-start w-full pt-12 px-2 sm:px-0 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <span className="text-md font-light italic mb-8">
        {new Date(post.published_at).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </span>
      <div className="text-lg leading-relaxed">
        <ReactMarkdown>{post.body_markdown}</ReactMarkdown>
      </div>
    </article>
  );
}
