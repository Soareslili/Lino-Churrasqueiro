import BG from "../assets/Hero-Churrasco.png";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo-Lino.png";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimento", label: "Depoimento" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll(); 
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);


  const navBgClass = open || scrolled ? "bg-black" : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navBgClass}`}
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <a href="#inicio" className="inline-flex items-center gap-2" onClick={closeMenu}>
          <img src={Logo} alt="Logo Lino" className="h-20 w-auto md:h-20" />
        </a>

        <div className="hidden md:flex flex-1 justify-center items-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white px-2 py-1 rounded-md hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-white hover:bg-white/10"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

   
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

    
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] z-50
        bg-black transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 flex items-center justify-between h-16 bg-black border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            <X />
          </button>
        </div>

        <nav className="px-4 pb-6 flex flex-col gap-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block text-white/90 hover:text-white px-3 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5511970833434&text=Ol%C3%A1%20Lino,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20"
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center h-11 px-4 rounded-xl bg-red-700 text-white hover:bg-red-600 transition-colors mx-3"
          >
            Orçamento via WhatsApp
          </a>
        </nav>
      </div>
    </nav>
  );
}


export default function Hero() {
  return (
    <>
      <Navbar />

      <section
        id="inicio"
        className="relative min-h-screen md:min-h-[100svh] pt-14 md:pt-28"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 md:bg-black/35" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="min-h-[calc(100svh-6rem)] md:min-h-[calc(100svh-7rem)] flex items-center">
            <div className="w-full text-center text-white mx-auto max-w-3xl">
              <h1
                className="font-display font-extrabold text-[clamp(2rem,6vw,4rem)] leading-tight mb-4 md:mb-6"
                data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000"
              >
                Lino Churrasqueiro &amp; Buffet
              </h1>

              <p
                className="font-light text-[clamp(0.95rem,2.5vw,1.5rem)] mb-6 md:mb-8"
                data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200"
              >
                Churrasco profissional para seu evento inesquecível!
              </p>

              <a
                href="https://api.whatsapp.com/send?phone=5511970833434&text=Ol%C3%A1%20Lino,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20"
                className="inline-flex items-center justify-center h-11 md:h-12 px-5 md:px-6 rounded-2xl font-medium bg-red-800 text-white transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                data-aos="fade-up" data-aos-delay="400" data-aos-duration="1400"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
