"use client"
import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../index.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "ESAENZ.ARQ - Diseñamos espacios que inspiran",
  description: "Estudio de arquitectura especializado en proyectos personalizados con enfoque moderno y funcional",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans antialiased overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}
