"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")

  // Detecta dirección del scroll
  useEffect(() => {
    let lastY = window.scrollY
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrollDirection(currentY > lastY ? "down" : "up")
      lastY = currentY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative py-32 bg-white text-gray-900 overflow-hidden"
    >
      {/* Fondo difuso minimalista */}
      <motion.div
        className="absolute top-0 left-1/2 w-[80vw] h-[80vw] bg-gradient-to-b from-gray-100 to-transparent rounded-full blur-3xl -translate-x-1/2 opacity-40"
        style={{ y }}
      />

      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto con animación lateral */}
          <motion.div
            initial={{
              opacity: 0,
              x: scrollDirection === "down" ? -80 : 80,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
              Diseñamos espacios que <br />
              <span className="font-semibold text-gray-800">
                inspiran y perduran
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              En <span className="font-medium text-gray-800">ESAENZ.ARQ</span> fusionamos
              la estética contemporánea con la funcionalidad práctica para dar vida
              a proyectos arquitectónicos con identidad.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Cada espacio nace del diálogo con nuestros clientes, transformando sus
              ideas en diseños únicos que reflejan personalidad y estilo de vida.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 md:mt-6 px-8 py-3 border border-primary rounded-full text-primary text-sm uppercase tracking-wide hover:bg-primary hover:text-white transition-all"
            >
              Hablanos de tu proyecto
            </motion.button>
          </motion.div>

          {/* Imagen con movimiento suave y desplazamiento */}
          <motion.div
            style={{ y }}
            initial={{
              opacity: 0,
              x: scrollDirection === "down" ? 80 : -80,
              scale: 0.9,
            }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            className="relative h-[480px] group"
          >
            <div className="absolute inset-0 border border-gray-300 rounded-3xl transform translate-x-2 sm:translate-x-6 translate-y-6 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300"></div>
            <img
              src="/remodelacion-baño-nordelta.webp"
              alt="Estudio ESAENZ.ARQ"
              className="w-full h-full object-cover rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
