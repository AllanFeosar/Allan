import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = `${profile.name} — ${profile.title}`;
const DESCRIPTION = profile.summary;

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s — ${profile.shortName}`,
  },
  description: DESCRIPTION,
  keywords: [
    profile.name,
    profile.shortName,
    "Full Stack Developer",
    "ASP.NET Core",
    "React",
    "Next.js",
    "Chennai developer",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
