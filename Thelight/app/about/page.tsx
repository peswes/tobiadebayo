import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Tobi Adebayo | Artist & Activist",
  description:
    "Learn about Tobi Adebayo's artistic journey, philosophy, and mission to create thought-provoking works that inspire unity and social impact.",
}

export default function AboutPage() {
  return (
    <main className="bg-white font-sans text-[#232323]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="mb-10 text-[48px] font-bold leading-tight">About me</h1>

        <div className="mb-10 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="w-full md:w-[40%]">
            <Image
              src="/images/tobi.jpg"
              alt="Tobi Adebayo"
              width={800}
              height={1000}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="w-full md:w-[55%] space-y-6 text-[20px] leading-[1.5] text-[#666666]">
            <p>
              Tobi Adebayo (born Adebayo Oluwatobi James, 2000) is a multi-disciplinary artist and activist
              known for thought-provoking work that inspires unity, hope and faith.
            </p>
            <p>
              Born and raised in Ibadan, Nigeria, Tobi&apos;s creative journey started early and grew through years
              of study, practice, and personal experience. Today, his work spans charcoal, graphite, acrylic,
              digital art, and stamp art.
            </p>
            <p>
              Through his art and the Art for Everyone initiative, he uses creative expression as a tool for
              connection, confidence, and social impact in communities.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
