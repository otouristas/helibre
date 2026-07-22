import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';
import { hasSeoPage, seoMetadataFromUrl } from '@/lib/seoMetadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return seoPages
    .filter((p) => p.url.startsWith('/en/day-trip/'))
    .map((p) => {
      const parts = p.url.split('/');
      return { slug: parts[parts.length - 1] };
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return seoMetadataFromUrl(`/en/day-trip/${slug}`, {
    title: 'Private Day Trip | Helicro',
    description: 'Tailored private day tours in Belgium.',
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const url = `/en/day-trip/${slug}`;
  if (!hasSeoPage(url)) notFound();
  return <DynamicSEOPage url={url} />;
}
