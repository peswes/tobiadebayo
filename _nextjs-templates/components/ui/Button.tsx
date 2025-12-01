// components/ui/Button.tsx
import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
  ariaLabel?: string
}

const variants = {
  primary:
    'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-gray-400',
  secondary:
    'bg-gray-900 text-white hover:bg-black active:bg-gray-800 disabled:bg-gray-400',
  outline:
    'border-2 border-gray-300 text-gray-900 hover:bg-gray-50 active:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400',
  ghost:
    'text-gray-900 hover:bg-gray-100 active:bg-gray-200 disabled:text-gray-400',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'

  const variantClasses = variants[variant]
  const sizeClasses = sizes[size]
  const widthClasses = fullWidth ? 'w-full' : ''

  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClasses} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
