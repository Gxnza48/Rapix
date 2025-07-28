"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const headerRef = useRef<HTMLElement>(null) // Ref for the header element

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for header items
      gsap.fromTo(
        ".header-item",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      )

      // Use matchMedia for responsive ScrollTrigger
      const mm = gsap.matchMedia()

      mm.add("(min-width: 768px)", () => {
        // Apply only for desktop (md breakpoint and above)
        gsap.to(headerRef.current, {
          yPercent: -100, // Hide by moving up 100% of its height
          ease: "power2.in",
          scrollTrigger: {
            trigger: document.documentElement, // Trigger on the whole document scroll
            start: "top top", // Start when the top of the viewport hits the top of the document
            end: "bottom top", // End when the bottom of the viewport hits the top of the document
            scrub: true, // Link animation to scroll position
            onUpdate: (self) => {
              if (self.direction === 1) {
                // Scrolling down
                gsap.to(headerRef.current, { yPercent: -100, duration: 0.3, ease: "power2.in" })
              } else {
                // Scrolling up
                gsap.to(headerRef.current, { yPercent: 0, duration: 0.3, ease: "power2.out" })
              }
            },
          },
        })
      })
    }, headerRef) // Pass headerRef to gsap.context

    return () => ctx.revert() // Clean up all animations created in this context
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <header
      ref={headerRef}
      className="floating-nav fixed top-4 left-4 right-4 z-50 bg-white/80 backdrop-blur-xl border border-black/10 rounded-2xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="header-item flex-shrink-0">
            <img
              src="https://i.ibb.co/hrMJFwL/d4fec341-4851-4613-b384-b6c4400f5cbe-removalai-preview.png"
              alt="RapiX Logo"
              className="logo-glow h-12 sm:h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="header-item text-black hover:text-gray-600 transition-colors font-medium">
              {t("nav.services")}
            </a>
            <a href="#about" className="header-item text-black hover:text-gray-600 transition-colors font-medium">
              {t("nav.about")}
            </a>
            <a href="#contact" className="header-item text-black hover:text-gray-600 transition-colors font-medium">
              {t("nav.contact")}
            </a>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="header-item flex items-center space-x-1 px-3 py-1 rounded-full border border-black/10 hover:border-black/20 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="header-item md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-black/5">
            <div className="flex flex-col space-y-4 items-center">
              <a
                href="#services"
                className="text-black hover:text-gray-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.services")}
              </a>
              <a
                href="#about"
                className="text-black hover:text-gray-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </a>
              <a
                href="#contact"
                className="text-black hover:text-gray-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
