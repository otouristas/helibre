import React from 'react';
import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';

const URL = '/en/corporate-shuttle-brussels';

export async function generateMetadata(): Promise<Metadata> {
  const p = seoPages.find((page) => page.url === URL);
  return {
    title: p?.title || 'Corporate Shuttle Brussels | Helicro',
    description: p?.description || 'Corporate shuttle services.',
  };
}

export default function Page() {
  return <DynamicSEOPage url={URL} />;
}
