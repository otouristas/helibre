import React from 'react';
import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';

interface PageProps {
  params: Promise<{ hub: string }>;
}

export function generateStaticParams() {
  return seoPages
    .filter((p) => p.url.startsWith('/en/airport-transfer/'))
    .map((p) => {
      const parts = p.url.split('/');
      return { hub: parts[parts.length - 1] };
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { hub } = await params;
  const p = seoPages.find((page) => page.url === `/en/airport-transfer/${hub}`);
  
  const alternates: Record<string, string> = {
    'en': `/en/airport-transfer/${hub}`,
  };
  if (hub.includes('charleroi')) {
    alternates['nl'] = '/nl/luchthavenvervoer/charleroi';
    alternates['fr'] = '/fr/navette/aeroport-charleroi';
  }

  return {
    title: p?.title || 'Airport Transfer | Helicro',
    description: p?.description || 'Private airport transfers in Belgium.',
    alternates: {
      canonical: `/en/airport-transfer/${hub}`,
      languages: alternates
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { hub } = await params;
  return <DynamicSEOPage url={`/en/airport-transfer/${hub}`} />;
}
