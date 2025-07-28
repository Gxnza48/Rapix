"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Show/hide button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Animate button visibility
  useEffect(() => {
    if (buttonRef.current) {
      if (isVisible) {
        gsap.to(buttonRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      } else {
        gsap.to(buttonRef.current, { y: 50, opacity: 0, duration: 0.5, ease: "power3.in" })
      }
    }
  }, [isVisible])

  // Scroll to top smoothly
  const scrollToTop = () => {
    gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.out" })
  }

  return (
    <Button
      ref={buttonRef}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-black text-white shadow-lg z-50
        ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`} // Control pointer events
      style={{ transform: isVisible ? "translateY(0)" : "translateY(50px)", opacity: isVisible ? 1 : 0 }} // Initial state for GSAP
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  )
}
