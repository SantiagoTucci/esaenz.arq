"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Cliente Residencial",
    content:
      "El equipo de ESAENZ.ARQ transformó nuestra casa en el hogar de nuestros sueños. Su atención al detalle y profesionalismo fueron excepcionales.",
    image: "/images/residencial-minimal.jpg",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Empresario",
    content:
      "Diseñaron nuestras oficinas corporativas con un enfoque moderno y funcional. El resultado superó todas nuestras expectativas.",
    image: "/images/oficina-minimal.jpg",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Propietaria",
    content:
      "La reforma de mi apartamento fue impecable. Lograron maximizar el espacio y crear un ambiente luminoso y acogedor.",
    image: "/images/apartamento-minimal.jpg",
    rating: 5,
  },
]

const brands = [
  { name: "Caterpillar", logo: "/brands/caterpillar.png" },
  { name: "DeWalt", logo: "/brands/dewalt.png" },
  { name: "Makita", logo: "/brands/makita.png" },
  { name: "Bosch", logo: "/brands/bosch.png" },
  { name: "Stanley", logo: "/brands/stanley.png" },
  { name: "Hilti", logo: "/brands/hilti.png" },
  { name: "Milwaukee", logo: "/brands/milwaukee.png" },
]

export function Testimonials() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">
            Lo que dicen nuestros{" "}
            <span className="font-semibold">clientes</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Card className="h-full overflow-hidden bg-white/10 backdrop-blur-xl border border-primary hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl">
                {/* Image Section */}
                <div className="relative w-full h-56 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                  
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-8 flex flex-col h-[calc(100%-14rem)]">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white/90 mb-6 leading-relaxed text-base flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-white/20">
                    <p className="font-semibold text-white text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-white/60 mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Brands Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-white/60 text-sm uppercase tracking-widest">
            Trabajamos con las mejores marcas
          </p>
        </motion.div>

        {/* Continuous Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 px-6"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-auto max-h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                />
              </div>
            ))}
          </motion.div>

          {/* Side Gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary via-primary/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary via-primary/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
