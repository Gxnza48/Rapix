"use client"

import { useEffect } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Founders from "@/components/founders" // Updated import
import Contact from "@/components/contact"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { initLenis } from "@/lib/lenis"
import ScrollEffects from "@/components/scroll-effects"

export default function Home() {
  useEffect(() => {
    initLenis()
  }, [])

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white relative overflow-x-hidden">
        {/* Enhanced Grid Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Primary Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
        linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
      `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Secondary Grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
        linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)
      `,
              backgroundSize: "200px 200px",
            }}
          />

          {/* Animated Grid Lines */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent animate-pulse"
                style={{
                  top: `${20 + i * 20}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: "3s",
                }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full w-px bg-gradient-to-b from-transparent via-black/5 to-transparent animate-pulse"
                style={{
                  left: `${20 + i * 20}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: "4s",
                }}
              />
            ))}
          </div>

          {/* Floating Dots */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={`dot-${i}`}
                className="absolute w-1 h-1 bg-black/10 rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <ScrollEffects />
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Founders /> {/* Updated component */}
          <Contact />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
