import React from 'react';
import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';

interface PageProps {
  params: Promise<{ hub: string }>;
}

export function generateStaticParams() {
  return seoPages
    .filter((p) => p.url.startsWith('/nl/luchthavenvervoer/'))
    .map((p) => {
      const parts = p.url.split('/');
      return { hub: parts[parts.length - 1] };
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { hub } = await params;
  const p = seoPages.find((page) => page.url === `/nl/luchthavenvervoer/${hub}`);
  
  const alternates: Record<string, string> = {
    'nl': `/nl/luchthavenvervoer/${hub}`,
  };
  if (hub.includes('charleroi')) {
    alternates['en'] = '/en/airport-transfer/brussels-charleroi';
    alternates['fr'] = '/fr/navette/aeroport-charleroi';
  }

  return {
    title: p?.title || 'Luchthavenvervoer | Helicro',
    description: p?.description || 'Privé luchthavenvervoer.',
    alternates: {
      canonical: `/nl/luchthavenvervoer/${hub}`,
      languages: alternates
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { hub } = await params;
  return <DynamicSEOPage url={`/nl/luchthavenvervoer/${hub}`} />;
}
