import { Metadata } from "next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"

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
          <Breadcrumb currentPage="About" />
        </div>
      </section>

      <section className="section-shell">
          <div className="page-shell about-layout">
            <div className="about-sticky-column">
              <div className="about-sticky-media-card">
                <Image
                  src="/images/tobi.jpg"
                  alt="Tobi Adebayo portrait"
                  width={800}
                  height={1100}
                  className="about-sticky-image"
                  priority
                />
              </div>
            </div>

            <div className="section-gap-30">
              <h2 className="about-heading">About me</h2>
              <p className="about-body">
                Tobi Adebayo (born Adebayo Oluwatobi James, 2000) is a multi-disciplinary artist and activist
                renowned for his intriguing and thought-provoking works that inspire Unity, Hope and Faith (UHF).
                Born and raised in Ibadan, Nigeria, before moving to another city at age 9, Tobi&apos;s creative
                journey began at a tender age, nurtured by his family&apos;s rich artistic heritage, where everyone has
                their diverse creative abilities.
              </p>
              <p className="about-body">
                Tobi&apos;s exceptional artistic talents were evident from the age of four, when he demonstrated a
                remarkable ability to draw and paint from elementary school. This innate gift was further honed during
                his college years, where he studied Industrial Design (Graphics) at the Federal University of
                Technology, Akure.
              </p>
              <p className="about-body">
                Although his artistic pursuits were temporarily halted due to bullying experiences barely after gaining
                admission into high school, which had him consciously stop making arts for 7 years until college days,
                Tobi&apos;s passion for art remained unshaken regardless.
              </p>
              <p className="about-body">
                Today, Tobi&apos;s artistic expression spans multiple mediums, including charcoal, graphites, acrylics,
                digital art, and a unique stamp art technique he&apos;s currently exploring. This innovative approach
                involves stamping repeatedly across the canvas, giving him an opportunity to carefully express unity in
                diversity while pushing the boundaries of making arts with pencils and paint brushes.
              </p>
              <p className="about-body">
                Through his art, Tobi seeks to reform people, systems, and structures by sparking meaningful
                conversations and bringing people into tangible experiences. His creative philosophy is rooted in the
                belief that &quot;you cannot bring people into an experience of what you haven&apos;t experienced,&quot;
                and this drives a dedicated life. Tobi&apos;s ultimate goal is to reignite people&apos;s hope in unity
                with one another despite differences, while staying within the confines of faith.
              </p>
              <p className="about-body">
                Beyond his personal artistic practice, Tobi is dedicated to using art as a tool for social impact and
                innovation. Through his activism, Art for Everyone, he empowers children in orphanages, local streets,
                and vulnerable children/adults through artistic engagements. This initiative provides a platform for
                creative expression, promoting emotional intelligence, self-awareness, and confidence.
              </p>
              <p className="about-body">
                Drawing inspiration from the chief creative being, God, the creator of the universe and not only his
                creations, Tobi transitioned into the professional art industry in 2018. Since then, his artwork has
                been featured in various publications, he has earned grants, and has worked with over 200 clients
                locally and abroad for commissions and collaborations. Tobi has also received recognition from notable
                figures such as Mercy Chinwo, Ademola Lookman, Pastor Enoch Adeboye, Pastor Kingsley Okonkwo, Yinka
                Okeleye, and Bobo Ajudua, and has directly worked with some of them.
              </p>
              <p className="about-body">
                As he continues to push the boundaries of art, Tobi remains committed to using his creative voice to
                inspire positive change and promote a message of Unity, Hope and Faith (UHF).
              </p>
            </div>
          </div>
      </section>
    </main>
  )
}
