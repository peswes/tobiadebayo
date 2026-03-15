import React from 'react'

interface GridProps {
  children: React.ReactNode
  columns?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export default function Grid({
  children,
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 'md',
  className = '',
}: GridProps) {
  const gapClasses = {
    sm: 'gap-2 sm:gap-3',
    md: 'gap-4 sm:gap-6',
    lg: 'gap-6 sm:gap-8',
    xl: 'gap-8 sm:gap-10',
  }

  // Build responsive grid columns
  const columnClasses = `
    grid
    ${columns.sm ? `grid-cols-${columns.sm}` : 'grid-cols-1'}
    ${columns.md ? `md:grid-cols-${columns.md}` : ''}
    ${columns.lg ? `lg:grid-cols-${columns.lg}` : ''}
    ${columns.xl ? `xl:grid-cols-${columns.xl}` : ''}
  `.trim()

  return (
    <div
      className={`${columnClasses} ${gapClasses[gap]} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
