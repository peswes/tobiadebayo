import { Metadata } from "next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/forms/ContactForm"
import SocialIcons, { TOBI_SOCIAL_LINKS } from "@/components/SocialIcons"
import { AnimatedSection } from "@/components/AnimatedSection"

export const metadata: Metadata = {
  title: "Contact | Tobi Adebayo",
  description: "Get in touch with Tobi Adebayo for commissions, collaborations, and inquiries.",
}

export default function ContactPage() {
  return (
    <main>
      <section className="section-shell">
        <div className="page-shell section-gap-30">
          <h1 className="breadcrumb-title">Contact</h1>
          <Breadcrumb currentPage="Contact me" />
        </div>
      </section>

      <section className="section-shell pb-[70px]">
        <div className="page-shell section-gap-30">
          <div className="flex flex-wrap items-start justify-between gap-y-[30px]">
            <AnimatedSection xOffset={-50} className="w-full min-[768px]:w-[48%] min-[1200px]:w-[41.6667%]">
              <div className="desktop-sticky-left w-full">
              <div className="casting-form-thumbnail mb-[40px] overflow-hidden rounded-[20px] max-w-[75%] mx-auto">
                <Image
                  src="/images/tobi.jpg"
                  alt="Tobi Adebayo"
                  width={900}
                  height={1100}
                  className="h-auto w-full rounded-[20px]"
                  priority
                />
              </div>

              <div className="flex flex-row justify-between items-start w-full mt-8 gap-[10px]">
                <div className="single-contact-card">
                  <h2 className="text-[16px] min-[1200px]:text-[18px] font-bold mb-2 whitespace-nowrap text-left">Email</h2>
                  <h6 className="text-[14px] min-[1200px]:text-[16px]">
                    <a
                      href="mailto:tobiadebayoart@gmail.com"
                      className="text-[#333333] transition-colors duration-500 hover:text-[#ee0101] whitespace-nowrap"
                    >
                      tobiadebayoart@gmail.com
                    </a>
                  </h6>
                </div>

                <div className="single-contact-card">
                  <h2 className="text-[16px] min-[1200px]:text-[18px] font-bold mb-2 whitespace-nowrap text-left">Social Media</h2>
                  <SocialIcons 
                    items={TOBI_SOCIAL_LINKS} 
                    containerClassName="flex-nowrap justify-start gap-[8px]"
                    linkClassName="inline-flex h-[32px] w-[32px] items-center justify-center rounded-md text-[#666666] transition-colors duration-500 hover:text-[#ee0101] no-underline"
                    iconClassName="h-[18px] w-[18px]"
                  />
                </div>
              </div>
              </div>
            </AnimatedSection>

            <AnimatedSection xOffset={50} delay={0.2} className="w-full min-[768px]:w-[48%] min-[1200px]:w-[41.6667%]">
              <div className="mona-contact-form mb-[40px]">
                <div className="contact-heading mb-[20px]">
                  <h2 className="text-left text-[48px] max-[1199px]:text-[30px] max-[991px]:text-[36px] max-[767px]:text-[24px]">
                    Contact Me
                  </h2>
                  <p className="mt-[10px] text-left text-[16px] text-[#666666]">
                    I&apos;m here to listen. Share your thoughts, make enquiries ask questions or just say Hi -
                    I&apos;m looking forward to hearing from you!
                  </p>
                </div>

                <ContactForm />
              </div>
            </AnimatedSection>
          </div>


        </div>
      </section>
    </main>
  )
}
