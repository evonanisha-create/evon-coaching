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

export const metadata: Metadata = {
  title: 'Evon Davis | Career & Leadership Coach',
  description: 'Navigate your career transition with confidence. ICF-certified coach and former Deloitte and Meta strategist helping high-achievers find clarity and take values-aligned next steps.',
  keywords: ['career coach', 'leadership coach', 'career transition', 'executive coach', 'ICF certified', 'career change'],
  authors: [{ name: 'Evon Davis' }],
  openGraph: {
    title: 'Evon Davis | Career & Leadership Coach',
    description: 'Navigate your career transition with confidence. ICF-certified coach helping high-achievers find clarity.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evon Davis | Career & Leadership Coach',
    description: 'Navigate your career transition with confidence.',
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
