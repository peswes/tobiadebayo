import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Publications | Tobi Adebayo",
  description:
    "Featured publications, press coverage, and media appearances of Tobi Adebayo's work and artistic journey.",
}

export default function Publications() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Publications & Press</h1>

        <div className="space-y-12">
          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-6">Featured In</h2>
            <div className="space-y-6">
              <article className="border-l-4 border-black dark:border-white pl-6 pb-6">
                <h3 className="text-xl font-semibold mb-2">Lookman Portrait Interview</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Feature Interview</p>
                <p className="text-gray-700 dark:text-gray-300">
                  In-depth discussion on the creation of the Lookman portrait series and the artistic process behind capturing authentic emotion.
                </p>
              </article>

              <article className="border-l-4 border-black dark:border-white pl-6 pb-6">
                <h3 className="text-xl font-semibold mb-2">TikTok & Social Media Features</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Digital Media</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Viral content showcasing behind-the-scenes artwork creation, time-lapses, and artistic process videos gaining significant engagement.
                </p>
              </article>

              <article className="border-l-4 border-black dark:border-white pl-6 pb-6">
                <h3 className="text-xl font-semibold mb-2">Art & Culture Publications</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Press Features</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Featured in art and culture magazines, highlighting innovative approaches to social art and community engagement through AFE.
                </p>
              </article>
            </div>
          </section>

          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">Media Appearances</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tobi has participated in interviews, artist talks, exhibitions, and collaborative projects that showcase his work and artistic philosophy. 
              From local community events to broader cultural platforms, his journey continues to inspire and engage diverse audiences.
            </p>
          </section>

          <section data-aos="fade" className="bg-gray-100 dark:bg-zinc-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Press Inquiries</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Interested in featuring Tobi&apos;s work or collaborating on a media project? Get in touch with press inquiries.
            </p>
            <a href="/contact" className="btn-prim inline-block">
              Contact for Press
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
