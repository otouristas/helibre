import React from 'react';
import type { Metadata } from 'next';
import HomeClient from '@/components/pages/HomeClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'fr',
  ...metaTranslations['home'].fr,
  alternates: sharedPathAlternates('/'),
});

export default function Page() {
  return <HomeClient lang="fr" />;
}
