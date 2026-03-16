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
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="section-gap-30">
      <div className="form-field">
        <label htmlFor="fullName">
          Full Name <span style={{ color: "#e20000" }}>*</span>
        </label>
        <input
          id="fullName"
          {...register('fullName')}
          type="text"
          className="w-full"
          placeholder="Your name"
        />
        {errors.fullName && (
          <p style={{ color: "#e20000", fontSize: "14px", marginTop: "6px" }}>{errors.fullName.message}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="email">
          Email <span style={{ color: "#e20000" }}>*</span>
        </label>
        <input
          id="email"
          {...register('email')}
          type="email"
          className="w-full"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p style={{ color: "#e20000", fontSize: "14px", marginTop: "6px" }}>{errors.email.message}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone (Optional)</label>
        <input
          id="phone"
          {...register('phone')}
          type="tel"
          className="w-full"
          placeholder="Your phone number"
        />
        {errors.phone && (
          <p style={{ color: "#e20000", fontSize: "14px", marginTop: "6px" }}>{errors.phone.message}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="message">
          Message <span style={{ color: "#e20000" }}>*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          className="w-full"
          placeholder="Write your message here..."
        />
        {errors.message && (
          <p style={{ color: "#e20000", fontSize: "14px", marginTop: "6px" }}>{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="primary-button"
        style={{ width: "100%" }}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'sent' && (
        <div className="content-card" style={{ border: "1px solid #a6a6a6" }}>
          <p style={{ color: "#232323", textAlign: "center", fontWeight: 600 }}>
            ✓ Message sent — thank you! I&apos;ll get back to you soon.
          </p>
        </div>
      )}
      {status === 'error' && (
        <div className="content-card" style={{ border: "1px solid #e20000" }}>
          <p style={{ color: "#e20000", textAlign: "center", fontWeight: 600 }}>
            ✗ Failed to send. Please try again later.
          </p>
        </div>
      )}
    </form>
  )
}
