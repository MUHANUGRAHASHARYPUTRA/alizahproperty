
import React from 'react';
import { MessageSquareText } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCTA: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/+62895403047867?text=Halo%20AlizahProperty,%20saya%20tertarik%20dengan%20Bukit%20Panaikang%20Residence"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-charcoal text-white p-5 rounded-full shadow-2xl flex items-center gap-3 hover:bg-gold transition-colors group"
    >
      <div className="hidden group-hover:block transition-all duration-300 overflow-hidden">
         <span className="text-[10px] uppercase tracking-widest font-bold whitespace-nowrap pr-2">Konsultasi Gratis</span>
      </div>
      <MessageSquareText size={24} strokeWidth={1.5} />
    </motion.a>
  );
};

export default FloatingCTA;
