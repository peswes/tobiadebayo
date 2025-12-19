import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Tobi Adebayo | Artist & Activist",
  description:
    "Learn about Tobi Adebayo's artistic journey, philosophy, and mission to create thought-provoking works that inspire unity and social impact.",
}

export default function About() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Tobi Adebayo</h1>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">The Artist</h2>
            <p>
              Tobi Adebayo is a multi-disciplinary artist and activist renowned for thought-provoking works that inspire unity, hope, and faith. 
              His artistic practice spans multiple mediums including charcoal, graphites, acrylics, digital art, and stamp art.
            </p>
          </section>

          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">Artistic Journey</h2>
            <p>
              Born in 2000 and based in Nigeria, Tobi's artistic journey began at a tender age and has evolved into a multifaceted creative practice. 
              His work explores the intersection of personal experience and collective consciousness, using art as a medium for social impact.
            </p>
          </section>

          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">Philosophy</h2>
            <p>
              <em>"You cannot bring people into an experience of what you haven't experienced."</em>
            </p>
            <p className="mt-4">
              This guiding principle shapes Tobi's work—creating authentic, emotionally resonant pieces that challenge perceptions and inspire dialogue 
              about unity, hope, and social transformation.
            </p>
          </section>

          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Featured in various publications and media outlets</li>
              <li>Earned grants and completed 200+ commissions</li>
              <li>Recognized by notable figures and collaborators</li>
              <li>Active in community art initiatives and orphanage programs</li>
              <li>Transitioned to professional art industry in 2018</li>
            </ul>
          </section>

          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">Mission</h2>
            <p>
              Through Art for Everyone (AFE), Tobi leverages his artistic talent to create social impact, engaging vulnerable communities, 
              orphanages, and underserved populations through art-based initiatives that foster hope and transformation.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
