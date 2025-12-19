"use client"

import Link from "next/link"

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="fixed right-0 top-0 h-full w-3/4 max-w-xs bg-black border-l border-zinc-800 p-6 shadow-2xl transform transition-transform duration-300">
        <div className="flex justify-end mb-8">
          <button
            onClick={onClose}
            className="text-white hover:text-accent transition-colors p-2"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-6">
          {[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Artworks', href: '/projects' },
            { name: 'AFEProject', href: '/afeproject' },
            { name: 'Publications', href: '/publications' },
            { name: 'NFTs', href: '/nfts' },
            { name: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="text-white text-lg font-medium hover:text-accent transition-colors border-b border-zinc-800 pb-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
