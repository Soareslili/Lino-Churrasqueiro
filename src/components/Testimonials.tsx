import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";


import Katia from "../assets/Katia.jpg";
import Fabiano from "../assets/Fabiano.jpg";
import Lidiane from "../assets/Lidane.jpg"; // confira o nome do arquivo; se for Lidiane.jpg, ajuste aqui
import Carol from "../assets/Carol.jpg";
import Ketelyn from "../assets/Kety.jpg";

type Testimonials = {
  img: string;        // se seu bundler tipa como outra coisa, pode trocar para: any
  message: string;
  name: string;
  descript: string;
};

const testimonials: Testimonials[] = [
  {
    img: Katia,
    message:
      "Recomendo sem pensar duas vezes, equipe maravilhosa, serviço impecável! Comida nota 10, pontualidade e limpeza excelentes!",
    name: "Katia Rufino",
    descript: "Almoço de família",
  },
  {
    img: Ketelyn,
    message:
      "Tive a oportunidade de contar com o trabalho do churrasqueiro Lino e só tenho elogios. Extremamente profissional, pontual e organizado. A qualidade das carnes, o ponto de preparo e o cuidado no atendimento fazem toda a diferença.",
    name: "Ketellyn Silva",
    descript: "Aniversário de 15 anos",
  },
  {
    img: Carol,
    message:
      "Gostaria de agradecer pelo ótimo serviço: muito solícito e prestativo. Me ajudou com muitas indicações de quantidade e valores. Todos elogiaram muito o churrasco — estava tudo maravilhoso!",
    name: "Carol",
    descript: "Aniversário",
  },
  {
    img: Fabiano,
    message:
      "Excelente serviço! O Lino e sua equipe superaram todas as expectativas. A carne estava no ponto perfeito e o atendimento impecável.",
    name: "Fabiano F.",
    descript: "Aniversário",
  },
  {
    img: Lidiane,
    message:
      "Serviço de primeira qualidade! O Lino é muito atencioso e faz questão de que tudo saia perfeito. Voltaremos a contratar com certeza.",
    name: "Lidiane Santos",
    descript: "Almoço de família",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const onSelect = useCallback((): void => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // set inicial
    onSelect();

    emblaApi.on("select", onSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (idx: number): void => {
      emblaApi?.scrollTo(idx);
    },
    [emblaApi]
  );

  return (
    <section id="depoimento" className="bg-[#f5f3ef] py-20">
      <div className="text-center mb-16">
        <h2
          id="testimony"
          className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6"
        >
          O que nossos clientes dizem
        </h2>
        <p className="text-lg text-gray-500">
          A satisfação dos nossos clientes é nossa maior recompensa.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, idx: number) => (
              <div
                className="min-w-0 flex-[0_0_100%] flex justify-center px-4"
                key={idx}
              >
                <blockquote className="bg-white p-8 rounded-lg shadow-[0_6px_30px_rgba(255,165,0,0.25)] text-center">
                  <img
                    src={t.img as unknown as string}
                    alt={`Foto de ${t.name}`}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mx-auto mb-4"
                    loading="lazy"
                  />
                  <p className="text-gray-800 text-lg mb-6 italic leading-relaxed">
                    {t.message}
                  </p>
                  <footer className="flex flex-col gap-1.5">
                    <span className="text-gray-800 font-bold text-xl">
                      {t.name}
                    </span>
                    <span className="text-gray-500 font-semibold text-sm">
                      {t.descript}
                    </span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx: number) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                selectedIndex === idx ? "bg-orange-400" : "bg-gray-200"
              }`}
              onClick={() => scrollTo(idx)}
              aria-label={`Ir para depoimento ${idx + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
