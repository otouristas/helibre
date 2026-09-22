import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
  async redirects() {
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
