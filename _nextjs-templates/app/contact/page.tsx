// app/contact/page.tsx
import ContactForm from '@/components/forms/ContactForm'
import Card from '@/components/ui/Card'
import SocialLinks from '@/components/ui/SocialLinks'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              {/* Email */}
              <Card variant="default" className="mb-6">
                <div className="p-6">
                  <h3 className="font-bold mb-2">Email</h3>
                  <a
                    href="mailto:tobiadebayoart@gmail.com"
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    tobiadebayoart@gmail.com
                  </a>
                </div>
              </Card>

              {/* Phone */}
              <Card variant="default" className="mb-6">
                <div className="p-6">
                  <h3 className="font-bold mb-2">Phone</h3>
                  <a
                    href="tel:+234 805 123 4567"
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    +234 (805) 123 4567
                  </a>
                </div>
              </Card>

              {/* Location */}
              <Card variant="default" className="mb-6">
                <div className="p-6">
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-gray-600">
                    Lagos, Nigeria <br /> Available for remote collaborations
                    worldwide
                  </p>
                </div>
              </Card>

              {/* Social Links */}
              <Card variant="default">
                <div className="p-6">
                  <h3 className="font-bold mb-4">Follow Me</h3>
                  <SocialLinks size="md" variant="horizontal" />
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card variant="default">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                  <ContactForm />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-12 bg-blue-50 border-y border-blue-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h3 className="font-bold text-blue-900 mb-2">Response Time</h3>
            <p className="text-blue-800">
              I typically respond to inquiries within 24-48 hours. For urgent
              matters, please call or email directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                question: 'What is your typical commission process?',
                answer:
                  'I start with an initial consultation to understand your vision, followed by concept sketches, revisions, and final delivery. Most projects take 4-8 weeks depending on complexity.',
              },
              {
                question: 'What are your commission rates?',
                answer:
                  'Rates vary based on project scope, size, and complexity. I provide custom quotes after discussing your specific needs. Please reach out for a detailed estimate.',
              },
              {
                question: 'Do you accept international commissions?',
                answer:
                  'Yes! I work with clients worldwide. Communication is handled via email and video calls, and payments are processed securely.',
              },
              {
                question: 'What mediums do you work with?',
                answer:
                  'I work with both traditional mediums (painting, drawing) and digital tools (Procreate, Adobe Suite). I can also recommend the best medium for your project.',
              },
              {
                question: 'Can I use commissioned work commercially?',
                answer:
                  'Usage rights are discussed on a case-by-case basis. Commercial use may require additional licensing. We can customize terms to fit your needs.',
              },
              {
                question: 'What if I\'m not satisfied with my commission?',
                answer:
                  'I include revision rounds in my commission process. My goal is your complete satisfaction. If issues arise, we\'ll work together to resolve them.',
              },
            ].map((faq, idx) => (
              <Card key={idx} variant="default">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
