'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(data: FormData) {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setStatus('sent')
        reset()
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-6">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          {...register('fullName')}
          type="text"
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-black dark:focus:border-white dark:bg-zinc-800 dark:text-white transition-colors"
          placeholder="Your name"
        />
        {errors.fullName && (
          <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-black dark:focus:border-white dark:bg-zinc-800 dark:text-white transition-colors"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold mb-2">Phone (Optional)</label>
        <input
          {...register('phone')}
          type="tel"
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-black dark:focus:border-white dark:bg-zinc-800 dark:text-white transition-colors"
          placeholder="Your phone number"
        />
        {errors.phone && (
          <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          {...register('message')}
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-black dark:focus:border-white dark:bg-zinc-800 dark:text-white transition-colors h-32"
          placeholder="Write your message here..."
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {/* Status Messages */}
      {status === 'sent' && (
        <div className="p-3 bg-green-50 dark:bg-green-900 rounded border border-green-200 dark:border-green-700">
          <p className="text-green-600 dark:text-green-100 font-semibold text-center">
            ✓ Message sent — thank you! I'll get back to you soon.
          </p>
        </div>
      )}
      {status === 'error' && (
        <div className="p-3 bg-red-50 dark:bg-red-900 rounded border border-red-200 dark:border-red-700">
          <p className="text-red-600 dark:text-red-100 font-semibold text-center">
            ✗ Failed to send. Please try again later.
          </p>
        </div>
      )}
    </form>
  )
}
