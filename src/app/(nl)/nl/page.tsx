import React from 'react';
import type { Metadata } from 'next';
import HomeClient from '@/components/pages/HomeClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'nl',
  ...metaTranslations['home'].nl,
  alternates: sharedPathAlternates('/'),
});

export default function Page() {
  return <HomeClient lang="nl" />;
}
