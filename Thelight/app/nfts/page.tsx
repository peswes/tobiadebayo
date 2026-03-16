import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "NFTs | Tobi Adebayo",
  description: "Explore Tobi Adebayo's digital art and NFT collection on the blockchain.",
}

export default function NFTs() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Breadcrumb */}
      <section className="py-8 md:py-12 px-4 md:px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">NFTs</h1>
          <nav className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/nfts" className="text-black dark:text-white font-medium">NFTs</a>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-black dark:text-white">Digital Art & NFTs</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            Tobi's NFT collection represents an evolution of digital art practice, bringing unique digital creations to the blockchain. 
            Each piece is a testament to artistic innovation and the possibilities of web3 for artists.
          </p>
        </div>
      </section>

      {/* NFT Gallery */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-black dark:text-white">NFT Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="rounded-lg overflow-hidden bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/nfts.jpg"
                  alt="NFT Collection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 md:p-6">
                <h4 className="font-semibold text-lg md:text-xl text-black dark:text-white mb-2">Digital Collection</h4>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Curated digital art pieces on blockchain</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg overflow-hidden bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/tobinft.jpg"
                  alt="Artist NFT"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 md:p-6">
                <h4 className="font-semibold text-lg md:text-xl text-black dark:text-white mb-2">Artist Edition</h4>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Limited edition artist-signed NFTs</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg overflow-hidden bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/tobitak.png"
                  alt="TikTok NFT"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 md:p-6">
                <h4 className="font-semibold text-lg md:text-xl text-black dark:text-white mb-2">Social Series</h4>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Collectibles from viral social media moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About NFTs */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-black dark:text-white">About NFTs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-black dark:text-white">Blockchain & Ownership</h4>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Each NFT is cryptographically verified on the blockchain, ensuring authenticity and permanent ownership records.
              </p>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-black dark:text-white">Digital Innovation</h4>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                NFTs represent the intersection of traditional art practice and emerging digital technologies, creating new possibilities for artists and collectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Interested in Collecting?</h3>
          <p className="text-base md:text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Learn more about Tobi's NFT offerings and upcoming releases. Connect with the artist for collector inquiries.
          </p>
          <Link href="/contact" className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-white text-black font-semibold uppercase text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
