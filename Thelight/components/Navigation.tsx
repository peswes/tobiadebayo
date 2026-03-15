import Link from 'next/link'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'AFE Project', href: '/afeproject' },
  { label: 'Commission', href: '/commission' },
  { label: 'Publications', href: '/publications' },
  { label: 'NFTs', href: '/nfts' },
]

export default function Navigation() {
  return (
    <nav className="hidden md:flex gap-8 items-center">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
