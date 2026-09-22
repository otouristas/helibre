import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SeoLanding from '@/components/SeoLanding';
import { getSeoLanding, seoLandingMetadata, seoLandingUrls } from '@/lib/seoContent';

const PREFIX = '/nl/route/';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return seoLandingUrls(PREFIX).map((u) => ({ slug: u.slice(PREFIX.length) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getSeoLanding(`${PREFIX}${slug}`);
  return content ? seoLandingMetadata(content) : {};
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const content = getSeoLanding(`${PREFIX}${slug}`);
  if (!content) notFound();
  return <SeoLanding content={content} />;
}
