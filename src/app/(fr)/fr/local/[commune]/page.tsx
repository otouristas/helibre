import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SeoLanding from '@/components/SeoLanding';
import { getSeoLanding, seoLandingMetadata, seoLandingUrls } from '@/lib/seoContent';

const PREFIX = '/fr/local/';

interface PageProps {
  params: Promise<{ commune: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return seoLandingUrls(PREFIX).map((u) => ({ commune: u.slice(PREFIX.length) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { commune } = await params;
  const content = getSeoLanding(`${PREFIX}${commune}`);
  return content ? seoLandingMetadata(content) : {};
}

export default async function Page({ params }: PageProps) {
  const { commune } = await params;
  const content = getSeoLanding(`${PREFIX}${commune}`);
  if (!content) notFound();
  return <SeoLanding content={content} />;
}
