import React from 'react';
import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';

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
  const p = seoPages.find((page) => page.url === `/en/service-area/${city}`);
  return {
    title: p?.title || 'Service Area | Helicro Transport',
    description: p?.description || 'Private transfers and tours.',
  };
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;
  return <DynamicSEOPage url={`/en/service-area/${city}`} />;
}
