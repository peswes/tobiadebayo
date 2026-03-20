import Image from 'next/image'
import Link from 'next/link'
import SocialIcons, { TOBI_SOCIAL_LINKS } from '@/components/SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-[80px]">
      <div className="footer max-w-screen flex flex-col min-[768px]:flex-row justify-start min-[768px]:justify-center items-start pl-[24px] pr-[36px] py-[60px] md:pl-[60px] md:pr-[120px] md:py-[60px] bg-[#f9f9f9] gap-[28px] min-[768px]:gap-[36px]">
        {/* First singlefoot - Logo + Text + Copyright */}
        <div className="singlefoot first-singlefoot self-start w-full min-[768px]:w-[430px] flex-none min-w-0 flex flex-col items-start gap-[10px] text-left">
          <div className="first-footer flex flex-col gap-[10px] items-start">
            <Link href="/" className="flex justify-start">
              <Image
                src="/images/black-logo.png"
                alt="Tobi Adebayo Logo"
                width={150}
                height={50}
              />
            </Link>
            <div className="footer-text">
              <p className="text-[18px] text-[#666666] m-0">
                Thank you for visiting my website. I hope you found what you were looking for. If you have any questions or further inquiries, kindly reach out.
              </p>
            </div>
            <div className="copywrite-text">
              <p className="m-0 text-[16px] font-bold text-[#000000]">
                © Tobi Adebayo Studios, Copyright {year}.
              </p>
            </div>
          </div>
        </div>

        {/* Second singlefoot - Quick Links + Learn More */}
        <div className="singlefoot second-singlefoot self-start w-full min-[768px]:w-auto flex-none min-w-0 flex flex-row items-start justify-start gap-[28px] md:gap-[40px] text-left">
          <div className="second-footer-column inn-1 flex w-[150px] flex-col justify-start items-start text-left">
            <h2 className="m-0 mb-[10px] w-full text-[22px] font-bold leading-[1.2] text-[#232323] text-right">
              Quick Links
            </h2>
            <ul className="flex w-full flex-col gap-[5px] items-start list-none p-0 m-0">
              <li><a href="/projects" className="block w-full text-left text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">Artworks</a></li>
              <li><a href="/commission" className="block w-full text-left text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">Commission</a></li>
              <li ><a href="/afeproject" className="block w-full text-left text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">AFEProject</a></li>
              <li><a href="/nfts" className="block w-full text-left text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">NFTs</a></li>
            </ul>
          </div>

          <div className="second-footer-column inn-2 flex w-[150px] flex-col justify-start items-start text-left">
            <h2 className="m-0 mb-[10px] w-full text-[22px] font-bold leading-[1.2] text-[#232323] text-right">
              Learn More
            </h2>
            <ul className="flex w-full flex-col gap-[5px] items-start list-none p-0 m-0">
              <li className="w-full text-left"><a href="/about" className="block w-full text-left text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">About</a></li>
              <li className="w-full text-left"><a href="/publications" className="block w-full text-left text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">Publications</a></li>
              <li className="w-full text-left"><a href="/contact" className="block w-full text-left text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Fourth singlefoot - Connect + Social Icons */}
        <div className="singlefoot fourth-singlefoot self-start w-full min-[768px]:w-[300px] flex-none min-w-0 flex flex-col items-start gap-[20px] text-left">
          <div className="fourth-footer flex flex-col gap-[20px] items-start">
            <div className="conny w-full">
              <h2 className="text-[22px] font-bold text-[#232323] text-left">
                Connect With us
              </h2>
            </div>
            
            <p className="text-[18px] text-[#666666] m-0 flex flex-row items-center justify-start gap-[10px]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[30px] w-[30px]"
                aria-hidden="true"
              >
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <a href="mailto:tobiadebayoart@gmail.com" className="text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline whitespace-nowrap">
                tobiadebayoart@gmail.com
              </a>
            </p>

            <SocialIcons items={TOBI_SOCIAL_LINKS} containerClassName="justify-start gap-[12px]" />
          </div>

        </div>
      </div>
    </footer>
  )
}
