"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Cliente Residencial",
    content:
      "El equipo de ESAENZ.ARQ transformó nuestra casa en el hogar de nuestros sueños. Su atención al detalle y profesionalismo fueron excepcionales.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Empresario",
    content:
      "Diseñaron nuestras oficinas corporativas con un enfoque moderno y funcional. El resultado superó todas nuestras expectativas.",
  },
  {
    name: "Laura Martínez",
    role: "Propietaria",
    content:
      "La reforma de mi apartamento fue impecable. Lograron maximizar el espacio y crear un ambiente luminoso y acogedor.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 rounded-sm">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
