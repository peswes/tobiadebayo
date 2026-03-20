import { Metadata } from "next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"

export const metadata: Metadata = {
  title: "Commissions | Tobi Adebayo",
  description: "Commission custom artwork from Tobi Adebayo Studios.",
}

const processSteps = [
  "Share your idea and references.",
  "Receive timeline and pricing.",
  "Approve project details and begin.",
  "Review progress updates.",
  "Receive final artwork delivery.",
]

export default function CommissionPage() {
  return (
    <main>
      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">Commission</h1>
          <Breadcrumb currentPage="Commission" />
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <p className="about-body" style={{ textAlign: "center" }}>
            Let&apos;s create together. Tobi Adebayo Studios offers commissioned projects for individuals, brands, and businesses.
          </p>

          <div className="gallery-grid">
            <article className="gallery-item">
              <div style={{ position: "relative", height: "500px" }}>
                <Image src="/images/ajudua.jpg" alt="Drawing catalogue style" fill className="gallery-image" sizes="(max-width: 991px) 100vw, 50vw" />
                <div className="gallery-overlay">
                  <h4>Drawing Catalogue</h4>
                  <p>Hyper-realistic portraits</p>
                </div>
              </div>
            </article>
            <article className="gallery-item">
              <div style={{ position: "relative", height: "500px" }}>
                <Image src="/images/dreamgirl.jpg" alt="Painting catalogue style" fill className="gallery-image" sizes="(max-width: 991px) 100vw, 50vw" />
                <div className="gallery-overlay">
                  <h4>Painting Catalogue</h4>
                  <p>Custom painted works</p>
                </div>
              </div>
            </article>
          </div>

          <h2>Process</h2>
          <ol className="section-gap-30" style={{ listStyle: "none", padding: 0 }}>
            {processSteps.map((step, index) => (
              <li key={step} className="content-card">
                <p className="about-body" style={{ textAlign: "center" }}>
                  <strong style={{ color: "#232323" }}>Step {index + 1}:</strong> {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
