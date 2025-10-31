"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Cliente Residencial",
    content:
      "ESAENZ.ARQ renovó nuestra cocina creando un espacio moderno, funcional y lleno de luz. Lo recomendamos.",
    image: "/proyecto-renovacion-cocina.webp",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Empresario",
    content:
      "Emmanuel diseñó nuestro playroom con un estilo contemporáneo y acogedor.",
    image: "/proyecto-playroom.webp",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Propietaria",
    content:
      "Mi cocina quedó práctica y elegante. El diseño minimalista es exactamente lo que buscaba.",
    image: "/proyecto-cocina-funcional.webp",
    rating: 5,
  },
]

const brands = [
  { name: "Caterpillar", logo: "/brands/caterpillar.webp" },
  { name: "DeWalt", logo: "/brands/dewalt.webp" },
  { name: "Makita", logo: "/brands/makita.webp" },
  { name: "Bosch", logo: "/brands/bosch.webp" },
  { name: "Stanley", logo: "/brands/stanley.webp" },
  { name: "Hilti", logo: "/brands/hilti.webp" },
  { name: "Milwaukee", logo: "/brands/milwaukee.webp" },
]

export function Testimonials() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Lo que dicen nuestros{" "}
            <span className="font-semibold">clientes</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: false, amount: 0.2 }}
                className="group h-full"
              >
                <Card className="h-full overflow-hidden bg-white/10 backdrop-blur-xl border border-primary hover:border-white/40 shadow-lg hover:shadow-3xl transition-all duration-500 rounded-3xl">
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

                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col h-[calc(100%-14rem)]">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-white/90 mb-4 leading-relaxed text-base flex-grow">
                      "{testimonial.content}"
                    </p>

                    <div className="pt-2 border-t border-white/20">
                      <p className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-white/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Brands Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-white/60 text-md uppercase font-light tracking-widest">
            Trabajamos con las mejores marcas
          </p>
        </motion.div>

        {/* Carousel */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative overflow-hidden mt-10"
          >
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex gap-16 items-center flex-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                }}
              >
                {[...brands, ...brands].map((brand, i) => (
                  <div
                    key={`${brand.name}-${i}`}
                    className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white/5 
                              rounded-xl border border-white/10 hover:bg-white/10 
                              hover:border-white/20 transition-all duration-300 px-6"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-auto object-contain hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
