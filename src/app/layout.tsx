import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Same zone as the postiz.xmeg.dpdns.org Postiz/Instagram tunnel, but the
// apex hostname itself - this is the actual company site's domain.
const SITE_URL = "https://xmeg.dpdns.org";
const SITE_TITLE = "X MEG — Digital Engineering & Technology Solutions";
const SITE_DESCRIPTION =
  "X MEG is a digital engineering company based in Chennai, India, building web applications, websites, software systems and digital solutions for businesses worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — X MEG",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "X MEG",
    "web development",
    "software development",
    "website design",
    "Chennai software company",
    "API development",
    "business automation",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "X MEG",
    images: [{ url: "/images/logo.png", width: 1024, height: 1024 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
