"use client"

import { motion } from "framer-motion"
import { MessageSquare, Pencil, Eye, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Consulta",
    description: "Conversamos sobre tus necesidades, presupuesto y visión del proyecto.",
  },
  {
    icon: Pencil,
    title: "Diseño",
    description: "Creamos propuestas personalizadas y renders 3D que reflejan tu idea.",
  },
  {
    icon: Eye,
    title: "Revisión",
    description: "Ajustamos el diseño hasta alcanzar la versión perfecta para vos.",
  },
  {
    icon: CheckCircle,
    title: "Entrega",
    description: "Entregamos toda la documentación y acompañamos la construcción.",
  },
]

export function Process() {
  return (
    <section className="py-24 md:py-38 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-foreground mb-6"
          >
            Nuestro proceso
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Un método claro y colaborativo para lograr resultados arquitectónicos excepcionales.
          </motion.p>
        </div>

        {/* Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Círculo del ícono */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 relative shadow-lg shadow-primary/30"
              >
                <step.icon className="w-10 h-10 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-md">
                  {index + 1}
                </div>
              </motion.div>

              {/* Texto */}
              <h3 className="text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Línea animada entre pasos */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: index * 0.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="hidden lg:block absolute top-10 left-[65%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-primary/20 origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fondo decorativo animado sutil */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
      />
    </section>
  )
}
