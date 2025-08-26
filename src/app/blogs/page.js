import Navbar from '@/components/Navbar';
import { cn } from '@/utility/cn';
import { getPaginationPosts } from '@/lib/posts';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Full-Stack Development & Project Insights Blog | Ashraful Malik',
  description:
    'Blogs by Ashraful Malik on web development, frontend, backend, and project insights. Sharing ideas, tutorials, and experiences from real-world builds.',
  openGraph: {
    title: 'Full-Stack Development & Project Insights Blog | Ashraful Malik',
    description:
      'Blogs by Ashraful Malik on web development, frontend, backend, and project insights. Sharing ideas, tutorials, and experiences from real-world builds.',
    url: 'https://ashrafulmalik.online/blog',
    siteName: 'Ashraful Malik portfolio',
    images: [
      {
        url: '/image/portfolio-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Development & Project Insights Blog | Ashraful Malik',
    description:
      'Blogs by Ashraful Malik on web development, frontend, backend, and project insights. Sharing ideas, tutorials, and experiences from real-world builds.',
    images: '/image/portfolio-image.png',
    creator: '@ashraful__malik',
  },
};

async function page({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params?.page || '1', 10);
  const { posts, currentPage, totalPages } = getPaginationPosts(page, 5);

  return (
    <div className="relative mx-auto max-w-[75ch]">
      <Navbar />
      <div className="px-4 py-40 md:px-0">
        <h1 className="mb-10 text-4xl font-bold">Blogs</h1>
        {posts.length === 0 && <p>No posts found</p>}
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className={cn(
              'hover:bg-bg-subtle text-text-primary mb-5 flex flex-col py-4 hover:rounded-lg',
              'border-border border-b',
              'first-of-type:border-t-0',
              'last-of-type:border-b-0',
            )}
          >
            <div>
              <p className="text-text-secondary text-sm">{post.author}</p>
              <p className="text-text-secondary">{post.date}</p>
              <h1 className="text-text-primary text-2xl font-semibold">{post.title}</h1>
            </div>
          </Link>
        ))}
        {/* Pagination */}
        <div className="mt-6 flex w-full items-center justify-between gap-2">
          {currentPage > 1 && (
            <Button variant="outline" className="shadow-none" asChild>
              <Link href={`/blogs?page=${currentPage - 1}`} className="rounded border px-3 py-1">
                Prev
              </Link>
            </Button>
          )}
          {currentPage < totalPages && (
            <Button variant="outline" className="shadow-none" asChild>
              <Link href={`/blogs?page=${currentPage + 1}`} className="rounded border px-3 py-1">
                Next
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
