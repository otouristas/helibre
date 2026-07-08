import React from 'react';
import ReviewsClient from '@/app/reviews/ReviewsClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['reviews']['hr'].title,
  description: metaTranslations['reviews']['hr'].description,
    alternates: {
    canonical: 'https://helicro.be/hr/reviews',
    languages: {
      'en': 'https://helicro.be/reviews',
      'nl': 'https://helicro.be/nl/reviews',
      'fr': 'https://helicro.be/fr/reviews',
      'el': 'https://helicro.be/el/reviews',
      'hr': 'https://helicro.be/hr/reviews',
    }
  }
};

export default function Page() {
  return <ReviewsClient lang="hr" />;
}
