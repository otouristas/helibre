import React from 'react';
import AirportClient from '@/app/services/airport/AirportClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['services/airport']['hr'].title,
  description: metaTranslations['services/airport']['hr'].description,
    alternates: {
    canonical: 'https://helicro.be/hr/services/airport',
    languages: {
      'en': 'https://helicro.be/services/airport',
      'nl': 'https://helicro.be/nl/services/airport',
      'fr': 'https://helicro.be/fr/services/airport',
      'el': 'https://helicro.be/el/services/airport',
      'hr': 'https://helicro.be/hr/services/airport',
    }
  }
};

export default function Page() {
  return <AirportClient lang="hr" />;
}
