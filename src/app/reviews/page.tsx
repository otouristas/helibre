import React from 'react';
import ReviewsClient from './ReviewsClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['reviews']['en'].title,
  description: metaTranslations['reviews']['en'].description,
  alternates: {
    canonical: 'https://helicro.be/reviews',
    languages: {
      'en': 'https://helicro.be/reviews',
      'nl': 'https://helicro.be/nl/reviews',
      'fr': 'https://helicro.be/fr/reviews',
      'el': 'https://helicro.be/el/reviews',
    }
  }
};

export default function Page() {
  return <ReviewsClient lang="en" />;
}
