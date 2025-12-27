
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationMap: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <p className="text-gold text-xs uppercase tracking-[0.4em] font-bold">Lokasi Strategis</p>
            <h2 className="text-4xl md:text-5xl text-charcoal">Aksesibilitas Tanpa Batas</h2>
          </div>
          <a 
      href="https://maps.app.goo.gl/wBnDef6anPZ9yriW7?g_st=iwb" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-charcoal/60 bg-cream px-6 py-3 rounded-full border border-beige hover:bg-beige/20 transition-colors duration-300 cursor-pointer"
    >
  <MapPin size={18} className="text-gold" />
  <span className="text-sm font-medium hover:underline">Kec. Moncong Loe, Maros</span>
</a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] rounded-[24px] overflow-hidden shadow-2xl border border-beige group"
        >
          <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.541306351187!2d119.54032317424647!3d-5.140142352187642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee5fe05ed4817%3A0x4ec6069662558822!2sBukit%20Panaikang%20Residence!5e0!3m2!1sid!2sid!4v1715600000000!5m2!1sid!2sid" 
  width="100%" 
  height="100%" 
  style={{ border: 0 }} 
  allowFullScreen={true} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  className="grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
></iframe>
        </motion.div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Pusat Kota', time: '15 Menit' },
            { label: 'Bandara Internasional', time: '30 Menit' },
            { label: 'Fasilitas Kesehatan', time: '15 Menit' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-cream/50 rounded-2xl border border-beige/40">
              <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold mb-1">{item.label}</p>
              <p className="text-xl font-bold text-charcoal">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
