import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export - Cloudflare Pages serves this as plain static files, no
  // Node server needed. Verified safe: `next build` already shows every
  // route as fully static (no API routes, no per-request data fetching).
  output: "export",
  // next/image's optimization API needs a live server, which a static
  // export doesn't have - unoptimized just serves the source files as-is.
  images: { unoptimized: true },
};

export default nextConfig;
