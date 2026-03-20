"use client"

import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"

export type ArtworksMediaItem = {
  type: "image" | "video"
  title: string
  medium: string
  src: string
}

type ArtworksMediaGalleryProps = {
  items: ArtworksMediaItem[]
}

export default function ArtworksMediaGallery({ items }: ArtworksMediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const itemCount = items.length

  const activeItem = activeIndex !== null ? items[activeIndex] : null

  const openLightbox = (index: number) => {
    setActiveIndex(index)
  }

  const goToPrevious = useCallback(() => {
    if (itemCount === 0) return
    setActiveIndex((current) => {
      if (current === null) return current
      return (current - 1 + itemCount) % itemCount
    })
  }, [itemCount])

  const goToNext = useCallback(() => {
    if (itemCount === 0) return
    setActiveIndex((current) => {
      if (current === null) return current
      return (current + 1) % itemCount
    })
  }, [itemCount])

  const closeLightbox = useCallback(() => {
    setActiveIndex(null)
  }, [])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox()
      if (event.key === "ArrowLeft") goToPrevious()
      if (event.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeIndex, closeLightbox, goToNext, goToPrevious])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    if (activeIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = originalOverflow
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [activeIndex])

  return (
    <>
      <div className="grid grid-cols-1 gap-[24px] min-[640px]:grid-cols-3 md:gap-[30px]">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => openLightbox(index)}
            className="gallery-item relative block w-full cursor-pointer appearance-none overflow-hidden rounded-[20px] border-0 bg-transparent p-0 text-left focus:outline-none"
            aria-label={`Open ${item.title}`}
            aria-haspopup="dialog"
          >
            <div className="relative h-[320px] w-full overflow-hidden rounded-[20px] md:h-[360px]">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 639px) 100vw, 33vw"
                  className="gallery-image rounded-[20px]"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full rounded-[20px] object-cover"
                />
              )}
              <div className="gallery-overlay rounded-b-[20px]">
                <h4>{item.title}</h4>
                <p>{item.medium}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {typeof window !== "undefined" &&
        activeItem &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeItem.title} lightbox`}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) closeLightbox()
            }}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
              aria-label="Close lightbox"
            >
              Close
            </button>

            {itemCount > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
                aria-label="Previous item"
              >
                Prev
              </button>
            )}

            {itemCount > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
                aria-label="Next item"
              >
                Next
              </button>
            )}

            <div
              className="flex max-h-[85vh] w-full max-w-6xl flex-col items-center justify-center gap-4"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[70vh] w-full">
                {activeItem.type === "image" ? (
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                ) : (
                  <video
                    key={activeItem.src}
                    src={activeItem.src}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="h-full w-full object-contain"
                  />
                )}
              </div>
              <div className="text-center text-white">
                <p className="text-lg font-semibold">{activeItem.title}</p>
                <p className="text-sm text-white/80">{activeItem.medium}</p>
                <p className="mt-1 text-xs text-white/70">
                  {(activeIndex ?? 0) + 1} / {items.length}
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
