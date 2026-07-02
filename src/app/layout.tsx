import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderLayout from '@/components/HeaderLayout';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';

const inter = Inter({
  subsets: ['latin', 'greek'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Helicro | Brussels Airport Taxi & Private Transfers',
  description: 'Private airport transfers in Brussels with English-speaking drivers, a Mercedes fleet and fixed prices to Zaventem & Charleroi. Book online with Helicro.',
  metadataBase: new URL('https://helicro.be'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'nl': '/nl',
      'fr': '/fr',
      'el': '/el',
    }
  },
  openGraph: {
    title: 'Helicro | Brussels Airport Taxi & Private Transfers',
    description: 'Private airport transfers in Brussels with English-speaking drivers, a Mercedes fleet and fixed prices to Zaventem & Charleroi. Book online with Helicro.',
    url: 'https://helicro.be',
    siteName: 'Helicro',
    locale: 'en_BE',
    type: 'website',
    images: [
      {
        url: '/images/brussels-must-see-travelstyle.jpg',
        width: 1200,
        height: 630,
        alt: 'Helicro Brussels Airport Transfers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helicro | Brussels Airport Taxi & Private Transfers',
    description: 'Private airport transfers in Brussels with English-speaking drivers, a Mercedes fleet and fixed prices to Zaventem & Charleroi. Book online with Helicro.',
    images: ['/images/brussels-must-see-travelstyle.jpg'],
  },
  verification: {
    google: 'DoWNzpRLYyxM5JL2LsOmLQGOqg2QoAj6ggxCI6LGZPg',
  },
  appleWebApp: {
    title: 'Helicro Transport',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header Layout: Banner, Desktop Navbar, Mobile Drawer */}
        <HeaderLayout />
        
        {/* Main Content Area */}
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
        
        {/* Floating AI Assistant Chat Bot */}
        <AIAssistant />
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
