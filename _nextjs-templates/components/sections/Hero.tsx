// components/sections/Hero.tsx
import Button from '@/components/ui/Button'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  ctaButtons?: { label: string; href: string; variant?: string }[]
}

export default function Hero({ title, subtitle, description, ctaButtons = [] }: HeroProps) {
  return (
    <section className="pt-24 pb-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-lg text-gray-300 mb-6">{subtitle}</p>}
          {description && <p className="text-gray-400 max-w-3xl mx-auto mb-8">{description}</p>}

          <div className="flex items-center justify-center gap-4">
            {ctaButtons.map((btn) => (
              <Button key={btn.href} href={btn.href} variant={(btn as any).variant || 'primary'}>
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
