"use client"

import Image from "next/image"

export default function Lightbox({ open, src, alt, onClose }: { open: boolean; src?: string; alt?: string; onClose: () => void }) {
  if (!open || !src) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="max-w-3xl max-h-[80vh] p-4" onClick={(e) => e.stopPropagation()}>
        <Image src={src} alt={alt || ""} width={1200} height={900} className="object-contain" />
      </div>
    </div>
  )
}
