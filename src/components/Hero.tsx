import BG from '../assets/Hero-Churrasco.png';
import Logo from '../assets/Logo-Lino.png'

export default function Hero() {
  return (
    <section
      className="w-full h-screen relative"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
      }}
    >

      <div className="container mx-auto px-4 flex items-center justify-center gap-4">
           <img src={Logo} alt="logo-Lino" className='w-32 h-32' />
        <a className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium text-white bg-transparent text-sm font-display cursor-pointer transition-colors duration-300 hover:bg-white/20 hover:text-black">
          Início
        </a>
        <a className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium text-white bg-transparent text-sm font-display cursor-pointer transition-colors duration-300  hover:bg-white/20 hover:text-black">
          Sobre
        </a>
        <a className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium text-white bg-transparent text-sm font-display cursor-pointer transition-colors duration-300  hover:bg-white/20 hover:text-black">
          Serviços
        </a>
        <a className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium text-white bg-transparent text-sm font-display cursor-pointer transition-colors duration-300  hover:bg-white/20 hover:text-black">
          Galeria
        </a>
        <a className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium text-white bg-transparent text-sm font-display cursor-pointer transition-colors duration-300  hover:bg-white/20 hover:text-black">
          Depoimento
        </a>
        <a className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium text-white bg-transparent text-sm font-display cursor-pointer transition-colors duration-300  hover:bg-white/20 hover:text-black">
          Contato
        </a>
      </div>

      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6">
     
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in whitespace-nowrap"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
        >
          Lino Churrasqueiro & Buffet
        </h1>
        <p className="text-sm md:text-2xl mb-8 animate-fade-in font-light"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          Churrasco profissional para seu evento inesquecível!
        </p>
        <a className="inline-flex items-center justify-center px-6 py-3 rounded-2xl whitespace-nowrap font-medium bg-red-800 text-white cursor-pointer transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1400"
        >
          Solicitar Orçamento
        </a>

      </div>


    </section>
  );
} 
