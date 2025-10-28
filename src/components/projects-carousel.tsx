"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Card } from "./ui/card"

const projects = [
  { id: 1, title: "Casa Moderna Minimalista", category: "Residencial", image: "/modern-minimalist-house-architecture-white-concret.jpg" },
  { id: 2, title: "Edificio Corporativo", category: "Comercial", image: "/corporate-office-building-glass-facade-modern.jpg" },
  { id: 3, title: "Reforma Integral", category: "Remodelación", image: "/interior-renovation-modern-apartment-open-space.jpg" },
  { id: 4, title: "Casa de Campo", category: "Residencial", image: "/countryside-house-modern-architecture-nature.jpg" },
  { id: 5, title: "Espacio Comercial", category: "Comercial", image: "/retail-commercial-space-modern-interior-design.jpg" },
]

export function ProjectsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Hacemos que el scroll horizontal avance más lento que el scroll vertical
  const rawX = useTransform(scrollYProgress, [0, 1], ["3%", "-40%"])
  const x = useSpring(rawX, { damping: 35, stiffness: 80 }) // movimiento más suave y lento

  return (
    <section id="proyectos" ref={containerRef} className="py-24 md:py-32 bg-background">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Proyectos Destacados
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Cada proyecto es una historia única de diseño y funcionalidad
        </p>
      </div>

      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-6 min-w-max"
          style={{ x }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-[350px]"
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 30, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative w-[350px] h-[450px] overflow-hidden cursor-pointer border-0 rounded-sm shadow-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-end p-6">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-primary-foreground/80 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.category}
                    </p>
                    <h3 className="text-primary-foreground text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
