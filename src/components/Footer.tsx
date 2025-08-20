// Footer.tsx
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#2B2320] text-white/90">
    
      <div className="h-2 w-full bg-gradient-to-r from-[#C0361C] to-[#E6551E]" />

      <div className="container mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
          <div>
            <h3 className="text-2xl font-bold text-white">Lino Churrasqueiro</h3>
            <p className="mt-2 text-sm text-white/70">
              Churrasco profissional para eventos inesquecíveis
            </p>
          </div>

        
          <div className="md:text-center">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wide">
              Links Rápidos
            </h4>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Galeria", href: "#galeria" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/80 hover:text-white transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      
          <div className="md:text-right">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wide">
              Contato
            </h4>
            <ul className="mt-3 space-y-2">
              <li className="flex md:justify-end items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>São Paulo e região</span>
              </li>
              <li className="flex md:justify-end items-center gap-2 text-white/80">
                <Phone className="h-4 w-4" />
                <a href="tel:+5511999999999" className="hover:text-white transition">
                  (11) 97083-3434
                </a>
              </li>
            </ul>
          </div>
        </div>

  
        <hr className="my-6 border-white/10" />

      
        <p className="text-center text-sm text-white/60">
          © {new Date().getFullYear()} Lino Churrasqueiro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
