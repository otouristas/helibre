import React from 'react';
import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';

interface PageProps {
  params: Promise<{ hub: string }>;
}

export function generateStaticParams() {
  return seoPages
    .filter((p) => p.url.startsWith('/fr/navette/'))
    .map((p) => {
      const parts = p.url.split('/');
      return { hub: parts[parts.length - 1] };
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { hub } = await params;
  const p = seoPages.find((page) => page.url === `/fr/navette/${hub}`);
  
  const alternates: Record<string, string> = {
    'fr': `/fr/navette/${hub}`,
  };
  if (hub.includes('charleroi')) {
    alternates['en'] = '/en/airport-transfer/brussels-charleroi';
    alternates['nl'] = '/nl/luchthavenvervoer/charleroi';
  }

  return {
    title: p?.title || 'Navette Aéroport | Helicro',
    description: p?.description || 'Navette aéroport privée.',
    alternates: {
      canonical: `/fr/navette/${hub}`,
      languages: alternates
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { hub } = await params;
  return <DynamicSEOPage url={`/fr/navette/${hub}`} />;
}
