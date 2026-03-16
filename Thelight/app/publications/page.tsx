import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Publications | Tobi Adebayo",
  description: "Selected press and publication features for Tobi Adebayo.",
}

const publications = [
  {
    title: "Ademola Lookman",
    year: "2024",
    summary: "SoccerNet NG - Atalanta star Lookman stunned by young Nigerian artist’s unique stamp artwork.",
    image: "/images/lookman.jpg",
    url: "https://soccernet.ng/2024/12/this-is-amazing-atalanta-star-lookman-stunned-by-young-nigerian-artists-unique-stamp-artwork.html",
  },
  {
    title: "Tobi Adebayo",
    year: "2021",
    summary: "Talku Talku Magazine - Come Face to Face with Tobi Adebayo, a truth seeker and revolutionary.",
    image: "/images/tobitak.png",
    url: "https://magazine.talkutalku.com/come-face-to-face-with-tobi-adebayo-a-truth-seeker/",
  },
]

export default function PublicationsPage() {
  return (
    <main>
      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">Publications</h1>
          <nav className="breadcrumb-nav">
            <Link href="/">Home</Link> / <span>Publications</span>
          </nav>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <p className="about-body" style={{ textAlign: "center" }}>
            Selected press and publications.
          </p>

          <div className="gallery-grid">
            {publications.map((item) => (
              <article key={item.title} className="content-card section-gap-30">
                <div className="gallery-item">
                  <div style={{ position: "relative", height: "500px" }}>
                    <Image src={item.image} alt={item.title} fill className="gallery-image" sizes="(max-width: 991px) 100vw, 50vw" />
                    <div className="gallery-overlay">
                      <h4>{item.title}</h4>
                      <p>{item.year}</p>
                    </div>
                  </div>
                </div>
                <p className="about-body" style={{ textAlign: "center" }}>
                  {item.summary}
                </p>
                <div style={{ textAlign: "center" }}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="primary-button">
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
