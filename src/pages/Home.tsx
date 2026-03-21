import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Leaf, Info, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import finishedImg from '../assets/finished.png';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full min-h-[60vh] py-24 flex items-center justify-center overflow-hidden bg-[#F6F3EE]">
                <div className="absolute inset-0 z-0 opacity-60">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#D0C5B9_0%,_transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#EAE3DB_0%,_transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF7]"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#EAE3DB] text-[#5C5A58] text-sm font-medium"
                    >
                        <Sparkles size={14} className="text-[#8A7968]" />
                        Kendi An'ınızı Yaratın
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif text-[#3A3836] drop-shadow-sm mb-6 leading-tight"
                    >
                        Saflıkla Gelen <br /> <span className="text-[#8A7968]">Dinginlik</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-[#5C5A58] mb-10 max-w-2xl font-light"
                    >
                        Anadolu'nun endemik bitki örtüsünden gelen doğal esanslar ve vegan soya mumlarıyla, yaşam alanlarınızı şifalandırın.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="https://www.shopier.com/nuansatelier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-[#3A3836] text-[#FDFBF7] rounded-full font-medium hover:bg-[#2A2928] shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                            Ürünlere Git <ArrowRight size={18} />
                        </a>
                        <Link
                            to="/pages/talimatlar"
                            className="px-8 py-4 bg-transparent border border-[#EAE3DB] text-[#5C5A58] rounded-full font-medium hover:bg-[#FDFBF7] hover:shadow-sm transition-all flex items-center justify-center gap-2"
                        >
                            Kendin Yap Rehberi <Info size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-4 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#EAE3DB] rounded-[2rem] transform rotate-3 scale-105"></div>
                            <img
                                src={finishedImg}
                                alt="Nüans Atelier Finished Candle"
                                className="relative z-10 w-full max-w-md rounded-[2rem] shadow-xl object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl font-serif text-[#3A3836] mb-6">Neden Nüans Atelier?</h2>
                        <p className="text-[#5C5A58] mb-6 leading-relaxed">
                            Bizim için kalite, ithal şişelerde değil, bu coğrafyanın endemik bitki örtüsünde, dağ kekiğinin keskinliğinde, Isparta gülünün zarafetinde veya Ege turunçgillerinin enerjisinde saklı.
                        </p>
                        <p className="text-[#5C5A58] mb-8 leading-relaxed">
                            Sağlığa zararlı parafin yerine, tamamen vegan ve doğal soya fasulyesinden elde edilen wax ile çalışıyoruz. Sonuç; içinize çekerken tereddüt etmeyeceğiniz kadar temiz, başınızı döndürecek kadar etkileyici bir deneyim.
                        </p>

                        <div className="flex gap-8 mb-10">
                            <div className="flex flex-col gap-2">
                                <div className="w-12 h-12 rounded-full bg-[#F6F3EE] flex items-center justify-center text-[#8A7968]">
                                    <Leaf size={24} />
                                </div>
                                <span className="text-sm font-medium text-[#3A3836]">%100 Doğal Soya</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-12 h-12 rounded-full bg-[#F6F3EE] flex items-center justify-center text-[#8A7968]">
                                    <Sparkles size={24} />
                                </div>
                                <span className="text-sm font-medium text-[#3A3836]">Anadolu Esansları</span>
                            </div>
                        </div>

                        <Link
                            to="/hikayemiz"
                            className="inline-flex items-center gap-2 text-[#3A3836] font-medium border-b border-[#3A3836] pb-1 hover:text-[#8A7968] hover:border-[#8A7968] transition-colors"
                        >
                            Hikayemizi Keşfedin <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action Banner */}
            <section className="py-20 px-4 bg-[#8A7968] text-[#FDFBF7] text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Kendi Şifa Ritüelinizi Yaratın</h2>
                <p className="max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed font-light">
                    Bu kutu, kendi şifa ritüelinizi, doğadan gelen en saf dokunuşla kendi "an"ınızı yaratmanız için tasarlandı.
                </p>
                <a
                    href="https://www.shopier.com/nuansatelier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-8 py-4 bg-[#FDFBF7] text-[#3A3836] rounded-full font-medium hover:bg-[#EAE3DB] transition-all transform hover:scale-105 items-center gap-2"
                >
                    Kendin Yap Setini Al <ArrowRight size={18} />
                </a>

                <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
                    <a href="https://instagram.com/atelier.nuans" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#FDFBF7] hover:text-[#EAE3DB] opacity-80 hover:opacity-100 transition-all font-light">
                        <Instagram size={20} /> <span className="tracking-wide">@atelier.nuans</span>
                    </a>
                    <a href="mailto:nuansateleirx@gmail.com" className="flex items-center gap-2 text-[#FDFBF7] hover:text-[#EAE3DB] opacity-80 hover:opacity-100 transition-all font-light">
                        <Mail size={20} /> <span className="tracking-wide">nuansateleirx@gmail.com</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
