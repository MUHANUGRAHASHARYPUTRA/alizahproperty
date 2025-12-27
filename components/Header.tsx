
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Koleksi', href: '#portfolio' },
    { label: 'Spesifikasi', href: '#comparison' },
    { label: 'Inspirasi', href: '#gallery' },
    { label: 'Kontak', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-charcoal flex items-center">
          <span className="text-gold">ALIZAH</span>PROPERTY
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-[10px] uppercase tracking-widest text-charcoal hover:text-gold transition-colors font-semibold"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => window.open('https://wa.me/62895403047867?text=Halo%20AlizahProperty,%20saya%20tertarik%20dengan%20Bukit%20Panaikang%20Residence', '_blank')}
            className="bg-charcoal text-white text-[10px] uppercase tracking-widest px-8 py-3 hover:bg-gold transition-all duration-300 shadow-lg"
          >
            Pesan Jadwal
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream shadow-xl p-8 flex flex-col gap-6 items-center border-t border-beige">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-xs uppercase tracking-widest text-charcoal font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => window.open('https://wa.me/62895403047867?text=Halo%20AlizahProperty,%20saya%20tertarik%20dengan%20Bukit%20Panaikang%20Residence', '_blank')}
            className="w-full bg-charcoal text-white py-4 uppercase tracking-widest text-[10px] font-bold"
          >
            Hubungi Kami
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
