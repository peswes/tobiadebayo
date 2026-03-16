import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Art for Everyone (AFE) | Tobi Adebayo",
  description:
    "Learn about the Art for Everyone initiative - community outreach, orphanage programs, and social impact through art.",
}

export default function AFEProject() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Breadcrumb */}
      <section className="py-8 md:py-12 px-4 md:px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">AFEProject</h1>
          <nav className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/afeproject" className="text-black dark:text-white font-medium">AFEProject</a>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-black dark:text-white">Art for Everyone (AFE)</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            Art for Everyone (AFE) is Tobi Adebayo's community-driven initiative dedicated to using art as a catalyst for social impact. 
            Through AFE, we engage vulnerable communities, orphanages, and underserved populations, bringing hope and transformation through creative expression.
          </p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-black dark:text-white">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { src: "/images/AFEProjects.jpg", alt: "AFE Project 1" },
              { src: "/images/afepy2.jpg", alt: "AFE Project 2" },
              { src: "/images/afepy3.jpg", alt: "AFE Project 3" }
            ].map((img, idx) => (
              <div key={idx} className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-black dark:text-white">Our Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Community Outreach",
                desc: "We organize art workshops and creative sessions for local communities, fostering artistic expression and cultural exchange."
              },
              {
                title: "Orphanage Programs",
                desc: "Specialized art initiatives for vulnerable children, providing safe spaces for emotional expression and healing through creativity."
              },
              {
                title: "Social Impact",
                desc: "Using art to address social issues, raise awareness, and inspire collective action toward positive change."
              },
              {
                title: "Youth Empowerment",
                desc: "Mentoring young artists and creatives, helping them develop their skills and confidence through art."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 md:p-8 bg-gray-50 dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-gray-800">
                <h4 className="font-bold text-lg md:text-xl mb-3 text-black dark:text-white">{item.title}</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Get Involved</h3>
          <p className="text-base md:text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Interested in supporting or collaborating with AFE? We welcome partnerships and participation from like-minded individuals and organizations.
          </p>
          <Link href="/contact" className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-white text-black font-semibold uppercase text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
