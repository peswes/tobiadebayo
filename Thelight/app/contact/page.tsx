import { Metadata } from "next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/forms/ContactForm"
import SocialIcons, { TOBI_SOCIAL_LINKS } from "@/components/SocialIcons"

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
            <div className="w-full min-[768px]:w-[48%] min-[1200px]:w-[41.6667%]">
              <div className="desktop-sticky-left">
              <div className="casting-form-thumbnail mb-[80px] overflow-hidden rounded-[20px]">
                <Image
                  src="/images/tobi.jpg"
                  alt="Tobi Adebayo"
                  width={900}
                  height={1100}
                  className="h-auto w-full rounded-[20px]"
                  priority
                />
              </div>
              </div>
            </div>

            <div className="w-full min-[768px]:w-[48%] min-[1200px]:w-[41.6667%]">
              <div className="mona-contact-form mb-[80px]">
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
            </div>
          </div>

          <div className="flex flex-wrap items-start">
            <article className="single-contact-card mb-[80px] w-full min-[992px]:w-1/3">
              <h2>Email</h2>
              <h6>
                <a
                  href="mailto:tobiadebayoart@gmail.com"
                  className="text-[#333333] transition-colors duration-500 hover:text-[#ee0101]"
                >
                  tobiadebayoart@gmail.com
                </a>
              </h6>
            </article>

            <article className="single-contact-card mb-[80px] w-full min-[992px]:w-1/3">
              <h2>Social Media</h2>
                <SocialIcons items={TOBI_SOCIAL_LINKS} containerClassName="flex-wrap justify-center gap-[20px]" />
              </article>

            <div className="hidden min-[992px]:block min-[992px]:w-1/3" aria-hidden="true" />
          </div>
        </div>
      </section>
    </main>
  )
}
