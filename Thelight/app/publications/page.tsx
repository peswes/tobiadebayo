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

          <div className="flex flex-wrap justify-center md:justify-start gap-[24px] md:gap-[30px]">
            {publications.map((item) => (
              <article key={item.title} className="content-card section-gap-30 w-full max-w-[460px] bg-dots rounded-[24px] p-[20px] shadow-lg flex flex-col justify-between">
                <div className="bg-white rounded-[20px] overflow-hidden flex flex-col h-full shadow-sm">
                  <div className="gallery-item w-full">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f5f5f5]">
                      <Image src={item.image} alt={item.title} fill className="gallery-image !object-contain p-2" sizes="(max-width: 639px) 100vw, 50vw" />
                      <div className="gallery-overlay">
                        <h4>{item.title}</h4>
                        <p>{item.year}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[20px] mb-[30px] flex-grow px-[20px]">
                    <p className="about-body" style={{ textAlign: "center" }}>
                      {item.summary}
                    </p>
                  </div>
                  <div className="mb-[30px]" style={{ textAlign: "center" }}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-[#ee0101] transition-colors duration-300">
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
