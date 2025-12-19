"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import MobileMenu from "@/components/common/MobileMenu"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white dark:bg-black border-b fixed top-0 left-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="logo" width={96} height={25} />
        </Link>

            <nav className="hidden md:flex gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">About</Link>
              <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Artworks</Link>
              <Link href="/afeproject" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">AFEProject</Link>
              <Link href="/publications" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Publications</Link>
              <Link href="/nfts" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">NFTs</Link>
              <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</Link>
            </nav>

        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-black dark:bg-white" />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
