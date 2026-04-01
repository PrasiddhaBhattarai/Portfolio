"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PostMeta } from "@/lib/mdx";

interface PostCardProps {
  post: PostMeta;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  const formattedDate = formatDate(post.date);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div
          className="
            relative rounded-lg overflow-hidden h-full
            p-6 sm:p-7
            transition-all duration-300
          "
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "var(--bg-hover)";
            el.style.borderColor = "var(--text-muted)";
            el.style.boxShadow = "var(--shadow-card)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "var(--bg-card)";
            el.style.borderColor = "var(--border)";
            el.style.boxShadow = "none";
          }}
        >
          {/* Left accent bar — appears on hover */}
          <div
            className="
              absolute left-0 top-6 bottom-6 w-[2px] rounded-full
              scale-y-0 origin-bottom transition-transform duration-300
              group-hover:scale-y-100
            "
            style={{ backgroundColor: "var(--accent)" }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2
            className="font-serif text-xl sm:text-[1.35rem] font-normal leading-snug tracking-tight mb-3 transition-colors duration-200"
            style={{ color: "var(--text-pri)" }}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p
              className="text-sm leading-relaxed font-light mb-5 line-clamp-2"
              style={{ color: "var(--text-sec)" }}
            >
              {post.excerpt}
            </p>
          )}

          {/* Meta footer */}
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

            {/* Read arrow */}
            <span
              className="
                ml-auto font-mono text-[11px]
                opacity-0 group-hover:opacity-100
                translate-x-0 group-hover:translate-x-1
                transition-all duration-200
              "
              style={{ color: "var(--accent)" }}
            >
              read →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
  } catch {
    return dateStr;
  }
}
