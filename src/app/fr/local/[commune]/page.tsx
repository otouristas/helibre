import React from 'react';
import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';

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
  const p = seoPages.find((page) => page.url === `/fr/local/${commune}`);
  return {
    title: p?.title || 'Chauffeur Privé Local | Helicro',
    description: p?.description || 'Service de taxi et navette local.',
  };
}

export default async function Page({ params }: PageProps) {
  const { commune } = await params;
  return <DynamicSEOPage url={`/fr/local/${commune}`} />;
}
