import React from 'react';
import type { Metadata } from 'next';
import DynamicSEOPage from '@/components/DynamicSEOPage';
import { seoMetadataFromUrl } from '@/lib/seoMetadata';

const URL = '/en/embassy-transport-brussels';

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataFromUrl(URL, {
    title: 'Embassy Transport Brussels | Helicro',
    description: 'Diplomatic and embassy chauffeur services.',
  });
}

export default function Page() {
  return <DynamicSEOPage url={URL} />;
}
