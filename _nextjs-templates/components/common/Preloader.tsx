// components/common/Preloader.tsx
'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide preloader after a short delay
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative w-24 h-24">
        {/* Animated spinner */}
        <div
          className="absolute inset-0 rounded-full border-4 border-gray-200"
          style={{
            borderTopColor: '#ee0101',
            animation: 'spin 1s linear infinite',
          }}
        />

        {/* Center logo or text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/logo.png"
            alt="Loading..."
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
