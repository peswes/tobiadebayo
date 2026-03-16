import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Publications | Tobi Adebayo",
  description:
    "Featured publications, press coverage, and media appearances of Tobi Adebayo's work and artistic journey.",
}

export default function Publications() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Breadcrumb */}
      <section className="py-8 md:py-12 px-4 md:px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">Publications</h1>
          <nav className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/publications" className="text-black dark:text-white font-medium">Publications</a>
          </nav>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-black dark:text-white">Featured In</h2>
          <div className="space-y-6 md:space-y-8">
            {/* Article 1 */}
            <article className="border-l-4 border-red-600 pl-6 md:pl-8 py-4">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-black dark:text-white">Lookman Portrait Interview</h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-3 font-medium">Feature Interview</p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                In-depth discussion on the creation of the Lookman portrait series and the artistic process behind capturing authentic emotion.
              </p>
            </article>

            {/* Article 2 */}
            <article className="border-l-4 border-red-600 pl-6 md:pl-8 py-4">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-black dark:text-white">TikTok & Social Media Features</h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-3 font-medium">Digital Media</p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Viral content showcasing behind-the-scenes artwork creation, time-lapses, and artistic process videos gaining significant engagement.
              </p>
            </article>

            {/* Article 3 */}
            <article className="border-l-4 border-red-600 pl-6 md:pl-8 py-4">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-black dark:text-white">Art & Culture Publications</h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-3 font-medium">Press Features</p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Featured in art and culture magazines, highlighting innovative approaches to social art and community engagement through AFE.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black dark:text-white">Media Appearances</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Tobi has participated in interviews, artist talks, exhibitions, and collaborative projects that showcase his work and artistic philosophy. 
            From local community events to broader cultural platforms, his journey continues to inspire and engage diverse audiences.
          </p>
        </div>
      </section>

      {/* Press CTA */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-black text-white p-8 md:p-12 rounded-lg">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Press Inquiries</h3>
          <p className="text-base md:text-lg text-gray-100 mb-8">
            Interested in featuring Tobi's work or collaborating on a media project? Get in touch with press inquiries.
          </p>
          <Link href="/contact" className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-white text-black font-semibold uppercase text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors">
            Contact for Press
          </Link>
        </div>
      </section>
    </div>
  )
}
