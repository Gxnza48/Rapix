"use client"
import { useEffect, useRef } from "react"
import { Mail, CheckCircle, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import WaveDivider from "@/components/wave-divider"
import { HighlightText } from "./highlight-text" // Import HighlightText

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const { t, language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-title",
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
        ".contact-content-item",
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

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.email-title"),
      value: "rapixcorp@gmail.com",
      link: "mailto:rapixcorp@gmail.com",
    },
    {
      icon: MessageCircle,
      title: t("contact.whatsapp-title"),
      value: "+54 9341 585 0155",
      link: "https://wa.me/5493415850155",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="contact-title text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            {t("contact.title")}
          </h2>
          <p className="contact-title text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            <HighlightText
              text={t("contact.subtitle")}
              keywords={language === "es" ? ["acelerar tu proyecto"] : ["accelerate your project"]}
              className="italic gradient-text-grey"
            />
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-content-item bg-gray-50 p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <info.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl sm:text-2xl text-black mb-2">{info.title}</h3>
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-base sm:text-lg hover:text-black transition-colors"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 max-w-2xl mx-auto">
          <h4 className="contact-content-item text-xl sm:text-2xl font-bold text-black mb-6">
            {t("contact.why-choose-us-title")}
          </h4>
          <ul className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg">
            <li className="contact-content-item flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{t("contact.reason1")}</span>
            </li>
            <li className="contact-content-item flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{t("contact.reason2")}</span>
            </li>
            <li className="contact-content-item flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{t("contact.reason3")}</span>
            </li>
            <li className="contact-content-item flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{t("contact.reason4")}</span>
            </li>
          </ul>
        </div>
      </div>
      <WaveDivider fillColor="fill-black" /> {/* Wave divider for transition to CTA */}
    </section>
  )
}
