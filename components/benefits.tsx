import { Palette, Truck, CreditCard, Award, Scissors, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Palette,
    title: "Diseños Personalizados",
    description: "100% personalizados según tu visión",
  },
  {
    icon: Sparkles,
    title: "Mejores Colores",
    description: "Los mejores colores del mercado",
  },
  {
    icon: Scissors,
    title: "Sublimación Textil",
    description: "Por rollo o por unidades, todo tipo de telas",
  },
  {
    icon: Award,
    title: "Calidad y Compromiso",
    description: "Más de 5 años de experiencia en el rubro",
  },
  {
    icon: Truck,
    title: "Envíos Nacionales",
    description: "Envíos a todo el país",
  },
  {
    icon: CreditCard,
    title: "Todos los Medios de Pago",
    description: "Efectivo, transferencia, Mercado Pago, Rapipago, Pago Fácil",
  },
]

export default function Benefits() {
  return (
    <section className="py-20 pb-0 md:py-32 md:pt-50 md:pb-0 bg-card">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
          Por Qué <span className="text-primary">Elegirnos</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 ">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                  <benefit.icon className="h-6 w-6 text-black " />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
