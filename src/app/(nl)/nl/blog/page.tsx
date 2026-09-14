import React from 'react';
import type { Metadata } from 'next';
import BlogHub from '@/components/BlogHub';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'nl',
  title: 'Helicro Blog | Gidsen over luchthavenvervoer Zaventem en Charleroi',
  description: 'Praktische gidsen van een Belgische privéchauffeur: wat kost een taxi naar Zaventem, Charleroi bereiken, festivals en dagtochten in België.',
  alternates: { en: '/en/blog', nl: '/nl/blog', fr: '/fr/blog' },
});

export default function Page() {
  return <BlogHub lang="nl" />;
}
