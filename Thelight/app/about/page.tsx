import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Tobi Adebayo | Artist & Activist",
  description:
    "Learn about Tobi Adebayo's artistic journey, philosophy, and mission to create thought-provoking works that inspire unity and social impact.",
}

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Breadcrumb */}
      <section className="py-8 md:py-12 px-4 md:px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">About</h1>
          <nav className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/about" className="text-black dark:text-white font-medium">About</a>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="mb-12 md:mb-16" data-aos="fade">
            <div className="relative w-full aspect-video md:aspect-auto md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/tobi.jpg"
                alt="Tobi Adebayo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
              />
            </div>
          </div>

          {/* About Content */}
          <div className="max-w-4xl space-y-8 md:space-y-12 text-gray-700 dark:text-gray-300">
            <section data-aos="fade">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-black dark:text-white">The Artist</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Tobi Adebayo is a multi-disciplinary artist and activist renowned for thought-provoking works that inspire unity, hope, and faith. 
                His artistic practice spans multiple mediums including charcoal, graphites, acrylics, digital art, and stamp art.
              </p>
            </section>

            <section data-aos="fade">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-black dark:text-white">Artistic Journey</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Born in 2000 and based in Nigeria, Tobi's artistic journey began at a tender age and has evolved into a multifaceted creative practice. 
                His work explores the intersection of personal experience and collective consciousness, using art as a medium for social impact.
              </p>
            </section>

            <section data-aos="fade">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-black dark:text-white">Philosophy</h2>
              <blockquote className="text-base sm:text-lg italic border-l-4 border-red-600 pl-4 md:pl-6 py-2 text-gray-600 dark:text-gray-400">
                "You cannot bring people into an experience of what you haven't experienced."
              </blockquote>
              <p className="text-base sm:text-lg leading-relaxed mt-6">
                This guiding principle shapes Tobi's work—creating authentic, emotionally resonant pieces that challenge perceptions and inspire dialogue 
                about unity, hope, and social transformation.
              </p>
            </section>

            <section data-aos="fade">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-black dark:text-white">Key Achievements</h2>
              <ul className="space-y-3 text-base sm:text-lg">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Featured in various publications and media outlets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Earned grants and completed 200+ commissions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Recognized by notable figures and collaborators</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Active in community art initiatives and orphanage programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Transitioned to professional art industry in 2018</span>
                </li>
              </ul>
            </section>

            <section data-aos="fade">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-black dark:text-white">Mission</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Through Art for Everyone (AFE), Tobi leverages his artistic talent to create social impact, engaging vulnerable communities, 
                orphanages, and underserved populations through art-based initiatives that foster hope and transformation.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
