"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

type FormData = {
  fullName: string
  email: string
  phone?: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [status, setStatus] = useState<string | null>(null)

  async function onSubmit(data: FormData) {
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setStatus("sent")
        reset()
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4">
      <div>
        <label className="block text-sm">Full name</label>
        <input {...register("fullName", { required: true })} className="w-full border p-2" />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input {...register("email", { required: true })} type="email" className="w-full border p-2" />
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input {...register("phone")} className="w-full border p-2" />
      </div>
      <div>
        <label className="block text-sm">Message</label>
        <textarea {...register("message", { required: true })} className="w-full border p-2 h-28" />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Full Name *</label>
        <input {...register("fullName", { required: true })} className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-black dark:focus:border-white dark:bg-zinc-800 dark:text-white transition-colors" placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Email *</label>
        <input {...register("email", { required: true })} type="email" className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-black dark:focus:border-white dark:bg-zinc-800 dark:text-white transition-colors" placeholder="your@email.com" />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Phone</label>
        <input {...register("phone")} className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-black dark:focus:border-white dark:bg-zinc-800 dark:text-white transition-colors" placeholder="Your phone number" />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Message *</label>
        <textarea {...register("message", { required: true })} className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-black dark:focus:border-white dark:bg-zinc-800 dark:text-white transition-colors h-32" placeholder="Write your message here..." />
      </div>
      <div>
        <button className="w-full px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </div>

      {status === "sent" && <p className="text-green-600 font-semibold text-center py-3 bg-green-50 dark:bg-green-900 rounded">✓ Message sent — thank you!</p>}
      {status === "error" && <p className="text-red-600 font-semibold text-center py-3 bg-red-50 dark:bg-red-900 rounded">✗ Failed to send. Try again later.</p>}
    </form>
  )
}
