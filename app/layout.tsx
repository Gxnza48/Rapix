import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RapiX - Soluciones Web Rápidas",
  description:
    "Soluciones web ultrarrápidas para un mundo en movimiento. Desarrollamos experiencias digitales de alta velocidad que impulsan tu negocio hacia el futuro.",
  keywords: "desarrollo web, aplicaciones móviles, soluciones cloud, optimización web, RapiX",
  authors: [{ name: "RapiX Team" }],
  openGraph: {
    title: "RapiX - Soluciones Web Rápidas",
    description: "Soluciones web ultrarrápidas para un mundo en movimiento.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "RapiX - Soluciones Web Rápidas",
    description: "Soluciones web ultrarrápidas para un mundo en movimiento.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
