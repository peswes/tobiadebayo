import { Metadata } from "next"
import Link from "next/link"
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
    <main>
      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">NFTs</h1>
          <nav className="breadcrumb-nav">
            <Link href="/">Home</Link> / <span>NFTs</span>
          </nav>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <p className="about-body" style={{ textAlign: "center" }}>
            Exclusive NFT drops by Tobi Adebayo. Happiness Within reflects the relief we all need to find amidst
            life&apos;s challenges.
          </p>

          <div className="gallery-grid">
            {nftItems.map((item) => (
              <article key={item.title} className="content-card section-gap-30">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="gallery-item">
                    <div style={{ position: "relative", height: "500px" }}>
                      <Image src={item.src} alt={item.title} fill className="gallery-image" sizes="(max-width: 991px) 100vw, 50vw" />
                      <div className="gallery-overlay">
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
