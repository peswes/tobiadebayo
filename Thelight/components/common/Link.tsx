import Link from 'next/link'
import React from 'react'

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'underline' | 'button'
  active?: boolean
  external?: boolean
}

export default function CustomLink({
  href,
  children,
  className = '',
  variant = 'default',
  active = false,
  external = false,
}: LinkProps) {
  const baseClasses = 'transition-colors duration-300'

  const variantClasses = {
    default: 'text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300',
    underline: 'text-black dark:text-white underline hover:no-underline',
    button: 'inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200',
  }

  const activeClasses = active ? 'border-b-2 border-black dark:border-white font-semibold' : ''

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${activeClasses} ${className}`.trim()

  if (external) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  )
}
