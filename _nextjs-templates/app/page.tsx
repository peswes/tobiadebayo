// app/page.tsx
import Hero from '@/components/sections/Hero'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Gallery from '@/components/ui/Gallery'
import projects from '@/lib/data/projects.json'

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Welcome to My Creative World"
        subtitle="Contemporary Artist & Creative Professional"
        description="Explore my diverse portfolio of artworks, digital creations, and creative projects."
        ctaButtons={[
          { label: 'View My Work', href: '/projects' },
          { label: 'Get in Touch', href: '/contact', variant: 'outline' },
        ]}
      />

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Artworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover a selection of my recent work across various mediums and
              styles.
            </p>
          </div>

          {/* Gallery */}
          {featuredProjects.length > 0 && (
            <Gallery
              images={featuredProjects.map((p) => ({
                id: p.id,
                src: p.image,
                alt: p.title,
                title: p.title,
                category: p.category,
              }))}
              columns={3}
            />
          )}

          <div className="text-center mt-12">
            <Button href="/projects" size="lg" variant="primary">
              View All Artworks
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/about-preview.jpg"
                alt="Tobi Adebayo"
                className="rounded-lg shadow-lg w-full object-cover aspect-square"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a contemporary artist passionate about exploring the
                intersection of art, technology, and human expression. With
                experience in traditional and digital mediums, I create work
                that challenges perspectives and inspires dialogue.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My practice encompasses painting, illustration, digital art,
                and experimental work. I believe in the power of creativity to
                transform spaces and minds.
              </p>
              <Button href="/about" variant="secondary">
                Learn More About Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From custom commissions to digital projects, I provide creative
              solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Commission Work',
                description:
                  'Custom artwork tailored to your vision and specifications.',
                link: '/commission',
              },
              {
                title: 'Digital Art',
                description:
                  'Modern digital creations for brands and personal projects.',
                link: '/projects',
              },
              {
                title: 'Publications',
                description:
                  'Written work and thoughts on contemporary art practices.',
                link: '/publications',
              },
            ].map((service) => (
              <Card key={service.title} variant="hover">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button href={service.link} variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you have a commission in mind or want to discuss a creative
            project, I'd love to hear from you.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  )
}
