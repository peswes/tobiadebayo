import { Metadata } from "next"
import ArtworksMediaGallery, { ArtworksMediaItem } from "@/components/ArtworksMediaGallery"
import Breadcrumb from "@/components/Breadcrumb"

export const metadata: Metadata = {
  title: "Artworks | Tobi Adebayo",
  description:
    "Explore Tobi Adebayo's gallery of artwork including charcoal, graphite, acrylic, and digital pieces.",
}

const artworksMedia: ArtworksMediaItem[] = [
  { title: "Happiness Within", src: "/images/happiness.jpg", medium: "Graphite & Charcoal, 2020", type: "image" },
  { title: "Ajudua's", src: "/images/ajudua.jpg", medium: "Graphite & Charcoal, 2021", type: "image" },
  { title: "Discrepancy", src: "/images/discrepancy.jpg", medium: "Graphite & Charcoal, 2021", type: "image" },
  { title: "Peter Obi", src: "/images/peter.jpg", medium: "Graphite & Charcoal, 2022", type: "image" },
  { title: "The Goats", src: "/images/messi.jpg", medium: "Graphite & Charcoal, 2020", type: "image" },
  { title: "A Girl Can Dream", src: "/images/dreamgirl.jpg", medium: "Painting, 2025", type: "image" },
  { title: "BFWO - The Legacy", src: "/images/bfwo.jpg", medium: "Digital Art, 2025", type: "image" },
  { title: "Ademola Lookman", src: "/images/lookman.jpg", medium: "Stamp Art, 2024", type: "image" },
  { title: "AFE Projects", src: "/images/AFEProjects.jpg", medium: "Social Impact Series", type: "image" },
  { title: "SMILE", medium: "Stamp Art, 2025", src: "/images/smile.mp4", type: "video" },
]

export default function Projects() {
  return (
    <main>
      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">ArtWorks</h1>
          <Breadcrumb currentPage="Artworks" />
        </div>
      </section>

      <section className="section-shell pb-[70px]">
        <div className="page-shell">
          <ArtworksMediaGallery items={artworksMedia} />
        </div>
      </section>
    </main>
  )
}
