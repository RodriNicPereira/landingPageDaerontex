import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductCarousel from "@/components/product-carousel"
import About from "@/components/about"
import Benefits from "@/components/benefits"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"
import LineSection from "@/components/line-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductCarousel />
      <LineSection />
      <About />
      <LineSection />
      <Benefits />
      <LineSection />
      <Gallery />
      <Footer />
    </main>
  )
}
