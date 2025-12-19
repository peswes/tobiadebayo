import { Metadata } from "next"
import Image from "next/image"
import ProjectsCarousel from "@/components/ProjectsCarousel"

export const metadata: Metadata = {
  title: "Artworks | Tobi Adebayo",
  description:
    "Explore Tobi Adebayo's gallery of artwork including charcoal, graphite, acrylic, and digital pieces. Featuring paintings and commissioned works.",
}

const artworks = [
  { title: "Happiness Within", medium: "Graphite & Charcoal", year: 2020, src: "/images/happiness.jpg" },
  { title: "Bobo Ajudua", medium: "Acrylic", src: "/images/ajudua.jpg" },
  { title: "Discrepancy", medium: "Mixed Media", src: "/images/discrepancy.jpg" },
  { title: "Dream Girl", medium: "Digital", src: "/images/dreamgirl.jpg" },
  { title: "Lookman Portrait", medium: "Charcoal", src: "/images/lookman.jpg" },
  { title: "Messi", medium: "Graphite", src: "/images/messi.jpg" },
  { title: "Peter", medium: "Acrylic", src: "/images/peter.jpg" },
  { title: "Black Future Without Oppression (BFWO)", medium: "Mixed Media", src: "/images/bfwo.jpg" },
]

export default function Projects() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Artworks Gallery</h1>

        {/* Carousel Section */}
        <section className="mb-16" data-aos="fade">
          <h2 className="text-2xl font-semibold mb-6">Featured Works</h2>
          <ProjectsCarousel images={artworks.map((art) => ({ src: art.src, alt: art.title }))} />
        </section>

        {/* Grid Gallery */}
        <section data-aos="fade">
          <h2 className="text-2xl font-semibold mb-6">Complete Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artworks.map((art, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image src={art.src} alt={art.title} width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4 bg-gray-50 dark:bg-zinc-800">
                  <h3 className="font-semibold text-lg">{art.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{art.medium}</p>
                  {art.year && <p className="text-xs text-gray-500 dark:text-gray-400">{art.year}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Showcase */}
        <section className="mt-16" data-aos="fade">
          <h2 className="text-2xl font-semibold mb-6">Video Showcase</h2>
          <div className="rounded-lg overflow-hidden">
            <video width={800} height={600} controls className="w-full">
              <source src="/videos/smile.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-2">Smile Animation</p>
        </section>
      </div>
    </div>
  )
}
