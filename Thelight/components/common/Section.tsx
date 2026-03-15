import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  paddingY?: 'sm' | 'md' | 'lg' | 'xl'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export default function Section({
  children,
  className = '',
  paddingY = 'lg',
  maxWidth = '2xl',
}: SectionProps) {
  const paddingClasses = {
    sm: 'py-4 sm:py-6',
    md: 'py-6 sm:py-8',
    lg: 'py-8 sm:py-12',
    xl: 'py-12 sm:py-16',
  }

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
  }

  return (
    <section
      className={`${paddingClasses[paddingY]} px-4 sm:px-6 mx-auto ${maxWidthClasses[maxWidth]} ${className}`.trim()}
    >
      {children}
    </section>
  )
}
