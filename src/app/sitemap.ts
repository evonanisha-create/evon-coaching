import { MetadataRoute } from 'next'

// SEO: Dynamic sitemap for search engine indexing
// TODO: SWAP TO PRODUCTION DOMAIN when coachwithevon.com is connected
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://evon-coaching.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
