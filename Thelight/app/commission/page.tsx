import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commissions | Tobi Adebayo",
  description: "Commission custom artwork from Tobi Adebayo. Learn about the commission process, timelines, and pricing.",
}

export default function Commission() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Custom Commissions</h1>

        <div className="space-y-12">
          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">About Commissions</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tobi Adebayo accepts custom commissions for various types of artwork including portraits, digital pieces, and mixed media works. 
              With over 200+ completed commissions, each piece is crafted with care and attention to the client's vision and requirements.
            </p>
          </section>

          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-6">Commission Process</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold">Inquiry</h3>
                  <p className="text-gray-600 dark:text-gray-400">Contact us with your commission idea and reference materials.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold">Consultation</h3>
                  <p className="text-gray-600 dark:text-gray-400">We discuss your vision, style preferences, and project timeline.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold">Proposal & Agreement</h3>
                  <p className="text-gray-600 dark:text-gray-400">Receive a detailed proposal with pricing and timeline.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold">Creation & Progress</h3>
                  <p className="text-gray-600 dark:text-gray-400">Work begins with periodic progress updates shared with you.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-semibold">Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-400">Final piece is delivered upon completion and approval.</p>
                </div>
              </div>
            </div>
          </section>

          <section data-aos="fade">
            <h2 className="text-2xl font-semibold mb-4">Commission Types</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Custom Portraits (People, Pets, Groups)</li>
              <li>✓ Digital Art & Illustrations</li>
              <li>✓ Mixed Media Pieces</li>
              <li>✓ Charcoal & Graphite Works</li>
              <li>✓ Acrylic Paintings</li>
              <li>✓ Stamp Art & Conceptual Pieces</li>
              <li>✓ Corporate & Institutional Art</li>
            </ul>
          </section>

          <section data-aos="fade" className="bg-gray-100 dark:bg-zinc-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Ready to Commission?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Get in touch to discuss your custom commission. Include reference images and a description of your vision.
            </p>
            <a href="/contact" className="btn-prim inline-block">
              Start a Commission
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
