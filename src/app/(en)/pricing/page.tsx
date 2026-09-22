import React from 'react';
import type { Metadata } from 'next';
import PricingClient from '@/components/pages/PricingClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { priceCatalogSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  ...metaTranslations['pricing'].en,
  alternates: sharedPathAlternates('/pricing'),
});

export default function Page() {
  return (
    <>
      <JsonLd data={priceCatalogSchema('en')} />
      <PricingClient lang="en" />
    </>
  );
}
