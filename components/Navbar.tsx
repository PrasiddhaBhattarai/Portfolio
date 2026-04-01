"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

/* ─── Theme toggle icons ────────────────────────────────────── */
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        backgroundColor: scrolled ? "var(--navbar-bg)" : "transparent",
        borderBottomColor: scrolled ? "var(--border)" : "transparent",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-[0px] border-b"
      data-scrolled={scrolled}
    >
      {/* <style>{`
        header[data-scrolled="true"] { backdrop-filter: blur(12px); }
      `}</style> */}

      <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-medium transition-colors duration-200 tracking-tight"
          style={{ color: "var(--text-pri)" }}
        >
          Prasiddha Bhattarai
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-7">
          <NavLink href="/">home</NavLink>
          {/* <NavLink href="/blog">blog</NavLink> */}
          {/* <NavLink href="/#about">about</NavLink> */}
          <NavLink href="mailto:prasiddhabhattarai333@gmail.com">contact</NavLink>

          {/* Theme toggle */}
          <ThemeToggle theme={theme} toggle={toggle} />
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="sm:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              style={{ backgroundColor: "var(--text-sec)" }}
              className={`block w-5 h-px transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              style={{ backgroundColor: "var(--text-sec)" }}
              className={`block w-5 h-px transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              style={{ backgroundColor: "var(--text-sec)" }}
              className={`block w-5 h-px transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)" }}
          className="sm:hidden border-b px-6 pb-5 pt-2 flex flex-col gap-1"
        >
          <MobileNavLink href="/" onClick={() => setMenuOpen(false)}>home</MobileNavLink>
          {/* <MobileNavLink href="/blog" onClick={() => setMenuOpen(false)}>blog</MobileNavLink> */}
          {/* <MobileNavLink href="/#about" onClick={() => setMenuOpen(false)}>about</MobileNavLink> */}
          <MobileNavLink href="mailto:prasiddhabhattarai333@gmail.com" onClick={() => setMenuOpen(false)}>contact</MobileNavLink>
        </div>
      )}
    </header>
  );
}

/* ─── Theme Toggle Button ───────────────────────────────────── */
function ThemeToggle({ theme, toggle }: { theme: string; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="
        w-8 h-8 rounded-md flex items-center justify-center
        transition-all duration-200
        hover:scale-105
      "
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
        color: "var(--text-sec)",
      }}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

/* ─── Desktop Nav Link ──────────────────────────────────────── */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("mailto:");
  const Tag = isExternal ? "a" : Link;
  return (
    <Tag
      href={href}
      className="font-mono text-xs tracking-wider transition-colors duration-200"
      style={{ color: "var(--text-muted)" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-sec)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
    >
      {children}
    </Tag>
  );
}

/* ─── Mobile Nav Link ───────────────────────────────────────── */
function MobileNavLink({
  href, onClick, children,
}: {
  href: string; onClick: () => void; children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-mono text-sm py-3 transition-colors duration-200 border-t"
      style={{ color: "var(--text-sec)", borderColor: "var(--border-sub)" }}
    >
      {children}
    </Link>
  );
}
