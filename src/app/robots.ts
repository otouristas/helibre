import type { MetadataRoute } from 'next';

/**
 * Everything on helicro.be is public marketing content, so all crawlers are allowed.
 * AI assistants and answer engines are listed explicitly so their crawlers, which sometimes
 * require an explicit allow, can ingest llms.txt and the landing pages.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'Claude-SearchBot',
          'anthropic-ai',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot',
          'Applebot-Extended',
          'Amazonbot',
          'DuckAssistBot',
          'YouBot',
          'MistralAI-User',
          'Meta-ExternalAgent',
          'facebookexternalhit',
          'cohere-ai',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://helicro.be/sitemap.xml',
    host: 'https://helicro.be',
  };
}
