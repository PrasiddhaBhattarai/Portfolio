"use client";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Custom MDX component overrides.
 * These replace default HTML elements inside MDX files with styled versions.
 */
export const mdxComponents: MDXComponents = {
  // Anchor tags — internal links use Next Link
  a: ({ href = "#", children, ...props }) => {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c9a84c] hover:text-[#e0bf70] underline underline-offset-2 decoration-[#c9a84c]/30 hover:decoration-[#c9a84c] transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className="text-[#c9a84c] hover:text-[#e0bf70] underline underline-offset-2 decoration-[#c9a84c]/30 transition-colors"
        {...props}
      >
        {children}
      </Link>
    );
  },

  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic text-[#9c9890] my-6">
      {children}
    </blockquote>
  ),

  // Inline code
  code: ({ children, ...props }) => (
    <code
      className="font-mono text-[0.84em] text-[#c9a84c] bg-[#1e1d1b] border border-[#2a2825] rounded px-1.5 py-0.5"
      {...props}
    >
      {children}
    </code>
  ),

  // Callout / tip shortcode — usage in MDX: <Callout>text</Callout>
  Callout: ({ children }: { children: React.ReactNode }) => (
    <div className="my-6 rounded-lg border border-[#c9a84c]/20 bg-[#c9a84c]/5 px-5 py-4 text-sm text-[#c9a84c]">
      {children}
    </div>
  ),
};
