import Image from 'next/image'
import Link from 'next/link'

const QUICK_LINKS = [
  { href: '/projects', label: 'Artworks' },
  { href: '/commission', label: 'Commission' },
  { href: '/afeproject', label: 'AFEProject' },
  { href: '/nfts', label: 'NFTs' },
]

const LEARN_MORE_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/publications', label: 'Publications' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#f9f9f9] px-[10px] pb-[50px] pt-[70px] text-center md:pl-[60px] md:pr-[20px] md:pt-[50px] md:text-left">
      <div className="flex flex-col gap-[50px] md:flex-row md:items-start md:justify-between md:gap-[30px]">
        <div className="flex flex-1 flex-col items-center gap-[10px] md:items-start">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/images/black-logo.png"
              alt="Tobi Adebayo Logo"
              width={150}
              height={50}
            />
          </Link>

          <p className="text-[18px] text-[#666666]">
            Thank you for visiting my website. I hope you found what you were
            looking for. If you have any questions or further inquiries, kindly
            reach out.
          </p>

          <p className="text-[18px] text-[#666666]">
            © Tobi Adebayo Studios, Copyright {currentYear}
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center gap-[20px] md:flex-row md:items-start md:gap-[30px]">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="mb-[10px] text-[22px] font-bold text-[#232323]">
              Quick Links
            </h2>
            <div className="flex flex-col gap-[8px]">
              {QUICK_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[18px] text-[#666666] transition-colors duration-300 hover:text-[#ee0101]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h2 className="mb-[10px] text-[22px] font-bold text-[#232323]">
              Learn More
            </h2>
            <div className="flex flex-col gap-[8px]">
              {LEARN_MORE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[18px] text-[#666666] transition-colors duration-300 hover:text-[#ee0101]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-[20px] md:items-start">
          <h2 className="text-[22px] font-bold text-[#232323]">Connect With us</h2>

          <p className="flex items-center gap-[10px] text-[18px] text-[#666666]">
            <i className="fa fa-envelope text-[22px]" />
            <a
              href="mailto:tobiadebayoart@gmail.com"
              className="text-[18px] text-[#666666] transition-colors duration-300 hover:text-[#ee0101]"
            >
              tobiadebayoart@gmail.com
            </a>
          </p>

          <div className="flex items-center gap-[20px] text-[24px]">
            <a
              href="https://www.instagram.com/tobi_adebayo_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] transition-colors duration-300 hover:text-[#ee0101]"
            >
              <i className="icomoon icon-instagram" />
            </a>
            <a
              href="https://x.com/tobi_adebayo_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] transition-colors duration-300 hover:text-[#ee0101]"
            >
              <i className="icomoon icon-twitter" />
            </a>
            <a
              href="https://www.facebook.com/share/19VzXrAtHp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] transition-colors duration-300 hover:text-[#ee0101]"
            >
              <i className="icomoon icon-facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/tobi-adebayo-13b97b1aa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] transition-colors duration-300 hover:text-[#ee0101]"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://www.tiktok.com/@tobiadebayoart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] transition-colors duration-300 hover:text-[#ee0101]"
            >
              <i className="fab fa-tiktok" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}