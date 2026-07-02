import React from 'react';
import SightseeingClient from '@/app/services/sightseeing/SightseeingClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['services/sightseeing']['nl'].title,
  description: metaTranslations['services/sightseeing']['nl'].description,
  alternates: {
    canonical: 'https://helicro.be/nl/services/sightseeing',
    languages: {
      'en': 'https://helicro.be/services/sightseeing',
      'nl': 'https://helicro.be/nl/services/sightseeing',
      'fr': 'https://helicro.be/fr/services/sightseeing',
      'el': 'https://helicro.be/el/services/sightseeing',
    }
  }
};

export default function Page() {
  return <SightseeingClient lang="nl" />;
}
