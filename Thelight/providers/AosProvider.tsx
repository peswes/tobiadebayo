"use client"

import { useEffect } from "react"
import "aos/dist/aos.css"

export default function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically import AOS to avoid build errors if not installed
    import("aos").then((AOS: any) => {
      AOS.default.init({ duration: 800, easing: "slide", once: true })
    })
  }, [])

  return <>{children}</>
}
