import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Commissions | Tobi Adebayo",
  description: "Commission custom artwork from Tobi Adebayo. Learn about the commission process, timelines, and pricing.",
}

export default function Commission() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Breadcrumb */}
      <section className="py-8 md:py-12 px-4 md:px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">Commissions</h1>
          <nav className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/commission" className="text-black dark:text-white font-medium">Commissions</a>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* About Commissions */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-black dark:text-white">About Commissions</h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Tobi Adebayo accepts custom commissions for various types of artwork including portraits, digital pieces, and mixed media works. 
              With over 200+ completed commissions, each piece is crafted with care and attention to the client's vision and requirements.
            </p>
          </div>

          {/* Commission Process */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-black dark:text-white">Commission Process</h2>
            <div className="space-y-6 md:space-y-8">
              {[
                { num: "1", title: "Inquiry", desc: "Contact us with your commission idea and reference materials." },
                { num: "2", title: "Consultation", desc: "We discuss your vision, style preferences, and project timeline." },
                { num: "3", title: "Proposal & Agreement", desc: "Receive a detailed proposal with pricing and timeline." },
                { num: "4", title: "Creation & Progress", desc: "Work begins with periodic progress updates shared with you." },
                { num: "5", title: "Delivery", desc: "Final piece is delivered upon completion and approval." }
              ].map((step) => (
                <div key={step.num} className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg md:text-xl">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-black dark:text-white mb-2">{step.title}</h3>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commission Types */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black dark:text-white">Commission Types</h2>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
              {[
                "Custom Portraits (People, Pets, Groups)",
                "Digital Art & Illustrations",
                "Mixed Media Pieces",
                "Charcoal & Graphite Works",
                "Acrylic Paintings",
                "Stamp Art & Conceptual Pieces",
                "Corporate & Institutional Art"
              ].map((type, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>{type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Commission?</h3>
          <p className="text-base md:text-lg text-gray-100 mb-8">
            Get in touch to discuss your custom commission. Include reference images and a description of your vision.
          </p>
          <Link href="/contact" className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-white text-black font-semibold uppercase text-sm md:text-base rounded-full hover:bg-gray-200 transition-colors">
            Start a Commission
          </Link>
        </div>
      </section>
    </div>
  )
}
