import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Contact Jimmie Swaggthorne directly by email for full-stack web development inquiries and project discussions.',
  path: '/contact',
  keywords: [
    'contact full-stack web developer',
    'email web developer',
    'hire Jimmie Swaggthorne',
  ],
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}