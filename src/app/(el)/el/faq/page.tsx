import React from 'react';
import type { Metadata } from 'next';
import FaqClient from '@/components/pages/FaqClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'el',
  ...metaTranslations['faq'].el,
  alternates: sharedPathAlternates('/faq'),
});

export default function Page() {
  return <FaqClient lang="el" />;
}
