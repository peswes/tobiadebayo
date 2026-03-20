import { Metadata } from "next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"

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
      <section className="section-shell pb-[70px]">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">Publications</h1>
          <Breadcrumb currentPage="Publications" />
        </div>
      </section>

      <section className="section-shell pb-[70px]">
        <div className="page-shell section-gap-30">
          <p className="about-body" style={{ textAlign: "center" }}>
            Selected press and publications.
          </p>

          <div className="grid grid-cols-1 gap-[24px] min-[640px]:grid-cols-3 md:gap-[30px]">
            {publications.map((item) => (
              <article key={item.title} className="content-card section-gap-30">
                <div className="gallery-item">
                  <div className="relative h-[320px] w-full overflow-hidden rounded-[20px] md:h-[360px]">
                    <Image src={item.image} alt={item.title} fill className="gallery-image rounded-[20px]" sizes="(max-width: 639px) 100vw, 33vw" />
                    <div className="gallery-overlay rounded-b-[20px]">
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
