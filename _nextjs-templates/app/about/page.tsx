// app/about/page.tsx
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import SocialLinks from '@/components/ui/SocialLinks'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600">
            Exploring creativity through diverse mediums and perspectives
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-20">
                <img
                  src="/images/profile.jpg"
                  alt="Tobi Adebayo"
                  className="w-full rounded-lg shadow-lg mb-6 aspect-square object-cover"
                />
                <Card variant="default">
                  <div className="p-6">
                    <h3 className="font-bold mb-4">Connect With Me</h3>
                    <SocialLinks size="md" variant="horizontal" />
                    <Button
                      href="/contact"
                      fullWidth
                      className="mt-4"
                      size="sm"
                      variant="primary"
                    >
                      Send Message
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2>Artist Statement</h2>
                <p>
                  I am a contemporary artist with a passion for exploring the
                  intersection of tradition and innovation. My practice spans
                  multiple mediums, from classical painting to digital creation,
                  always seeking new ways to express ideas and engage viewers.
                </p>

                <h3>Background</h3>
                <p>
                  With years of experience in visual arts, I have developed a
                  unique approach that combines technical skill with conceptual
                  depth. My work has been influenced by various artistic
                  movements and personal experiences, creating a diverse body of
                  work that resonates with contemporary audiences.
                </p>

                <h3>Creative Process</h3>
                <p>
                  I believe in the power of experimentation and the importance
                  of challenging conventions. Each project is an opportunity to
                  explore new techniques, materials, and ideas. Whether working
                  traditionally or digitally, I approach each piece with
                  intention and care.
                </p>

                <h3>Themes & Interests</h3>
                <ul>
                  <li>Contemporary visual culture</li>
                  <li>
                    The relationship between art and technology
                  </li>
                  <li>Human connection and emotion</li>
                  <li>Experimental practices and new media</li>
                  <li>Community engagement through art</li>
                </ul>

                <h3>Recognition</h3>
                <p>
                  My work has been featured in various exhibitions and
                  publications. I'm committed to continuous growth and actively
                  engage with the broader artistic community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: 'Traditional Mediums',
                items: ['Oil Painting', 'Acrylics', 'Watercolor', 'Drawing', 'Sculpture'],
              },
              {
                category: 'Digital Tools',
                items: [
                  'Adobe Creative Suite',
                  'Procreate',
                  'Digital Illustration',
                  '3D Modeling',
                  'Motion Graphics',
                ],
              },
              {
                category: 'Specializations',
                items: [
                  'Portraiture',
                  'Landscape Art',
                  'Abstract Work',
                  'Digital NFTs',
                  'Mural Design',
                ],
              },
              {
                category: 'Services',
                items: [
                  'Custom Commissions',
                  'Brand Identity',
                  'Illustration',
                  'Consulting',
                  'Workshops & Teaching',
                ],
              },
            ].map((skill) => (
              <Card key={skill.category} variant="default">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-gray-600">
                        ✓ {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-300 mb-8">
            Interested in commissioning a piece or collaborating on a project?
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  )
}
