import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Art for Everyone (AFE) | Tobi Adebayo",
  description: "Learn about the Art for Everyone initiative and its social impact through art.",
}

const galleryImages = [
  { src: "/images/AFEProjects.jpg", alt: "AFE project activity", title: "AFE Project", subtitle: "Community Creativity" },
  { src: "/images/afepy2.jpg", alt: "AFE workshop session", title: "Workshops", subtitle: "Learning and Expression" },
  { src: "/images/afepy3.jpg", alt: "AFE community outreach", title: "Outreach", subtitle: "Social Impact" },
  { src: "/images/afepy2.jpg", alt: "AFE collaborative project", title: "Collaboration", subtitle: "Inclusive Art Spaces" },
]

export default function AFEProjectPage() {
  return (
    <main>
      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">AFEProject</h1>
          <nav className="breadcrumb-nav">
            <Link href="/">Home</Link> / <span>AFEProject</span>
          </nav>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <p className="about-body">
            The Art for Everyone Project (A.F.E) is an NGO focused on dismantling socio-economic barriers to
            artistic expression. It creates inclusive opportunities for people to explore creativity and share
            their voice.
          </p>
          <p className="about-body">
            Founded by Tobi Adebayo, A.F.E supports underserved communities through workshops, creative sessions,
            and practical tools for expression.
          </p>
          <p className="about-body">
            More than an NGO, A.F.E is a movement that positions art as a tool for growth, connection, and social
            change.
          </p>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.src + image.alt} className="gallery-item">
                <div style={{ position: "relative", height: "500px" }}>
                  <Image src={image.src} alt={image.alt} fill className="gallery-image" sizes="(max-width: 991px) 100vw, 50vw" />
                  <div className="gallery-overlay">
                    <h4>{image.title}</h4>
                    <p>{image.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
