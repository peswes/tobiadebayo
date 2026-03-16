import { Metadata } from "next"
import Image from "next/image"
import ProjectGallery from "@/components/ProjectGallery"

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
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Breadcrumb */}
      <section className="py-8 md:py-12 px-4 md:px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">Artworks</h1>
          <nav className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/projects" className="text-black dark:text-white font-medium">Artworks</a>
          </nav>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-black dark:text-white">Gallery</h2>
          <ProjectGallery images={artworks} title="" />
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-black dark:text-white">Video Showcase</h2>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
            <video controls className="w-full h-full object-cover">
              <source src="/images/smile.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-4 font-medium">Smile Animation</p>
        </div>
      </section>
    </div>
  )
}
