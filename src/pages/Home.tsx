import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Leaf, Instagram, Mail, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

import kitImg from '../assets/table.png';
import finishedImg from '../assets/wood_finished.png';
import shopierLogo from '../assets/shopier.svg';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full min-h-[60vh] py-24 flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
                {/* Premium Aura Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4], x: [0, 30, 0], y: [0, -20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#EAE3DB] mix-blend-multiply filter blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, -40, 0], y: [0, 40, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#D0C5B9] mix-blend-multiply filter blur-3xl"
                    />
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[60px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDFBF7]/40 to-[#FDFBF7]"></div>
                </div>

                <div className="relative z-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Column */}
                    <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#EAE3DB] text-[#8A7968] text-sm font-medium tracking-wide shadow-sm"
                        >
                            <Sparkles size={14} />
                            Premium Kendin Yap Setleri
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
                            className="text-lg md:text-xl text-[#5C5A58] mb-8 max-w-xl font-light"
                        >
                            Kendi mumunuzu yaratarak yaşam alanlarınızı şifalandırın. Tamamen doğal vegan wax ve Anadolu'nun endemik esanslarıyla hazırlanan %100 çevre dostu döküm setleri.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col items-center md:items-start w-full"
                        >
                            <a
                                href="http://www.shopier.com/s/store/nuansatelier"
                                className="px-8 mb-2 py-4 bg-[#3A3836] text-[#FDFBF7] rounded-full font-medium hover:bg-[#2A2928] shadow-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
                            >
                                Koleksiyonu Keşfet <ArrowRight size={18} />
                            </a>
                            <div className="flex items-center gap-2 text-sm text-[#8A7968] font-medium ml-1 mt-1">
                                <Package size={16} /> Tüm siparişlerde ücretsiz kargo
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#5C5A58] font-medium mt-2 ml-1 opacity-90 border border-[#EAE3DB] rounded-full px-4 py-1.5 bg-white/50 shadow-sm">
                                <img src={shopierLogo} alt="Shopier" className="h-5 object-contain" />
                                <span>Güvencesiyle</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0"
                    >
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#EAE3DB] to-[#D0C5B9] rounded-[2rem] transform rotate-3 scale-105 opacity-60 blur-xl"></div>
                            <img
                                src={kitImg}
                                alt="Nüans Atelier DIY Kendin Yap Soya Mumu Seti"
                                className="relative z-10 w-full object-cover rounded-[2rem] shadow-2xl border border-white/60"
                            />
                        </div>
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
                <div className="flex flex-col items-center">
                    <a
                        href="http://www.shopier.com/s/store/nuansatelier"
                        className="inline-flex px-8 mb-4 py-4 bg-[#FDFBF7] text-[#3A3836] rounded-full font-medium hover:bg-[#EAE3DB] transition-all transform hover:scale-105 items-center gap-2"
                    >
                        Kendin Yap Setini Al <ArrowRight size={18} />
                    </a>

                    <div className="flex items-center justify-center gap-2 text-sm text-[#EAE3DB] opacity-90 font-medium mb-4">
                        <Package size={16} /> Tüm ürünlerde ücretsiz kargo
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-[#3A3836] font-medium mb-12 bg-[#FDFBF7]/90 px-5 py-2 rounded-full shadow-md backdrop-blur-sm">
                        <img src={shopierLogo} alt="Shopier" className="h-5 object-contain brightness-0" />
                        <span>Güvencesiyle</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <a href="https://instagram.com/atelier.nuans" className="flex items-center gap-2 text-[#FDFBF7] hover:text-[#EAE3DB] opacity-80 hover:opacity-100 transition-all font-light">
                        <Instagram size={20} /> <span className="tracking-wide">@atelier.nuans</span>
                    </a>
                    <a href="mailto:info@nuansatelier.com" className="flex items-center gap-2 text-[#FDFBF7] hover:text-[#EAE3DB] opacity-80 hover:opacity-100 transition-all font-light">
                        <Mail size={20} /> <span className="tracking-wide">info@nuansatelier.com</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
