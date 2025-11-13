import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    title: "Remeras Deportivas",
    description:
      "Telas de alta calidad con tecnología de secado rápido. Perfectas para entrenamientos intensos y competencias.",
    image: "/2.png",
  },
  {
    id: 2,
    title: "Estampados Personalizados",
    description:
      "Diseños únicos con técnicas de sublimación de última generación. Colores vibrantes que no se desvanecen.",
    image: "/nuestros diseños/9.png",
  },
]

export default function ProductCarousel() {
  return (
    <section id="productos" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 space-y-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{products[0].title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{products[0].description}</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Conocer Más
            </Button>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={products[0].image || "/placeholder.svg"}
              alt={products[0].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 md:order-1">
            <img
              src={products[1].image || "/placeholder.svg"}
              alt={products[1].title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{products[1].title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{products[1].description}</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Conocer Más
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
