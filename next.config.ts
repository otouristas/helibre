import type { NextConfig } from "next";

const cloudflareExport = process.env.CLOUDFLARE_STATIC_EXPORT === '1';

const nextConfig: NextConfig = {
  // Keep the existing Next.js workflow; Workers serves the exported HTML/assets.
  ...(cloudflareExport ? { output: 'export' as const } : {}),
  images: {
    unoptimized: cloudflareExport,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/lib/api/**',
        search: '',
      },
    ],
  },
  redirects: cloudflareExport ? undefined : async () => {
    return [
      {
        source: '/en/festival/tomorrowland',
        destination: '/services/event-transfers/tomorrowland',
        permanent: true,
      },
      {
        source: '/en/festival/tomorrowland/',
        destination: '/services/event-transfers/tomorrowland',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
