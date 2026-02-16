import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

// Distinctive font choices - elegant serif for headlines, clean sans for body
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

// SEO: Comprehensive metadata optimized for target keywords and CTR
// TODO: SWAP TO PRODUCTION DOMAIN when coachwithevon.com is connected
const SITE_URL = 'https://evon-coaching.vercel.app'

export const metadata: Metadata = {
  // SEO: Title format — Primary Keyword | Brand | Secondary Keyword (under 60 chars)
  title: 'Career Coach Austin TX | Evon Davis | Leadership & Career Transition',
  // SEO: Meta description — 155 chars, includes primary keyword, location, CTA
  description: 'ICF-certified career coach in Austin, Texas. Former Deloitte & Meta strategist helping professionals navigate career transitions. Book a free discovery call.',
  keywords: [
    'career coach Austin',
    'career coaching Austin Texas',
    'career transition coach',
    'leadership coach Austin',
    'career change coach',
    'executive coach Austin TX',
    'ICF certified career coach',
    'career coach for professionals',
    'career clarity coach',
    'coaching for career changers',
    'new manager coaching',
    'return to work coaching',
    'burnout coach for professionals',
  ],
  authors: [{ name: 'Evon Davis' }],
  creator: 'Evon Davis',
  publisher: 'Evon Davis Career & Leadership Coaching',
  // SEO: Canonical URL to prevent duplicate content
  alternates: {
    canonical: SITE_URL,
  },
  // SEO: Robots directive with rich snippet permissions
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  // SEO: Open Graph for social sharing (LinkedIn, Facebook)
  openGraph: {
    title: 'Career Coach Austin TX | Evon Davis | Career & Leadership Coaching',
    description: 'ICF-certified career coach helping high-achievers navigate career transitions. Former Deloitte & Meta strategist based in Austin, TX. Free discovery call available.',
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Evon Davis Career & Leadership Coaching',
  },
  // SEO: Twitter/X card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Career Coach Austin TX | Evon Davis',
    description: 'ICF-certified career coach helping professionals navigate career transitions with clarity and confidence.',
  },
  // SEO: Additional metadata
  other: {
    // Geo tags for local SEO — Austin, TX
    'geo.region': 'US-TX',
    'geo.placename': 'Austin',
    'geo.position': '30.2672;-97.7431',
    'ICBM': '30.2672, -97.7431',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
