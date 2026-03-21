"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { TouchEvent as ReactTouchEvent } from "react"
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
  const isLightboxOpen = activeIndex !== null
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const activeItem = isLightboxOpen ? items[activeIndex] : null

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

  const onLightboxTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0]
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
  }

  const onLightboxTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - touchStartX.current
    const deltaY = touch.clientY - touchStartY.current
    const swipeThreshold = 40

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }

    touchStartX.current = null
    touchStartY.current = null
  }

  useEffect(() => {
    if (!isLightboxOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox()
      if (event.key === "ArrowLeft") goToPrevious()
      if (event.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isLightboxOpen, closeLightbox, goToNext, goToPrevious])

  useEffect(() => {
    if (!isLightboxOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isLightboxOpen])

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              openLightbox(index)
            }}
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
                  className="h-full w-full rounded-[20px] object-cover pointer-events-none"
                />
              )}
            </div>
            <h4 className="gallery-item-title">{item.title}</h4>
            <p className="gallery-item-medium">{item.medium}</p>
          </button>
        ))}
      </div>

      {typeof document !== "undefined" &&
        activeItem &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeItem.title} lightbox`}
            className="artworks-lightbox-overlay"
            onClick={(event) => {
              if (event.target === event.currentTarget) closeLightbox()
            }}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="artworks-lightbox-close"
              aria-label="Close lightbox"
            >
              Close ×
            </button>

            {itemCount > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  goToPrevious()
                }}
                className="artworks-lightbox-nav artworks-lightbox-nav-prev"
                aria-label="Previous item"
              >
                ‹
              </button>
            )}

            {itemCount > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  goToNext()
                }}
                className="artworks-lightbox-nav artworks-lightbox-nav-next"
                aria-label="Next item"
              >
                ›
              </button>
            )}

            <div
              className="artworks-lightbox-content"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={onLightboxTouchStart}
              onTouchEnd={onLightboxTouchEnd}
            >
              <div className="artworks-lightbox-media">
                {activeItem.type === "image" ? (
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    fill
                    sizes="100vw"
                    className="artworks-lightbox-image"
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
                    className="artworks-lightbox-video"
                  />
                )}
              </div>
              <div className="artworks-lightbox-caption">
                <p className="artworks-lightbox-title">{activeItem.title}</p>
                <p className="artworks-lightbox-medium">{activeItem.medium}</p>
                <p className="artworks-lightbox-count">
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
