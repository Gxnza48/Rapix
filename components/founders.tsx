"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Instagram, Github } from "lucide-react"
import { HighlightText } from "./highlight-text"

gsap.registerPlugin(ScrollTrigger)

export default function Founders() {
  const { t, language } = useLanguage()
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
      avatar: "https://i.ibb.co/hJX7gHb4/ecdf6658-7b79-421c-b6af-c09ed64421aa-removalai-preview.png",
      instagram: "https://www.instagram.com/gonza_bonadeo/",
      github: "https://github.com/Gxnza48",
      keywords: language === "es" ? ["innovación"] : ["innovation"],
    },
    {
      name: "Bruno Vasquez Rossi",
      role: t("founders.bruno-role"),
      description: t("founders.bruno-desc"),
      avatar: "https://i.ibb.co/Kx6tCN1Z/afeb4218-a3e1-4ea6-a50c-a2088e9a137e-removalai-preview.png",
      instagram: "https://www.instagram.com/brunovasquezrossi/",
      // Removed github property for Bruno
      keywords: language === "es" ? ["crecimiento"] : ["growth"],
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
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-black/10 overflow-hidden mx-auto mb-4 sm:mb-6">
                <img
                  src={founder.avatar || "/placeholder.svg"}
                  alt={founder.name}
                  className={`w-full h-full object-cover
                    ${founder.name === "Gonzalo Boandeo" ? "scale-[1.1] object-center" : ""}
                    ${founder.name === "Bruno Vasquez Rossi" ? "scale-[1.4] object-top grayscale" : ""}
                  `}
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2">{founder.name}</h3>
              <p className="text-black/70 font-semibold text-base sm:text-lg mb-3 sm:mb-4">{founder.role}</p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                <HighlightText
                  text={founder.description}
                  keywords={founder.keywords}
                  className="italic gradient-text-supabase-green pr-0.5"
                />
              </p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                {founder.instagram && (
                  <a
                    href={founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram de ${founder.name}`}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                )}
                {founder.github && (
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub de ${founder.name}`}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
