import type { MetadataRoute } from 'next';
import { blogArticles } from '@/config/blogArticles';
import { getSeoLanding, seoLandingUrls } from '@/lib/seoContent';
import { absoluteUrl, sharedPathAlternates, type AlternateMap, type Locale } from '@/lib/seo';

/** Date of the last site-wide content revision. Bump when content changes materially. */
const CONTENT_UPDATED = new Date('2026-09-14T00:00:00Z');

type Entry = MetadataRoute.Sitemap[number];

function languagesOf(map: AlternateMap): Record<string, string> {
  const languages: Record<string, string> = {};
  (Object.keys(map) as Locale[]).forEach((l) => {
    if (map[l]) languages[l] = absoluteUrl(map[l]!);
  });
  const xDefault = map.en ?? Object.values(map)[0];
  if (xDefault) languages['x-default'] = absoluteUrl(xDefault);
  return languages;
}

function group(map: AlternateMap, priority: number, changeFrequency: Entry['changeFrequency'], lastModified: Date = CONTENT_UPDATED): Entry[] {
  const languages = languagesOf(map);
  return (Object.keys(map) as Locale[])
    .filter((l) => map[l])
    .map((l) => ({
      url: absoluteUrl(map[l]!),
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [];

  // Home pages
  entries.push(...group(sharedPathAlternates('/'), 1.0, 'weekly'));

  // Core service pages (all five locales)
  ['/services/airport', '/services/sightseeing', '/services/corporate', '/services/parcel', '/services/events'].forEach((p) =>
    entries.push(...group(sharedPathAlternates(p), 0.9, 'monthly'))
  );

  // Event transfer cluster (EN/NL/FR)
  entries.push(...group(sharedPathAlternates('/services/event-transfers', ['en', 'nl', 'fr']), 0.85, 'monthly'));
  ['/services/event-transfers/tomorrowland', '/services/event-transfers/formula-1-spa-francorchamps'].forEach((p) =>
    entries.push(...group(sharedPathAlternates(p, ['en', 'nl', 'fr']), 0.85, 'monthly'))
  );

  // Company pages
  ['/pricing', '/fleet', '/reviews', '/about-us', '/faq', '/contact', '/special-offers'].forEach((p) =>
    entries.push(...group(sharedPathAlternates(p), p === '/pricing' ? 0.9 : 0.7, 'monthly'))
  );

  // Programmatic landing pages: one entry per URL, hreflang from the content engine
  const seen = new Set<string>();
  seoLandingUrls().forEach((url) => {
    if (seen.has(url)) return;
    const c = getSeoLanding(url);
    if (!c) return;
    const languages = languagesOf(c.alternates);
    const isHub = c.type === 'Airport hub' || c.type === 'City airport transfer';
    entries.push({
      url: absoluteUrl(url),
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly',
      priority: isHub ? 0.85 : c.type === 'Route' ? 0.8 : 0.7,
      alternates: { languages },
    });
    seen.add(url);
  });

  // Hubs
  entries.push({ url: absoluteUrl('/en/service-area'), lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.6 });
  entries.push({ url: absoluteUrl('/en/blog'), lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.6 });

  // Blog articles
  blogArticles.forEach((a) => {
    const path = a.lang === 'en' ? `/en/blog/${a.slug}` : `/${a.lang}/blog/${a.slug}`;
    entries.push({
      url: absoluteUrl(path),
      lastModified: new Date(a.dateModified ?? a.datePublished),
      changeFrequency: 'monthly',
      priority: 0.65,
      ...(a.alternates ? { alternates: { languages: languagesOf(a.alternates) } } : {}),
    });
  });
  if (blogArticles.some((a) => a.lang === 'nl')) entries.push({ url: absoluteUrl('/nl/blog'), lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.6 });
  if (blogArticles.some((a) => a.lang === 'fr')) entries.push({ url: absoluteUrl('/fr/blog'), lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.6 });

  // De-duplicate by URL, keeping the first (highest-priority) entry
  const byUrl = new Map<string, Entry>();
  entries.forEach((e) => {
    if (!byUrl.has(e.url)) byUrl.set(e.url, e);
  });
  return Array.from(byUrl.values());
}
