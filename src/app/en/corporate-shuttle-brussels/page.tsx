import React from 'react';
import type { Metadata } from 'next';
import DynamicSEOPage from '@/components/DynamicSEOPage';
import { seoMetadataFromUrl } from '@/lib/seoMetadata';

const URL = '/en/corporate-shuttle-brussels';

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataFromUrl(URL, {
    title: 'Corporate Shuttle Brussels | Helicro',
    description: 'Corporate shuttle services.',
  });
}

export default function Page() {
  return <DynamicSEOPage url={URL} />;
}
