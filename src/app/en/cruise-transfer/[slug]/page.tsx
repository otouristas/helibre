import React from 'react';
import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return seoPages
    .filter((p) => p.url.startsWith('/en/cruise-transfer/'))
    .map((p) => {
      const parts = p.url.split('/');
      return { slug: parts[parts.length - 1] };
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = seoPages.find((page) => page.url === `/en/cruise-transfer/${slug}`);
  return {
    title: p?.title || 'Cruise Port Transfer | Helicro',
    description: p?.description || 'Private minivan from cruise ports.',
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <DynamicSEOPage url={`/en/cruise-transfer/${slug}`} />;
}
