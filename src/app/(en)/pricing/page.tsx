import React from 'react';
import type { Metadata } from 'next';
import PricingClient from '@/components/pages/PricingClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  ...metaTranslations['pricing'].en,
  alternates: sharedPathAlternates('/pricing'),
});

export default function Page() {
  return <PricingClient lang="en" />;
}
