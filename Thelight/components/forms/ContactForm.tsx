'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Phone number is required'),
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
    } catch (error) {
      console.error('Contact submission failed', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form-fields">
      <div className="form-field">
        <label htmlFor="fullName">Name:</label>
        <input id="fullName" {...register('fullName')} type="text" className="w-full" placeholder="Full Name" />
        {errors.fullName && (
          <p className="form-error">{errors.fullName.message}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          {...register('email')}
          type="email"
          className="w-full"
          placeholder="Email"
        />
        {errors.email && (
          <p className="form-error">{errors.email.message}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone No:</label>
        <input
          id="phone"
          {...register('phone')}
          type="tel"
          className="w-full"
          placeholder="e.g. 234 812 345 6789"
        />
        {errors.phone && (
          <p className="form-error">{errors.phone.message}</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          {...register('message')}
          className="w-full"
          placeholder="Message"
          rows={8}
        />
        {errors.message && (
          <p className="form-error">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="contact-submit-button mt-[15px]"
      >
        {status === 'sending' ? 'Sending...' : 'Contact Me'}
      </button>

      {status === 'sent' && (
        <div className="form-notice form-notice-success">
          <p>✓ Message sent — thank you! I&apos;ll get back to you soon.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="form-notice form-notice-error">
          <p>✗ Failed to send. Please try again later.</p>
        </div>
      )}
    </form>
  )
}
