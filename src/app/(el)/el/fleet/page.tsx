import React from 'react';
import type { Metadata } from 'next';
import FleetClient from '@/components/pages/FleetClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'el',
  ...metaTranslations['fleet'].el,
  alternates: sharedPathAlternates('/fleet'),
});

export default function Page() {
  return <FleetClient lang="el" />;
}
