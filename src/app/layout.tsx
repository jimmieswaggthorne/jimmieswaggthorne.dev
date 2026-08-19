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
    default: 'Jimmie Swaggthorne | Full-Stack Next.js, React & Accessibility',
    template: '%s | Jimmie Swaggthorne',
  },
  description:
    'Portfolio-first contract website for Jimmie Swaggthorne: full-stack Next.js and React engineering, accessibility-forward implementation, multi-CMS delivery, and conversion-minded web experiences.',
  keywords: [
    'Jimmie Swaggthorne',
    'contract software engineer',
    'full stack developer for hire',
    'Next.js developer for hire',
    'React developer for hire',
    'accessibility frontend engineer',
    'CMS implementation specialist',
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
