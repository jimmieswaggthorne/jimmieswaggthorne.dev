import { NextResponse } from 'next/server'

type ContactPayload = {
    name?: string
    company?: string
    email?: string
    website?: string
    budget?: string
    timeline?: string
    message?: string
    honey?: string
}

function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(req: Request) {
    const body = (await req.json().catch(() => ({}))) as ContactPayload

    if (body.honey) {
        return NextResponse.json({ ok: true }, { status: 200 })
    }

    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim().toLowerCase()
    const message = String(body.message ?? '').trim()

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    if (!isEmail(email)) {
        return NextResponse.json({ error: 'Please use a valid email address.' }, { status: 400 })
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL
    const payload = {
        name,
        company: String(body.company ?? '').trim(),
        email,
        website: String(body.website ?? '').trim(),
        budget: String(body.budget ?? '').trim(),
        timeline: String(body.timeline ?? '').trim(),
        message,
        createdAt: new Date().toISOString(),
    }

    if (!webhookUrl) {
        console.info('CONTACT_SUBMISSION', payload)
        return NextResponse.json({ ok: true }, { status: 200 })
    }

    try {
        const forward = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })

        if (!forward.ok) {
            return NextResponse.json({ error: 'Unable to route message right now.' }, { status: 502 })
        }

        return NextResponse.json({ ok: true }, { status: 200 })
    } catch {
        return NextResponse.json({ error: 'Unable to route message right now.' }, { status: 502 })
    }
}
