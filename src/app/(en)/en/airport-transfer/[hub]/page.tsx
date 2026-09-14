import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SeoLanding from '@/components/SeoLanding';
import { getSeoLanding, seoLandingMetadata, seoLandingUrls } from '@/lib/seoContent';

const PREFIX = '/en/airport-transfer/';

interface PageProps {
  params: Promise<{ hub: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return seoLandingUrls(PREFIX).map((u) => ({ hub: u.slice(PREFIX.length) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { hub } = await params;
  const content = getSeoLanding(`${PREFIX}${hub}`);
  return content ? seoLandingMetadata(content) : {};
}

export default async function Page({ params }: PageProps) {
  const { hub } = await params;
  const content = getSeoLanding(`${PREFIX}${hub}`);
  if (!content) notFound();
  return <SeoLanding content={content} />;
}
