import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { ContactEmailToTeworh } from '@/emails/ContactEmailToTeworh'
// import { ContactEmailConfirmation } from '@/emails/ContactEmailConfirmation'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json()

    //Send submission email to Teworh
    await resend.emails.send({
      from: 'Teworh Contact <onboarding@resend.dev>',
      to: 'teworhsportsandskills@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission — ${service}`,
      react: ContactEmailToTeworh({
        name,
        email,
        service,
        message,
      }),
    })

    //Send confirmation email to user
    // await resend.emails.send({
    //   from: 'Teworh Sports <onboarding@resend.dev>',
    //   to: 'teworhsportsandskills@gmail.com',
    //   subject: 'We received your message — Teworh Sports',
    //   react: ContactEmailConfirmation({
    //     name,
    //   }),
    // })

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    const err = error as { message?: string; statusCode?: number }

    console.error(
      'Email send error:',
      err.message ?? String(error),
      err.statusCode,
      JSON.stringify(error)
    )

    const message =
      typeof err === 'object' &&
      err !== null &&
      'message' in err &&
      typeof err.message === 'string'
        ? err.message
        : 'Failed'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
