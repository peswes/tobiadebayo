// app/afeproject/page.tsx
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import projects from '@/lib/data/projects.json'

export default function AFEProjectPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AFE Project</h1>
          <p className="text-xl text-gray-600">
            A special ongoing project exploring thematic strands in my work.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selected works from the AFE Project (featured items).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((p) => (
                <Card key={p.id} variant="hover">
                  <div className="p-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full rounded-md object-cover aspect-square mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{p.description}</p>
                    <Button href={`/projects/${p.slug}`} variant="outline" size="sm">
                      View Project
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600">
            To discuss or commission work related to the AFE Project, please
            reach out via the contact page.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary">Contact Me</Button>
          </div>
        </div>
      </section>
    </>
  )
}
