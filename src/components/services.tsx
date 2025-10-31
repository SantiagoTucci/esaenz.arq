"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Building2, Boxes, Hammer, ClipboardCheck } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Planos arquitectónicos",
    description: "Diseño detallado de planos técnicos para construcción y aprobación municipal",
  },
  {
    icon: Boxes,
    title: "Modelado y renders 3D",
    description: "Visualización fotorrealista de tu proyecto antes de construir",
  },
  {
    icon: Hammer,
    title: "Reformas y ampliaciones",
    description: "Transformamos espacios existentes en ambientes modernos y funcionales",
  },
  {
    icon: ClipboardCheck,
    title: "Dirección de obra",
    description: "Supervisión profesional para garantizar calidad y cumplimiento de plazos",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32" style={{ backgroundColor: "oklch(0.42 0.02 240)" }}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light leading-tight text-white mb-4 text-balance tracking-tight">
            Nuestros servicios
          </h2>
          {/* <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Soluciones integrales para cada etapa de tu proyecto arquitectónico
          </p> */}
        </motion.div>

        {/* Contenedor principal del grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Services Column */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:border-border/40 transition-all duration-300 border-primary/50 hover:shadow-lg rounded-2xl bg-white/10 backdrop-blur-md flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-1 justify-between items-center text-center">
                      {/* Middle Content */}
                      <div className="flex-1 flex flex-col justify-center">
                        {/* Icon Container centrado */}
                        <div className="w-16 h-16 md:w-22 md:h-22 rounded-full bg-primary/20 flex items-center mb-4 justify-center group-hover:bg-primary/30 transition-colors duration-300 mx-auto">
                          <service.icon className="w-8 h-8 md:w-18 md:h-18 text-white" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 text-balance">{service.title}</h3>
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed">{service.description}</p>
                      </div>

                      {/* Optional Footer */}
                      {/* <div className="mt-4">
                        <button className="text-primary font-semibold hover:underline">Ver más</button>
                      </div> */}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Video Column */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-border/50 bg-white/10 backdrop-blur-sm h-full">
                <blockquote
                  className="tiktok-embed h-full"
                  cite="https://www.tiktok.com/@esaenz.arq/video/7234653541112057094"
                  data-video-id="7234653541112057094"
                  style={{ maxWidth: "100%", minWidth: "325px", height: "100%" }}
                >
                  <section>
                    <a
                      target="_blank"
                      title="@esaenz.arq"
                      href="https://www.tiktok.com/@esaenz.arq?refer=embed"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      @esaenz.arq
                    </a>
                  </section>
                </blockquote>
                <script async src="https://www.tiktok.com/embed.js"></script>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
