import Buffet from '../assets/Buffet Completo.jpg';
import Evento from '../assets/Evento de Casamento.jpg';
import Aniversario from '../assets/Meu trabalho.jpg';
import Carne from '../assets/Carne-premium.jpg'
import Almoco from '../assets/Almoco.jpg';
import Confratenizacao from '../assets/Confraternizacao.jpg';
import Melhorchurrasco from '../assets/Melhor Churrasqueiro.jpg';
import Lino from '../assets/Lino Churrasqueiro.jpg'

export default function Gallery() {
  const trabalhos = [
    { img: Aniversario, title: 'Aniversario' },
    { img: Evento, title: 'Evento de Casamento' },
    { img: Buffet, title: 'Buffet Completo' },
     { img: Carne, title: 'Carne Premium ' },
     { img: Almoco, title: 'Almoço de Família' },
     { img: Confratenizacao, title: 'Confraternização' },
     { img: Melhorchurrasco, title: 'Melhor Churrasco' },
     { img: Lino, title: 'Lino Churrasqueiro' },
  ];

  return (
    <section id='galeria' className="bg-[#f5f3ef] py-20">
      <div className="container mx-auto h-full px-4">
        <div>
          <h2 id="gallery" className="text-5xl font-bold text-center mb-8">
            Nossos <span className="text-black">Galeria de Trabalhos</span>
          </h2>
          <p className="text-center text-zinc-400 mb-12">
            Confira alguns dos nossos eventos realizados com muito carinho e dedicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trabalhos.map(({ img, title }, i) => (
            <div
              key={i}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={`${100 * (i + 1)}`}
              data-aos-duration="1200"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-84 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold mt-[70%]">{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
