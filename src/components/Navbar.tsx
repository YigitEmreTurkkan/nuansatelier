import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

import logoImg from '../assets/brand/trans_300x100_Nuans_Logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Ana Sayfa', path: '/' },
        { name: 'Hikayemiz', path: '/hikayemiz' },
        { name: 'Kendin Yap Rehberi', path: '/pages/talimatlar' },
    ];

    return (
        <nav className="glass-nav sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src={logoImg} alt="Nüans Atelier" className="h-12 md:h-16 w-auto object-contain hover:opacity-80 transition-opacity" />
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm tracking-wide transition-colors duration-200 ${location.pathname === link.path
                                    ? 'text-[#8A7968] font-medium'
                                    : 'text-[#5C5A58] hover:text-[#3A3836]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://www.shopier.com/nuansatelier"
                            className="flex items-center gap-2 bg-[#3A3836] hover:bg-[#2A2928] text-[#FDFBF7] px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                        >
                            <ShoppingBag size={16} />
                            <span>Mağaza</span>
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#3A3836] p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#FDFBF7] border-b border-[#EAE3DB] px-4 pt-2 pb-6 space-y-3">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="block text-base text-[#5C5A58] hover:text-[#3A3836] py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://www.shopier.com/nuansatelier"
                        className="flex items-center justify-center gap-2 w-full bg-[#3A3836] text-[#FDFBF7] px-4 py-3 mt-4 rounded-xl text-md font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        <ShoppingBag size={18} />
                        <span>Shopier Mağazasına Git</span>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
