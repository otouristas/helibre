import React from 'react';
import FaqClient from '@/app/faq/FaqClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['faq']['hr'].title,
  description: metaTranslations['faq']['hr'].description,
    alternates: {
    canonical: 'https://helicro.be/hr/faq',
    languages: {
      'en': 'https://helicro.be/faq',
      'nl': 'https://helicro.be/nl/faq',
      'fr': 'https://helicro.be/fr/faq',
      'el': 'https://helicro.be/el/faq',
      'hr': 'https://helicro.be/hr/faq',
    }
  }
};

export default function Page() {
  return <FaqClient lang="hr" />;
}
