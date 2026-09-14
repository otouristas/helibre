import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SeoLanding from '@/components/SeoLanding';
import { getSeoLanding, seoLandingMetadata, seoLandingUrls } from '@/lib/seoContent';

const PREFIX = '/en/service-area/';

interface PageProps {
  params: Promise<{ city: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return seoLandingUrls(PREFIX).map((u) => ({ city: u.slice(PREFIX.length) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const content = getSeoLanding(`${PREFIX}${city}`);
  return content ? seoLandingMetadata(content) : {};
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;
  const content = getSeoLanding(`${PREFIX}${city}`);
  if (!content) notFound();
  return <SeoLanding content={content} />;
}
