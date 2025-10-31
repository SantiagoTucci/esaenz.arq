"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"

export function Hero() {

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/public/image.png')",
        }}
      />

      {/* Capa de color para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-white mb-6 text-balance"
        >
          Diseñamos espacios que inspiran.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Proyectos arquitectónicos personalizados con enfoque moderno y funcional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
        <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-2.5 border hover:border-white uppercase rounded-full text-gray-800 text-md tracking-wide bg-white hover:bg-primary hover:text-white transition-all"
              onClick={() => {
              const phone = "5491112345678"; 
              const text = encodeURIComponent("Hola! Quiero consultar sobre un proyecto de arquitectura.");
              window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
            }}
            >
              Solicitá tu proyecto
        </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
