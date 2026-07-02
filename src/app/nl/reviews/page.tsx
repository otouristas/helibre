import React from 'react';
import ReviewsClient from '@/app/reviews/ReviewsClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['reviews']['nl'].title,
  description: metaTranslations['reviews']['nl'].description,
  alternates: {
    canonical: 'https://helicro.be/nl/reviews',
    languages: {
      'en': 'https://helicro.be/reviews',
      'nl': 'https://helicro.be/nl/reviews',
      'fr': 'https://helicro.be/fr/reviews',
      'el': 'https://helicro.be/el/reviews',
    }
  }
};

export default function Page() {
  return <ReviewsClient lang="nl" />;
}
