'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/afeproject', label: 'AFEProject' },
  { href: '/publications', label: 'Publications' },
  { href: '/nfts', label: 'NFTs' },
  { href: '/contact', label: 'Contact me' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[600] bg-[#000000] text-[#f9f9f9]">
        <nav className="flex h-[70px] items-center justify-between px-[10px] md:h-[100px] md:px-[3%]">
          <Link href="/" className="mr-[30px] flex items-center">
            <Image
              src="/images/logo.png"
              alt="Tobi Adebayo Logo"
              width={96}
              height={25}
              priority
            />
          </Link>

          <div className="hidden items-center gap-[30px] md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[18px] transition-colors duration-300 hover:text-[#ee0101] ${
                    isActive ? 'text-[#ee0101]' : 'text-[#f9f9f9]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex flex-col gap-[5px] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="h-[3px] w-[30px] rounded-[3px] bg-[#f9f9f9]" />
            <span className="h-[3px] w-[30px] rounded-[3px] bg-[#f9f9f9]" />
            <span className="h-[3px] w-[30px] rounded-[3px] bg-[#f9f9f9]" />
          </button>
        </nav>
      </header>

      <div className="h-[70px] md:h-[100px]" aria-hidden="true" />

      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[70px] z-[590] flex flex-col bg-[#000000] py-[20px] md:hidden">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-[20px] py-[12px] text-[16px] transition-colors duration-300 hover:text-[#ee0101] ${
                  isActive ? 'text-[#ee0101]' : 'text-[#f9f9f9]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}