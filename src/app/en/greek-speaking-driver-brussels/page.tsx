import React from 'react';
import type { Metadata } from 'next';
import DynamicSEOPage from '@/components/DynamicSEOPage';
import { seoMetadataFromUrl } from '@/lib/seoMetadata';

const URL = '/en/greek-speaking-driver-brussels';

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataFromUrl(URL, {
    title: 'Greek-Speaking Driver Brussels | Helicro',
    description: 'Greek and English speaking driver.',
  });
}

export default function Page() {
  return <DynamicSEOPage url={URL} />;
}
