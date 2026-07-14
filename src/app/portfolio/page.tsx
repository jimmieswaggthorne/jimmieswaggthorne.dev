import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/json-ld'
import { absoluteUrl, buildMetadata, jsonLdGraph, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Portfolio',
  description:
    'Portfolio narrative for Jimmie Swaggthorne: technical depth, collaborative style, and outcomes from contract and product engineering work.',
  path: '/portfolio',
  keywords: [
    'Jimmie Swaggthorne portfolio',
    'contract full stack engineer profile',
    'multi CMS and accessibility specialist',
  ],
})

const timeline = [
  {
    period: '2025 - 2026',
    role: 'Independent Contract Engineer',
    detail:
      'Delivered full-stack feature work, launch support, and accessibility-focused implementation for active client products.',
  },
  {
    period: '2019 - 2026',
    role: 'Loud Interactive Contract Partner',
    detail:
      'Shipped full-stack builds, SEO platform integrations, and custom WordPress implementation for varied client environments.',
  },
  {
    period: '2022 - 2025',
    role: 'Software Engineer and DEIB Co-Chair',
    detail:
      'Led major Next.js PWA features and engineering collaboration rituals with inclusive team culture in mind.',
  },
]

export default function PortfolioPage() {
  const structuredData = jsonLdGraph({
    '@type': 'ProfilePage',
    '@id': `${absoluteUrl('/portfolio')}#profile`,
    url: absoluteUrl('/portfolio'),
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Jimmie Swaggthorne',
      jobTitle: 'Contract Software Engineer',
      url: SITE_URL,
    },
  })

  return (
    <section className="section">
      <div className="shell">
        <JsonLd data={structuredData} />
        <p className="kicker">Portfolio Profile</p>
        <h1>More than a resume, this is how I work</h1>
        <p className="lead">
          I frame my background through delivery outcomes: what got shipped, why it mattered,
          and how I collaborated to make it sustainable for the team.
        </p>

        <div className="section">
          <h2>Experience highlights</h2>
          <div className="grid">
            {timeline.map((entry) => (
              <article className="card" key={`${entry.period}-${entry.role}`}>
                <p className="kicker">{entry.period}</p>
                <h3>{entry.role}</h3>
                <p className="muted">{entry.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>Collaboration style</h2>
          <p className="muted">
            I love pairing with designers, PMs, and engineers to build cool products with real
            constraints. Accessibility is not a checkbox at the end for me. It is a product quality
            standard from day one.
          </p>
          <div className="cta-row">
            <Link href="/work" className="btn btn-primary">
              View selected work
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Discuss your scope
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
