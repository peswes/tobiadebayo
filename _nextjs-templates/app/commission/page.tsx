// app/commission/page.tsx
import commissions from '@/lib/data/commissions.json'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function CommissionPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commission Work</h1>
          <p className="text-xl text-gray-600">Custom commissions tailored to your needs.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commissions.map((c) => (
              <Card key={c.id} variant="hover">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">{c.title}</h3>
                  <p className="text-gray-600 mb-4">{c.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Category: {c.category}</p>
                  <div className="flex gap-3">
                    <Button href="/contact" variant="primary" size="sm">Inquire</Button>
                    <Button href="#" variant="outline" size="sm">Learn More</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600">Prices and timelines depend on scope — contact for a quote.</p>
        </div>
      </section>
    </>
  )
}
