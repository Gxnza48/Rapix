"use client"

import { useEffect, useRef } from "react"
import { Target, Eye, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const { t } = useLanguage()
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
    },
    {
      icon: Eye,
      title: t("about.vision"),
      description: t("about.vision-text"),
    },
    {
      icon: Heart,
      title: t("about.values"),
      description: t("about.values-text"),
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {" "}
      {/* Adjusted padding */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          {" "}
          {/* Adjusted margin-bottom */}
          <h2 className="about-title text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            {t("about.title")}
          </h2>{" "}
          {/* Adjusted text size and margin */}
          <p className="about-title text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">{t("about.subtitle")}</p>{" "}
          {/* Adjusted text size */}
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-16">
          {" "}
          {/* Adjusted gap */}
          {values.map((value, index) => (
            <div key={index} className="about-item text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full mb-6 sm:mb-8">
                {" "}
                {/* Adjusted icon size */}
                <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" /> {/* Adjusted icon size */}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">{value.title}</h3>{" "}
              {/* Adjusted text size */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{value.description}</p>{" "}
              {/* Adjusted text size */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
