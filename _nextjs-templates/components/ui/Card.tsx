// components/ui/Card.tsx
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'hover' | 'elevated'
}

const variants = {
  default: 'bg-white border border-gray-200',
  hover:
    'bg-white border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300',
  elevated: 'bg-white shadow-lg border border-gray-100',
}

export default function Card({
  children,
  className = '',
  variant = 'default',
}: CardProps) {
  const baseClasses = 'rounded-lg overflow-hidden'
  const variantClasses = variants[variant]

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </div>
  )
}

// Card subcomponents
export function CardHeader({ children, className = '' }: CardProps) {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = '' }: CardProps) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }: CardProps) {
  return (
    <div className={`px-6 py-4 border-t border-gray-200 bg-gray-50 ${className}`}>
      {children}
    </div>
  )
}
