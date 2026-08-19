import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/json-ld'
import { absoluteUrl, buildMetadata, jsonLdGraph, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
    title: 'WP Engine Headless + Next.js',
    description:
        'Full-stack headless WordPress development with WP Engine Atlas and Next.js, combining a battle-tested CMS backend with a blazing-fast React frontend.',
    path: '/headless',
    keywords: [
        'WP Engine headless WordPress',
        'headless WordPress Next.js',
        'WP Engine Atlas developer',
        'Faust.js developer',
        'headless CMS Next.js frontend',
        'decoupled WordPress development',
    ],
})

const advantages = [
    {
        title: 'Editor-first content model',
        detail:
            'Content teams keep the WordPress admin they already know while the frontend gains full Next.js control over rendering, routing, and performance.',
    },
    {
        title: 'App Router + WPGraphQL',
        detail:
            'Server Components fetch content directly from WPGraphQL at build or request time, with no client bundle bloat and no content waterfalls.',
    },
    {
        title: 'WP Engine Atlas hosting',
        detail:
            'Deploying to Atlas co-locates the WordPress backend and Node.js frontend on WP Engine infrastructure, tightening preview, caching, and deployment workflows.',
    },
    {
        title: 'Incremental Static Regeneration',
        detail:
            'Pages revalidate automatically on publish via WP Engine webhooks, keeping content fresh without full rebuilds.',
    },
    {
        title: 'Custom post types as API primitives',
        detail:
            'CPTs and ACF field groups become typed GraphQL fragments consumed cleanly by Next.js page and layout components.',
    },
    {
        title: 'Preview mode and draft content',
        detail:
            'Authenticated preview routes surface unpublished WordPress drafts inside the live Next.js app: safe, linkable, and easy to share with stakeholders.',
    },
]

const deliverables = [
    'Next.js App Router project scaffolded against your WP Engine Headless environment',
    'WPGraphQL schema introspection and typed query layer',
    'Custom post type and ACF data modeling aligned to frontend component needs',
    'ISR-backed page generation with on-demand revalidation hooks',
    'Draft preview routes for stakeholder review',
    'Deployment pipeline to WP Engine Atlas or Vercel',
    'SEO foundations: metadata, Open Graph, JSON-LD, and sitemap',
    'Handoff documentation and editor guide',
]

export default function HeadlessPage() {
    const structuredData = jsonLdGraph({
        '@type': 'Service',
        '@id': `${absoluteUrl('/headless')}#service`,
        name: 'WP Engine Headless + Next.js Development',
        url: absoluteUrl('/headless'),
        provider: {
            '@type': 'Person',
            '@id': `${SITE_URL}/#person`,
            name: 'Jimmie Swaggthorne',
        },
        description:
            'Full-stack headless WordPress development pairing WP Engine Atlas with a Next.js App Router frontend. Content is managed in WordPress and delivered at edge speed.',
        serviceType: 'Headless CMS Development',
    })

    return (
        <section className="section section-alt">
            <div className="shell">
                <JsonLd data={structuredData} />
                <p className="kicker">Headless Stack</p>
                <h1>WP Engine Headless + Next.js</h1>
                <p className="lead">
                    WordPress is the world&apos;s most-used CMS for a reason: editorial workflows,
                    plugin ecosystem, and familiarity. Pairing it with a Next.js frontend gives you both:
                    content teams stay productive in an interface they know, while the site gets the
                    performance, flexibility, and developer experience of a modern React app.
                </p>

                <div className="section grid grid-3">
                    {advantages.map((item) => (
                        <article key={item.title} className="card">
                            <h3>{item.title}</h3>
                            <p className="muted">{item.detail}</p>
                        </article>
                    ))}
                </div>

                <div className="section card">
                    <h2>What an engagement includes</h2>
                    <ul style={{ paddingLeft: '1.25rem', marginBlockStart: '1rem' }}>
                        {deliverables.map((item) => (
                            <li key={item} className="muted" style={{ marginBlockEnd: '0.5rem' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="section card" style={{ borderColor: 'var(--accent-soft)' }}>
                    <h2>Why WP Engine Atlas?</h2>
                    <p className="muted">
                        Atlas is WP Engine&apos;s purpose-built platform for headless WordPress. It runs the
                        WordPress backend and the Node.js frontend on co-located infrastructure, which
                        simplifies environment management, preview deployments, and performance tuning.
                        Combined with WP Engine&apos;s managed WordPress hosting reputation, it&apos;s a
                        strong production choice for teams that want headless without the operational overhead
                        of wiring two separate platforms together.
                    </p>
                    <p className="muted" style={{ marginBlockStart: '0.75rem' }}>
                        I have hands-on experience architecting, building, and shipping on this stack, from
                        initial scaffolding through launch, and I am looking for contract or full-time
                        opportunities where that experience helps a product or marketing team move faster.
                    </p>
                </div>

                <div className="cta-row">
                    <Link href="/contact" className="btn btn-primary">
                        Talk about a contract or role
                    </Link>
                    <Link href="/wordpress" className="btn btn-ghost">
                        Classic WordPress skills
                    </Link>
                    <Link href="/portfolio" className="btn btn-ghost">
                        View portfolio
                    </Link>
                </div>
            </div>
        </section>
    )
}
