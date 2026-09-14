import React from 'react';
import type { Metadata } from 'next';
import ReviewsClient from '@/components/pages/ReviewsClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { reviewsSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  lang: 'nl',
  ...metaTranslations['reviews'].nl,
  alternates: sharedPathAlternates('/reviews'),
});

export default function Page() {
  return (
    <>
      <JsonLd data={reviewsSchema()} />
      <ReviewsClient lang="nl" />
    </>
  );
}
