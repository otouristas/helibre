import React from 'react';
import type { Metadata } from 'next';
import SeoLanding from '@/components/SeoLanding';
import { requireSeoLanding, seoLandingMetadata } from '@/lib/seoContent';

const URL = '/en/corporate-shuttle-brussels';

const content = requireSeoLanding(URL);

export const metadata: Metadata = seoLandingMetadata(content);

export default function Page() {
  return <SeoLanding content={content} />;
}
