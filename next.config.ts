import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export - the portfolio is plain HTML/CSS with no server or API routes,
  // so it can be hosted on any static host (Cloudflare Workers/Pages, Netlify, etc.).
  output: "export",
  // next/image's optimization API needs a live server, which a static export doesn't have.
  images: { unoptimized: true },
};

export default nextConfig;
