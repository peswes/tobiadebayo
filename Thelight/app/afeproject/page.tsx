import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Art for Everyone (AFE) | Tobi Adebayo",
  description: "Learn about the Art for Everyone initiative and its social impact through art.",
}

const galleryImages = [
  { src: "/images/AFEProjects.jpg", alt: "AFE project activity" },
  { src: "/images/afepy2.jpg", alt: "AFE workshop session" },
  { src: "/images/afepy3.jpg", alt: "AFE community outreach" },
  { src: "/images/afepy2.jpg", alt: "AFE collaborative project" },
]

export default function AFEProjectPage() {
  return (
    <main className="bg-white font-sans text-[#232323]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="mb-10 text-[48px] font-bold leading-tight">AFE Project</h1>

        <section className="mb-12 space-y-6 text-[20px] leading-[1.5] text-[#666666]">
          <p>
            The Art for Everyone Project (A.F.E) is an NGO focused on dismantling socio-economic barriers to
            artistic expression. It creates inclusive opportunities for people to explore creativity and share
            their voice.
          </p>
          <p>
            Founded by Tobi Adebayo, A.F.E supports underserved communities through workshops, creative sessions,
            and practical tools for expression.
          </p>
          <p>
            More than an NGO, A.F.E is a movement that positions art as a tool for growth, connection, and social
            change.
          </p>
        </section>

        <section>
          <h2 className="mb-8 text-3xl font-bold">Gallery</h2>
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
            {galleryImages.map((image) => (
              <div key={image.src + image.alt}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={500}
                  className="h-[500px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
