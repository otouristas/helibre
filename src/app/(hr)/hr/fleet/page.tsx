import React from 'react';
import type { Metadata } from 'next';
import FleetClient from '@/components/pages/FleetClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'hr',
  ...metaTranslations['fleet'].hr,
  alternates: sharedPathAlternates('/fleet'),
});

export default function Page() {
  return <FleetClient lang="hr" />;
}
