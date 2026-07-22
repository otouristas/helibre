import React from 'react';
import type { Metadata } from 'next';
import DynamicSEOPage from '@/components/DynamicSEOPage';
import { seoMetadataFromUrl } from '@/lib/seoMetadata';

const URL = '/en/wedding-transport-belgium';

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataFromUrl(URL, {
    title: 'Wedding Transport Belgium | Helicro',
    description: 'Wedding transport services.',
  });
}

export default function Page() {
  return <DynamicSEOPage url={URL} />;
}
