import { Metadata } from "next"
import Image from "next/image"
import ContactForm from "@/components/forms/ContactForm"

export const metadata: Metadata = {
  title: "Contact | Tobi Adebayo",
  description:
    "Get in touch with Tobi Adebayo. Send a message, inquire about commissions, or schedule a collaboration.",
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Breadcrumb */}
      <section className="py-8 md:py-12 px-4 md:px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">Contact</h1>
          <nav className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/contact" className="text-black dark:text-white font-medium">Contact</a>
          </nav>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Get In Touch</h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I'm here to listen. Share your thoughts, make enquiries, ask questions, or just say Hi — I'm looking forward to hearing from you!
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Image */}
            <div className="relative w-full aspect-video md:aspect-square rounded-lg overflow-hidden" data-aos="fade-right">
              <Image
                src="/images/tobi.jpg"
                alt="Tobi Adebayo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: Form */}
            <div className="bg-gray-50 dark:bg-zinc-900 p-6 md:p-8 lg:p-10 rounded-lg" data-aos="fade-left">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-black dark:text-white">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Direct Contact */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-black dark:text-white">Direct Contact</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-base md:text-lg">For commissions and general inquiries:</p>
              <a 
                href="mailto:tobiadebayoart@gmail.com" 
                className="text-lg md:text-2xl font-bold text-red-600 hover:text-red-700 transition-colors break-all"
              >
                tobiadebayoart@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-black dark:text-white">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Instagram", url: "https://www.instagram.com/tobi_adebayo_" },
                  { name: "Twitter/X", url: "https://x.com/tobi_adebayo_" },
                  { name: "Facebook", url: "https://www.facebook.com/share/19VzXrAtHp/" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/tobi-adebayo-13b97b1aa" },
                  { name: "TikTok", url: "https://www.tiktok.com/@tobiadebayoart" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-red-600 dark:hover:bg-red-600 hover:text-white dark:hover:text-white transition-all duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
