"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-medium tracking-widest text-sm uppercase mb-6 block">
          Desarrollador Frontend
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
          Creando experiencias digitales{" "}
          <span className="text-primary/70 italic font-normal">con pasión</span>
          <br />y{" "}
          <span className="text-primary italic font-normal">
            atención al detalle
          </span>
        </h1>

        <p className="mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Especializado en React, Next.js y diseño de interfaces. Transformo
          ideas en productos digitales elegantes y funcionales.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            asChild
          >
            <a href="#skills">Ver habilidades</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-secondary px-8"
            asChild
          >
            <a href="#contact">Contactar</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground animate-pulse">
        <ArrowDown size={20} />
        <span className="text-sm">Scroll para explorar</span>
      </div>
    </section>
  )
}
