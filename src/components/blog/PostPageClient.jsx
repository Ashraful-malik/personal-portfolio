'use client';
import React from 'react';
import Navbar from '../Navbar';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
function PostPageClient({ post, html }) {
  const router = useRouter();

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description || post.content.slice(0, 150),
    image:
      post.image ||
      'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=870&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: post.author || 'Unknown',
    },
    datePublished: post.date,
  };

  return (
    <main className="relative mx-auto flex w-full max-w-[75ch] flex-col px-4 md:px-0">
      <Navbar />

      <header className="mt-20">
        <Button onClick={() => router.back()} size="sm" variant="link" className="mb-2 shadow-none">
          <ArrowLeft size={16} /> Back
        </Button>
        {post.image && (
          <div className="w-full">
            <Image
              src={post.image}
              width={800}
              height={400}
              alt="Blog cover image"
              className="h-48 w-full rounded-lg object-cover sm:h-64 md:h-80"
            />
          </div>
        )}
        <div className="text-text-secondary mt-5 mb-2 flex flex-col text-sm">
          <p aria-label="date">{post.date}</p>
          <p aria-label="author">{post.author}</p>
        </div>
      </header>

      <article className="prose prose-sm md:prose-lg dark:prose-invert mx-auto mt-8 w-full">
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </main>
  );
}

export default PostPageClient;
