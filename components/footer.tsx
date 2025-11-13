import { Facebook, Instagram, MessageCircle } from "lucide-react"
import { SiTiktok } from "react-icons/si"
const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL
const tiktok = process.env.NEXT_PUBLIC_TIKTOK_URL
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_URL

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">
              DAERON<span className="text-primary">TEX</span>
            </div>
            <p className="text-muted-foreground mb-2">Fábrica de sublimación textil</p>
            <p className="text-sm text-muted-foreground">Buenos Aires</p>
          </div>

          <div className="flex gap-6">
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="TikTok"
            >
              <SiTiktok className="h-5 w-5" />
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 DAERONTEX. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
