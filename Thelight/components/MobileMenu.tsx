'use client'

import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 top-16 z-40 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed top-16 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-lg animate-in slide-in-from-top duration-300">
        <nav className="flex flex-col gap-0 p-4">
          <Link
            href="/"
            onClick={onClose}
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={onClose}
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/afeproject"
            onClick={onClose}
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors"
          >
            AFE Project
          </Link>
          <Link
            href="/commission"
            onClick={onClose}
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors"
          >
            Commission
          </Link>
          <Link
            href="/publications"
            onClick={onClose}
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors"
          >
            Publications
          </Link>
          <Link
            href="/nfts"
            onClick={onClose}
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors"
          >
            NFTs
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors font-semibold text-red-600 dark:text-red-500"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}
