import { buildRobotsTxt, ROBOTS_HEADERS } from "@/lib/seo-parity/robots-parity";

export const dynamic = "force-static";

/** Same group structure as discovercyclades.gr/robots.txt; see robots-parity.ts. */
export function GET() {
  const body = buildRobotsTxt({
    name: "Helicro Transport",
    origin: "https://helicro.be",
    disallow: [],
    sitemaps: ["https://helicro.be/sitemap.xml"],
  });
  return new Response(body, { headers: ROBOTS_HEADERS });
}
