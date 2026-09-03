import type { ReactNode } from "react"

export type SocialPlatform = "instagram" | "x" | "facebook" | "linkedin" | "tiktok"

export type SocialIconItem = {
  platform: SocialPlatform
  href: string
  label?: string
}

type SocialIconsProps = {
  items: SocialIconItem[]
  containerClassName?: string
  linkClassName?: string
  iconClassName?: string
}

export const TOBI_SOCIAL_LINKS: SocialIconItem[] = [
  { platform: "instagram", href: "https://www.instagram.com/tobi_adebayo_" },
  { platform: "x", href: "https://x.com/tobi_adebayo_" },
  { platform: "facebook", href: "https://www.facebook.com/share/19VzXrAtHp/" },
  { platform: "linkedin", href: "https://www.linkedin.com/in/tobi-adebayo-13b97b1aa" },
  { platform: "tiktok", href: "https://www.tiktok.com/@tobiadebayoart" },
]

const DEFAULT_LINK_CLASS =
  "inline-flex h-[44px] w-[44px] items-center justify-center rounded-md text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline"
const DEFAULT_ICON_CLASS = "h-[24px] w-[24px]"

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ")
}

function getPlatformLabel(platform: SocialPlatform) {
  if (platform === "x") return "X"
  if (platform === "tiktok") return "TikTok"
  return platform.charAt(0).toUpperCase() + platform.slice(1)
}

function renderIcon(platform: SocialPlatform, iconClassName: string): ReactNode {
  if (platform === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153Zm-1.296 19.694h2.039L6.486 3.126H4.298L17.605 20.847Z" />
      </svg>
    )
  }

  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    )
  }

  if (platform === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true">
        <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }

  if (platform === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true">
      <path d="M9 4h3c.2 1 1 2 2.2 2.8 1.2.7 2.5 1 3.8 1V11c-1.7 0-3.4-.5-4.8-1.5V15a5 5 0 1 1-5-4.9V13a2 2 0 1 0 2 1.9V4z" />
    </svg>
  )
}

export default function SocialIcons({
  items,
  containerClassName,
  linkClassName = DEFAULT_LINK_CLASS,
  iconClassName = DEFAULT_ICON_CLASS,
}: SocialIconsProps) {
  return (
    <div className={cx("flex items-center justify-start gap-[12px]", containerClassName)}>
      {items.map((item) => (
        <a
          key={`${item.platform}-${item.href}`}
          target="_blank"
          rel="noopener noreferrer"
          href={item.href}
          className={linkClassName}
          aria-label={item.label ?? getPlatformLabel(item.platform)}
        >
          {renderIcon(item.platform, iconClassName)}
        </a>
      ))}
    </div>
  )
}
