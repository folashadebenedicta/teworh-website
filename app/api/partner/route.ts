import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { PartnerEmailToTeworh } from '@/emails/PartnerEmailToTeworh'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json()

    await resend.emails.send({
      from: 'Teworh Contact <onboarding@resend.dev>',
      to: 'teworhsportsandskills@gmail.com',
      replyTo: email,
      subject: `New Partnership Enquiry — ${company}`,
      react: PartnerEmailToTeworh({ name, email, phone, company, message }),
    })

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    const err = error as { message?: string }
    console.error(
      'Partner email error:',
      err.message ?? String(error),
      JSON.stringify(error)
    )
    return NextResponse.json(
      { error: err.message ?? 'Failed' },
      { status: 500 }
    )
  }
}
