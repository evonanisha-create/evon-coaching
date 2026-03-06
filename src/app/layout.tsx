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

// TODO: SWAP TO PRODUCTION DOMAIN when coachwithevon.com is connected
const SITE_URL = 'https://evon-coaching.vercel.app'

export const metadata: Metadata = {
  title: 'Evon Davis | Career & Leadership Coach',
  description: 'Make your next career move with confidence. ICF-certified coach and former Deloitte & Meta strategist helping professionals find clarity and take values-aligned next steps.',
  keywords: [
    'career coach',
    'leadership coach',
    'career transition coach',
    'career change coach',
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
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Evon Davis | Career & Leadership Coach',
    description: 'ICF-certified career coach helping professionals move through career transitions. Former Deloitte & Meta strategist. Free discovery call available.',
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Evon Davis Career & Leadership Coaching',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evon Davis | Career & Leadership Coach',
    description: 'ICF-certified career coach helping professionals work through career transitions with clarity and confidence.',
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
