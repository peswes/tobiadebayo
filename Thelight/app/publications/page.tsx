import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Publications | Tobi Adebayo",
  description: "Selected press and publication features for Tobi Adebayo.",
}

const publications = [
  {
    title: "Ademola Lookman",
    year: "2024",
    summary: "SoccerNet NG - Atalanta star Lookman stunned by young Nigerian artist’s unique stamp artwork.",
    url: "https://soccernet.ng/2024/12/this-is-amazing-atalanta-star-lookman-stunned-by-young-nigerian-artists-unique-stamp-artwork.html",
  },
  {
    title: "Tobi Adebayo",
    year: "2021",
    summary: "Talku Talku Magazine - Come Face to Face with Tobi Adebayo, a truth seeker and revolutionary.",
    url: "https://magazine.talkutalku.com/come-face-to-face-with-tobi-adebayo-a-truth-seeker/",
  },
]

export default function PublicationsPage() {
  return (
    <main className="bg-white font-sans text-[#232323]">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <h1 className="mb-4 text-[48px] font-bold leading-tight">Publications</h1>
        <p className="mb-10 text-[20px] leading-[1.5] text-[#666666]">Selected press and publications.</p>

        <div className="space-y-8">
          {publications.map((item) => (
            <article key={item.title} className="border border-[#232323] p-6">
              <h2 className="mb-2 text-3xl font-bold">{item.title}</h2>
              <p className="mb-3 text-[20px] leading-[1.5] text-[#666666]">{item.year}</p>
              <p className="mb-4 text-[20px] leading-[1.5] text-[#666666]">{item.summary}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[20px] underline">
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
