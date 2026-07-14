import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/json-ld'
import { absoluteUrl, buildMetadata, jsonLdGraph, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Home',
  description:
    'Portfolio-first contract website for Jimmie Swaggthorne: full-stack product engineering, multi-CMS implementation, accessibility leadership, and production-focused delivery.',
  path: '/',
  keywords: [
    'jimmieswaggthorne.dev',
    'Jimmie Swaggthorne portfolio',
    'contract engineering',
    'full stack contract engineer',
    'multi CMS developer',
    'accessibility focused engineering',
  ],
})

const strengths = [
  'Full-stack product delivery with Next.js and modern APIs',
  'Accessibility remediation and inclusive UX',
  'Technical SEO architecture and schema',
  'Multiple CMS platforms including WordPress, Shopify, and headless setups',
  'Creative CSS systems and polished UI implementation',
  'Cross-functional collaboration with product teams',
]

const highlights = [
  'I started coding in middle school and, by sixth grade, outperformed older students in a timed HTML/CSS competition.',
  'Raised in the MySpace era, I bring a long-standing appreciation for CSS craftsmanship and expressive interface design.',
  'I care deeply about advancing accessibility and building meaningful products through real collaboration.',
  'My entrepreneurial experience and interdisciplinary artist lens help me approach technical challenges with creativity.',
]

const techAndCms = [
  {
    title: 'Product Stack Delivery',
    detail:
      'Next.js, React, TypeScript, and API-backed feature work with practical release planning and maintainable architecture.',
  },
  {
    title: 'CMS Implementation',
    detail:
      'WordPress, Shopify, and headless CMS workflows built for editor usability, clean content modeling, and reliable publishing.',
  },
  {
    title: 'Platform Integrations',
    detail:
      'Schema, analytics, search, and marketing platform integrations connected to product UX without slowing down teams.',
  },
]

export default function HomePage() {
  const structuredData = jsonLdGraph(
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Jimmie Swaggthorne',
      url: SITE_URL,
      jobTitle: 'Contract Software Engineer',
      description:
        'Contract full-stack software engineer and creative technologist focused on accessible, portfolio-grade web products and CMS-aware platform delivery.',
      knowsAbout: [
        'Next.js',
        'React',
        'Full-stack development',
        'CMS implementation',
        'Accessibility',
        'Technical SEO',
        'CSS Architecture',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'jimmieswaggthorne.dev',
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': `${absoluteUrl('/')}#webpage`,
      url: absoluteUrl('/'),
      name: 'Home | Jimmie Swaggthorne',
      about: { '@id': `${SITE_URL}/#person` },
    },
  )

  return (
    <>
      <JsonLd data={structuredData} />

      <section className="hero">
        <div className="shell hero-panel">
          <p className="kicker">Portfolio and Contract Site</p>
          <h1>Jimmie Swaggthorne</h1>
          <p className="lead">
            I help teams ship product work faster with full-stack systems that are expressive,
            accessible, and built to perform. I am also experienced across multiple CMS platforms,
            so content teams can move quickly without losing implementation quality. This site is
            intentionally portfolio-first: the work, craft, and outcomes lead the story.
          </p>
          <div className="cta-row">
            <Link href="/portfolio" className="btn btn-primary">
              Explore portfolio profile
            </Link>
            <Link href="/work" className="btn btn-ghost">
              Browse selected work
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Start a contract conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <h2>Core strengths</h2>
          <div className="chip-list">
            {strengths.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>Tech + CMS toolkit</h2>
          <p className="lead">
            Full-stack implementation and CMS delivery are part of the same system for me. I build
            the engineering layer and the publishing layer to work together.
          </p>
          <div className="section grid grid-3">
            {techAndCms.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>The human side of the technical work</h2>
          <div className="grid grid-3">
            {highlights.map((item) => (
              <article className="card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
