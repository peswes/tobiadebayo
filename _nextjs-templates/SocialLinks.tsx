// components/ui/SocialLinks.tsx
'use client'

interface SocialLink {
  name: string
  url: string
  icon: string
}

interface SocialLinksProps {
  links?: SocialLink[]
  variant?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const DEFAULT_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/tobi_adebayo_',
    icon: 'fab fa-instagram',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/tobi_adebayo_',
    icon: 'fab fa-twitter',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/19VzXrAtHp/',
    icon: 'fab fa-facebook',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tobi-adebayo-13b97b1aa',
    icon: 'fab fa-linkedin',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@tobiadebayoart',
    icon: 'fab fa-tiktok',
  },
]

const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
}

export default function SocialLinks({
  links = DEFAULT_LINKS,
  variant = 'horizontal',
  size = 'md',
  className = '',
}: SocialLinksProps) {
  const containerClass =
    variant === 'horizontal' ? 'flex gap-4' : 'flex flex-col gap-3'
  const sizeClass = sizeClasses[size]

  return (
    <div className={`${containerClass} ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className={`${sizeClass} flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300`}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  )
}
