

export default function About() {
    return (
        <section className="py-20 bg-gradient-smoke">
            <div className="grid grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-left">
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">Sobre o Lino</h2>
                    <p className="text-lg mb-6 font-body leading-relaxed">
                        Com mais de 10 anos de experiência, Lino transforma qualquer evento em um verdadeiro festival de sabores. Atende aniversários, casamentos, confraternizações e muito mais.
                    </p>

                </div>

                <div className=" flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">Experiência comprovada há mais de 10 anos</span>
                </div>

                <div className=" flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">Atendimento personalizado para cada evento</span>
                </div>

                <div className=" flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">Paixão pela arte do churrasco autêntico</span>
                </div>

            </div>

        </section>
    )
}