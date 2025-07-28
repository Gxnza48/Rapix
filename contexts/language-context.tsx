"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Header
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",

    // Hero
    "hero.headline": "Soluciones web rápidas para un mundo en movimiento.",
    "hero.subtitle": "Desarrollamos experiencias digitales de alta velocidad que impulsan tu negocio hacia el futuro.",
    "hero.cta": "Comenzar ahora",
    "hero.learn-more": "Conocer más",
    "hero.chip-fast": "Ultra Rápido",
    "hero.chip-growth": "Impulsa tu Crecimiento",
    "hero.chip-secure": "Seguridad Garantizada",

    // Services
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones tecnológicas diseñadas para la velocidad y eficiencia",
    "services.fast-landing-pages": "Landing Pages Rápidas",
    "services.fast-landing-pages-desc": "Sitios web listos en máximo 7 días para salir al aire.",
    "services.fast-seo": "SEO Rápido",
    "services.fast-seo-desc": "Optimización para alta visibilidad en buscadores y tráfico orgánico.",
    "services.low-prices": "Precios Bajos",
    "services.low-prices-desc": "Soluciones de alta calidad a precios competitivos y transparentes.",

    // About
    "about.title": "Sobre RapiX",
    "about.subtitle": "Velocidad, calidad y innovación en cada proyecto",
    "about.mission": "Nuestra Misión",
    "about.mission-text":
      "Transformar ideas en soluciones digitales ultrarrápidas que superen las expectativas de nuestros clientes.",
    "about.vision": "Nuestra Visión",
    "about.vision-text":
      "Ser líderes globales en desarrollo web de alta velocidad, estableciendo nuevos estándares de rendimiento.",
    "about.values": "Nuestros Valores",
    "about.values-text": "Velocidad, calidad, innovación y compromiso con la excelencia en cada línea de código.",

    // Founders
    "founders.title": "Conoce a Nuestros Fundadores",
    "founders.subtitle": "La visión y el liderazgo detrás de RapiX.",
    "founders.gonzalo-role": "Co-Fundador & CTO",
    "founders.gonzalo-desc":
      "Con una visión clara para la innovación, Gonzalo lidera el desarrollo tecnológico, asegurando que RapiX esté siempre a la vanguardia de las soluciones web de alta velocidad.",
    "founders.bruno-role": "Co-Fundador & CEO",
    "founders.bruno-desc":
      "Bruno impulsa la estrategia y el crecimiento de RapiX, enfocado en construir relaciones sólidas con los clientes y expandir nuestra presencia global con soluciones eficientes.",

    // Contact
    "contact.title": "Contáctanos",
    "contact.subtitle": "¿Listo para acelerar tu proyecto? Contáctanos directamente.",
    "contact.email-title": "Email",
    "contact.whatsapp-title": "WhatsApp",
    "contact.why-choose-us-title": "¿Por qué elegirnos?",
    "contact.reason1": "Respuesta rápida y eficiente",
    "contact.reason2": "Consulta inicial gratuita",
    "contact.reason3": "Soluciones personalizadas",
    "contact.reason4": "Soporte técnico continuo",

    // Pricing (HERO 10)
    "pricing.title": "Precios",
    "pricing.subtitle": "Obtén tu sitio web listo para vender por solo:", // Subtitle without price
    "pricing.current-price": "$200.000", // New key for current price
    "pricing.regular-price": "Ar/s $300.000", // New key for regular price
    "pricing.feature1": "Un sitio web totalmente personalizado",
    "pricing.feature2": "Entregado en 7 días",
    "pricing.feature3": "Guía de estrategia de ventas",
    "pricing.feature4": "Soporte post-entrega de 7 días",
    "pricing.cta": "Agenda una reunión y aclara tus dudas",

    // FAQ (HERO 11)
    "faq.title": "Preguntas Frecuentes",
    "faq.q1": "¿Necesito saber cómo codificar?",
    "faq.a1":
      "No. Nuestros sitios web son 100% autogestionables y editables sin necesidad de conocimientos de programación.",
    "faq.q2": "¿Funcionará si solo tengo un producto?",
    "faq.a2":
      "Sí. Nuestros sitios web están diseñados para adaptarse a cualquier cantidad de productos o servicios, desde uno hasta un catálogo completo.",
    "faq.q3": "¿Puedo usarlo para vender mentorías?",
    "faq.a3":
      "Absolutamente. Nuestras soluciones son versátiles y pueden configurarse para vender cualquier tipo de servicio, incluyendo mentorías, cursos o consultorías.",
    "faq.q4": "¿El sitio web es mío?",
    "faq.a4":
      "Sí, el sitio web es 100% tuyo. Te entregamos la propiedad total, es editable y autogestionable para que tengas control completo.",

    // CTA
    "cta.title": "¿Listo para acelerar tu negocio ?",
    "cta.subtitle": "Únete a las empresas que ya experimentan la velocidad de RapiX",
    "cta.button": "Contactanos por tu web ahora mismo!",

    // Footer
    "footer.description": "Soluciones web ultrarrápidas que impulsan tu negocio hacia el futuro digital.",
    "footer.services": "Servicios",
    "footer.web-dev": "Desarrollo Web",
    "footer.mobile-apps": "Apps Móviles",
    "footer.cloud-solutions": "Cloud Solutions",
    "footer.optimization": "Optimización",
    "footer.company": "Empresa",
    "footer.support": "Soporte",
    "footer.terms": "Términos",
    "footer.privacy": "Privacidad",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Header
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.headline": "Fast web solutions for a world in motion.",
    "hero.subtitle": "We develop high-speed digital experiences that drive your business into the future.",
    "hero.cta": "Get Started",
    "hero.learn-more": "Learn More",
    "hero.chip-fast": "Ultra Fast",
    "hero.chip-growth": "Drive Your Growth",
    "hero.chip-secure": "Guaranteed Security",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Technology solutions designed for speed and efficiency",
    "services.fast-landing-pages": "Fast Landing Pages",
    "services.fast-landing-pages-desc": "Websites ready in max 7 days to go live.",
    "services.fast-seo": "Fast SEO",
    "services.fast-seo-desc": "Optimization for high search engine visibility and organic traffic.",
    "services.low-prices": "Low Prices",
    "services.low-prices-desc": "High-quality solutions at competitive and transparent prices.",

    // About
    "about.title": "About RapiX",
    "about.subtitle": "Speed, quality and innovation in every project",
    "about.mission": "Our Mission",
    "about.mission-text": "Transform ideas into ultra-fast digital solutions that exceed our clients' expectations.",
    "about.vision": "Our Vision",
    "about.vision-text": "To be global leaders in high-speed web development, setting new performance standards.",
    "about.values": "Our Values",
    "about.values-text": "Speed, quality, innovation and commitment to excellence in every line of code.",

    // Founders
    "founders.title": "Meet Our Founders",
    "founders.subtitle": "The vision and leadership behind RapiX.",
    "founders.gonzalo-role": "Co-Founder & CTO",
    "founders.gonzalo-desc":
      "With a clear vision for innovation, Gonzalo leads technological development, ensuring RapiX is always at the forefront of high-speed web solutions.",
    "founders.bruno-role": "Co-Founder & CEO",
    "founders.bruno-desc":
      "Bruno drives RapiX's strategy and growth, focused on building strong client relationships and expanding our global presence with efficient solutions.",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to accelerate your project? Contact us directly.",
    "contact.email-title": "Email",
    "contact.whatsapp-title": "WhatsApp",
    "contact.why-choose-us-title": "Why choose us?",
    "contact.reason1": "Fast and efficient response",
    "contact.reason2": "Free initial consultation",
    "contact.reason3": "Customized solutions",
    "contact.reason4": "Continuous technical support",

    // Pricing (HERO 10)
    "pricing.title": "Pricing",
    "pricing.subtitle": "Get your ready-to-sell website for only:", // Subtitle without price
    "pricing.current-price": "$200 USD", // New key for current price
    "pricing.regular-price": "$300 USD", // New key for regular price
    "pricing.feature1": "A fully customized website",
    "pricing.feature2": "Delivered in 7 days",
    "pricing.feature3": "Sales strategy guidance",
    "pricing.feature4": "7-day post-delivery support",
    "pricing.cta": "Schedule a meeting and clear your doubts",

    // FAQ (HERO 11)
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "Do I need to know how to code?",
    "faq.a1": "No. Our websites are 100% self-manageable and editable without any coding knowledge.",
    "faq.q2": "Will this work if I have only one product?",
    "faq.a2":
      "Yes. Our websites are designed to adapt to any number of products or services, from one to a full catalog.",
    "faq.q3": "Can I use it to sell mentorships?",
    "faq.a3":
      "Absolutely. Our solutions are versatile and can be configured to sell any type of service, including mentorships, courses, or consultations.",
    "faq.q4": "Is the website mine?",
    "faq.a4":
      "Yes, the website is 100% yours. We hand over full ownership, it's editable and self-manageable so you have complete control.",

    // CTA
    "cta.title": "Ready to accelerate your business ?",
    "cta.subtitle": "Join the companies already experiencing RapiX speed",
    "cta.button": "Request your solution now",

    // Footer
    "footer.description": "Ultra-fast web solutions that propel your business into the digital future.",
    "footer.services": "Services",
    "footer.web-dev": "Web Development",
    "footer.mobile-apps": "Mobile Apps",
    "footer.cloud-solutions": "Cloud Solutions",
    "footer.optimization": "Optimization",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["es"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
