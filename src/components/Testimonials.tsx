import { useEffect, useCallback, useState } from "react"
import useEmblaCarousel from "embla-carousel-react";

import Cliente1 from '../assets/Cliente1.jpeg'
import Cliente2 from '../assets/Cliente2.jpg'
import Cliente3 from '../assets/Cliente3.jpg'


const testimonials = [

    {
        img: Cliente1,
        message: "O Lino fez o churrasco do nosso casamento e foi incrível! Profissional, pontual e comida maravilhosa! Todos os convidados elogiaram.",
        name: 'João Oliveira',
        descript: 'Casamanto'
       
    },
    {
        img: Cliente2,
        message: "Excelente serviço! O Lino e sua equipe superaram todas as expectativas. A carne estava no ponto perfeito e o atendimento impecável.",
        name: 'Fabiano F',
        descript: 'Anirversário'
        
    },
    {
        img: Cliente3,
        message: "Serviço de primeira qualidade! O Lino é muito atencioso e faz questão de que tudo saia perfeito. Voltaremos a contratar com certeza.",
        name: 'Lidiane Santos',
        descript: 'Almoço de família'
        
    },

];


export function Testimmonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on('select', onSelect)
        const interval = setInterval(() => {
            emblaApi.scrollNext()
        }, 5000)
        return () => clearInterval(interval)
    }, [emblaApi, onSelect])

    const scrollTo = useCallback((idx) => {
        if (emblaApi) emblaApi.scrollTo(idx)
    }, [emblaApi])


    return (

        <section id="depoimento" className="bg-[#f5f3ef] py-20">
            <div className="text-center mb-16">
                <h2 id="testimony" className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">O que nossos clientes dizem</h2>
                <p className="text-lg text-gray-500">A satisfação dos nossos clientes é nossa maior recompensa.</p>
            </div>
            <div className="mx-w-4xl mx-auto">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((t, idx) => (
                            <div className="min-w-0 flex-[0_0_100%] flex justify-center px-4 " key={idx}>
                                <blockquote className="bg-white p-8 rounded-lg shadow-[0_6px_30px_rgba(255,165,0,0.25)] text-center">
                                   <img src={t.img} alt={`Foto de ${t.name}`} className="w-40 h-40 rounded-full mx-auto mb-4" />
                                    <p className="text-gray-800 text-lg mb-6 italic leading-relaxed">{t.message}</p>
                                    <footer className=" flex flex-col gap-1.5">
                                        <span className="text-gray-800 font-bold text-xl ">{t.name}</span>
                                        <span className="text-gray-500 font-semibold text-sm">{t.descript}</span>
                                    </footer>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${selectedIndex === idx ? 'bg-orange-400' : 'bg-gray-200'}`}
                            onClick={() => scrollTo(idx)}
                            aria-label={`Ir para depoimento ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}