import ReactMarkdown from 'react-markdown';
import { getPosts } from '@/lib/posts';

export const revalidate = 60;

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="flex-1 flex flex-col items-start w-full pt-12 px-2 sm:px-0">
      <h1 className="text-4xl font-bold mb-8">Miscellaneous Writings</h1>

      {posts.length === 0 && <p className="text-lg text-gray-400">No posts yet.</p>}

      {posts.map((post) => (
        <article key={post.id} className="mb-12 w-full max-w-3xl">
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h3 className="text-2xl font-semibold">{post.title}</h3>
            <span className="text-md font-light italic">
              {new Date(post.published_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
          <div className="text-lg leading-relaxed">
            <ReactMarkdown>{post.body_markdown}</ReactMarkdown>
          </div>
        </article>
      ))}
    </div>
  );
}
