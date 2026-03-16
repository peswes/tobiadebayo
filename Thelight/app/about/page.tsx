import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Tobi Adebayo | Artist & Activist",
  description:
    "Learn about Tobi Adebayo's artistic journey, philosophy, and mission to create thought-provoking works that inspire unity and social impact.",
}

export default function AboutPage() {
  return (
    <main>
      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">About me</h1>
          <nav className="breadcrumb-nav">
            <Link href="/">Home</Link> / <span>About</span>
          </nav>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell about-layout">
          <div>
            <Image src="/images/tobi.jpg" alt="Tobi Adebayo portrait" width={800} height={1100} className="h-auto w-full" priority />
          </div>

          <div className="section-gap-30">
            <h2 className="about-heading">About me</h2>
            <p className="about-body">
              Tobi Adebayo (born Adebayo Oluwatobi James, 2000) is a multi-disciplinary artist and activist
              known for thought-provoking work that inspires unity, hope and faith.
            </p>
            <p className="about-body">
              Born and raised in Ibadan, Nigeria, Tobi&apos;s creative journey started early and grew through years
              of study, practice, and personal experience. Today, his work spans charcoal, graphite, acrylic,
              digital art, and stamp art.
            </p>
            <p className="about-body">
              Through his art and the Art for Everyone initiative, he uses creative expression as a tool for
              connection, confidence, and social impact in communities.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
