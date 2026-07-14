export default function ContactPage() {
  return (
    <section className="section">
      <div className="shell" style={{ maxWidth: 760 }}>
        <p className="kicker">Contact</p>
        <h1>Get in touch</h1>
        <p className="lead" style={{ marginBottom: '1rem' }}>
          If you are building something ambitious and need a full-stack partner, reach out anytime.
          The fastest path is email: <a href="mailto:jimmieswaggthorne@gmail.com">jimmieswaggthorne@gmail.com</a>.
        </p>

        <p className="muted" style={{ marginBottom: '0.75rem' }}>
          Email: <a href="mailto:jimmieswaggthorne@gmail.com">jimmieswaggthorne@gmail.com</a>
        </p>
        <p className="muted" style={{ marginBottom: '0.75rem' }}>
          GitHub: <a href="https://github.com/jimmieswaggthorne">github.com/jimmieswaggthorne</a>
        </p>
        <p className="muted" style={{ marginBottom: '1rem' }}>
          LinkedIn:{' '}
          <a href="https://linkedin.com/in/jimmie-swaggthorne">linkedin.com/in/jimmie-swaggthorne</a>
        </p>

        <p className="lead" style={{ marginBottom: 0 }}>
          Ready to talk scope, timeline, or next steps? Send a note to{' '}
          <a href="mailto:jimmieswaggthorne@gmail.com">jimmieswaggthorne@gmail.com</a> and I will follow up.
        </p>
      </div>
    </section>
  )
}
