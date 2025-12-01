// app/publications/page.tsx
import publications from '@/lib/data/publications.json'
import Card from '@/components/ui/Card'

export default function PublicationsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-xl text-gray-600">Articles, essays, and features about my work.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-6">
            {publications.map((pub) => (
              <Card key={pub.id} variant="default">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{new Date(pub.date).toLocaleDateString()}</p>
                  <p className="text-gray-600 mb-4">{pub.description}</p>
                  {pub.link && (
                    <a href={pub.link} className="text-red-600 hover:underline">Read more</a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
