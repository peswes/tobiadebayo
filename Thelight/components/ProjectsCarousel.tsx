"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Image from "next/image"

type Props = { images: { src: string; alt?: string }[] }

export default function ProjectsCarousel({ images }: Props) {
  return (
    <Swiper spaceBetween={12} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="rounded overflow-hidden">
            <Image src={img.src} alt={img.alt || "project"} width={800} height={600} className="object-cover w-full h-56" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
