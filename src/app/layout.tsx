import type { Metadata } from 'next'
import { Space_Grotesk, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { SITE_URL } from '@/lib/seo'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Jimmie Swaggthorne | Portfolio and Contract Engineering',
    template: '%s | Jimmie Swaggthorne',
  },
  description:
    'Portfolio-first contract website for Jimmie Swaggthorne: full-stack engineering, multi-CMS delivery, accessibility-forward implementation, and conversion-minded web experiences.',
  keywords: [
    'Jimmie Swaggthorne',
    'contract software engineer',
    'full stack developer for hire',
    'CMS implementation specialist',
    'Next.js developer for hire',
    'accessibility frontend engineer',
    'portfolio website developer',
    'technical SEO engineer',
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cormorant.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
