import React from 'react';
import type { Metadata } from 'next';
import BlogHub from '@/components/BlogHub';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  title: 'Helicro Blog | Brussels Airport, Charleroi and Belgium Travel Guides',
  description: 'Guides from a Belgian private driver: Brussels Airport to the city centre, Flibco vs private transfer, strike days, Tomorrowland and Spa-Francorchamps logistics.',
  alternates: { en: '/en/blog', nl: '/nl/blog', fr: '/fr/blog' },
});

export default function Page() {
  return <BlogHub lang="en" />;
}
