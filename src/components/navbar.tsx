"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react" 

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.5)" : "transparent",
        height: scrolled ? "60px" : "90px",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between ${
        scrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
    >

      {/* 🔹 Logo o nombre */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ color: "oklch(0.98 0 0)" }}
        className="text-2xl font-semibold tracking-tight"
      >
        ESAENZ.ARQ
      </motion.div>

      {/* 🔹 Links desktop */}
      <div className="hidden md:flex items-center gap-8">
        {["proyectos", "servicios", "nosotros", "contacto"].map((item) => (
          <motion.button
            key={item}
            onClick={() => scrollToSection(item)}
            whileHover={{ scale: 1.05 }}
            className="capitalize text-sm font-medium text-primary-foreground transition-colors hover:opacity-80"
          >
            {item === "nosotros" ? "Sobre Nosotros" : item}
          </motion.button>
        ))}
      </div>

      {/* 🔹 Botón menú (mobile) */}
      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.95 }}
        className="md:hidden text-primary-foreground"
        aria-label="Abrir menú"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.button>

      {/* 🔹 Sidebar mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="fixed top-0 right-0 h-full w-2/3 bg-primary/95 backdrop-blur-md z-40 shadow-2xl flex flex-col justify-between"
          >
            {/* 🔸 Header del sidebar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
              <h2 className="text-xl font-semibold text-primary-foreground">Menú</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-primary-foreground hover:opacity-80"
                aria-label="Cerrar menú"
              >
                <X size={28} />
              </button>
            </div>

            {/* 🔸 Enlaces del menú */}
            <div className="flex flex-col items-center gap-8 mt-10">
              {["proyectos", "servicios", "nosotros", "contacto"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-lg font-medium text-primary-foreground hover:opacity-80 transition"
                >
                  {item === "nosotros" ? "Sobre Nosotros" : item}
                </button>
              ))}
            </div>

            {/* 🔸 Footer del menú */}
            <div className="text-center mb-6 text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} ESAENZ.ARQ
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
