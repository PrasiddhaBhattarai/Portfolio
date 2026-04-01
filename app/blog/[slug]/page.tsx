import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mdxComponents } from "@/components/MdxComponents";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: post.date,
      },
    };
  } catch {
    return { title: "Post not found" };
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const formattedDate = formatDate(post.date);

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 lg:px-10 pt-28 pb-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs mb-10 group transition-colors duration-200"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <svg className="w-3 h-3 transition-transform duration-200 group-hover:-translate-x-0.5"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          all posts
        </Link>

        {/* Constrain article content width for readability */}
        <div className="max-w-2xl">
          {/* Header */}
          <header className="mb-10 pb-8" style={{ borderBottom: "1px solid var(--border-sub)" }}>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1
              className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight mb-5"
              style={{ color: "var(--text-pri)" }}
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p
                className="text-base font-light leading-relaxed mb-6"
                style={{ color: "var(--text-sec)" }}
              >
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center gap-4" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1.5 font-mono text-xs">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
                </svg>
                {post.readingTime}
              </span>
            </div>
          </header>

          {/* MDX Content */}
          <article className="prose prose-invert prose-sm sm:prose-base max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          {/* Bottom nav */}
          <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border-sub)" }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-xs group transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <svg className="w-3 h-3 transition-transform duration-200 group-hover:-translate-x-0.5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              back to all posts
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return dateStr;
  }
}
