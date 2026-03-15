import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-colors duration-300 cursor-pointer'

  const variantClasses = {
    primary: 'bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:text-gray-600',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white disabled:border-gray-400 disabled:text-gray-400',
  }

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50' : ''} ${className}`.trim()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
