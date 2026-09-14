import React from 'react';
import type { Metadata } from 'next';
import AboutUsClient from '@/components/pages/AboutUsClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'hr',
  ...metaTranslations['about-us'].hr,
  alternates: sharedPathAlternates('/about-us'),
});

export default function Page() {
  return <AboutUsClient lang="hr" />;
}
