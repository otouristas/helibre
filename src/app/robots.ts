import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'Applebot-Extended',
          'Google-Extended',
          'PerplexityBot',
          'facebookexternalhit'
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://helicro.be/sitemap.xml',
  };
}
