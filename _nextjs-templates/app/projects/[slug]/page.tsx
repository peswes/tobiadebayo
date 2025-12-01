// app/projects/[slug]/page.tsx
import projects from '@/lib/data/projects.json'
import { notFound } from 'next/navigation'
import Button from '@/components/ui/Button'

interface Params {
  params: { slug: string }
}

export default function ProjectDetail({ params }: Params) {
  const slug = params.slug
  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-sm text-gray-500 mb-6">{project.category} • {new Date(project.date).toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img src={project.image} alt={project.title} className="w-full rounded-lg object-cover aspect-square" />
            </div>

            <div className="md:col-span-2">
              <div className="prose max-w-none text-gray-700">
                <p>{project.description}</p>

                {project.images && project.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {project.images.map((src, idx) => (
                      <img key={idx} src={src} alt={`${project.title} ${idx + 1}`} className="w-full rounded-md object-cover" />
                    ))}
                  </div>
                )}

                <div className="mt-6">
                  <Button href="/projects" variant="outline">Back to projects</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
