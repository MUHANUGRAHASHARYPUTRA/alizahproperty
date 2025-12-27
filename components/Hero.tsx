
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
        style={{ 
          backgroundImage: 'url(/images/background.png)',
        }}
      />
      <div className="absolute inset-0 bg-charcoal/40 z-10" />

      <div className="relative z-20 text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white text-xs uppercase tracking-[0.5em] mb-6 font-medium"
        >
          Bukit Panaikang Residence
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-5xl md:text-8xl leading-tight mb-8"
        >
          Kemewahan Dalam <br /> 
          <span className="italic">Keheningan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={scrollToPortfolio}
            className="px-10 py-4 bg-white text-charcoal text-[10px] uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-all duration-300 shadow-2xl"
          >
            Lihat Koleksi
          </button>
          <button 
            onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-white/30 text-white text-[10px] uppercase tracking-widest font-bold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            Spesifikasi Kami
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-white/30 animate-pulse" />
        <span className="text-white/50 text-[10px] uppercase tracking-widest font-medium">Scroll Untuk Melihat</span>
      </motion.div>
    </section>
  );
};

export default Hero;
