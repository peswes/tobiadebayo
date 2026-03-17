import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer max-w-screen flex flex-row justify-center items-center px-[20px] py-[50px] md:px-[60px_20px] md:py-[50px] bg-[#f9f9f9] gap-0 md:gap-[30px]">
        {/* First singlefoot - Logo + Text + Copyright */}
        <div className="singlefoot first-singlefoot w-full md:w-auto flex flex-col items-center md:items-start gap-[10px] md:gap-[10px] text-center md:text-left">
          <div className="first-footer flex flex-col gap-[10px] items-center md:items-start">
            <Link href="/" className="flex items-center">
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
            <div className="copywrite-text hidden md:block">
              <p className="text-[16px] text-black m-0">
                © Tobi Adebayo Studios, Copyright {year}.
              </p>
            </div>
          </div>
        </div>

        {/* Second singlefoot - Quick Links + Learn More */}
        <div className="singlefoot second-singlefoot w-full md:w-auto flex flex-row md:flex-row items-center md:items-start gap-[20px] md:gap-[30px] text-center md:text-left">
          <div className="second-footer-column inn-1 flex flex-col items-center md:items-start">
            <h2 className="text-[22px] font-bold text-[#232323] mb-[10px] text-center md:text-left">
              Quick Links
            </h2>
            <ul className="links flex flex-col gap-[5px] items-center md:items-start list-none p-0 m-0">
              <li><a href="/projects" className="text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">Artworks</a></li>
              <li><a href="/commission" className="text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">Commission</a></li>
              <li><a href="/afeproject" className="text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">AFEProject</a></li>
              <li><a href="/nfts" className="text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">NFTs</a></li>
            </ul>
          </div>

          <div className="second-footer-column inn-2 flex flex-col items-center md:items-start">
            <h2 className="text-[22px] font-bold text-[#232323] mb-[10px] text-center md:text-left">
              Learn More
            </h2>
            <ul className="links flex flex-col gap-[5px] items-center md:items-start list-none p-0 m-0">
              <li><a href="/about" className="text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">About</a></li>
              <li><a href="/publications" className="text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">Publications</a></li>
              <li><a href="/contact" className="text-[18px] text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Fourth singlefoot - Connect + Social Icons */}
        <div className="singlefoot fourth-singlefoot w-full md:w-auto flex flex-col items-center md:items-start gap-[20px] text-center md:text-left">
          <div className="fourth-footer flex flex-col gap-[20px] items-center md:items-start">
            <div className="conny">
              <h2 className="text-[22px] font-bold text-[#232323] text-center md:text-left">
                Connect With us
              </h2>
            </div>
            
            <p className="text-[18px] text-[#666666] m-0 flex flex-col md:flex-row items-center gap-[10px]">
              <i className="fa fa-envelope text-[22px]"></i>
              <a href="mailto:tobiadebayoart@gmail.com" className="text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">
                tobiadebayoart@gmail.com
              </a>
            </p>

            <div id="icones" className="flex gap-[20px] text-[24px]">
              <a target="_blank" href="https://www.instagram.com/tobi_adebayo_" className="text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">
                <i className="icomoon icon-instagram"></i>
              </a>
              <a target="_blank" href="https://x.com/tobi_adebayo_" className="text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">
                <i className="icomoon icon-twitter"></i>
              </a>
              <a target="_blank" href="https://www.facebook.com/share/19VzXrAtHp/" className="text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">
                <i className="icomoon icon-facebook"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/tobi-adebayo-13b97b1aa" className="text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">
                <i className="icomoon icon-linkedin"></i>
              </a>
              <a target="_blank" href="https://www.tiktok.com/@tobiadebayoart" className="text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div className="copywrite-text text2 md:hidden flex flex-col items-center">
            <p className="text-[16px] text-black m-0">
              © Tobi Adebayo Studios, Copyright {year}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
