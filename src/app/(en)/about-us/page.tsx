import React from 'react';
import type { Metadata } from 'next';
import AboutUsClient from '@/components/pages/AboutUsClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  ...metaTranslations['about-us'].en,
  alternates: sharedPathAlternates('/about-us'),
});

export default function Page() {
  return <AboutUsClient lang="en" />;
}
