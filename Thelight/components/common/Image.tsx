import Image from 'next/image'
import React from 'react'

interface CustomImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
  className?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'scale-down'
  placeholder?: 'blur' | 'empty'
}

export default function CustomImage({
  src,
  alt,
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  className = '',
  objectFit = 'cover',
  placeholder = 'empty',
}: CustomImageProps) {
  const objectFitClasses = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    'scale-down': 'object-scale-down',
  }

  // If width and height provided, use fixed size
  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`${objectFitClasses[objectFit]} ${className}`.trim()}
        placeholder={placeholder}
      />
    )
  }

  // Otherwise use fill (responsive)
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`${objectFitClasses[objectFit]} ${className}`.trim()}
        placeholder={placeholder}
      />
    </div>
  )
}
