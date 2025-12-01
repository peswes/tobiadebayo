// app/projects/page.tsx
'use client'

import { useState } from 'react'
import Gallery from '@/components/ui/Gallery'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import projects from '@/lib/data/projects.json'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Artworks</h1>
          <p className="text-xl text-gray-600">
            A collection of diverse projects across various mediums and styles
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery */}
          {filteredProjects.length > 0 ? (
            <Gallery
              images={filteredProjects.map((p) => ({
                id: p.id,
                src: p.image,
                alt: p.title,
                title: p.title,
                category: p.category,
              }))}
              columns={3}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project List (Alternative View) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Project Details</h2>

          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} variant="hover">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                  <div className="md:col-span-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-lg object-cover aspect-square"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-sm text-gray-500">
                          {project.category} • {new Date(project.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {project.link && (
                      <Button href={project.link} variant="primary" size="sm">
                        View Project
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in a Commission?</h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm available for custom projects and commissions. Let's create
            something amazing together.
          </p>
          <Button href="/commission" variant="primary" size="lg">
            Commission Me
          </Button>
        </div>
      </section>
    </>
  )
}
