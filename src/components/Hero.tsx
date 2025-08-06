


import BG from '../assets/Hero-Churrasco.png';

export default function Hero() {
  return (
    <section
      className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
     <div className='container mx-auto px-4'>
        <a className='group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium text-white bg-transparent
        text-sm font-display cursor-pointer
        '>Início</a>
     </div>
    </section>
  );
}
