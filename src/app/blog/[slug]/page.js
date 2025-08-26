import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { getAllPostsMeta, getPostBySlug } from '@/lib/posts';
import PostPageClient from '@/components/blog/PostPageClient';

// Set up Markdown parser and sanitizer
const md = new MarkdownIt();
const window = new JSDOM('').window;
const purify = DOMPurify(window);

// Static params for SSG
export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}
// Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  return {
    title: post.title,
    description: post.description || post.content.slice(0, 150),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description || '',
      images: [
        {
          url:
            post.image ||
            'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=870&auto=format&fit=crop',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || post.content.slice(0, 150),
      images: [
        {
          url:
            post.image ||
            'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=870&auto=format&fit=crop',
        },
      ],
    },
  };
}

// Main blog post page
export default async function Page({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return <h1>Post not found</h1>;

  const rawHtml = md.render(post.content);
  const sanitizedHtml = purify.sanitize(rawHtml);

  return <PostPageClient post={post} html={sanitizedHtml} />;
}
