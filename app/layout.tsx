import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Prasiddha Bhattarai",
    template: "%s · Prasiddha Bhattarai",
  },
  description:
    "Software Developer exploring DevOps.",
  metadataBase: new URL("https://prasiddhabhattarai.com.np"),
  openGraph: {
    title: "Prasiddha Bhattarai",
    description: "Software Developer exploring DevOps.",
    url: "https://prasiddhabhattarai.com.np",
    siteName: "Prasiddha Bhattarai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Prasiddha Bhattarai",
    description: "Writing about my Tech skills.",
    creator: "@prashidha33", 
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
