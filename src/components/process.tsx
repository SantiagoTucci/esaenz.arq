"use client"

import { motion, Variants } from "framer-motion"
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

// ✅ Tipamos correctamente las variantes
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -60, transition: { duration: 0.5, ease: "easeIn" } },
}

export function Process() {
  return (
    <section className="py-24 md:py-38 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto px-6"
      >
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-light text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nuestro proceso
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Un método claro y colaborativo para lograr resultados arquitectónicos excepcionales.
          </motion.p>
        </motion.div>

        {/* Pasos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative"
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={stepVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Ícono con zoom suave */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 180, damping: 15, delay: index * 0.2 },
                }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: false }}
                className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 relative shadow-lg shadow-primary/30"
              >
                <step.icon className="w-10 h-10 text-primary-foreground" />

                {/* Número con rebote suave */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{
                    scale: 1,
                    transition: { delay: 0.3 + index * 0.2, type: "spring", stiffness: 200 },
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-md"
                >
                  {index + 1}
                </motion.div>
              </motion.div>

              {/* Texto */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-2xl font-semibold text-foreground mb-3"
              >
                {step.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="text-muted-foreground leading-relaxed max-w-xs"
              >
                {step.description}
              </motion.p>

              {/* Línea conectiva */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: index * 0.3, ease: "easeInOut" }}
                  viewport={{ once: false }}
                  className="hidden lg:block absolute top-10 left-[65%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-primary/20 origin-left"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Fondos decorativos */}
      <motion.div
        animate={{ y: [0, 25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
      />
    </section>
  )
}
