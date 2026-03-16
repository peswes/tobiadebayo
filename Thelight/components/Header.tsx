'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Header - Fixed black background matching original design */}
      <header className="fixed top-0 left-0 right-0 z-[600] w-full bg-black">
        <nav className="flex justify-between items-center h-[100px] px-[3%] bg-black">
          {/* Logo */}
          <Link href="/" className="text-white no-underline flex items-center text-2xl font-medium hover:text-[#ee0101] transition-colors duration-500">
            <img 
              src="/logo.png" 
              alt="Tobi Adebayo Logo"
              className="w-[96px] h-[25px] mr-[30px]"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex gap-[30px] items-center">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/projects', label: 'Artworks' },
              { href: '/afeproject', label: 'AFEProject' },
              { href: '/publications', label: 'Publications' },
              { href: '/nfts', label: 'NFTs' },
              { href: '/contact', label: 'Contact me' }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-white no-underline text-lg font-medium transition-colors duration-500 hover:text-[#ee0101]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle - Hidden on desktop */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-[5px] bg-none border-none cursor-pointer p-0"
            aria-label="Toggle menu"
          >
            <span className="w-[30px] h-[3px] bg-white rounded-[3px]"></span>
            <span className="w-[30px] h-[3px] bg-white rounded-[3px]"></span>
            <span className="w-[30px] h-[3px] bg-white rounded-[3px]"></span>
          </button>
        </nav>
      </header>

      {/* Spacing for fixed header - 100px desktop, 70px mobile */}
      <div className="h-[100px] md:h-[70px]" />

      {/* Mobile Menu - Hidden on desktop */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[100px] left-0 right-0 bg-black z-[590] flex flex-col p-0">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/projects', label: 'Artworks' },
            { href: '/afeproject', label: 'AFEProject' },
            { href: '/publications', label: 'Publications' },
            { href: '/nfts', label: 'NFTs' },
            { href: '/contact', label: 'Contact me', isContact: true }
          ].map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              onClick={() => setIsMenuOpen(false)} 
              className={`text-white no-underline text-base px-5 py-[15px] transition-colors duration-500 hover:text-[#ee0101] ${
                item.isContact ? 'text-[#ee0101] font-semibold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
