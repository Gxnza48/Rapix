"use client"

import { useEffect, useRef } from "react"
import { Target, Eye, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import WaveDivider from "@/components/wave-divider"
import { HighlightText } from "./highlight-text" // Import HighlightText

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const { t, language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-title",
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
        ".about-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
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

  const values = [
    {
      icon: Target,
      title: t("about.mission"),
      description: t("about.mission-text"),
      keywords: language === "es" ? ["ultrarrápidas"] : ["ultra-fast"],
    },
    {
      icon: Eye,
      title: t("about.vision"),
      description: t("about.vision-text"),
      keywords: language === "es" ? ["alta velocidad"] : ["high-speed"],
    },
    {
      icon: Heart,
      title: t("about.values"),
      description: t("about.values-text"),
      keywords: language === "es" ? ["excelencia"] : ["excellence"],
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="about-title text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            {t("about.title")}
          </h2>
          <p className="about-title text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-16">
          {values.map((value, index) => (
            <div key={index} className="about-item text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full mb-6 sm:mb-8">
                <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">{value.title}</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                <HighlightText
                  text={value.description}
                  keywords={value.keywords}
                  className="italic gradient-text-grey"
                />
              </p>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider fillColor="fill-white" /> {/* Wave divider for transition to Services */}
    </section>
  )
}
