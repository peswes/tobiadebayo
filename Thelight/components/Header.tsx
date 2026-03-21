'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Artworks' },
  { href: '/afeproject', label: 'AFEProject' },
  { href: '/publications', label: 'Publications' },
  { href: '/nfts', label: 'NFTs' },
  { href: '/contact', label: 'Contact me' },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="header-area fixed top-0 z-[600] w-full bg-[#000000] text-[#f9f9f9]">
        <div className="main-header-area">
          <div className="classy-nav-container max-[767px]:px-[15px]">
            <nav className="classy-navbar mx-auto flex h-[70px] items-center justify-between px-[3%] min-[992px]:h-[100px]">
              <Link
                href="/"
                className="nav-brand mr-[30px] flex items-center max-[767px]:mr-[15px] max-[767px]:max-w-[90px]"
              >
                <Image
                  src="/images/logo.png"
                  alt="Tobi Adebayo"
                  width={96}
                  height={25}
                  priority
                />
              </Link>

              <div className="classy-menu hidden items-center min-[992px]:flex">
                <div className="classynav">
                  <ul className="m-0 flex list-none items-center p-0">
                    {NAV_ITEMS.map((item) => {
                      const isActive = pathname === item.href

                      return (
                        <li key={item.href} className="list-none">
                          <Link
                            href={item.href}
                            className={`block h-[35px] px-[12px] text-[18px] leading-[34px] no-underline transition-colors hover:no-underline min-[992px]:max-[1199px]:px-[10px] min-[992px]:max-[1199px]:text-[14px] ${
                              isActive
                                ? 'text-[#ee0101]'
                                : 'text-[#f9f9f9] hover:text-[#ee0101]'
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Toggle navigation menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu-drawer"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`relative z-[1200] flex h-[40px] w-[40px] items-center justify-center rounded-[3px] border border-[#f9f9f9] bg-transparent transition-opacity duration-200 min-[992px]:hidden ${
                  isMenuOpen ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
                }`}
              >
                <span
                  className="absolute block h-[2px] w-[22px] -translate-y-[7px] bg-[#f9f9f9]"
                />
                <span
                  className="absolute block h-[2px] w-[22px] bg-[#f9f9f9]"
                />
                <span
                  className="absolute block h-[2px] w-[22px] translate-y-[7px] bg-[#f9f9f9]"
                />
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="h-[70px] min-[992px]:h-[100px]" aria-hidden="true" />

      <nav
        id="mobile-menu-drawer"
        aria-label="Mobile navigation"
        className={`fixed left-0 top-0 z-[1000] h-full w-[88vw] max-w-[300px] overflow-y-scroll bg-[#000000] shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-transform duration-500 min-[992px]:hidden ${
          isMenuOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
          className="absolute right-[14px] top-[14px] z-[1100] flex h-[40px] w-[40px] items-center justify-center rounded-[3px] border border-[#f9f9f9] bg-transparent"
        >
          <span className="relative block h-[22px] w-[22px]" aria-hidden="true">
            <span className="absolute left-0 top-1/2 block h-[2px] w-[22px] -translate-y-1/2 rotate-45 bg-[#f9f9f9]" />
            <span className="absolute left-0 top-1/2 block h-[2px] w-[22px] -translate-y-1/2 -rotate-45 bg-[#f9f9f9]" />
          </span>
        </button>

        <ul className="m-0 list-none p-0 pt-[70px]">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="list-none">
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block h-[38px] border-b border-[rgba(255,255,255,0.5)] bg-[#000000] px-[10px] text-[14px] leading-[38px] transition-colors ${
                  pathname === item.href ? 'text-[#ee0101]' : 'text-[#f9f9f9] hover:text-[#ee0101]'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
