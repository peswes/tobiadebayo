import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Commissions | Tobi Adebayo",
  description: "Commission custom artwork from Tobi Adebayo Studios.",
}

const processSteps = [
  "Share your idea and references.",
  "Receive timeline and pricing.",
  "Approve project details and begin.",
  "Review progress updates.",
  "Receive final artwork delivery.",
]

export default function CommissionPage() {
  return (
    <main className="bg-white font-sans text-[#232323]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="mb-6 text-[48px] font-bold leading-tight">Commission</h1>

        <section className="mb-12">
          <p className="max-w-4xl text-[20px] leading-[1.5] text-[#666666]">
            Let&apos;s create together. Tobi Adebayo Studios offers commissioned projects for individuals, brands,
            and businesses.
          </p>
        </section>

        <section className="mb-12 grid grid-cols-1 gap-[30px] md:grid-cols-2">
          <Image src="/images/Drawing.jpg" alt="Drawing catalogue" width={900} height={500} className="h-[500px] w-full object-cover" />
          <Image src="/images/Painting.jpg" alt="Painting catalogue" width={900} height={500} className="h-[500px] w-full object-cover" />
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold">Process</h2>
          <ol className="space-y-4 text-[20px] leading-[1.5] text-[#666666]">
            {processSteps.map((step, index) => (
              <li key={step} className="border border-[#232323] p-4">
                <span className="font-bold text-[#232323]">Step {index + 1}:</span> {step}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  )
}
