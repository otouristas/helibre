import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';
import { hasSeoPage, seoMetadataFromUrl } from '@/lib/seoMetadata';

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return seoPages
    .filter((p) => p.url.startsWith('/en/service-area/') && p.url !== '/en/service-area')
    .map((p) => {
      const parts = p.url.split('/');
      return { city: parts[parts.length - 1] };
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  return seoMetadataFromUrl(`/en/service-area/${city}`, {
    title: 'Service Area | Helicro Transport',
    description: 'Private transfers and tours.',
  });
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;
  const url = `/en/service-area/${city}`;
  if (!hasSeoPage(url)) notFound();
  return <DynamicSEOPage url={url} />;
}
