import React from 'react';
import type { Metadata } from 'next';
import ParcelClient from '@/components/pages/ParcelClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'fr',
  ...metaTranslations['services/parcel'].fr,
  alternates: sharedPathAlternates('/services/parcel'),
});

export default function Page() {
  return <ParcelClient lang="fr" />;
}
