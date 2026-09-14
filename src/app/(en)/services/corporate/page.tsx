import React from 'react';
import type { Metadata } from 'next';
import CorporateClient from '@/components/pages/CorporateClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  ...metaTranslations['services/corporate'].en,
  alternates: sharedPathAlternates('/services/corporate'),
});

export default function Page() {
  return <CorporateClient lang="en" />;
}
