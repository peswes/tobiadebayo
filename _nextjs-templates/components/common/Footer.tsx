// components/common/Footer.tsx
'use client'

import Link from 'next/link'

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/tobi_adebayo_',
    icon: 'icon-instagram',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/tobi_adebayo_',
    icon: 'icon-twitter',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/19VzXrAtHp/',
    icon: 'icon-facebook',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tobi-adebayo-13b97b1aa',
    icon: 'icon-linkedin',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@tobiadebayoart',
    icon: 'fab fa-tiktok',
  },
]

const QUICK_LINKS = [
  { href: '/projects', label: 'Artworks' },
  { href: '/commission', label: 'Commission' },
  { href: '/afeproject', label: 'AFEProject' },
  { href: '/nfts', label: 'NFTs' },
]

const LEARN_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/publications', label: 'Publications' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <img
              src="/images/black-logo.png"
              alt="Tobi Adebayo"
              className="h-8 mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Thank you for visiting my website. I hope you found what you were
              looking for. If you have any questions or further inquiries,
              kindly reach out.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-black transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Learn More</h3>
            <ul className="space-y-2">
              {LEARN_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-black transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Connect With Us</h3>
            <a
              href="mailto:tobiadebayoart@gmail.com"
              className="text-gray-600 hover:text-black transition text-sm block mb-4"
            >
              tobiadebayoart@gmail.com
            </a>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-600 hover:text-black transition"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
          <p>
            © Tobi Adebayo Studios, Copyright {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
