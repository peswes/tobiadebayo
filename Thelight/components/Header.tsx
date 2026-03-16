'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from './common/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur">
        <div className="max-w-7xl mx-auto min-h-[72px] md:min-h-[80px] px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black dark:text-white transition-colors hover:text-[#ee0101]">
            Tobi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-[#ee0101]">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-[#ee0101]">
              About
            </Link>
            <Link href="/projects" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-[#ee0101]">
              Projects
            </Link>
            <Link href="/afeproject" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-[#ee0101]">
              AFE Project
            </Link>
            <Link href="/commission" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-[#ee0101]">
              Commission
            </Link>
            <Link href="/publications" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-[#ee0101]">
              Publications
            </Link>
            <Link href="/nfts" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-[#ee0101]">
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
      <div className="h-[72px] md:h-[80px]" />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-40">
          <nav className="flex flex-col gap-0 p-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded transition-colors hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-[#ee0101]">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded transition-colors hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-[#ee0101]">
              About
            </Link>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded transition-colors hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-[#ee0101]">
              Projects
            </Link>
            <Link href="/afeproject" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded transition-colors hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-[#ee0101]">
              AFE Project
            </Link>
            <Link href="/commission" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded transition-colors hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-[#ee0101]">
              Commission
            </Link>
            <Link href="/publications" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded transition-colors hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-[#ee0101]">
              Publications
            </Link>
            <Link href="/nfts" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded transition-colors hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-[#ee0101]">
              NFTs
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded transition-colors hover:bg-gray-100 dark:hover:bg-gray-900 font-semibold text-[#ee0101]">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
