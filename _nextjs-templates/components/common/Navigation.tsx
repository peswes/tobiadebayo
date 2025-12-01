// components/common/Navigation.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationProps {
  className?: string
}

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Artworks' },
  { href: '/afeproject', label: 'AFEProject' },
  { href: '/commission', label: 'Commissions' },
  { href: '/publications', label: 'Publications' },
  { href: '/nfts', label: 'NFTs' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation({ className }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={className}>
      <ul className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`
                text-sm font-medium transition-colors
                ${
                  pathname === item.href
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-white hover:text-red-500'
                }
              `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
