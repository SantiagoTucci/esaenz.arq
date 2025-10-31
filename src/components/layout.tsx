"use client"
import type React from "react"
import "../index.css"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="es">
      <body className={`font-sans antialiased overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}
