import React from 'react';
import type { Metadata } from 'next';
import SpecialOffersClient from '@/components/pages/SpecialOffersClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'fr',
  ...metaTranslations['special-offers'].fr,
  alternates: sharedPathAlternates('/special-offers'),
});

export default function Page() {
  return <SpecialOffersClient lang="fr" />;
}
