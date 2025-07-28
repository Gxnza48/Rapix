"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Founders() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".founders-title",
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
        ".founder-card",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
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

  const founders = [
    {
      name: "Gonzalo Boandeo",
      role: t("founders.gonzalo-role"),
      description: t("founders.gonzalo-desc"),
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Bruno Vasquez Rossi",
      role: t("founders.bruno-role"),
      description: t("founders.bruno-desc"),
      avatar: "/placeholder.svg?height=120&width=120",
    },
  ]

  return (
    <section id="founders" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="founders-title text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            {t("founders.title")}
          </h2>
          <p className="founders-title text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("founders.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="founder-card bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 text-center"
            >
              <img
                src={founder.avatar || "/placeholder.svg"}
                alt={founder.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto mb-4 sm:mb-6 border-4 border-black/10"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2">{founder.name}</h3>
              <p className="text-black/70 font-semibold text-base sm:text-lg mb-3 sm:mb-4">{founder.role}</p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{founder.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
