import React from 'react';
import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';

const URL = '/hr/croatian-driver-brussels';

export async function generateMetadata(): Promise<Metadata> {
  const p = seoPages.find((page) => page.url === URL);
  return {
    title: p?.title || 'Hrvatski vozač u Bruxellesu | Helicro',
    description: p?.description || 'Privatni transferi u Bruxellesu s hrvatskim vozačem.',
  };
}

export default function Page() {
  return <DynamicSEOPage url={URL} />;
}
