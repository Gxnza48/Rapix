"use client"

import { useEffect, useRef } from "react"
import { CheckCircle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import WaveDivider from "@/components/wave-divider"

gsap.registerPlugin(ScrollTrigger)

export default function Pricing() {
  const { t, language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      )

      gsap.fromTo(
        ".pricing-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [t("pricing.feature1"), t("pricing.feature2"), t("pricing.feature3"), t("pricing.feature4")]

  return (
    <section id="pricing" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="pricing-title text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            {t("pricing.title")}
          </h2>
          <p className="pricing-title text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">{t("pricing.subtitle")}</p>
        </div>

        <div className="bg-black text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-800 flex flex-col items-center max-w-md mx-auto">
          {/* Price Display */}
          <div className="pricing-item mb-6 sm:mb-8">
            <p
              className={`font-extrabold text-white leading-none whitespace-nowrap ${language === "es" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-5xl sm:text-6xl lg:text-7xl"}`}
            >
              {t("pricing.current-price")}
            </p>
            <p className="text-lg sm:text-xl text-gray-400 line-through mt-2 whitespace-nowrap">
              ({t("pricing.regular-price")})
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5 text-left w-full max-w-xs">
            {features.map((feature, index) => (
              <div key={index} className="pricing-item flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <p className="text-base sm:text-lg text-gray-200">{feature}</p>
              </div>
            ))}
          </div>

          <div className="pricing-item mt-8 sm:mt-10">
            <button className="group bg-white text-black px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg flex items-center space-x-2 sm:space-x-3 mx-auto hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              <span>{t("pricing.cta")}</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      <WaveDivider fillColor="fill-gray-50" /> {/* Wave divider for transition to FAQ */}
    </section>
  )
}
