import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Art for Everyone (AFE) | Tobi Adebayo",
  description:
    "Learn about the Art for Everyone initiative - community outreach, orphanage programs, and social impact through art.",
}

export default function AFEProject() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Art for Everyone (AFE)</h1>

        <div className="space-y-12">
          {/* Overview */}
          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Art for Everyone (AFE) is Tobi Adebayo's community-driven initiative dedicated to using art as a catalyst for social impact. 
              Through AFE, we engage vulnerable communities, orphanages, and underserved populations, bringing hope and transformation through creative expression.
            </p>
          </section>

          {/* Photo Gallery */}
          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Image src="/images/AFEProjects.jpg" alt="AFE Project 1" width={400} height={300} className="w-full h-64 object-cover rounded-lg" />
              <Image src="/images/afepy2.jpg" alt="AFE Project 2" width={400} height={300} className="w-full h-64 object-cover rounded-lg" />
              <Image src="/images/afepy3.jpg" alt="AFE Project 3" width={400} height={300} className="w-full h-64 object-cover rounded-lg" />
            </div>
          </section>

          {/* Impact Areas */}
          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">Our Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Community Outreach</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We organize art workshops and creative sessions for local communities, fostering artistic expression and cultural exchange.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Orphanage Programs</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Specialized art initiatives for vulnerable children, providing safe spaces for emotional expression and healing through creativity.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Social Impact</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Using art to address social issues, raise awareness, and inspire collective action toward positive change.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Youth Empowerment</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Mentoring young artists and creatives, helping them develop their skills and confidence through art.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section data-aos="fade" className="bg-gray-100 dark:bg-zinc-800 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Get Involved</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Interested in supporting or collaborating with AFE? We welcome partnerships and participation from like-minded individuals and organizations.
            </p>
            <a href="/contact" className="btn-prim inline-block">
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
