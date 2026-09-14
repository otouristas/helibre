import React from 'react';
import type { Metadata } from 'next';
import SeoLanding from '@/components/SeoLanding';
import AirportPickupGuides from '@/components/AirportPickupGuides';
import { buildAirportService } from '@/lib/seoContent/airportService';
import { seoLandingMetadata } from '@/lib/seoContent';

const content = buildAirportService('fr');

export const metadata: Metadata = seoLandingMetadata(content);

export default function Page() {
  return (
    <SeoLanding content={content}>
      <AirportPickupGuides lang="fr" />
    </SeoLanding>
  );
}
