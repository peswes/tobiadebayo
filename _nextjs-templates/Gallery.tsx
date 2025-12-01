// components/ui/Gallery.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryImage {
  id: string | number
  src: string
  alt: string
  title?: string
  category?: string
}

interface GalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  variant?: 'grid' | 'masonry'
  onImageClick?: (image: GalleryImage) => void
  className?: string
}

const columnClasses = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

export default function Gallery({
  images,
  columns = 3,
  variant = 'grid',
  onImageClick,
  className = '',
}: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
    onImageClick?.(image)
  }

  return (
    <>
      <div
        className={`grid gap-6 ${columnClasses[columns]} ${className}`}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="group cursor-pointer relative overflow-hidden rounded-lg bg-gray-200 aspect-square"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.title && (
                  <p className="font-semibold text-sm">{image.title}</p>
                )}
                {image.category && (
                  <p className="text-xs text-gray-300">{image.category}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-51"
            aria-label="Close"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="max-w-4xl max-h-[80vh] relative">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            {selectedImage.title && (
              <p className="text-white text-center mt-4">{selectedImage.title}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
