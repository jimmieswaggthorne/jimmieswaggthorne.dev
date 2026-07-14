import type { Metadata } from 'next'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jimmieswaggthorne.dev'
export const SITE_NAME = 'Jimmie Swaggthorne'

export function absoluteUrl(path = '/') {
    const normalized = path.startsWith('/') ? path : `/${path}`
    return `${SITE_URL}${normalized}`
}

export function buildMetadata(opts: {
    title: string
    description: string
    path: string
    keywords?: string[]
    absoluteTitle?: boolean
}): Metadata {
    const url = absoluteUrl(opts.path)
    const title = opts.absoluteTitle ? { absolute: opts.title } : opts.title
    const graphTitle = typeof title === 'string' ? title : opts.title

    return {
        title,
        description: opts.description,
        keywords: opts.keywords,
        alternates: { canonical: url },
        openGraph: {
            title: graphTitle,
            description: opts.description,
            url,
            siteName: SITE_NAME,
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: graphTitle,
            description: opts.description,
        },
    }
}

export function jsonLdGraph(...nodes: Record<string, unknown>[]) {
    return {
        '@context': 'https://schema.org',
        '@graph': nodes,
    }
}
