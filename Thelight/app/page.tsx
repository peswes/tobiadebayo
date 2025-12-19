import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Tobi Adebayo | Artist & Activist",
  description:
    "Discover the multi-disciplinary artwork of Tobi Adebayo. Explore charcoal, acrylics, digital art, and impactful social initiatives through Art for Everyone.",
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Tobi Adebayo</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Artist. Activist. Innovator. Creating thought-provoking works that inspire unity, hope, and faith through art and social impact.
          </p>
        </div>
      </section>

      {/* Featured Content Blocks */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* About Block */}
            <Link href="/about" className="group">
              <div className="overflow-hidden rounded-lg" data-aos="fade">
                <Image
                  src="/images/tobi.jpg"
                  alt="About"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold mt-2">About</h3>
              </div>
            </Link>

            {/* Artworks Block */}
            <Link href="/projects" className="group">
              <div className="overflow-hidden rounded-lg" data-aos="fade">
                <Image
                  src="/images/dreamgirl.jpg"
                  alt="Artworks"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold mt-2">Artworks</h3>
              </div>
            </Link>

            {/* AFEProject Block */}
            <Link href="/afeproject" className="group">
              <div className="overflow-hidden rounded-lg" data-aos="fade">
                <Image
                  src="/images/AFEProjects.jpg"
                  alt="AFEProject"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold mt-2">AFEProject</h3>
              </div>
            </Link>

            {/* NFTs Block */}
            <Link href="/nfts" className="group">
              <div className="overflow-hidden rounded-lg" data-aos="fade">
                <Image
                  src="/images/nfts.jpg"
                  alt="NFTs"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold mt-2">NFTs</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white" data-aos="fade">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">GET IN TOUCH</h2>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            I'm here to listen. Share your thoughts, make enquiries, ask questions, or just say Hi — I'm looking forward to hearing from you!
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-black font-semibold uppercase rounded-full hover:bg-gray-200 transition-colors duration-300">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  )
}

