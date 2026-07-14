import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Work',
  description:
    'Selected project work by Jimmie Swaggthorne across product interfaces, CMS ecosystems, and full-stack delivery.',
  path: '/work',
  keywords: ['frontend portfolio projects', 'Next.js work samples', 'contract engineering case studies'],
})

const projects = [
  {
    name: 'SEO Product Suite',
    stack: 'Next.js, React-Redux, Supabase, Python',
    result:
      'Built integrations and indexing workflows that connected technical SEO operations with product-facing UX.',
  },
  {
    name: 'Uncommon Live Experience',
    stack: 'Next.js PWA, AWS Chime, OneSignal',
    result:
      'Delivered responsive live streaming and chat features with reliability and mobile usability as non-negotiables.',
  },
  {
    name: 'Conference Platform Partnerships',
    stack: 'Vue, Nuxt, Firebase',
    result:
      'Contributed to event web experiences with high visibility timelines and coordinated cross-team handoffs.',
  },
  {
    name: 'WordPress + Shopify Client Builds',
    stack: 'PHP, Liquid, JS, CSS, API Integrations',
    result:
      'Launched client-facing websites and commerce experiences that balanced storytelling with maintainability.',
  },
]

export default function WorkPage() {
  return (
    <section className="section">
      <div className="shell">
        <p className="kicker">Selected Work</p>
        <h1>Case-study style snapshots</h1>
        <p className="lead">
          This page highlights representative project categories and outcomes. I can walk through
          deeper examples during discovery calls based on your needs.
        </p>

        <div className="section grid grid-3">
          {projects.map((project) => (
            <article className="card" key={project.name}>
              <h3>{project.name}</h3>
              <p className="muted">
                <strong>Stack:</strong> {project.stack}
              </p>
              <p className="muted">{project.result}</p>
            </article>
          ))}
        </div>

        <div className="cta-row">
          <Link href="/services" className="btn btn-ghost">
            See services
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Start project intake
          </Link>
        </div>
      </div>
    </section>
  )
}
