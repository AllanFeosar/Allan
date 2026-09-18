import type { MetadataRoute } from "next";

const SITE_URL = "https://xmeg.dpdns.org";

// Required for `output: "export"` - sitemap.xml has to be generated at
// build time like every other route, not per-request.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
