import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/json-ld'
import { absoluteUrl, buildMetadata, jsonLdGraph, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'WordPress Development',
  description:
    'WordPress skills from Jimmie Swaggthorne for hire or contract: custom themes, ACF, custom post types, Gutenberg blocks, plugins, and editor-friendly builds.',
  path: '/wordpress',
  keywords: [
    'WordPress developer for hire',
    'WordPress contractor',
    'ACF developer',
    'custom post types WordPress',
    'Gutenberg block developer',
    'WordPress theme developer',
    'WordPress plugin developer',
    'Jimmie Swaggthorne WordPress',
  ],
})

const capabilities = [
  {
    title: 'Custom & child themes',
    detail:
      'Brand-true themes built around your pages and publishing flow, with lean assets, semantic markup, and templates that survive core updates.',
  },
  {
    title: 'Advanced Custom Fields (ACF)',
    detail:
      'Field groups, flexible content, options pages, and relationship fields modeled so editors fill structured data, not fight the UI.',
  },
  {
    title: 'Custom post types & taxonomies',
    detail:
      'CPTs for products, team, events, case studies, and more, registered cleanly with archives, REST/GraphQL exposure, and admin UX that matches how you work.',
  },
  {
    title: 'Gutenberg & block themes',
    detail:
      'Custom blocks, block patterns, template parts, and FSE-aware builds so the block editor feels like your design system, not a blank canvas.',
  },
  {
    title: 'Plugins & integrations',
    detail:
      'Purpose-built plugins, WooCommerce hooks, forms, CRM connections, and third-party APIs, without stacking five tools that do one job badly.',
  },
  {
    title: 'Performance & maintainability',
    detail:
      'Caching strategy, asset hygiene, accessibility, and update-safe architecture so the site stays fast and editable after launch.',
  },
]

const stackNotes = [
  {
    title: 'Classic PHP themes',
    detail:
      'Template hierarchy, hooks, enqueue discipline, and child themes when you need surgical changes on an existing install.',
  },
  {
    title: 'Block / hybrid themes',
    detail:
      'theme.json, patterns, and custom blocks when the editorial team lives in Gutenberg and needs reusable layouts.',
  },
  {
    title: 'ACF-driven page building',
    detail:
      'Flexible content and clone fields that map to component sections: structured enough for consistency, flexible enough for marketing pages.',
  },
  {
    title: 'Editor training & handoff',
    detail:
      'Short docs and walkthroughs so your team can publish without calling a developer for every headline change.',
  },
]

const whoItsFor = [
  'Teams hiring a WordPress engineer (contract or full-time) who can own theme and plugin work',
  'Product or marketing orgs stuck on a bloated page builder who need cleaner, faster WordPress',
  'Squads that need CPTs and ACF for real content models, not just blog posts',
  'Sites migrating themes, consolidating plugins, or preparing for headless later',
]

export default function WordPressPage() {
  const structuredData = jsonLdGraph({
    '@type': 'Service',
    '@id': `${absoluteUrl('/wordpress')}#service`,
    name: 'WordPress Development',
    url: absoluteUrl('/wordpress'),
    provider: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Jimmie Swaggthorne',
    },
    description:
      'WordPress development covering custom themes, ACF, custom post types, Gutenberg, plugins, and editor-friendly delivery, available for hire or contract.',
    serviceType: 'WordPress Development',
  })

  return (
    <section className="section section-alt">
      <div className="shell">
        <JsonLd data={structuredData} />
        <p className="kicker">WordPress craft</p>
        <h1>WordPress development that editors can live in</h1>
        <p className="lead">
          I build and maintain WordPress sites as a contractor or team hire: themes, plugins,
          ACF, custom post types, Gutenberg, and the glue that keeps content teams productive.
          Not a page-builder specialty profile: real WordPress engineering with clear handoff to
          the people I work with.
        </p>

        <div className="section grid grid-3">
          {capabilities.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p className="muted">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="section">
          <h2>How I work across the WordPress stack</h2>
          <p className="lead">
            Classic PHP, block themes, ACF page sections, or a hybrid. I help the team pick what
            fits editors and the roadmap, not a one-size template.
          </p>
          <div className="grid grid-3">
            {stackNotes.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="section card">
          <h2>Where I fit</h2>
          <ul style={{ paddingLeft: '1.25rem', marginBlockStart: '1rem' }}>
            {whoItsFor.map((item) => (
              <li key={item} className="muted" style={{ marginBlockEnd: '0.5rem' }}>
                {item}
              </li>
            ))}
          </ul>
          <p className="muted" style={{ marginBlockStart: '0.75rem' }}>
            Need the CMS for content and a Next.js frontend for performance? See{' '}
            <Link href="/headless" style={{ textDecoration: 'underline' }}>
              WP Engine Headless + Next.js
            </Link>
            . Prefer staying fully on WordPress with a strong theme and plugin layer? This is the
            skill set I bring to that role.
          </p>
        </div>

        <div className="cta-row">
          <Link href="/contact" className="btn btn-primary">
            Talk about a contract or role
          </Link>
          <Link href="/headless" className="btn btn-ghost">
            Headless WP + Next.js
          </Link>
          <Link href="/portfolio" className="btn btn-ghost">
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
