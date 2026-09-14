import React from 'react';
import type { Metadata } from 'next';
import HomeClient from '@/components/pages/HomeClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'hr',
  ...metaTranslations['home'].hr,
  alternates: sharedPathAlternates('/'),
});

export default function Page() {
  return <HomeClient lang="hr" />;
}
