import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags?: string[];
}

export interface Post extends PostMeta {
  content: string;
}

/**
 * Get all post slugs (filenames without .mdx)
 */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Parse a single post by slug
 */
export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? new Date().toISOString().slice(0, 10),
    excerpt: data.excerpt ?? "",
    readingTime: rt.text,
    tags: data.tags ?? [],
    content,
  };
}

/**
 * Get all posts sorted newest-first
 */
export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const { content, ...meta } = getPostBySlug(slug);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
