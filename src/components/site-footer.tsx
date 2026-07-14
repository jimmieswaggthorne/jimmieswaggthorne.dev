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
          <a href="mailto:jimmieswaggthorne@gmail.com">jimmieswaggthorne@gmail.com</a>
          <a href="https://github.com/jimmieswaggthorne" target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jimmie-swaggthorne"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
