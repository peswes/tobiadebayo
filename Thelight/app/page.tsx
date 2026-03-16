import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Tobi Adebayo | Artist & Activist",
  description:
    "Discover the multi-disciplinary artwork of Tobi Adebayo. Explore charcoal, acrylics, digital art, and impactful social initiatives through Art for Everyone.",
}

export default function Home() {
  const cards = [
    { href: "/about", src: "/images/tobi.jpg", alt: "About", title: "About" },
    { href: "/projects", src: "/images/dreamgirl.jpg", alt: "Artworks", title: "Artworks" },
    { href: "/afeproject", src: "/images/AFEProjects.jpg", alt: "AFEProject", title: "AFEProject" },
    { href: "/nfts", src: "/images/nfts.jpg", alt: "NFTs", title: "NFTs" },
  ]

  return (
    <main>
      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">Tobi Adebayo</h1>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Artist. Activist. Innovator. Creating thought-provoking works that inspire unity, hope, and faith through
            art and social impact.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell">
          <div className="home-grid">
            {cards.map((card) => (
              <Link key={card.href} href={card.href} className="home-card">
                <div className="home-card-media">
                  <Image src={card.src} alt={card.alt} fill className="home-card-image" sizes="(max-width: 575px) 92vw, 500px" />
                </div>
                <h2 className="home-card-title">{card.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="page-shell section-gap-30" style={{ textAlign: "center" }}>
          <h2 className="about-heading">GET IN TOUCH</h2>
          <p style={{ fontSize: "20px" }}>
            I&apos;m here to listen. Share your thoughts, make enquiries, ask questions, or just say Hi — I&apos;m
            looking forward to hearing from you!
          </p>
          <div>
            <Link href="/contact" className="cta-button">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
