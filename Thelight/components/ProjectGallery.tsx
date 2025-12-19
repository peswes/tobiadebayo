"use client"

import Image from "next/image"

type Props = {
  images: { src: string; alt?: string }[]
}

export default function ProjectGallery({ images }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <div key={i} className="overflow-hidden rounded">
          <Image src={img.src} alt={img.alt || "project"} width={800} height={600} className="object-cover w-full h-48" />
        </div>
      ))}
    </div>
  )
}
