import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';
import { hasSeoPage, seoMetadataFromUrl } from '@/lib/seoMetadata';

interface PageProps {
  params: Promise<{ commune: string }>;
}

export function generateStaticParams() {
  return seoPages
    .filter((p) => p.url.startsWith('/fr/local/'))
    .map((p) => {
      const parts = p.url.split('/');
      return { commune: parts[parts.length - 1] };
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { commune } = await params;
  return seoMetadataFromUrl(`/fr/local/${commune}`, {
    title: 'Chauffeur Privé Local | Helicro',
    description: 'Service de taxi et navette local.',
  });
}

export default async function Page({ params }: PageProps) {
  const { commune } = await params;
  const url = `/fr/local/${commune}`;
  if (!hasSeoPage(url)) notFound();
  return <DynamicSEOPage url={url} />;
}
