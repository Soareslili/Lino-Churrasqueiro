import { MessageCircle, MapPin, Instagram, Mail} from "lucide-react";
import React from "react";

type Item = {
  icon: React.ElementType;
  title: string;
  desc: string;
  href?: string;
  aria: string;
  external?: boolean;
};

const EMAIL = "contato@seusite.com";
const WHATSAPP = "https://wa.me/556899998899?text=Ol%C3%A1%20gostaria%20de%20um%20or%C3%A7amento";
const MAP = "https://maps.google.com/?q=S%C3%A3o+Paulo";
const INSTAGRAM = "https://instagram.com/seuusuario"; 

const items: Item[] = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Resposta rápida",
    href: WHATSAPP,
    aria: "Falar pelo WhatsApp",
    external: true,
  },
  {
    icon: Instagram,
    title: "Instagram",
    desc: "@seuusuario", 
    href: INSTAGRAM,
    aria: "Visitar perfil no Instagram",
    external: true,
  },
  {
    icon: MapPin,
    title: "Região",
    desc: "São Paulo e região",
    href: MAP,
    aria: "Ver localização no mapa",
    external: true,
  },
];

function ContactIcons() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {items.map(({ icon: Icon, title, desc, href, aria, external }) => (
        <a
          key={title}
          href={href}
          aria-label={aria}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group rounded-xl border border-white/15 bg-white/5 backdrop-blur
                     p-5 flex flex-col items-center gap-4 transition
                     hover:bg-white/10
                     hover:shadow-[0_10px_30px_rgba(255,140,0,0.18)]"
        >
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl
                       bg-white/15 ring-1 ring-white/25"
          >
            <Icon className="h-6 w-6 text-white" />
          </span>

          <div className="leading-tight text-white text-center">
            <p className="font-semibold">{title}</p>
            <p className="text-sm/5 text-white/80">{desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#C0361C] to-[#E6551E] py-20 text-white">
     
      <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-sm" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-white/10 blur-sm" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-5xl mb-4">
            Vamos fazer o seu evento ser inesquecível?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Entre em contato conosco e solicite seu orçamento personalizado.
          </p>
        </div>

        <ContactIcons />

     
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-medium
                       transition hover:scale-[1.02] hover:bg-green-500"
          >
            <MessageCircle className="h-5 w-5" />
            Fale no WhatsApp
          </a>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-medium
                       transition hover:bg-white/15"
          >
            <Instagram className="h-5 w-5" />
            Visitar Instagram
          </a>

        
        </div>
      </div>
    </section>
  );
}
