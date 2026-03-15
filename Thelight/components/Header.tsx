'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from './common/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors">
            Tobi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/afeproject" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
              AFE Project
            </Link>
            <Link href="/commission" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
              Commission
            </Link>
            <Link href="/publications" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
              Publications
            </Link>
            <Link href="/nfts" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
              NFTs
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Add spacing to account for fixed header */}
      <div className="h-16" />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-40">
          <nav className="flex flex-col gap-0 p-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors">
              About
            </Link>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors">
              Projects
            </Link>
            <Link href="/afeproject" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors">
              AFE Project
            </Link>
            <Link href="/commission" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors">
              Commission
            </Link>
            <Link href="/publications" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors">
              Publications
            </Link>
            <Link href="/nfts" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors">
              NFTs
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors font-semibold text-red-600">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
