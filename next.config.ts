import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
