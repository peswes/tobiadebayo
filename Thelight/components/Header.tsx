'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Artworks' },
  { href: '/afeproject', label: 'AFEProject' },
  { href: '/publications', label: 'Publications' },
  { href: '/nfts', label: 'NFTs' },
  { href: '/contact', label: 'Contact me' },
]

const getIconForLabel = (label: string) => {
  switch (label) {
    case 'Home':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
    case 'About':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>;
    case 'Artworks':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>;
    case 'AFEProject':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
    case 'Publications':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
    case 'NFTs':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
    case 'Contact me':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
    default:
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>;
  }
};

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

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

              <button
                type="button"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Toggle navigation menu'}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`relative z-[1200] flex h-[44px] w-[44px] items-center justify-center rounded-full transition-all duration-300 min-[992px]:hidden ${
                  isMenuOpen ? 'text-[#ee0101]' : 'text-[#f9f9f9]'
                }`}
              >
                {isMenuOpen ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
                )}
              </button>

              <div className="classy-menu hidden items-center min-[992px]:flex">
                <div className="classynav">
                  <ul className="m-0 flex list-none items-center p-0">
                    {NAV_ITEMS.map((item) => {
                      const isActive = pathname === item.href

                      return (
                        <li key={item.href} className="list-none">
                          <Link
                            href={item.href}
                            className={`flex h-[44px] items-center px-[12px] text-[18px] leading-[1] no-underline transition-colors hover:no-underline min-[992px]:max-[1199px]:px-[10px] min-[992px]:max-[1199px]:text-[14px] ${
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

            </nav>
          </div>
        </div>
      </header>

      <div className="h-[70px] min-[992px]:h-[100px]" aria-hidden="true" />

      {/* Modal Backdrop — visible when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[900] bg-black/60"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Contextual Popover Panel — visible when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed bottom-[100px] left-1/2 -translate-x-1/2 z-[950] w-[90%] max-w-[420px] rounded-2xl bg-[#111111] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.6)] min-[992px]:hidden"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#ee0101]/10 text-[#ee0101]'
                    : 'text-[#888888] hover:bg-[#222222] hover:text-[#f9f9f9]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-center">
                  {getIconForLabel(item.label)}
                </span>
                <span className="text-[16px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      )}

      {/* Floating Bottom Pill — always visible on mobile */}
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] flex h-[64px] items-center justify-between gap-1 sm:gap-2 rounded-full bg-[#111111]/95 backdrop-blur-xl border border-[#333333] px-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] min-[992px]:hidden w-[95%] max-w-[420px]"
      >
        {/* Left Segment — Primary Home Action */}
        <Link
          href="/"
          className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-[#f9f9f9] transition-colors duration-200 hover:text-[#ee0101]"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex items-center justify-center">
            {getIconForLabel('Home')}
          </span>
          <span className="text-[15px] font-medium">Home</span>
        </Link>

        {/* Faint vertical divider */}
        <div className="h-6 w-px border-r border-[#333333]" aria-hidden="true" />

        {/* Right Segment — Menu Toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-[#f9f9f9] transition-colors duration-200 hover:text-[#ee0101]"
        >
          <span className="flex items-center justify-center">
            {isMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            )}
          </span>
          <span className="text-[15px] font-medium">Menu</span>
        </button>
      </div>
    </>
  )
}
