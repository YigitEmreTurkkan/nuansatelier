import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Leaf, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

import kitImg from '../assets/table.png';
import finishedImg from '../assets/wood_finished.png';
import shopierLogo from '../assets/shopier.svg';
import TrustBadges from '../components/TrustBadges';
import { ShoppingBag, ShieldCheck } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full min-h-[70vh] md:min-h-[60vh] pt-12 md:py-24 flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
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

                <div className="relative z-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Text Column */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
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
                            className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#3A3836] drop-shadow-sm mb-4 md:mb-6 leading-tight"
                        >
                            Saflıkla Gelen <br /> <span className="text-[#8A7968]">Dinginlik</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base md:text-xl text-[#5C5A58] mb-8 max-w-xl font-light px-4 md:px-0"
                        >
                            Kendi mumunuzu yaratarak yaşam alanlarınızı şifalandırın. Tamamen doğal vegan wax ve %100 çevre dostu döküm setleri.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col items-center md:items-start w-full gap-4"
                        >
                            <a
                                href="http://www.shopier.com/s/store/nuansatelier"
                                className="w-full sm:w-auto px-8 py-4 bg-[#3A3836] text-[#FDFBF7] rounded-full font-medium hover:bg-[#2A2928] shadow-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
                            >
                                Koleksiyonu Keşfet <ArrowRight size={18} />
                            </a>
                            
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
                                <div className="flex items-center gap-2 text-xs md:text-sm text-[#8A7968] font-semibold bg-white/40 px-3 py-1.5 rounded-full border border-[#EAE3DB]">
                                    <Package size={14} /> Ücretsiz kargo
                                </div>
                                <div className="flex items-center gap-2 text-xs md:text-sm text-[#5C5A58] font-bold bg-[#FDFBF7] rounded-full px-3 py-1.5 shadow-sm border border-[#EAE3DB]">
                                    <ShieldCheck size={14} className="text-[#8A7968]" />
                                    <span>Shopier Güvencesiyle</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2"
                    >
                        <div className="relative w-full max-w-[280px] sm:max-w-md">
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

            {/* Trust Signals Strip */}
            <section className="relative bg-white/40 backdrop-blur-md border-y border-[#EAE3DB]/50 overflow-hidden">
                {/* Faint Background Image */}
                <div className="absolute inset-0 z-0 opacity-[0.08] flex items-center justify-center">
                    <img 
                        src={kitImg} 
                        alt="" 
                        className="w-full h-full object-cover scale-110 blur-[2px]" 
                    />
                </div>
                
                <div className="relative z-10 py-4">
                    <TrustBadges />
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
            </section>

            {/* Sticky Mobile CTA */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-md md:hidden"
            >
                <a
                    href="http://www.shopier.com/s/store/nuansatelier"
                    className="flex h-16 w-full items-center justify-between bg-[#3A3836] text-white rounded-2xl px-6 shadow-[0_12px_30px_-6px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden group"
                >
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">Hemen Keşfet</span>
                        <span className="text-sm font-semibold flex items-center gap-1">
                            Şifa Setini Al <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-[1px] bg-white/10"></div>
                        <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                            <ShoppingBag size={14} className="text-white" />
                            <span className="text-xs font-bold">Mağaza</span>
                        </div>
                    </div>
                    
                    {/* Progress Fill Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8A7968]/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </a>
            </motion.div>
        </div>
    );
};

export default Home;
