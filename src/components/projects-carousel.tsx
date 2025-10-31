"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Card } from "./ui/card"

const projects = [
  {
    id: 1,
    title: "Casa Moderna Minimalista",
    category: "Vivienda Unifamiliar",
    image: "/modern-minimalist-house-architecture-white-concret.webp",
  },
  {
    id: 2,
    title: "Vivienda Modular Contemporánea",
    category: "Arquitectura Sustentable",
    image: "/vivienda-container.webp",
  },
  {
    id: 3,
    title: "Reforma Integral de Departamento",
    category: "Remodelación Interior",
    image: "/interior-renovation-modern-apartment-open-space.webp",
  },
  {
    id: 4,
    title: "Casa de Campo con Suite Principal",
    category: "Residencial Premium",
    image: "/baño-suite.webp",
  },
  {
    id: 5,
    title: "Local Comercial Moderno",
    category: "Arquitectura Comercial",
    image: "/retail-commercial-space-modern-interior-design.webp",
  },
  {
    id: 6,
    title: "Edificio Residencial Urbano",
    category: "Desarrollo Habitacional",
    image: "/edificio-residencial.webp",
  },
  {
    id: 7,
    title: "Casa Familiar con Piscina",
    category: "Arquitectura Residencial",
    image: "/casa-lincon-pileta.webp",
  },
]

export function ProjectsCarousel() {
	const containerRef = useRef<HTMLDivElement>(null)
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const [maxOffset, setMaxOffset] = useState("0px")
	const [isDesktop, setIsDesktop] = useState<boolean>(() =>
		typeof window !== "undefined" ? window.innerWidth >= 640 : true
	)

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	})

	const calculateMaxOffset = () => {
		if (scrollContainerRef.current) {
			const { scrollWidth, clientWidth } = scrollContainerRef.current
			const offset = scrollWidth - clientWidth
			setMaxOffset(offset > 0 ? `-${offset + 28}px` : "0px")
		}
	}

	useEffect(() => {
		calculateMaxOffset()
		window.addEventListener("resize", calculateMaxOffset)
		const onResize = () => setIsDesktop(window.innerWidth >= 640)
		window.addEventListener("resize", onResize)
		return () => {
			window.removeEventListener("resize", calculateMaxOffset)
			window.removeEventListener("resize", onResize)
		}
	}, [])

	const rawX = useTransform(scrollYProgress, [0.02, 0.98], ["0px", maxOffset])
	const x = isDesktop
		? useSpring(rawX, { stiffness: 200, damping: 30, mass: 0.6 })
		: rawX

	return (
		<section
			id="proyectos"
			ref={containerRef}
			className="relative bg-background overscroll-contain" // relative agregado
			style={{ height: "280vh" }}
		>
			<div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden relative"> {/* relative agregado */}
				{/* Título */}
				<div className="text-center mb-8 px-4 relative">
					<h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-foreground mb-4">
						Proyectos destacados
					</h2>
					<p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
						Cada proyecto es una historia única de diseño y funcionalidad
					</p>
				</div>

				{/* Carrusel */}
				<div
					ref={scrollContainerRef}
					className="overflow-hidden flex items-center px-4 md:px-12 relative" // relative agregado
				>
					<motion.div
						className="flex gap-6 w-max will-change-transform"
						style={{ x }}
					>
						{projects.map((project) => (
							<Card
								key={project.id}
								className="group relative w-[280px] sm:w-[340px] md:w-[360px] h-[470px] sm:h-[420px] overflow-hidden cursor-pointer border-0 rounded-sm shadow-lg flex-shrink-0"
							>
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-end p-6">
									<div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
										<p className="text-primary-foreground/80 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											{project.category}
										</p>
										<h3 className="text-primary-foreground text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											{project.title}
										</h3>
									</div>
								</div>
							</Card>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	)
}