import { motion } from 'framer-motion';
import { Package, Flame, Star, AlertTriangle } from 'lucide-react';

import makingImg from '../assets/making.png';

const Instructions = () => {
    return (
        <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-24 px-4 font-sans text-[#5C5A58]">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#8A7968] font-medium text-sm tracking-widest uppercase mb-3 block">Rehber</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-[#3A3836] mb-6 block">🕯️ Kendin Yap: Mum Yapım Rehberi</h1>
                    <p className="text-lg mb-2">DIY Candle Making Guide</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#F6F3EE] rounded-[2rem] p-8 border border-[#EAE3DB]"
                    >
                        <h2 className="flex items-center gap-3 text-2xl font-serif text-[#3A3836] mb-6">
                            <Package size={24} className="text-[#8A7968]" /> 📦 Kit İçeriği
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex flex-col"><span className="font-medium text-[#3A3836]">Soya Wax Torbası:</span> Eritilmeye hazır doğal wax.</li>
                            <li className="flex flex-col"><span className="font-medium text-[#3A3836]">Fitil & Sabitleyici:</span> Fitil ve yerleştirme desteği.</li>
                            <li className="flex flex-col"><span className="font-medium text-[#3A3836]">Esans & Süsleme Malzemeleri:</span> Kişiselleştirme için hazır ürünler.</li>
                        </ul>

                        <div className="mt-8 pt-6 border-t border-[#D0C5B9]">
                            <h3 className="text-lg font-serif text-[#3A3836] mb-4">Inside the Kit</h3>
                            <ul className="space-y-3 text-sm">
                                <li><strong>Soy Wax Pouch:</strong> Natural wax ready for melting.</li>
                                <li><strong>Wick & Stabilizer:</strong> Wick and placement support.</li>
                                <li><strong>Fragrance & Decor:</strong> Items for personal customization.</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative rounded-[2rem] overflow-hidden shadow-lg h-full"
                    >
                        <img src={makingImg} alt="Candle making process" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                {/* Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="flex items-center gap-3 text-3xl font-serif text-[#3A3836] mb-10 border-b border-[#EAE3DB] pb-4">
                        <Flame size={28} className="text-[#8A7968]" /> 🛠️ Hazırlanışı / Instructions
                    </h2>

                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8A7968] text-[#FDFBF7] flex items-center justify-center font-serif text-xl">1</div>
                            <div>
                                <h3 className="text-xl font-medium text-[#3A3836] mb-2">Su Banyosu (Water Bath)</h3>
                                <p className="mb-2">Bir tencereye, wax torbasının büyük bir kısmını suyun altında bırakacak kadar su doldurun ve kaynamaya bırakın.</p>
                                <p className="text-sm text-[#A3978B]">Fill a pot with enough water to submerge most of the wax pouch and bring it to a boil.</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8A7968] text-[#FDFBF7] flex items-center justify-center font-serif text-xl">2</div>
                            <div>
                                <h3 className="text-xl font-medium text-[#3A3836] mb-2">Wax'ı Eritin (Melt the Wax)</h3>
                                <p className="mb-2">Torbayı doğrudan kaynayan suyun içine bırakın. Torbanın ağzı su seviyesinden yukarıda kalmalı, içeriye su girmemelidir. Wax tamamen sıvı hale gelene kadar bekleyin.</p>
                                <p className="text-sm text-[#A3978B]">Place the pouch directly into the boiling water. Keep the opening above water level to prevent water from getting in. Wait until the wax is fully liquid.</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8A7968] text-[#FDFBF7] flex items-center justify-center font-serif text-xl">3</div>
                            <div>
                                <h3 className="text-xl font-medium text-[#3A3836] mb-2">Fitili Yerleştirin (Set the Wick)</h3>
                                <p className="mb-2">Wax erirken fitilinizi kavanozun tam ortasına yerleştirin.</p>
                                <p className="text-sm text-[#A3978B]">Place your wick in the center of the jar while the wax melts.</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8A7968] text-[#FDFBF7] flex items-center justify-center font-serif text-xl">4</div>
                            <div>
                                <h3 className="text-xl font-medium text-[#3A3836] mb-2">Esans & Döküm (Scent & Pour)</h3>
                                <p className="mb-2">Wax şeffaflaştığında torbayı sudan çıkarın (çıplak elle tutulabilir sıcaklıktadır). Esansınızı içine döküp karıştırın ve yavaşça kavanoza boşaltın.</p>
                                <p className="text-sm text-[#A3978B]">Remove the pouch from the water (it is safe to touch with bare hands). Add the fragrance, stir, and pour slowly into the jar.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 relative">
                            <div className="absolute top-0 -left-2 text-[#EAB308]">
                                <Star size={20} fill="currentColor" />
                            </div>
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EAB308] text-[#FDFBF7] flex items-center justify-center font-serif text-xl shadow-lg shadow-yellow-500/20">5</div>
                            <div className="bg-yellow-50/50 p-6 rounded-2xl border border-yellow-100">
                                <h3 className="text-xl font-medium text-[#3A3836] mb-2">Süsleme: Kritik Nokta! (Decoration: The Secret)</h3>
                                <p className="mb-3 font-medium text-[#B45309]">Öneri! Süsleri hemen eklemeyin, yoksa dibe batarlar. Mumun üst yüzeyi hafifçe beyazlayıp katılaşmaya başladığında süsleri yerleştirin. Çok beklerseniz içine sabitleyemezsiniz; o "yarı donmuş" anı yakalayın!</p>
                                <p className="text-sm text-[#92400E]">Pro Tip! Don't add decorations immediately; they will sink to the bottom. Wait until the wax starts to turn white and sets slightly. If you wait too long, they won't stick; catch that "half-set" moment!</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Warning Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 bg-red-50 p-8 rounded-2xl border border-red-100"
                >
                    <h2 className="flex items-center gap-2 text-xl font-medium text-red-800 mb-4">
                        <AlertTriangle size={20} /> ⚠️ DİKKAT / CAUTION
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-red-900/80 mb-6">
                        <li>Torba sıcak olacaktır; tutarken dikkatli olun ve sıvı wax'ı üzerinize damlatmamaya özen gösterin.</li>
                        <li>Eritme işlemini çocukların ve evcil hayvanların ulaşamayacağı bir alanda gerçekleştirin.</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-3 text-red-900/70 text-sm">
                        <li>The pouch will be hot; handle with care and be careful not to spill or drip liquid wax on your skin.</li>
                        <li>Keep the melting process out of reach of children and pets.</li>
                    </ul>
                </motion.div>

            </div>
        </div>
    );
};

export default Instructions;
