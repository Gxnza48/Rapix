"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Play, Zap, TrendingUp, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { HighlightText } from "./highlight-text"

export default function Hero() {
  const { t, language } = useLanguage()
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(".hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
        .fromTo(
          ".hero-subtitle",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-buttons",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          ".hero-visual",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.8",
        )
        .fromTo(
          ".status-chip",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.5",
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const statusChips = [
    { icon: Zap, text: t("hero.chip-fast") },
    { icon: TrendingUp, text: t("hero.chip-growth") },
    { icon: ShieldCheck, text: t("hero.chip-secure") },
  ]

  return (
    <section ref={heroRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center flex flex-col-reverse lg:flex-row">
          {/* Visual Element - Now appears above content on mobile */}
          <div className="hero-visual relative mt-12 lg:mt-0 order-first lg:order-none">
            <div className="relative w-full h-56 sm:h-72 lg:h-96 flex items-center justify-center">
              <div className="relative">
                <img
                  src="https://i.ibb.co/hrMJFwL/d4fec341-4851-4613-b384-b6c4400f5cbe-removalai-preview.png"
                  alt="RapiX Logo"
                  className="h-28 sm:h-36 lg:h-48 w-auto filter drop-shadow-2xl"
                />
                <div className="absolute inset-0 -m-6 sm:-m-12 border-2 border-black/20 rounded-full" />
                <div className="absolute inset-0 -m-12 sm:-m-18 border border-black/10 rounded-full" />
                <div className="absolute inset-0 -m-18 sm:-m-24 border border-black/5 rounded-full" />
              </div>
            </div>
          </div>

          {/* Content - Now appears below visual on mobile */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              <HighlightText
                text={t("hero.headline")}
                keywords={language === "es" ? ["rápidas"] : ["motion"]}
                className="italic gradient-text-supabase-green pr-0.5"
              />
            </h1>
            <p className="hero-subtitle text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <HighlightText
                text={t("hero.subtitle")}
                keywords={language === "es" ? ["alta velocidad"] : ["high-speed"]}
                className="italic gradient-text-supabase-green pr-0.5"
              />
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                <span>{t("hero.cta")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-black text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-black hover:text-white transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>{t("hero.learn-more")}</span>
              </button>
            </div>
            {/* Status Modern Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
              {statusChips.map((chip, index) => (
                <div
                  key={index}
                  className="status-chip flex items-center gap-2 bg-green-50 text-green-800 text-sm px-4 py-2 rounded-full shadow-sm"
                >
                  <chip.icon className="w-4 h-4" />
                  <span>{chip.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
