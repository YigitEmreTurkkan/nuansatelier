import { ShieldCheck, Truck, Leaf, Sparkles } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    { icon: <Leaf size={20} />, text: '%100 Doğal Soya' },
    { icon: <Sparkles size={20} />, text: 'Endemik Esanslar' },
    { icon: <Truck size={20} />, text: 'Hızlı & Ücretsiz Kargo' },
    { icon: <ShieldCheck size={20} />, text: 'Güvenli Ödeme' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto py-8 px-4">
      {badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-[#EAE3DB] shadow-sm hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-full bg-[#fdfaf7] text-[#8A7968] flex items-center justify-center mb-3 shadow-inner">
            {badge.icon}
          </div>
          <span className="text-xs font-medium text-[#5C5A58] tracking-tight">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
