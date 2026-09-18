import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting X MEG.",
  robots: { index: false, follow: true },
};

export default function ThankYou() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Nav />
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
        <Image src="/images/logo.png" alt="X MEG" width={110} height={110} className="rounded-full" priority />
        <h1 className="mt-8 text-3xl font-bold text-white md:text-4xl">Thank you.</h1>
        <p className="mt-4 max-w-md text-brand-gray">
          Your message has been received. We&apos;ll get back to you as soon as possible.
        </p>
        <Link
          href="/"
          className="mt-10 rounded bg-brand-red px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
