import React from 'react';
import SpecialOffersClient from './SpecialOffersClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['special-offers']['en'].title,
  description: metaTranslations['special-offers']['en'].description,
  alternates: {
    canonical: 'https://helicro.be/special-offers',
    languages: {
      'en': 'https://helicro.be/special-offers',
      'nl': 'https://helicro.be/nl/special-offers',
      'fr': 'https://helicro.be/fr/special-offers',
      'el': 'https://helicro.be/el/special-offers',
    }
  }
};

export default function Page() {
  return <SpecialOffersClient lang="en" />;
}
