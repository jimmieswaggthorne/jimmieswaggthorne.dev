import Link from 'next/link'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link href="/" className="brand-mark">
          jimmieswaggthorne.dev
        </Link>
        <nav aria-label="Primary" className="nav-links">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
