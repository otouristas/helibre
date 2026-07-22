import React from 'react';
import type { Metadata } from 'next';
import DynamicSEOPage from '@/components/DynamicSEOPage';
import { seoMetadataFromUrl } from '@/lib/seoMetadata';

const URL = '/el/greek-driver-brussels';

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataFromUrl(URL, {
    title: 'Ελληνας οδηγός στις Βρυξέλλες | Helicro',
    description: 'Ιδιωτικά transfers στις Βρυξέλλες με Ελληνα οδηγό.',
  });
}

export default function Page() {
  return <DynamicSEOPage url={URL} />;
}
