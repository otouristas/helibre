import React from 'react';
import type { Metadata } from 'next';
import AboutUsClient from '@/components/pages/AboutUsClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'fr',
  ...metaTranslations['about-us'].fr,
  alternates: sharedPathAlternates('/about-us'),
});

export default function Page() {
  return <AboutUsClient lang="fr" />;
}
