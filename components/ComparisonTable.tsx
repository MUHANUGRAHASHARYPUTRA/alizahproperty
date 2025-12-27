
import React from 'react';
import { motion } from 'framer-motion';
import { COMPARISONS } from '../constants';

const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold text-xs uppercase tracking-widest mb-4"
          >
            Spesifikasi Detail
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-charcoal"
          >
            Perbandingan Unit
          </motion.h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-beige">
                <th className="py-6 text-[10px] uppercase tracking-widest text-charcoal/40 font-medium w-1/3">Fitur Utama</th>
                <th className="py-6 text-[10px] uppercase tracking-widest text-charcoal font-bold w-1/3">Seri Subsidi</th>
                <th className="py-6 text-[10px] uppercase tracking-widest text-gold font-bold w-1/3">Seri Komersil</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-beige/40">
              {COMPARISONS.map((row, idx) => (
                <motion.tr 
                  key={row.feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <td className="py-8 pr-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-charcoal/60">{row.feature}</span>
                  </td>
                  <td className="py-8 pr-4">
                    <span className="text-sm text-charcoal/80">{row.subsidi}</span>
                  </td>
                  <td className="py-8">
                    <span className="text-sm text-charcoal font-medium">{row.komersil}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 p-8 bg-beige/30 rounded-[24px] text-center border border-beige/50">
          <p className="text-charcoal/60 text-sm leading-relaxed italic">
            "Kami percaya kemewahan bukan soal harga, tapi standar kehidupan. Kedua seri kami berbagi komitmen yang sama terhadap kualitas bangunan."
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-widest font-bold">— Arsitek Utama AlizahProperty</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
