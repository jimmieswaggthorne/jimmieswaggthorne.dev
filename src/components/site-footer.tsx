import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-title">Jimmie Swaggthorne</p>
          <p className="muted">
            Contract full-stack software engineering, portfolio-grade website builds, and
            accessibility-first delivery across multiple CMS platforms.
          </p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
