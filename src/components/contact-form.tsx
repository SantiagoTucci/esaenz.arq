"use client"

import { motion } from "framer-motion"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const message = formData.get("message")

    const phoneNumber = "5491112345678" // tu número de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hola! Soy ${name} y quiero consultar sobre un proyecto: ${message}`
    )}`

    window.open(whatsappURL, "_blank")
  }

  return (
    <section
      id="contacto"
      className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 🎥 Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/render-video.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/70 backdrop-blur-[3px]" />

      {/* Contenido */}
      <motion.div
        className="relative z-10 container mx-auto px-6 max-w-xl w-full text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-center tracking-wide">
          Contanos sobre tu proyecto
        </h2>
        <p className="text-center text-white/80 mb-10 leading-relaxed">
          Completa tus datos y envianos tu mensaje directamente por WhatsApp.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-white">Nombre</Label>
            <Input
              id="name"
              name="name"
              required
              className="rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-white">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              className="rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white focus:ring-0 resize-none"
            />
          </div>

          {/* Botón estilo motion */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2 border hover:border-green-500 rounded-full text-sm uppercase tracking-wide bg-green-500 hover:bg-green-600 text-white transition-all"
          >
            Enviar por WhatsApp
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  )
}
