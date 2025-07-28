"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HighlightText } from "./highlight-text" // Import HighlightText

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const { t, language } = useLanguage()
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden"
    >
      {/* Pastel Blob Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#69f591]/30 to-transparent filter blur-3xl opacity-30 animate-pastel-blob-move-1"
          style={{ top: "10%", left: "5%" }}
        />
        <div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-300/30 to-transparent filter blur-3xl opacity-30 animate-pastel-blob-move-2"
          style={{ bottom: "15%", right: "10%" }}
        />
        <div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-purple-300/30 to-transparent filter blur-3xl opacity-30 animate-pastel-blob-move-3"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="cta-content space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <HighlightText
              text={t("cta.title")}
              keywords={language === "es" ? ["acelerar tu negocio"] : ["accelerate your business"]}
              className="italic gradient-text-grey"
            />
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">{t("cta.subtitle")}</p>
          <div className="pt-3 sm:pt-4">
            <button className="group bg-white text-black px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg flex items-center space-x-2 sm:space-x-3 mx-auto hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              <span>{t("cta.button")}</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
