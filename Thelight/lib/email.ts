import { Resend } from "resend"

type EmailParams = {
  to: string
  subject: string
  html: string
}

const key = process.env.RESEND_API_KEY
let resend: Resend | null = null
if (key) resend = new Resend(key)

export async function sendEmail({ to, subject, html }: EmailParams) {
  if (!resend) {
    // In non-production or if API key not set, just log
    console.warn("Resend API key not configured — skipping sendEmail")
    return Promise.resolve(null)
  }

  return resend.emails.send({
    from: "noreply@tobiadebayo.com",
    to,
    subject,
    html,
  })
}
