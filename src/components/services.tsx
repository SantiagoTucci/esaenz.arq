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
    <section id="servicios" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Nuestros Servicios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Soluciones integrales para cada etapa de tu proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 rounded-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-primary font-medium hover:underline"
          >
            Ver más sobre nuestros servicios →
          </motion.button>
        </div>
      </div>
    </section>
  )
}
