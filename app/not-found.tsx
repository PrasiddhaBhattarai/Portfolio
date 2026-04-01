import Link from "next/link";
import Navbar from "@/components/Navbar";
"use client";
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-40 pb-20 text-center">
        <p className="font-mono text-[#3a3830] text-xs tracking-widest mb-4">
          404
        </p>
        <h1 className="font-serif text-3xl text-[#f0ece4] mb-4">
          nothing here
        </h1>
        <p className="text-[#5c5a56] text-sm font-light mb-10">
          This page doesn&apos;t exist — or it used to and doesn&apos;t anymore.
        </p>
        <Link
          href="/"
          className="font-mono text-xs text-[#c9a84c] hover:text-[#e0bf70] transition-colors"
        >
          ← go home
        </Link>
      </main>
    </>
  );
}
