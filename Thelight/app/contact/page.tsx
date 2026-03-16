import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contact | Tobi Adebayo",
  description: "Get in touch with Tobi Adebayo for commissions, collaborations, and inquiries.",
}

export default function ContactPage() {
  return (
    <main className="bg-white font-sans text-[#232323]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="mb-10 text-[48px] font-bold leading-tight">Contact me</h1>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Image
              src="/images/tobi.jpg"
              alt="Tobi Adebayo"
              width={900}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold">Contact Me</h2>
            <p className="mb-6 text-[20px] leading-[1.5] text-[#666666]">
              I&apos;m here to listen. Share your thoughts, make enquiries, ask questions, or just say hi.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="h-[50px] w-full border border-[#232323] px-5 text-base text-[#232323] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-[50px] w-full border border-[#232323] px-5 text-base text-[#232323] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="h-[50px] w-full border border-[#232323] px-5 text-base text-[#232323] outline-none"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full border border-[#232323] p-5 text-base text-[#232323] outline-none"
              />
              <button
                type="submit"
                className="h-[50px] border border-[#232323] bg-[#232323] px-8 text-base font-semibold text-white"
              >
                Contact Me
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <article>
            <h3 className="mb-2 text-2xl font-bold">Email</h3>
            <p className="text-[20px] leading-[1.5] text-[#666666]">tobiadebayoart@gmail.com</p>
          </article>
          <article>
            <h3 className="mb-2 text-2xl font-bold">Social Media</h3>
            <p className="text-[20px] leading-[1.5] text-[#666666]">Instagram · X · Facebook · LinkedIn · TikTok</p>
          </article>
          <article>
            <h3 className="mb-2 text-2xl font-bold">Location</h3>
            <p className="text-[20px] leading-[1.5] text-[#666666]">Nigeria</p>
          </article>
        </div>
      </div>
    </main>
  )
}
