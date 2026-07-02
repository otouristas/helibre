import React from 'react';
import type { Metadata } from 'next';
import { seoPages } from '@/config/seoPages';
import DynamicSEOPage from '@/components/DynamicSEOPage';

const URL = '/el/greek-driver-brussels';

export async function generateMetadata(): Promise<Metadata> {
  const p = seoPages.find((page) => page.url === URL);
  return {
    title: p?.title || 'Ελληνας οδηγός στις Βρυξέλλες | Helicro',
    description: p?.description || 'Ιδιωτικά transfers στις Βρυξέλλες με Ελληνα οδηγό.',
  };
}

export default function Page() {
  return <DynamicSEOPage url={URL} />;
}
