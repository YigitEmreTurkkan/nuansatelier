import { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

const ShopRedirect = () => {
    const [showFallback, setShowFallback] = useState(false);
    const shopierLink = "https://www.shopier.com/nuansatelier";

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

        // Android cihazlar için Chrome'u zorlayan Intent yapısı
        if (/android/i.test(userAgent)) {
            const intentUrl = "intent://www.shopier.com/nuansatelier#Intent;scheme=https;package=com.android.chrome;end";
            window.location.href = intentUrl;
        } 
        // iOS cihazlar ve diğerleri için standart dışarı atma denemesi
        else {
            // top.location kullanımı iframe/in-app engellerini aşmaya yardımcı olur
            window.top!.location.href = shopierLink; 
        }

        // Eğer yönlendirme başarısız olursa (bazı sıkı in-app tarayıcılar engellerse)
        // ekranda tıklanabilir bir buton kalsın.
        const timer = setTimeout(() => {
            setShowFallback(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center bg-[#FDFBF7]">
            <div className="max-w-md w-full">
                <h2 className="text-2xl font-serif text-[#3A3836] mb-4">Mağazaya yönlendiriliyorsunuz... 🤎</h2>
                <p className="text-[#5C5A58] mb-8">Eğer sayfa otomatik açılmazsa, aşağıdaki butona tıklayın.</p>
                
                {showFallback && (
                    <div className="animate-fade-in">
                        <a 
                            href={shopierLink} 
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3A3836] text-[#FDFBF7] rounded-full font-medium hover:bg-[#2A2928] shadow-lg transition-all transform hover:scale-105"
                        >
                            <ShoppingBag size={20} />
                            Mağazaya Git
                        </a>
                        <p className="text-xs text-[#8A7968] mt-6 leading-relaxed">
                            (Açılmazsa sağ üstteki üç noktadan 'Tarayıcıda Aç'ı seçebilirsiniz)
                        </p>
                    </div>
                )}
                
                {!showFallback && (
                    <div className="flex justify-center">
                        <div className="w-8 h-8 border-2 border-[#8A7968] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopRedirect;
