// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate data
    const validatedData = contactSchema.parse(body)

    // TODO: Implement email sending with Resend
    // Example:
    // const response = await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: CONTACT_EMAIL,
    //   subject: `New Contact Form: ${validatedData.subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Subject:</strong> ${validatedData.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `,
    // })

    // For now, just log the message
    console.log('Contact form submission:', validatedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Message received. I will get back to you soon!',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: error.errors,
        },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process contact form',
      },
      { status: 500 }
    )
  }
}
