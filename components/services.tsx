"use client"

import { useEffect, useRef } from "react"
import { Rocket, Search, DollarSign } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import WaveDivider from "@/components/wave-divider"
import { HighlightText } from "./highlight-text" // Import HighlightText

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const { t, language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".services-title",
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: Rocket,
      title: t("services.fast-landing-pages"),
      description: t("services.fast-landing-pages-desc"),
    },
    {
      icon: Search,
      title: t("services.fast-seo"),
      description: t("services.fast-seo-desc"),
    },
    {
      icon: DollarSign,
      title: t("services.low-prices"),
      description: t("services.low-prices-desc"),
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="services-title text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            {t("services.title")}
          </h2>
          <p className="services-title text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            <HighlightText
              text={t("services.subtitle")}
              keywords={language === "es" ? ["velocidad y eficiencia"] : ["speed and efficiency"]}
              className="italic gradient-text-grey"
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Green accent on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#69f591] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-full mb-6 ring-2 ring-black/10">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider fillColor="fill-gray-50" /> {/* Wave divider for transition to About */}
    </section>
  )
}
