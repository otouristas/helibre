import React from 'react';
import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';

const URL = '/en/greek-speaking-driver-brussels';

export async function generateMetadata(): Promise<Metadata> {
  const p = seoPages.find((page) => page.url === URL);
  return {
    title: p?.title || 'Greek-Speaking Driver Brussels | Helicro',
    description: p?.description || 'Greek and English speaking driver.',
  };
}

export default function Page() {
  return <DynamicSEOPage url={URL} />;
}
