import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 bg-black dark:bg-zinc-900 text-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Tobi Adebayo</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              Contemporary artist exploring identity, hope, and social impact through visual storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">Explore</h4>
              <nav className="flex flex-col gap-2 text-sm sm:text-base md:text-lg">
                <Link href="/" className="text-gray-300 transition-colors hover:text-[#ee0101]">
                  Home
                </Link>
                <Link href="/about" className="text-gray-300 transition-colors hover:text-[#ee0101]">
                  About
                </Link>
                <Link href="/projects" className="text-gray-300 transition-colors hover:text-[#ee0101]">
                  Projects
                </Link>
                <Link href="/publications" className="text-gray-300 transition-colors hover:text-[#ee0101]">
                  Publications
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">Connect</h4>
              <nav className="flex flex-col gap-2 text-sm sm:text-base md:text-lg">
                <Link href="/afeproject" className="text-gray-300 transition-colors hover:text-[#ee0101]">
                  AFE Project
                </Link>
                <Link href="/nfts" className="text-gray-300 transition-colors hover:text-[#ee0101]">
                  NFTs
                </Link>
                <Link href="/commission" className="text-gray-300 transition-colors hover:text-[#ee0101]">
                  Commissions
                </Link>
                <Link href="/contact" className="text-gray-300 transition-colors hover:text-[#ee0101]">
                  Contact
                </Link>
                <a href="https://www.instagram.com/tobi_adebayo_" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition-colors hover:text-[#ee0101]">
                  Instagram
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-gray-300 text-sm sm:text-base">
              © {currentYear} Tobi Adebayo. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm sm:text-base">
              <a href="#" className="text-gray-300 transition-colors hover:text-[#ee0101]">
                Privacy
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-[#ee0101]">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
