"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ButtonPresupuesto from "./button-presupuesto"

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_PRESUPUESTO

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <img src="/Recurso 1@2x.png" alt="logo"  className="h-10 md:h-15 "/>
            <h1 className={`text-4xl md:text-5xl transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`}
            >DAERONTEX</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#productos" className="text-white text-sm font-medium hover:text-white transition-colors">
              Productos
            </a>
            <a href="#nosotros" className={`text-white text-sm font-medium hover:text-white transition-colors ${isScrolled ? "text-white" : "text-black"}`}>
              Nosotros
            </a>
            <a href="#galeria" className={`text-white text-sm font-medium hover:text-white transition-colors ${isScrolled ? "text-white" : "text-black"}`}>
              Galería
            </a>
            <Button
              variant="outline"
              className={`rounded h-12 px-5 py-2.5 overflow-hidden group bg-[#1E4594]-500 
                            relative hover:bg-gradient-to-r hover:from-[#1E4594]-500 hover:to-[#0081CC] 
                            text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#0081CC] transition-all 
                            ease-out duration-300 
                            ${isScrolled ? " ring-2 ring-[#62b236] text-[#396617] " : " ring-2 text-white"}`}
              
                            onClick={() => window.open(`${whatsapp}`)}
            >
              Solicitar Presupuesto
            </Button>
          
          </nav>
        </div>
      </div>
    </header>
  )
}
