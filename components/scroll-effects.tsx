"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollEffects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating elements that move on scroll
      gsap.to(".floating-element", {
        y: -100,
        rotation: 360,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

      // Parallax background elements
      gsap.to(".parallax-slow", {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      })

      gsap.to(".parallax-fast", {
        y: -400,
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      })

      // Scale elements on scroll
      gsap.fromTo(
        ".scale-on-scroll",
        { scale: 0.8, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".scale-on-scroll",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="floating-element absolute top-1/4 left-10 w-8 h-8 bg-black/5 rounded-full" />
      <div className="floating-element absolute top-1/3 right-20 w-6 h-6 bg-black/10 rotate-45" />
      <div className="floating-element absolute top-2/3 left-1/4 w-4 h-4 bg-black/5 rounded-full" />
      <div className="floating-element absolute bottom-1/4 right-10 w-10 h-10 bg-black/5 rotate-12" />

      {/* Parallax background elements */}
      <div className="parallax-slow absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-br from-black/5 to-transparent rounded-full" />
      <div className="parallax-fast absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-tr from-black/10 to-transparent rotate-45" />
      <div className="parallax-slow absolute bottom-20 left-1/3 w-20 h-20 bg-black/5 rounded-full" />

      {/* Moving lines */}
      <div className="parallax-fast absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="parallax-slow absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />

      {/* Scale elements */}
      <div className="scale-on-scroll absolute top-1/2 right-1/3 w-16 h-16 bg-black/5 rounded-2xl rotate-12" />
      <div className="scale-on-scroll absolute bottom-1/3 left-1/2 w-12 h-12 bg-black/10 rounded-full" />
    </div>
  )
}
