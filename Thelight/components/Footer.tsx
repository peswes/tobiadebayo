import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#f9f9f9] max-w-full p-[50px_20px_50px_60px] md:p-[50px_20px_50px_60px] max-md:px-[10px] max-md:py-[70px_10px_10px_10px] max-md:flex-col max-md:gap-[50px]">
      <div className="flex flex-row justify-center items-center gap-[30px] max-md:flex-col max-md:gap-[50px]">
        {/* First Footer Section - Logo + Text + Copyright */}
        <div className="w-full flex flex-col gap-[10px]">
          <a href="/" className="flex items-center">
            <img 
              src="/black-logo.png" 
              alt="Tobi Adebayo Logo"
              className="w-[150px] h-[50px]"
            />
          </a>
          <div className="text-[#666666]">
            <p className="text-lg text-left max-md:text-center mb-0 text-[#666666] leading-[1.5]">
              Thank you for visiting my website. I hope you found what you were looking for. If you have any questions or further inquiries, kindly reach out.
            </p>
          </div>
          <div className="hidden md:block text-black">
            <p className="text-base mb-0 text-black">
              © Tobi Adebayo Studios, Copyright {currentYear}.
            </p>
          </div>
        </div>

        {/* Second Footer Section - Quick Links + Learn More */}
        <div className="w-full flex flex-row justify-center gap-[30px] max-md:flex-col max-md:gap-[20px]">
          <div className="flex flex-col items-start max-md:items-center">
            <h2 className="text-2xl font-bold text-[#232323] mb-[10px] text-left max-md:text-center">
              Quick Links
            </h2>
            <div className="flex flex-col gap-[5px] max-md:flex-row max-md:gap-[15px] max-md:justify-center">
              {[
                { href: '/projects', label: 'Artworks' },
                { href: '/commission', label: 'Commission' },
                { href: '/afeproject', label: 'AFEProject' },
                { href: '/nfts', label: 'NFTs' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-[#666666] no-underline text-lg transition-colors duration-500 hover:text-[#ee0101]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start max-md:items-center">
            <h2 className="text-2xl font-bold text-[#232323] mb-[10px] text-left max-md:text-center">
              Learn More
            </h2>
            <div className="flex flex-col gap-[5px] max-md:flex-row max-md:gap-[15px] max-md:justify-center">
              {[
                { href: '/about', label: 'About' },
                { href: '/publications', label: 'Publications' },
                { href: '/contact', label: 'Contact' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-[#666666] no-underline text-lg transition-colors duration-500 hover:text-[#ee0101]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Fourth Footer Section - Connect + Social Icons */}
        <div className="w-full flex flex-col gap-[20px] items-start max-md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#232323] mb-[10px] text-left max-md:text-center">
              Connect With us
            </h2>
            <p className="text-lg text-[#666666] mb-0 flex items-center gap-[10px]">
              <i className="fa fa-envelope text-[22px]"></i>
              <a href="mailto:tobiadebayoart@gmail.com" className="text-[#666666] no-underline transition-colors duration-500 hover:text-[#ee0101]">
                tobiadebayoart@gmail.com
              </a>
            </p>
          </div>

          <div className="flex gap-[20px] text-2xl">
            {[
              { icon: 'icomoon icon-instagram', url: 'https://www.instagram.com/tobi_adebayo_' },
              { icon: 'icomoon icon-twitter', url: 'https://x.com/tobi_adebayo_' },
              { icon: 'icomoon icon-facebook', url: 'https://www.facebook.com/share/19VzXrAtHp/' },
              { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/tobi-adebayo-13b97b1aa' },
              { icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@tobiadebayoart' }
            ].map((social, idx) => (
              <a 
                key={idx}
                target="_blank" 
                href={social.url} 
                rel="noopener noreferrer" 
                className="text-[#666666] no-underline transition-colors duration-500 hover:text-[#ee0101]"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          <div className="md:hidden text-black">
            <p className="text-base mb-0 text-black flex flex-col items-center justify-center">
              © Tobi Adebayo Studios, Copyright {currentYear}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
