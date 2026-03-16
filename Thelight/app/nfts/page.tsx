import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "NFTs | Tobi Adebayo",
  description: "Explore exclusive NFT drops by Tobi Adebayo.",
}

const nftItems = [
  { src: "/images/tobinft.jpg", title: "Happiness Within", price: "1.0 ETH", url: "https://foundation.app/mint/eth/0x7D9F82C6dad07eaFdC6fd329785Ec325Eb8793a7/2" },
  { src: "/images/nfts.jpg", title: "Digital Collection", price: "Coming Soon", url: "#" },
  { src: "/images/tobitak.png", title: "Social Series", price: "Coming Soon", url: "#" },
]

export default function NFTsPage() {
  return (
    <main className="bg-white font-sans text-[#232323]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="mb-6 text-[48px] font-bold leading-tight">NFTs</h1>
        <p className="mb-10 max-w-4xl text-[20px] leading-[1.5] text-[#666666]">
          Exclusive NFT drops by Tobi Adebayo. Happiness Within reflects the relief we all need to find amidst
          life&apos;s challenges.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {nftItems.map((item) => (
            <article key={item.title} className="border border-[#232323] p-4">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={500}
                  className="h-[500px] w-full object-cover"
                />
              </a>
              <h2 className="mt-4 text-2xl font-bold">{item.title}</h2>
              <p className="text-[20px] leading-[1.5] text-[#666666]">Price: {item.price}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
