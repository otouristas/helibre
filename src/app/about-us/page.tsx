import React from 'react';
import AboutUsClient from './AboutUsClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['about-us']['en'].title,
  description: metaTranslations['about-us']['en'].description,
  alternates: {
    canonical: 'https://helicro.be/about-us',
    languages: {
      'en': 'https://helicro.be/about-us',
      'nl': 'https://helicro.be/nl/about-us',
      'fr': 'https://helicro.be/fr/about-us',
      'el': 'https://helicro.be/el/about-us',
    }
  }
};

export default function Page() {
  return <AboutUsClient lang="en" />;
}
