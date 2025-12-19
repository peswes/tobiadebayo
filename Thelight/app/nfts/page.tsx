import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "NFTs | Tobi Adebayo",
  description: "Explore Tobi Adebayo's digital art and NFT collection on the blockchain.",
}

export default function NFTs() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Digital Art & NFTs</h1>

        <div className="space-y-12">
          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tobi&apos;s NFT collection represents an evolution of digital art practice, bringing unique digital creations to the blockchain. 
              Each piece is a testament to artistic innovation and the possibilities of web3 for artists.
            </p>
          </section>

          {/* NFT Gallery */}
          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-6">NFT Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/nfts.jpg" alt="NFT Collection" width={400} height={400} className="w-full h-64 object-cover" />
                <div className="p-4 bg-gray-50 dark:bg-zinc-800">
                  <h3 className="font-semibold text-lg">Digital Collection</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Curated digital art pieces on blockchain</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/tobinft.jpg" alt="Artist NFT" width={400} height={400} className="w-full h-64 object-cover" />
                <div className="p-4 bg-gray-50 dark:bg-zinc-800">
                  <h3 className="font-semibold text-lg">Artist Edition</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Limited edition artist-signed NFTs</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/tobitak.png" alt="TikTok NFT" width={400} height={400} className="w-full h-64 object-cover" />
                <div className="p-4 bg-gray-50 dark:bg-zinc-800">
                  <h3 className="font-semibold text-lg">Social Series</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Collectibles from viral social media moments</p>
                </div>
              </div>
            </div>
          </section>

          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">About NFTs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Blockchain & Ownership</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Each NFT is cryptographically verified on the blockchain, ensuring authenticity and permanent ownership records.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Digital Innovation</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  NFTs represent the intersection of traditional art practice and emerging digital technologies, creating new possibilities for artists and collectors.
                </p>
              </div>
            </div>
          </section>

          <section data-aos="fade" className="bg-gray-100 dark:bg-zinc-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Interested in Collecting?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Learn more about Tobi&apos;s NFT offerings and upcoming releases. Connect with the artist for collector inquiries.
            </p>
            <a href="/contact" className="btn-prim inline-block">
              Get in Touch
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
