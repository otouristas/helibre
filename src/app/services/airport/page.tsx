import React from 'react';
import AirportClient from './AirportClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['services/airport']['en'].title,
  description: metaTranslations['services/airport']['en'].description,
  alternates: {
    canonical: 'https://helicro.be/services/airport',
    languages: {
      'en': 'https://helicro.be/services/airport',
      'nl': 'https://helicro.be/nl/services/airport',
      'fr': 'https://helicro.be/fr/services/airport',
      'el': 'https://helicro.be/el/services/airport',
    }
  }
};

export default function Page() {
  return <AirportClient lang="en" />;
}
