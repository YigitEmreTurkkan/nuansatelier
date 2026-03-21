const Footer = () => {
    return (
        <footer className="bg-[#F6F3EE] border-t border-[#EAE3DB] mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
                <h2 className="font-serif text-2xl text-[#3A3836] mb-4">Nüans Atelier</h2>
                <p className="text-[#8A7968] text-sm text-center max-w-md mb-8">
                    Anadolu'nun zengin doğasından ilham alan, sağlığınıza saygılı vegan soya mumları ile yaşam alanlarınıza saflık katın.
                </p>

                <div className="flex space-x-6 mb-8 text-sm text-[#5C5A58]">
                    <a href="/hikayemiz" className="hover:text-[#3A3836] transition-colors">Hikayemiz</a>
                    <a href="/pages/talimatlar" className="hover:text-[#3A3836] transition-colors">Talimatlar</a>
                    <a href="https://www.shopier.com/nuansatelier" target="_blank" rel="noopener noreferrer" className="hover:text-[#3A3836] transition-colors">Mağaza</a>
                </div>

                <div className="text-[#A3978B] text-xs pt-8 border-t border-[#EAE3DB]/60 w-full text-center">
                    &copy; {new Date().getFullYear()} Nüans Atelier. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
