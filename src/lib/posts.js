import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDir = path.posix.join(process.cwd(), 'src/posts');

/**
 * Get metadata for all posts (lightweight: no full content)
 */
export const getAllPostsMeta = () => {
  const fileNames = fs.readdirSync(postDir);
  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const filePath = path.join(postDir, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || '',
        data: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        author: data.author || 'unknown',
        tags: data.tags || [],
        ...data,
      };
    })
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
};

/**
 * Get paginated posts (for blog index)
 */

export const getPaginationPosts = (page = 1, limit = 5) => {
  const allPosts = getAllPostsMeta();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    posts: allPosts.slice(start, end),
    currentPage: page,
    totalPages,
  };
};

/**
 * Get a single post by slug (loads full content)
 */

export function getPostBySlug(slug) {
  const filePath = path.join(postDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || '',
    tags: data.tags || [],
    author: data.author || 'Unknown',
    image: data.image || null,
    description: data.description || '',
  };
}
