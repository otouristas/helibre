import React from 'react';
import type { Metadata } from 'next';
import RootShell from '@/components/RootShell';
import { localeLayoutMetadata } from '@/lib/seo';

export const metadata: Metadata = localeLayoutMetadata('hr');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="hr">{children}</RootShell>;
}
