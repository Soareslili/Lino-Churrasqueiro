


export default function Service() {
    return (
        <section id="servicos" className="py-20 bg-[#f5f3ef]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
                        Nossos Serviços
                    </h2>
                    <p className="text-lg font-light max-w-2xl mx-auto">
                        Oferecemos uma experiência completa em churrasco, com qualidade e sabor incomparáveis
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-warm transition-transform duration-300 hover:scale-105 animate-zoom-in"
                        data-aos="fade-up"
                        data-aos-delay="0" 
                        data-aos-duration="1000"
                    >
                     
                        <div className="w-16 h-16 bg-[linear-gradient(to_bottom,#ea580c_50%,#9a3412_50%)] rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                            <img
                                src="https://img.icons8.com/windows/32/cook-male.png"
                                alt="chapeu"
                                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                     
                        <h3 className="font-display font-bold text-xl text-foreground mb-4">
                            Churrasco Completo
                        </h3>

                      
                        <p className="text-sm text-gray-500 mb-6">
                            Carnes nobres, acompanhamentos tradicionais e temperos especiais para uma experiência autêntica.
                        </p>

                      
                        <ul className="space-y-2 text-sm text-foreground">
                            <li className="flex items-center gap-2">✅ Corte premium</li>
                            <li className="flex items-center gap-2">✅ Temperos artesanais</li>
                            <li className="flex items-center gap-2">✅ Acompanhamentos inclusos</li>
                        </ul>
                    </div>

                    <div className="group bg-white p-8 py-10 rounded-2xl shadow-soft hover:shadow-warm transition-transform duration-300 hover:scale-105 animate-zoom-in"
                    data-aos="fade-up"
                    data-aos-delay="200" 
                     data-aos-duration="1200"
                    >


                        <div className="w-16 h-16 bg-[linear-gradient(to_bottom,#ea580c_50%)] rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                            <img
                                src="https://img.icons8.com/parakeet-line/48/group.png"
                                alt="icone"
                                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="font-display font-bold text-xl text-foreground mb-4">
                            Eventos de Todos os Tamanhos
                        </h3>


                        <p className=" text-sm text-gray-600 mb-6">
                            Desde reuniões íntimas até grandes celebrações, adaptamos nosso serviço às suas necessidades.
                        </p>


                        <ul className="space-y-2 text-sm text-foreground">
                            <li className="flex items-center gap-2">✅ Pequenos grupos</li>
                            <li className="flex items-center gap-2">✅ Grandes eventos</li>
                            <li className="flex items-center gap-2">✅ Planejamento personalizado</li>
                        </ul>
                    </div>

                    <div className="group bg-white p-8 py-10 rounded-2xl shadow-soft hover:shadow-warm transition-transform duration-300 hover:scale-105 animate-zoom-in"
                    data-aos="fade-up"
                    data-aos-delay="400" 
                     data-aos-duration="1400"
                    >


                        <div className="w-16 h-16 bg-[linear-gradient(to_bottom,#ea580c_50%)] rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                            <img
                                src="https://img.icons8.com/ios/50/checkmark.png"
                                alt="icone"
                                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="font-display font-bold text-xl text-foreground mb-4">
                            Equipe Treinada
                        </h3>


                        <p className=" text-sm text-gray-600 mb-6">
                            Profissionais qualificados garantem excelência no atendimento e qualidade impecável.
                        </p>


                        <ul className="space-y-2 text-sm text-foreground">
                            <li className="flex items-center gap-2">✅ Atendimento premium</li>
                            <li className="flex items-center gap-2">✅ Pontualidade</li>
                            <li className="flex items-center gap-2">✅ Apresentação impecável</li>
                        </ul>
                    </div>

                    <div className="group bg-white p-8 py-10 rounded-2xl shadow-soft hover:shadow-warm transition-transform duration-300 hover:scale-105 animate-zoom-in"
                    data-aos="fade-up"
                    data-aos-delay="600" 
                     data-aos-duration="1600"
                    >


                        <div className="w-16 h-16 bg-[linear-gradient(to_bottom,#ea580c_50%)] rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                            <img
                                src="https://img.icons8.com/ios/50/leaf.png"
                                alt="icone"
                                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="font-display font-bold text-xl text-foreground mb-4">
                            Opções Especiais
                        </h3>


                        <p className=" text-sm text-gray-600 mb-6">
                            Cardápio diversificado com opções vegetarianas e cortes especiais para todos os gostos.
                        </p>


                        <ul className="space-y-2 text-sm text-foreground">
                            <li className="flex items-center gap-2">✅ Opções vegetarianas</li>
                            <li className="flex items-center gap-2">✅ Cortes especiais</li>
                            <li className="flex items-center gap-2">✅ Cardápio personalizado</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}