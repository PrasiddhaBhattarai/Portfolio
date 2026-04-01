import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";

// Load fonts via next/font/google
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});


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
        lang="en"
      suppressHydrationWarning
      className={`${dmSans.className} ${instrumentSerif.className} ${jetBrainsMono.className}`}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
