import React from 'react';
import type { Metadata } from 'next';
import SightseeingClient from '@/components/pages/SightseeingClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'hr',
  ...metaTranslations['services/sightseeing'].hr,
  alternates: sharedPathAlternates('/services/sightseeing'),
});

export default function Page() {
  return <SightseeingClient lang="hr" />;
}
