import { NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, email, phone, message } = body

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `

    await sendEmail({
      to: process.env.CONTACT_EMAIL || "tobiadebayoart@gmail.com",
      subject: `Contact form — ${fullName}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("contact error", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
