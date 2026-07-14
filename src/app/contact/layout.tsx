import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Project intake form for Jimmie Swaggthorne contract work. Share scope, timeline, and goals without publishing personal phone, address, or direct email.',
  path: '/contact',
  keywords: [
    'contract developer contact form',
    'project intake web development',
    'hire Jimmie Swaggthorne',
  ],
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}