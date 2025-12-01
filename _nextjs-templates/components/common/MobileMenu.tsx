// components/common/MobileMenu.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Artworks' },
  { href: '/afeproject', label: 'AFEProject' },
  { href: '/commission', label: 'Commission' },
  { href: '/nfts', label: 'NFTs' },
  { href: '/publications', label: 'Publications' },
  { href: '/contact', label: 'Contact' },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Menu */}
      <nav
        className={`fixed left-0 top-0 h-full w-64 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <img
            src="/images/black-logo.png"
            alt="Tobi Adebayo"
            className="h-6"
          />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded transition"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <ul className="py-4">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-6 py-3 transition ${
                    isActive
                      ? 'bg-red-100 text-red-700 border-l-4 border-red-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Footer Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-xs text-gray-500 mb-3">Contact</p>
          <a
            href="mailto:tobiadebayoart@gmail.com"
            className="text-sm font-medium text-gray-900 hover:text-red-600 transition block truncate"
          >
            tobiadebayoart@gmail.com
          </a>
        </div>
      </nav>
    </>
  )
}
