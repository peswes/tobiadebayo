import { Metadata } from "next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import SocialIcons, { SocialIconItem } from "@/components/SocialIcons"

export const metadata: Metadata = {
  title: "Art for Everyone (AFE) | Tobi Adebayo",
  description: "Learn about the Art for Everyone initiative and its social impact through art.",
}

const afeSections = [
  {
    text: "The Art for Everyone Project (A.F.E) is a non governmental organization (NGO) on a mission to dismantle socio-economic barriers to artistic expression. Driven by the belief that art is a universal right, not a privilege. A.F.E creates inclusive platforms and opportunities for individuals to explore their creativity, share their voices and experience the transformative power of art, regardless of their background or circumstances.",
    image: { src: "/images/afepy2.jpg", alt: "AFE workshop activity" },
  },
  {
    text: "A.F.E, founded by Tobi Adebayo, a multi-disciplinary artist, entrepreneur and activist, he envisions a world where art transcends inequality, encouraging a community that thrive on collaboration, empathy and shared creativity. Through initiatives such as free community workshops (spanning painting, drawing, sculpture, digital art and more), art supplies for underserved groups and a platform for all, by then amplifying their underrepresented voices, the NGO ensures that art becomes a tool for connection and empowerment.",
    image: { src: "/images/afepy2.jpg", alt: "AFE collaborative session" },
  },
  {
    text: "A.F.E operated as a collective force, partnering with local artists, educational institutions and other NGOs to expand its reach, by hosting special events in schools, communities and marginalized neighborhoods, the organization turns everyday experience into canvases for self-expression. It’s online platforms also democratized visibility, proving that everyone can give expression to their ideas, visions, feels and thoughts, even where resources are scarce, while also showcasing artworks from emerging creators worldwide.",
    image: { src: "/images/afepy3.jpg", alt: "AFE outreach in community" },
  },
]

const afeClosingText =
  "More than an NGO, A.F.E is a movement. It challenges the notion that Art is only a luxury for the elites, instead positioning it as a catalyst for personal growth, social interaction and systemic change. Through every brushstroke, pencil shade, sculpture or digital creation, A.F.E ignites creativity, bridges divides and reminds the world that everyone deserves a place on the canvas."

const afeSocialLinks: SocialIconItem[] = [
  { platform: "instagram", href: "https://www.instagram.com/the_afeproject" },
  { platform: "x", href: "https://x.com/the_afeproject" },
]

export default function AFEProjectPage() {
  return (
    <main>
      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">AFEProject</h1>
          <Breadcrumb currentPage="AFEProject" />
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <div className="afe-container">
            {afeSections.map((section, index) => (
              <div
                key={`${section.image.src}-${index}`}
                className={`afe-section ${index % 2 === 1 ? "afe-section-reverse" : ""}`}
              >
                <div className="afe-text">
                  <p className="about-body">{section.text}</p>
                </div>
                <div className="afe-image-wrap">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    width={1200}
                    height={900}
                    className="afe-image"
                    sizes="(max-width: 991px) 100vw, 40vw"
                  />
                </div>
              </div>
            ))}

            <div className="afe-section-text-only">
              <div className="afe-text">
                <p className="about-body">{afeClosingText}</p>
                <p className="about-body afe-join-text">Join us as we redefine accessibility, one masterpiece at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-[30px]">
        <div className="page-shell">
          <article className="single-contact-card">
            <h2>Social Media</h2>
            <SocialIcons items={afeSocialLinks} containerClassName="justify-center gap-[20px]" />
          </article>
        </div>
      </section>
    </main>
  )
}
