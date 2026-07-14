import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Services',
  description:
    'Contract service offerings by Jimmie Swaggthorne: product engineering, web platform delivery, technical SEO implementation, and accessibility remediation.',
  path: '/services',
  keywords: ['contract engineering services', 'accessibility consultant developer', 'technical SEO implementation'],
})

const services = [
  {
    title: 'Contract Product Engineering',
    detail:
      'Feature delivery, refactoring strategy, integration work, and team-oriented implementation for active products.',
  },
  {
    title: 'Portfolio and Marketing Websites',
    detail:
      'Custom website builds with strong messaging structure, conversion-aware UX, and long-term maintainability.',
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
          Engagements are scoped with practical milestones and direct communication.
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
