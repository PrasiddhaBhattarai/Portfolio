"use client";

import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 px-6 lg:px-10 overflow-hidden"
      // style={{ borderBottom: "1px solid var(--border-sub)" }}
    >
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, var(--accent-glow) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* ── Top row: avatar + name block + social icons ── */}
        <div className="flex items-start justify-between gap-8">
          {/* Avatar + bio */}
          <div className="flex items-start gap-7 sm:gap-10 flex-1 min-w-0">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0"
            >
              <div
                className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden"
                // className="relative w-[88px] h-[88px] sm:w-[112px] sm:h-[112px] rounded-full overflow-hidden"
                style={{
                  boxShadow: "0 0 0 1px var(--border), 0 0 0 3px var(--bg)",
                }}
              >
                <Image
                  src="/images/profile.png"
                  alt="Prasiddha Bhattarai"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </motion.div>

            {/* Name + role + tagline */}
            <div className="flex items-center justify-center h-24 sm:h-32 md:h-40 lg:h-48">
              <div
                className="flex-1 min-w-0 pl-7 sm:pl-10 items-center"
                style={{ borderLeft: "1px solid var(--border)" }}
              >
                <motion.h1
                  custom={0}
                  variants={FADE_UP}
                  initial="hidden"
                  animate="show"
                  className="font-serif text-3xl sm:text-[2.6rem] leading-none tracking-tight mb-3"
                  style={{ color: "var(--text-pri)" }}
                >
                  Prasiddha Bhattarai
                </motion.h1>

                <motion.div
                  custom={1}
                  variants={FADE_UP}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4"
                >
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                  <span
                    className="font-mono text-xs tracking-wide"
                    style={{ color: "var(--text-sec)" }}
                  >
                    Software developer
                  </span>
                  <span style={{ color: "var(--border)" }}>·</span>
                  {/* <span className="font-mono text-xs tracking-wide" style={{ color: "var(--text-muted)" }}>
                  Company_name
                </span> */}
                </motion.div>

                {/* <motion.p
                custom={2}
                variants={FADE_UP}
                initial="hidden"
                animate="show"
                className="text-sm leading-relaxed font-light"
                style={{ color: "var(--text-sec)" }}
              >
                Hello
              </motion.p> */}
              </div>
            </div>
          </div>

          {/* Social icons — desktop */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 hidden sm:block h-full"
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* Mobile social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="sm:hidden mt-8"
          // style={{ paddingLeft: "calc(88px + 1.75rem)", borderLeft: "none" }}
        >
          <SocialLinks />
        </motion.div>

        {/* ── Introduction section ── */}
        <motion.div
          custom={3}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="mt-12 sm:mt-14 max-w-3xl"
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-6">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.15em]"
              style={{ color: "var(--text-muted)" }}
            >
              about me
            </span>
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "var(--border-sub)" }}
            />
          </div>

          {/* Bio paragraphs */}
          <div className="space-y-4">
            <p
              className="text-base sm:text-lg leading-relaxed font-light"
              style={{ color: "var(--text-sec)" }}
            >
              Hi — I&apos;m Prasiddha, a full-stack developer who enjoys
              building practical web applications using Node.js, React, and
              PostgreSQL. I like working on backend systems, APIs, and
              geospatial features, and I&apos;m currently exploring DevOps and
              infrastructure to better understand how applications scale and run
              in production.
            </p>
            {/* <p
              className="text-base leading-relaxed font-light"
              style={{ color: "var(--text-muted)" }}
            >
              hello
            </p> */}
          </div>

          {/* CTA buttons */}
          <motion.div
            custom={4}
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-3 mt-8"
          >
            {/* View Resume */}
            <a
              href="/resume/Prasiddha_Bhattarai_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-md
                font-mono text-xs tracking-wider
                transition-all duration-200
                hover:scale-[1.02]
                active:scale-[0.98]
              "
              style={{
                backgroundColor: "var(--accent)",
                color: "#111110",
                boxShadow: "0 2px 12px var(--accent-glow)",
              }}
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M10 12.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
                <path d="M7.5 12.5c1.5-2 5.5-2 9 0-3.5 2-7.5 2-9 0z" />
              </svg>
              view resume
            </a>

            {/* Download Resume */}
            <a
              href="/resume/Prasiddha_Bhattarai_resume.pdf"
              download
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-md
                font-mono text-xs tracking-wider
                transition-all duration-200
                hover:scale-[1.02]
                active:scale-[0.98]
              "
              style={{
                backgroundColor: "var(--accent)",
                color: "#111110",
                boxShadow: "0 2px 12px var(--accent-glow)",
              }}
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              download resume
            </a>
          </motion.div>
        </motion.div>

        {/* Mobile social icons
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="sm:hidden mt-8"
          // style={{ paddingLeft: "calc(88px + 1.75rem)", borderLeft: "none" }}
        >
          <SocialLinks />
        </motion.div> */}
      </div>
    </section>
  );
}
