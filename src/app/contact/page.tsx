'use client'

import { useState } from 'react'

type FormStatus = 'idle' | 'sending' | 'ok' | 'err'

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const payload = {
        name: data.get('name'),
        company: data.get('company'),
        email: data.get('email'),
        website: data.get('website'),
        budget: data.get('budget'),
        timeline: data.get('timeline'),
        message: data.get('message'),
        honey: data.get('honey'),
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const body = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('err')
        setMessage(body?.error ?? 'Unable to send right now. Please try again shortly.')
        return
      }

      form.reset()
      setStatus('ok')
      setMessage('Thanks. Your project details were received and I will follow up soon.')
    } catch {
      setStatus('err')
      setMessage('Network error. Please try again shortly.')
    }
  }

  return (
    <section className="section">
      <div className="shell" style={{ maxWidth: 760 }}>
        <p className="kicker">Contact</p>
        <h1>Start a project conversation</h1>
        <p className="lead" style={{ marginBottom: '1rem' }}>
          Share your scope, timeline, and what success looks like. You can use the form or reach
          out directly through email, GitHub, or LinkedIn.
        </p>
        <p className="muted" style={{ marginTop: 0, marginBottom: '1.25rem' }}>
          <a href="mailto:jimmieswaggthorne@gmail.com">jimmieswaggthorne@gmail.com</a> |{' '}
          <a href="https://github.com/jimmieswaggthorne" target="_blank" rel="noreferrer noopener">
            GitHub
          </a>{' '}
          |{' '}
          <a
            href="https://linkedin.com/in/jimmie-swaggthorne"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </p>

        {status === 'ok' && <p className="status status-ok">{message}</p>}
        {status === 'err' && <p className="status status-err">{message}</p>}

        <form onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required />
          </div>

          <div className="field">
            <label htmlFor="company">Company or project</label>
            <input id="company" name="company" />
          </div>

          <div className="field">
            <label htmlFor="email">Best reply email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="field">
            <label htmlFor="website">Current website (optional)</label>
            <input id="website" name="website" placeholder="https://" />
          </div>

          <div className="field">
            <label htmlFor="budget">Budget range</label>
            <select id="budget" name="budget" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option value="under-5k">Under $5k</option>
              <option value="5k-15k">$5k - $15k</option>
              <option value="15k-plus">$15k+</option>
              <option value="hourly">Hourly contract support</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="timeline">Desired timeline</label>
            <input id="timeline" name="timeline" placeholder="Example: launch in 6 weeks" />
          </div>

          <div className="field" style={{ display: 'none' }}>
            <label htmlFor="honey">Leave this empty</label>
            <input id="honey" name="honey" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="field">
            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="What are you building, what is blocking you, and what outcomes matter most?"
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send project intake'}
          </button>
        </form>
      </div>
    </section>
  )
}
