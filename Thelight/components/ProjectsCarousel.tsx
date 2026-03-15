'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

type Props = {
  images: { src: string; alt?: string; title?: string }[]
  title?: string
  autoplay?: boolean
}

export default function ProjectsCarousel({ images, title, autoplay = false }: Props) {
  return (
    <section className="w-full">
      {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={autoplay ? { delay: 5000 } : false}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-lg overflow-hidden"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-80 rounded-lg overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt || 'project'}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {img.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white font-semibold">{img.title}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

