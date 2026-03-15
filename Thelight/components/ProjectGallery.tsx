'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from './common/Modal'

type Props = {
  images: { src: string; alt?: string; title?: string }[]
  title?: string
}

export default function ProjectGallery({ images, title }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length)
    }
  }

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }
  }

  return (
    <>
      {title && <h2 className="text-3xl font-bold mb-8">{title}</h2>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="group cursor-pointer overflow-hidden rounded-lg"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={img.src}
                alt={img.alt || 'project'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal isOpen={selectedIndex !== null} onClose={() => setSelectedIndex(null)}>
        {selectedImage && (
          <div className="w-full">
            <div className="relative w-full bg-black" style={{ aspectRatio: '4/3' }}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt || 'project'}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center gap-4">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded transition-colors text-sm font-medium"
                aria-label="Previous image"
              >
                ← Prev
              </button>

              <div className="text-center flex-1">
                <p className="font-semibold">{selectedImage.title || 'Untitled'}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {(selectedIndex ?? 0) + 1} / {images.length}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded transition-colors text-sm font-medium"
                aria-label="Next image"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

