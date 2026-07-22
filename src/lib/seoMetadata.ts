import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';

export function seoMetadataFromUrl(
  url: string,
  fallback?: { title?: string; description?: string }
): Metadata {
  const p = seoPages.find((x) => x.url === url);
  return {
    title: p?.title ?? fallback?.title ?? 'Helicro',
    description: p?.description ?? fallback?.description ?? '',
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function hasSeoPage(url: string): boolean {
  return seoPages.some((x) => x.url === url);
}
