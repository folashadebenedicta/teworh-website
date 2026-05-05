import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { ApplyEmailToTeworh } from '@/emails/ApplyEmailToTeworh'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const {
      name,
      dob,
      gender,
      email,
      skillLevel,
      preferredPosition,
      previousPosition,
    } = await req.json()

    await resend.emails.send({
      from: 'Teworh Contact <onboarding@resend.dev>',
      to: 'teworhsportsandskills@gmail.com',
      replyTo: email,
      subject: `New Academy Application — ${name}`,
      react: ApplyEmailToTeworh({
        name,
        dob,
        gender,
        email,
        skillLevel,
        preferredPosition,
        previousPosition,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    const err = error as { message?: string; statusCode?: number }
    console.error(
      'Apply email error:',
      err.message ?? String(error),
      JSON.stringify(error)
    )
    return NextResponse.json(
      { error: err.message ?? 'Failed' },
      { status: 500 }
    )
  }
}
