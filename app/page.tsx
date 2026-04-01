import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

/**
 * Home page — profile hero with introduction and resume download.
 * Blog posts live at /blog.
 */
"use client";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}