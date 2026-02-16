import { MetadataRoute } from 'next'

// SEO: Robots.txt configuration for search engine crawlers
// TODO: SWAP TO PRODUCTION DOMAIN when coachwithevon.com is connected
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://evon-coaching.vercel.app/sitemap.xml',
  }
}
