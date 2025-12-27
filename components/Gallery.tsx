
import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-gold text-xs uppercase tracking-widest mb-4">Estetika Interior</p>
          <h2 className="text-4xl md:text-5xl text-charcoal">Inspirasi Hunian</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="relative group overflow-hidden rounded-[24px] cursor-zoom-in shadow-md"
            >
              <img 
                src={src} 
                alt={`Interior ${idx}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-[10px] uppercase tracking-[0.3em] font-bold border border-white/30 px-6 py-2 backdrop-blur-sm transition-opacity duration-300">
                  Perbesar
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
