"use client"

import { ReactNode, useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // suavidad de desplazamiento
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // curva easeOutExpo
      smoothWheel: true, // suaviza el scroll con mouse
      wheelMultiplier: 1, // sensibilidad del scroll
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
