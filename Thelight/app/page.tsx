import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Tobi Adebayo | Artist & Activist",
  description:
    "Discover the multi-disciplinary artwork of Tobi Adebayo. Explore charcoal, acrylics, digital art, and impactful social initiatives through Art for Everyone.",
}

export default function Home() {
  const cards = [
    { href: "/about", src: "/images/tobi.jpg", alt: "About", title: "About" },
    { href: "/projects", src: "/images/dreamgirl.jpg", alt: "Artworks", title: "Artworks" },
    { href: "/afeproject", src: "/images/AFEProjects.jpg", alt: "AFEProject", title: "AFEProject" },
    { href: "/nfts", src: "/images/nfts.jpg", alt: "NFTs", title: "NFTs" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-0 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">Tobi Adebayo</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Artist. Activist. Innovator. Creating thought-provoking works that inspire unity, hope, and faith through art and social impact.
        </p>
      </section>

      {/* Featured Content Blocks - 2x2 Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {cards.map((card) => (
              <Link key={card.href} href={card.href} className="group block">
                <div className="rounded-lg overflow-hidden h-auto" style={{ aspectRatio: "500/450" }}>
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={500}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-semibold mt-2 text-black">{card.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">GET IN TOUCH</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            I'm here to listen. Share your thoughts, make enquiries, ask questions, or just say Hi — I'm looking forward to hearing from you!
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-black text-white font-semibold uppercase border-2 border-white rounded-full hover:bg-white hover:text-black transition-all">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  )
}
