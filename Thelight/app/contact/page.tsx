import { Metadata } from "next"
import ContactForm from "@/components/forms/ContactForm"

export const metadata: Metadata = {
  title: "Contact | Tobi Adebayo",
  description:
    "Get in touch with Tobi Adebayo. Send a message, inquire about commissions, or schedule a collaboration.",
}

export default function Contact() {
  return (
    <div className="min-h-screen py-24 px-4 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-heading">Get In Touch</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm here to listen. Share your thoughts, make enquiries, ask questions, or just say Hi — I'm looking forward to hearing from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-zinc-800 p-8 md:p-12 rounded-3xl shadow-lg" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-8 text-heading">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-12 lg:pt-12" data-aos="fade-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-heading">Direct Contact</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">For commissions and general inquiries:</p>
                <a href="mailto:tobiadebayoart@gmail.com" className="text-2xl font-bold text-accent hover:underline">
                  tobiadebayoart@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-heading">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
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
                      className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Studio Hours</h3>
              <p className="text-gray-400">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
