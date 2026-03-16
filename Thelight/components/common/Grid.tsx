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
  const gapClasses: Record<NonNullable<GridProps["gap"]>, string> = {
    sm: 'gap-2 sm:gap-3',
    md: 'gap-4 sm:gap-6',
    lg: 'gap-6 sm:gap-8',
    xl: 'gap-8 sm:gap-10',
  }

  const smColumnMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }

  const mdColumnMap: Record<number, string> = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6',
  }

  const lgColumnMap: Record<number, string> = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
  }

  const xlColumnMap: Record<number, string> = {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
    5: 'xl:grid-cols-5',
    6: 'xl:grid-cols-6',
  }

  const smClass = columns.sm ? smColumnMap[columns.sm] ?? 'grid-cols-1' : 'grid-cols-1'
  const mdClass = columns.md ? mdColumnMap[columns.md] ?? '' : ''
  const lgClass = columns.lg ? lgColumnMap[columns.lg] ?? '' : ''
  const xlClass = columns.xl ? xlColumnMap[columns.xl] ?? '' : ''

  return (
    <div className={['grid', smClass, mdClass, lgClass, xlClass, gapClasses[gap], className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}
