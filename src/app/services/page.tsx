import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Services',
  description:
    'Contract service offerings by Jimmie Swaggthorne: full-stack Next.js and React product engineering, WordPress and WP Engine delivery, technical SEO implementation, and accessibility remediation.',
  path: '/services',
  keywords: [
    'full stack Next.js React contract engineering',
    'WordPress WP Engine developer services',
    'multi CMS implementation services',
    'accessibility consultant developer',
    'technical SEO implementation',
  ],
})

const services = [
  {
    title: 'Contract Product Engineering',
    detail:
      'Full-stack Next.js and React feature delivery, refactoring strategy, integration work, and team-oriented implementation for active products.',
  },
  {
    title: 'WordPress & WP Engine',
    detail:
      'Custom themes, ACF field models, custom post types, Gutenberg blocks, plugins, and WP Engine hosting support: editor-friendly builds with maintainable architecture.',
    href: '/wordpress',
  },
  {
    title: 'WP Engine Headless + Next.js',
    detail:
      'Decoupled WordPress on Atlas with a Next.js and React App Router frontend, WPGraphQL, preview, and ISR, as a contractor or embedded engineer.',
    href: '/headless',
  },
  {
    title: 'Portfolio, Marketing, and CMS Websites',
    detail:
      'Custom website and CMS builds with strong messaging structure, conversion-aware UX, accessibility foundations, and long-term maintainability.',
  },
  {
    title: 'Accessibility and Frontend QA',
    detail:
      'Audit-informed remediation, keyboard testing, semantic correction, and practical accessibility improvements across React and CMS frontends.',
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
          Engagements blend full-stack Next.js and React execution with WordPress, WP Engine, and
          CMS-aware implementation, scoped through practical milestones and direct communication.
        </p>

        <div className="section grid grid-3">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p className="muted">{service.detail}</p>
              {'href' in service && service.href ? (
                <p style={{ marginBlockStart: '0.75rem' }}>
                  <Link href={service.href} style={{ textDecoration: 'underline' }}>
                    Learn more
                  </Link>
                </p>
              ) : null}
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
