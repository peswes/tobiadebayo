import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Artworks | Tobi Adebayo",
  description:
    "Explore Tobi Adebayo's gallery of artwork including charcoal, graphite, acrylic, and digital pieces.",
}

const artworks = [
  { title: "Happiness Within", src: "/images/happiness.jpg", medium: "Graphite & Charcoal, 2020" },
  { title: "Bobo Ajudua", src: "/images/ajudua.jpg", medium: "Acrylic" },
  { title: "Discrepancy", src: "/images/discrepancy.jpg", medium: "Mixed Media" },
  { title: "Dream Girl", src: "/images/dreamgirl.jpg", medium: "Digital" },
  { title: "Lookman Portrait", src: "/images/lookman.jpg", medium: "Charcoal" },
  { title: "Messi", src: "/images/messi.jpg", medium: "Graphite" },
  { title: "Peter", src: "/images/peter.jpg", medium: "Acrylic" },
  { title: "BFWO", src: "/images/bfwo.jpg", medium: "Mixed Media" },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-20 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-4xl font-bold mb-4 text-black">ArtWorks</h1>
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-black">Home</a>
            <span className="mx-2">/</span>
            <span>Artworks</span>
          </nav>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pt-20 pb-0 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
            {artworks.map((art, i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <div className="relative w-full bg-black" style={{ height: "500px" }}>
                  <Image
                    src={art.src}
                    alt={art.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-3">
                    <h4 className="text-white font-bold text-base">{art.title}</h4>
                    <h6 className="text-white text-sm font-normal">{art.medium}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-black">Video Showcase</h2>
          <div className="rounded-lg overflow-hidden bg-black">
            <video width={800} height={600} controls className="w-full">
              <source src="/images/smile.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  )
}
