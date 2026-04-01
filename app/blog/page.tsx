import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "All posts — thoughts on software engineering, systems, and life.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 lg:px-10 pt-28 pb-16">
        {/* Page header */}
        <div className="mb-12">
          <h1
            className="font-serif text-4xl sm:text-5xl tracking-tight mb-3"
            style={{ color: "var(--text-pri)" }}
          >
            Blog
          </h1>
          <p
            className="text-sm font-light"
            style={{ color: "var(--text-muted)" }}
          >
            Thoughts on engineering, systems, and the occasional life observation.
          </p>
        </div>

        {/* Divider with count */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ backgroundColor: "var(--border-sub)" }} />
          <span
            className="font-mono text-[11px] shrink-0"
            style={{ color: "var(--text-muted)" }}
          >
            {posts.length} post{posts.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Post grid — 1 col on mobile, 2 cols on md+ */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p
              className="font-mono text-sm"
              style={{ color: "var(--border)" }}
            >
              no posts yet — check back soon.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
