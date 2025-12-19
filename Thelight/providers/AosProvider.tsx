"use client"

import { useEffect } from "react"

export default function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically import AOS to avoid build errors if not installed
    import("aos").then((AOS) => {
      import("aos/dist/aos.css")
      AOS.default.init({ duration: 800, easing: "slide", once: true })
    })
  }, [])

  return <>{children}</>
}
