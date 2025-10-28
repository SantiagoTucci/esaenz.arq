"use client"

import { motion } from "framer-motion"
import { MessageSquare, Pencil, Eye, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Consulta",
    description: "Conversamos sobre tus necesidades, presupuesto y visión del proyecto",
  },
  {
    icon: Pencil,
    title: "Diseño",
    description: "Creamos propuestas arquitectónicas personalizadas y renders 3D",
  },
  {
    icon: Eye,
    title: "Revisión",
    description: "Ajustamos el diseño según tus comentarios hasta lograr la perfección",
  },
  {
    icon: CheckCircle,
    title: "Entrega",
    description: "Finalizamos la documentación técnica y acompañamos la construcción",
  },
]

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Nuestro Proceso</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Un método probado para garantizar resultados excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 relative">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
