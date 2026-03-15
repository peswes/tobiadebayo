import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center font-semibold rounded-full'

  const variantClasses = {
    default: 'bg-gray-200 text-gray-800 dark:bg-zinc-700 dark:text-gray-100',
    primary: 'bg-black text-white dark:bg-white dark:text-black',
    success: 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-100',
    warning: 'bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    danger: 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-100',
  }

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
    >
      {children}
    </span>
  )
}
