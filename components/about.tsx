import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-20 md:pt-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Quiénes <span className="text-primary">Somos</span>
          </h2>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Somos DAERONTEX, una fábrica de sublimación textil con más de 5 años en el rubro. Nos dedicamos a la
            creación de indumentaria deportiva en una amplia variedad, con diseños exclusivos y mucho más.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Contamos con servicio de impresión, diseños, taller de corte y confección de conjuntos 100% personalizados.
            Trabajamos con todo tipo de telas, garantizando calidad y compromiso en cada prenda.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Contactar Ahora
          </Button>
        </div>
      </div>
    </section>
  )
}
