"use client"

import Lenis from "@studio-freight/lenis"

export function initLenis() {
  const lenis = new Lenis({
    duration: 1, // Slightly reduced duration for potentially snappier feel
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: true,
    touchMultiplier: 5, // Increased significantly for better touchpad responsiveness
    infinite: false,
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return lenis
}
