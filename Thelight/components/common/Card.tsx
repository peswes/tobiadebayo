import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function Card({
  children,
  className = '',
  hover = false,
  onClick,
}: CardProps) {
  const baseClasses = 'bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700'
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-black dark:hover:border-white transition-all duration-300 cursor-pointer' : ''
  const clickClasses = onClick ? 'cursor-pointer' : ''

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${clickClasses} ${className}`.trim()}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {children}
    </div>
  )
}
