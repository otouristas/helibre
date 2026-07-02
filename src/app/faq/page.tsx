import React from 'react';
import FaqClient from './FaqClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['faq']['en'].title,
  description: metaTranslations['faq']['en'].description,
  alternates: {
    canonical: 'https://helicro.be/faq',
    languages: {
      'en': 'https://helicro.be/faq',
      'nl': 'https://helicro.be/nl/faq',
      'fr': 'https://helicro.be/fr/faq',
      'el': 'https://helicro.be/el/faq',
    }
  }
};

export default function Page() {
  return <FaqClient lang="en" />;
}
