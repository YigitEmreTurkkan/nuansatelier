import { motion } from 'framer-motion';

const Story = () => {
    return (
        <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#8A7968] text-sm font-medium uppercase tracking-widest mb-4 block">Hakkımızda</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-[#3A3836] mb-8">Hikayemiz</h1>
                    <div className="w-16 h-px bg-[#D0C5B9] mx-auto"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="prose prose-lg prose-stone max-w-none text-[#5C5A58] leading-loose space-y-8 text-center md:text-left"
                >
                    <p className="text-xl text-[#3A3836] font-medium leading-relaxed">
                        Nüans Atelier olarak yola çıktığımızda tek bir pusulamız vardı: <span className="text-[#8A7968]">Saflık.</span> Modern dünyanın hızında unuttuğumuz o dinginliği, sağlığımızdan ödün vermeden yaşam alanlarımıza nasıl geri getirebilirdik?
                    </p>

                    <p>
                        Cevabı çok uzaklarda aramadık; ayak bastığımız bu topraklarda, Anadolu'da bulduk. Bizim için kalite, ithal şişelerde değil, bu coğrafyanın endemik bitki örtüsünde, dağ kekiğinin keskinliğinde, Isparta gülünün zarafetinde veya Ege turunçgillerinin enerjisinde saklıydı.
                    </p>

                    <p>
                        Yerel üreticilerden özenle temin ettiğimiz bu rafine esansları, sağlığa zararlı parafin yerine, tamamen vegan ve doğal soya fasulyesinden elde edilen wax ile bir araya getirdik. Sonuç; içinize çekerken tereddüt etmeyeceğiniz kadar temiz, başınızı döndürecek kadar etkileyici bir deneyim.
                    </p>

                    <div className="bg-[#F6F3EE] p-8 rounded-2xl border border-[#EAE3DB] my-12 italic text-center text-[#8A7968]">
                        "Biz malzemeleri en saf haliyle, bu toprakların bereketiyle bir araya getirdik. Şimdi sıra sizde."
                    </div>

                    <p>
                        Bu kutu, kendi şifa ritüelinizi, doğadan gelen en saf dokunuşla kendi "an"ınızı yaratmanız için tasarlandı. Kendi mumunuzu yaparken doğayla bütünleşin, o sıcak ritüelin tadını çıkarın.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Story;
