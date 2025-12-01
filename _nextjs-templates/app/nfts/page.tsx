// app/nfts/page.tsx
import nfts from '@/lib/data/nfts.json'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function NFTsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NFT Collection</h1>
          <p className="text-xl text-gray-600">Browse selected NFTs and learn about editions.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nfts.map((n) => (
              <Card key={n.id} variant="hover">
                <div className="p-4">
                  <img src={n.image} alt={n.title} className="w-full rounded-md object-cover aspect-square mb-4" />
                  <h3 className="text-lg font-bold mb-2">{n.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{n.description}</p>
                  <div className="flex gap-2">
                    <Button href={n.link ?? '#'} variant="primary" size="sm">View</Button>
                    <Button href="#" variant="outline" size="sm">Buy</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600">For collaborations related to NFTs, contact me directly.</p>
        </div>
      </section>
    </>
  )
}
