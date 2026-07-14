import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Services',
  description:
    'Contract service offerings by Jimmie Swaggthorne: full-stack product engineering, multi-CMS delivery, technical SEO implementation, and accessibility remediation.',
  path: '/services',
  keywords: [
    'full stack contract engineering services',
    'multi CMS implementation services',
    'accessibility consultant developer',
    'technical SEO implementation',
  ],
})

const services = [
  {
    title: 'Contract Product Engineering',
    detail:
      'Full-stack feature delivery, refactoring strategy, integration work, and team-oriented implementation for active products.',
  },
  {
    title: 'Portfolio, Marketing, and CMS Websites',
    detail:
      'Custom website and CMS builds with strong messaging structure, conversion-aware UX, and long-term maintainability.',
  },
  {
    title: 'Accessibility and Frontend QA',
    detail:
      'Audit-informed remediation, keyboard testing, semantic correction, and practical accessibility improvements.',
  },
  {
    title: 'Technical SEO Foundations',
    detail:
      'Metadata strategy, schema implementation, information architecture, and performance cleanup to support discoverability.',
  },
]

export default function ServicesPage() {
  return (
    <section className="section section-alt">
      <div className="shell">
        <p className="kicker">Services</p>
        <h1>Built for teams that need momentum</h1>
        <p className="lead">
          I focus on work that drives outcomes quickly while still leaving clean foundations behind.
          Engagements blend full-stack execution with CMS-aware implementation, scoped through
          practical milestones and direct communication.
        </p>

        <div className="section grid grid-3">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p className="muted">{service.detail}</p>
            </article>
          ))}
        </div>

        <div className="cta-row">
          <Link href="/contact" className="btn btn-primary">
            Submit project details
          </Link>
        </div>
      </div>
    </section>
  )
}
