
import React from 'react';
import { motion } from 'framer-motion';

interface OpeningLoaderProps {
  onLoadingComplete: () => void;
}

const OpeningLoader: React.FC<OpeningLoaderProps> = ({ onLoadingComplete }) => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden">
      {/* Panel Kiri */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: 0.5, delay: 2.5, ease: [0.77, 0, 0.175, 1] }}
        onAnimationComplete={() => onLoadingComplete()}
        className="absolute top-0 left-0 w-1/2 h-full bg-cream"
      />
      
      {/* Panel Kanan */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ duration: 0.5, delay: 2.5, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full bg-cream"
      />

      {/* Konten Logo Tengah */}
      <div className="relative z-[10000] text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
          transition={{ 
            duration: 2.5, 
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut" 
          }}
          className="flex flex-col items-center"
        >
          <motion.h1 
            initial={{ letterSpacing: "0.2em" }}
            animate={{ letterSpacing: "0.5em" }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-bold text-charcoal tracking-[0.5em] uppercase"
          >
            <span className="text-gold">ALIZAH</span>PROPERTY
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-[1px] bg-gold/30 mt-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40 mt-4 font-medium"
          >
            Bukit Panaikang Residence
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default OpeningLoader;
