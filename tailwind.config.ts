import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        // Core palette
        bg: {
          DEFAULT: "#111110",
          elevated: "#1a1917",
          card: "#1e1d1b",
          hover: "#252320",
        },
        border: {
          DEFAULT: "#2a2825",
          subtle: "#222120",
        },
        text: {
          primary: "#f0ece4",
          secondary: "#9c9890",
          muted: "#5c5a56",
        },
        accent: {
          DEFAULT: "#c9a84c",
          dim: "#8a6f2e",
          glow: "rgba(201,168,76,0.12)",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#c8c4bc",
            a: { color: "#c9a84c", "&:hover": { color: "#e0bf70" } },
            h1: { color: "#f0ece4", fontFamily: "Instrument Serif" },
            h2: { color: "#f0ece4" },
            h3: { color: "#f0ece4" },
            code: {
              color: "#c9a84c",
              backgroundColor: "#1e1d1b",
              borderRadius: "4px",
              padding: "2px 6px",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            pre: { backgroundColor: "#1a1917", border: "1px solid #2a2825" },
            blockquote: {
              borderLeftColor: "#c9a84c",
              color: "#9c9890",
              fontStyle: "italic",
            },
            hr: { borderColor: "#2a2825" },
            strong: { color: "#f0ece4" },
          },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
