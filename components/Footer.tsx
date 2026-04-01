"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-20 py-8 px-6 lg:px-10"
      style={{ borderTop: "1px solid var(--border-sub)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs" style={{ color: "var(--border)" }}>
          © {year} Prasiddha Bhattarai
        </span>
        <span className="font-mono text-xs" style={{ color: "var(--border-sub)" }}>
          built with next.js
        </span>
      </div>
    </footer>
  );
}
