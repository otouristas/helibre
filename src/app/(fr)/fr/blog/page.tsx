import React from 'react';
import type { Metadata } from 'next';
import BlogHub from '@/components/BlogHub';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'fr',
  title: 'Blog Helicro | Guides navette aéroport Bruxelles, Charleroi et Belgique',
  description: 'Guides pratiques d’un chauffeur privé belge : prix d’un taxi Bruxelles – Charleroi, rejoindre Zaventem, festivals et excursions en Belgique.',
  alternates: { en: '/en/blog', nl: '/nl/blog', fr: '/fr/blog' },
});

export default function Page() {
  return <BlogHub lang="fr" />;
}
