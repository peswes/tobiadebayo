import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Artworks | Tobi Adebayo",
  description:
    "Explore Tobi Adebayo's gallery of artwork including charcoal, graphite, acrylic, and digital pieces.",
}

const artworks = [
  { title: "Happiness Within", src: "/images/happiness.jpg", medium: "Graphite & Charcoal, 2020" },
  { title: "Ajudua's", src: "/images/ajudua.jpg", medium: "Graphite & Charcoal, 2021" },
  { title: "Discrepancy", src: "/images/discrepancy.jpg", medium: "Graphite & Charcoal, 2021" },
  { title: "Peter Obi", src: "/images/peter.jpg", medium: "Graphite & Charcoal, 2022" },
  { title: "The Goats", src: "/images/messi.jpg", medium: "Graphite & Charcoal, 2020" },
  { title: "A Girl Can Dream", src: "/images/dreamgirl.jpg", medium: "Painting, 2025" },
  { title: "BFWO - The Legacy", src: "/images/bfwo.jpg", medium: "Digital Art, 2025" },
  { title: "Ademola Lookman", src: "/images/lookman.jpg", medium: "Stamp Art, 2024" },
  { title: "AFE Projects", src: "/images/AFEProjects.jpg", medium: "Social Impact Series" },
]

export default function Projects() {
  return (
    <main>
      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">ArtWorks</h1>
          <nav className="breadcrumb-nav">
            <Link href="/">Home</Link> / <span>Artworks</span>
          </nav>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell">
          <div className="gallery-grid">
            {artworks.map((art, i) => (
              <div key={i} className="gallery-item">
                <div style={{ position: "relative", height: "500px" }}>
                  <Image
                    src={art.src}
                    alt={art.title}
                    fill
                    className="gallery-image"
                    sizes="(max-width: 991px) 100vw, 50vw"
                  />
                  <div className="gallery-overlay">
                    <h4>{art.title}</h4>
                    <p>{art.medium}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h2>Video Showcase</h2>
          <div className="gallery-item">
            <video width={800} height={500} controls className="gallery-image">
              <source src="/images/smile.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </main>
  )
}
