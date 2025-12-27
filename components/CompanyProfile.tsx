
import React from 'react';
import { motion } from 'framer-motion';

const CompanyProfile: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-[24px] overflow-hidden shadow-2xl">
              <img 
                src='/images/perusahaan.jpg' 
                alt="Kantor AlizahProperty" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/10 -z-10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-gold text-xs uppercase tracking-[0.4em] font-bold">Alizah Property</p>
              <h2 className="text-4xl md:text-5xl text-charcoal leading-tight">Membangun Masa Depan Dengan <span className="italic">Integritas</span></h2>
            </div>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              AlizahProperty hadir sebagai jawaban atas kebutuhan hunian yang tidak hanya sekadar tempat tinggal, tetapi juga cerminan prestise dan kenyamanan. Dengan pengalaman lebih dari satu dekade, kami berdedikasi menciptakan ruang hidup yang harmonis antara estetika modern dan keberlanjutan lingkungan.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-charcoal">10+</p>
                <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Tahun Pengalaman</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-charcoal">100+</p>
                <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Unit Terjual</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
