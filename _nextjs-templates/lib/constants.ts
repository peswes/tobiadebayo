// lib/constants.ts

export const SITE_NAME = 'Tobi Adebayo'
export const SITE_TITLE = 'Tobi Adebayo - Contemporary Artist & Creative Professional'
export const SITE_DESCRIPTION =
  'Explore the portfolio of Tobi Adebayo, a contemporary artist known for diverse artworks, illustrations, and creative projects.'

export const CONTACT_EMAIL = 'tobiadebayoart@gmail.com'
export const PHONE = '+234 (805) 123 4567' // Update with actual phone

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/tobi_adebayo_',
  twitter: 'https://x.com/tobi_adebayo_',
  facebook: 'https://www.facebook.com/share/19VzXrAtHp/',
  linkedin: 'https://www.linkedin.com/in/tobi-adebayo-13b97b1aa',
  tiktok: 'https://www.tiktok.com/@tobiadebayoart',
}

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Artworks' },
  { href: '/afeproject', label: 'AFEProject' },
  { href: '/commission', label: 'Commission' },
  { href: '/nfts', label: 'NFTs' },
  { href: '/publications', label: 'Publications' },
  { href: '/contact', label: 'Contact' },
]

export const SECTIONS = {
  HOME: 'home',
  ABOUT: 'about',
  PROJECTS: 'projects',
  AFEPROJECT: 'afeproject',
  COMMISSION: 'commission',
  NFTS: 'nfts',
  PUBLICATIONS: 'publications',
  CONTACT: 'contact',
} as const

// Animation durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  SLOWER: 800,
} as const

// Breakpoints matching Tailwind CSS
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const

// Colors
export const COLORS = {
  PRIMARY: '#ee0101', // Red
  SECONDARY: '#000000', // Black
  ACCENT: '#f5f5f5', // Light gray
  BORDER: '#e5e7eb', // Gray
  TEXT_PRIMARY: '#000000',
  TEXT_SECONDARY: '#666666',
} as const
