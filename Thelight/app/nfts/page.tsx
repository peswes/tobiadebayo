import { Metadata } from "next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"

export const metadata: Metadata = {
  title: "NFTs | Tobi Adebayo",
  description: "Explore exclusive NFT drops by Tobi Adebayo.",
}

const nftItems = [
  { src: "/images/tobinft.jpg", title: "Happiness Within", price: "1.0 ETH", url: "https://foundation.app/mint/eth/0x7D9F82C6dad07eaFdC6fd329785Ec325Eb8793a7/2" },
]

export default function NFTsPage() {
  return (
    <main>
      <section className="section-shell pb-[70px]">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">NFTs</h1>
          <Breadcrumb currentPage="NFTs" />
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h2 className="about-heading">Exclusive NFTs drops by Tobi Adebayo</h2>
          <p className="about-body" style={{ textAlign: "center" }}>
            After studying the NFT community over the years, Tobi Adebayo finally joined the space officially in
            January 2025 and minted their first artwork, Happiness Within, on the blockchain via Foundation. Created
            five years ago, this piece reflects the relief we all need to find amidst life&apos;s challenges and the
            circumstances that finds us through this journey. Tobi strongly believes in the future of NFTs and the
            incredible possibilities within the space. Happiness Within is available on Foundation,{" "}
            <a href={nftItems[0].url} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              click here to check it out
            </a>
            !
          </p>

          <div className="grid grid-cols-1 gap-[24px] min-[640px]:grid-cols-3 md:gap-[30px]">
            {nftItems.map((item) => (
              <article key={item.title} className="content-card section-gap-30">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="gallery-item">
                    <div className="relative h-[320px] w-full overflow-hidden rounded-[20px] md:h-[360px]">
                      <Image src={item.src} alt={item.title} fill className="gallery-image rounded-[20px]" sizes="(max-width: 639px) 100vw, 33vw" />
                      <div className="gallery-overlay rounded-b-[20px]">
                        <h4>{item.title}</h4>
                        <p>Price: {item.price}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
