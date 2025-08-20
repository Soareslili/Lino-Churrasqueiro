
import Lino from '../assets/Lino.jpg'

export default function About() {
    return (
        <section id='sobre' className="py-20 bg-gradient-smoke ml-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


                <div className="animate-fade-in-left">
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6"
                        data-aos="fade-right"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                    >
                        Sobre o Lino
                    </h2>
                    <p className="text-lg mb-6 font-body leading-relaxed"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                    >
                        Com mais de 40 anos de experiência, Lino transforma qualquer evento em um verdadeiro festival de sabores.
                        Atende aniversários, casamentos, confraternizações e muito mais.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3"
                            data-aos="fade-right"
                            data-aos-delay="400"
                            data-aos-duration="1400"
                        >
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <span className="text-foreground font-medium">
                                Experiência comprovada há mais de 40 anos
                            </span>
                        </div>

                        <div className="flex items-center gap-3"
                            data-aos="fade-right"
                            data-aos-delay="600"
                            data-aos-duration="1600"
                        >
                            <div className="w-2 h-2 bg-red-600 rounded-full "></div>
                            <span className="text-foreground font-medium">
                                Atendimento personalizado para cada evento
                            </span>
                        </div>

                        <div className="flex items-center gap-3"
                            data-aos="fade-right"
                            data-aos-delay="800"
                            data-aos-duration="1800"
                        >
                            <div className="w-2 h-2 bg-red-600 rounded-full "></div>
                            <span className="text-foreground font-medium">
                                Paixão pela arte do churrasco autêntico
                            </span>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center">
                    <img
                        src={Lino}
                        alt="Cliente satisfeito"
                        className="rounded-lg shadow-lg mx-2.5 mr-20 w-64 md:w-90"
                    />
                </div>

            </div>
        </section>

    )
}