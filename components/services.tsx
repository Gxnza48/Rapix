"use client"

import { useEffect, useRef } from "react"
import { Rocket, Search, DollarSign } from "lucide-react" // Updated icons
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-item",
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
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="services-title text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            {t("services.title")}
          </h2>
          <p className="services-title text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item flex flex-col items-center gap-8 sm:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-2xl mb-4 sm:mb-6">
                  <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2 sm:mb-4">{service.title}</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {service.description}
                </p>
              </div>
              <div className="flex-1">
                <div className="w-full h-48 sm:h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-20 h-20 sm:w-24 sm:h-24 text-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
