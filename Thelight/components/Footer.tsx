import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black dark:bg-zinc-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tobi Adebayo</h3>
            <p className="text-gray-400">Contemporary artist exploring digital culture and identity.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/publications" className="text-gray-400 hover:text-white transition-colors">
                Publications
              </Link>
            </nav>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/afeproject" className="text-gray-400 hover:text-white transition-colors">
                AFE Project
              </Link>
              <Link href="/nfts" className="text-gray-400 hover:text-white transition-colors">
                NFTs
              </Link>
              <Link href="/commission" className="text-gray-400 hover:text-white transition-colors">
                Commissions
              </Link>
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <nav className="flex flex-col gap-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Twitter / X
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Email
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tobi Adebayo. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
