import React from 'react';
import { Instagram, MessageCircleMore, ArrowUpRight } from 'lucide-react';

// Komponen SVG Custom untuk TikTok agar benar-benar menyerupai aslinya
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      Icon: Instagram, 
      href: "https://instagram.com/alizahproperty", 
      label: "Instagram" 
    },
    { 
      // Menggunakan komponen TikTokIcon buatan kita
      Icon: TikTokIcon, 
      href: "https://tiktok.com/@alizahproperty", 
      label: "TikTok" 
    },
    { 
      // MessageCircleMore sangat mirip dengan bentuk balon chat WhatsApp
      Icon: MessageCircleMore, 
      href: "https://wa.me/+62895403047867?text=Halo%20AlizahProperty", 
      label: "WhatsApp" 
    },
  ];

  const whatsappLink = "https://wa.me/+62895403047867?text=Halo%20AlizahProperty,%20saya%20tertarik%20dengan%20Bukit%20Panaikang%20Residence";

  return (
    <footer id="contact" className="bg-charcoal text-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1: Branding & Sosmed */}
          <div className="lg:col-span-1">
            <div className="text-xl font-bold tracking-[0.2em] uppercase mb-8">
              <span className="text-gold">ALIZAH</span>PROPERTY
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Keunggulan arsitektur berpadu dengan makna kehidupan. Kami mendefinisikan ulang kemewahan modern melalui ruang yang dikurasi dengan hati.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Portofolio, Perusahaan, dan Kontak tetap sama seperti sebelumnya */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest mb-8 font-bold text-gold">Portofolio Kami</h4>
            <ul className="space-y-4">
              {['Tipe Subsidi', 'Tipe Komersil', 'Custom Estate', 'Ruko Bisnis'].map(item => (
                <li key={item}>
                  <a href={whatsappLink} className="text-white/40 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest mb-8 font-bold text-gold">Perusahaan</h4>
            <ul className="space-y-4">
              {['Tentang Kami', 'Keberlanjutan', 'Penghargaan', 'Karir'].map(item => (
                <li key={item}>
                  <a href={whatsappLink} className="text-white/40 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest mb-8 font-bold text-gold">Hubungi Kami</h4>
            <address className="not-italic text-white/40 text-sm space-y-4">
              <p>Bukit Panaikang Residence, <br /> Kec. Moncong Loe, Maros</p>
              <p className="hover:text-gold transition-colors font-medium">
                <a href="tel:+62895403047867">+62 895 4030 47867</a>
              </p>
              
            </address>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} AlizahProperty. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;