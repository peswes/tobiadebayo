import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/forms/ContactForm"

export const metadata: Metadata = {
  title: "Contact | Tobi Adebayo",
  description: "Get in touch with Tobi Adebayo for commissions, collaborations, and inquiries.",
}

export default function ContactPage() {
  return (
    <main>
      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">Contact</h1>
          <nav className="breadcrumb-nav">
            <Link href="/">Home</Link> / <span>Contact me</span>
          </nav>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <div className="contact-layout">
            <div className="contact-image-wrap">
              <Image src="/images/tobi.jpg" alt="Tobi Adebayo" width={900} height={1100} className="h-auto w-full" priority />
            </div>

            <div>
              <h2>Contact Me</h2>
              <p className="about-body" style={{ marginTop: "10px", marginBottom: "10px", textAlign: "center" }}>
                I&apos;m here to listen. Share your thoughts, make enquiries, ask questions, or just say Hi.
              </p>

              <ContactForm />
            </div>
          </div>

          <div className="info-card-grid">
            <article className="info-card">
              <h3>Email</h3>
              <p className="about-body">
                <a href="mailto:tobiadebayoart@gmail.com">tobiadebayoart@gmail.com</a>
              </p>
            </article>
            <article className="info-card">
              <h3>Social Media</h3>
              <p className="about-body">
                <a href="https://www.instagram.com/tobi_adebayo_" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>{" "}
                ·{" "}
                <a href="https://x.com/tobi_adebayo_" target="_blank" rel="noopener noreferrer">
                  X
                </a>{" "}
                ·{" "}
                <a href="https://www.facebook.com/share/19VzXrAtHp/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>{" "}
                ·{" "}
                <a href="https://www.linkedin.com/in/tobi-adebayo-13b97b1aa" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>{" "}
                ·{" "}
                <a href="https://www.tiktok.com/@tobiadebayoart" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </p>
            </article>
            <article className="info-card">
              <h3>Location</h3>
              <p className="about-body">Nigeria</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
