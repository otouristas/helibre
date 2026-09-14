import React from 'react';
import type { Metadata } from 'next';
import RootShell from '@/components/RootShell';
import { localeLayoutMetadata } from '@/lib/seo';

export const metadata: Metadata = localeLayoutMetadata('el');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="el">{children}</RootShell>;
}
