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
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-black dark:text-white">
            Tobi Adebayo
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Artist. Activist. Innovator. Creating thought-provoking works that inspire unity, hope, and faith through art and social impact.
          </p>
        </div>
      </section>

      {/* Featured Content Blocks - 2x2 Grid */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* About Block */}
            <Link href="/about" className="group block">
              <div className="overflow-hidden rounded-lg" data-aos="fade">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/tobi.jpg"
                    alt="About Tobi Adebayo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="p-4 md:p-6 text-center bg-gray-50 dark:bg-zinc-900">
                <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white">About</h3>
              </div>
            </Link>

            {/* Artworks Block */}
            <Link href="/projects" className="group block">
              <div className="overflow-hidden rounded-lg" data-aos="fade">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/dreamgirl.jpg"
                    alt="Artworks Gallery"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="p-4 md:p-6 text-center bg-gray-50 dark:bg-zinc-900">
                <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white">Artworks</h3>
              </div>
            </Link>

            {/* AFEProject Block */}
            <Link href="/afeproject" className="group block">
              <div className="overflow-hidden rounded-lg" data-aos="fade">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/AFEProjects.jpg"
                    alt="AFE Project - Art For Everyone"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="p-4 md:p-6 text-center bg-gray-50 dark:bg-zinc-900">
                <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white">AFEProject</h3>
              </div>
            </Link>

            {/* NFTs Block */}
            <Link href="/nfts" className="group block">
              <div className="overflow-hidden rounded-lg" data-aos="fade">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/nfts.jpg"
                    alt="NFTs Collection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="p-4 md:p-6 text-center bg-gray-50 dark:bg-zinc-900">
                <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white">NFTs</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-6 bg-black text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">GET IN TOUCH</h2>
          <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-100">
            I'm here to listen. Share your thoughts, make enquiries, ask questions, or just say Hi — I'm looking forward to hearing from you!
          </p>
          <Link href="/contact" className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-white text-black font-semibold uppercase text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors duration-300">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  )
}
