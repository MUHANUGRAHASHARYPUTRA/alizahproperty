
import React from 'react';
import { motion } from 'framer-motion';

const TEAM = [
  {
    name: 'Ali Auli A',
    role: 'Direktur Utama',
    image: '/images/direktur.jpg'
  },
  {
    name: 'Muh Anugrah A',
    role: 'Wakil Direktur',
    image: '/images/wakildirektur.jpg'
  },
  {
    name: 'Ashary Abubakar',
    role: 'Komisaris',
    image: '/images/komisaris.jpg'
  },
  {
    name: 'Yulianti Hasan',
    role: 'Wakil Komisaris',
    image: '/images/wakilkomisaris.jpg'
  }
];

const ExecutiveTeam: React.FC = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold text-xs uppercase tracking-[0.4em] mb-4 font-bold"
          >
            Pilar Kami
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-charcoal"
          >
            Tim Eksekutif
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {TEAM.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col items-center"
            >
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-8">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-2 border-beige rounded-full group-hover:border-[#4F46E5] transition-colors duration-500 scale-110" />
                {/* Image Container */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl md:text-2xl text-charcoal font-bold">{member.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#4F46E5] font-bold opacity-80">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;
