"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="nosotros" ref={containerRef} className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Sobre Nosotros</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              ESAENZ.ARQ es un estudio de arquitectura dedicado a crear espacios que combinan estética contemporánea con
              funcionalidad práctica.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Nuestra filosofía se basa en escuchar las necesidades de cada cliente y transformarlas en diseños únicos
              que reflejan su personalidad y estilo de vida.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Con años de experiencia en proyectos residenciales y comerciales, nos especializamos en crear ambientes
              que inspiran y perduran en el tiempo.
            </p>
          </motion.div>

          <motion.div style={{ y }} className="relative h-[500px] rounded-sm overflow-hidden">
            <img src="/modern-architecture-studio-workspace-design-team.jpg" alt="Estudio ESAENZ.ARQ" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
