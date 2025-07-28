"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )

      // Floating animation for sparkles
      gsap.to(".floating-sparkle", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden"
    >
      {" "}
      {/* Adjusted padding */}
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <Sparkles
            key={i}
            className="floating-sparkle absolute w-4 h-4 sm:w-6 sm:h-6 text-white/10" /* Adjusted size */
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="cta-content space-y-6 sm:space-y-8">
          {" "}
          {/* Adjusted spacing */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{t("cta.title")}</h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">{t("cta.subtitle")}</p>{" "}
          {/* Adjusted text size */}
          <div className="pt-3 sm:pt-4">
            {" "}
            {/* Adjusted padding */}
            <button className="group bg-white text-black px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg flex items-center space-x-2 sm:space-x-3 mx-auto hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              {" "}
              {/* Adjusted padding and text size */}
              <span>{t("cta.button")}</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />{" "}
              {/* Adjusted icon size */}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
