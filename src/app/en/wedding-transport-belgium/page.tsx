import React from 'react';
import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';

const URL = '/en/wedding-transport-belgium';

export async function generateMetadata(): Promise<Metadata> {
  const p = seoPages.find((page) => page.url === URL);
  return {
    title: p?.title || 'Wedding Transport Belgium | Helicro',
    description: p?.description || 'Wedding transport services.',
  };
}

export default function Page() {
  return <DynamicSEOPage url={URL} />;
}
