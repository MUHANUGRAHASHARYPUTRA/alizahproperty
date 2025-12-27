
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PropertySeries } from '../types';
import { PROPERTIES } from '../constants';
import { Ruler, Bed, Bath, ArrowRight } from 'lucide-react';

const CategorySection: React.FC = () => {
  const [activeSeries, setActiveSeries] = useState<PropertySeries>(PropertySeries.KOMERSIL);

  const filteredProperties = PROPERTIES.filter(p => p.series === activeSeries);

  const handleBooking = (property: any) => {
    if (property.isSoldOut) return;
    window.open(`https://wa.me/62895403047867?text=Halo%20AlizahProperty,%20saya%20ingin%20tanya%20detail%20untuk%20unit%20${property.title}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold text-xs uppercase tracking-widest mb-4 font-semibold"
            >
              Koleksi Hunian
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-charcoal leading-tight"
            >
              Pilih Ruang <br /> Impian Anda
            </motion.h2>
          </div>

          {/* Luxury Toggle */}
          <div className="flex bg-beige p-1 rounded-full relative shadow-inner">
            <button 
              onClick={() => setActiveSeries(PropertySeries.SUBSIDI)}
              className={`relative z-10 px-8 py-3 text-[10px] uppercase tracking-widest font-bold transition-colors duration-500 ${activeSeries === PropertySeries.SUBSIDI ? 'text-white' : 'text-charcoal/60'}`}
            >
              Tipe Subsidi
            </button>
            <button 
              onClick={() => setActiveSeries(PropertySeries.KOMERSIL)}
              className={`relative z-10 px-8 py-3 text-[10px] uppercase tracking-widest font-bold transition-colors duration-500 ${activeSeries === PropertySeries.KOMERSIL ? 'text-white' : 'text-charcoal/60'}`}
            >
              Tipe Komersil
            </button>
            <motion.div 
              layoutId="activeTab"
              className="absolute top-1 left-1 bottom-1 bg-charcoal rounded-full"
              initial={false}
              animate={{ 
                x: activeSeries === PropertySeries.SUBSIDI ? 0 : '100%',
                width: 'calc(50% - 4px)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="wait">
            {filteredProperties.map((property, idx) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group ${property.isSoldOut ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
                onClick={() => handleBooking(property)}
              >
                <div className="relative overflow-hidden rounded-[24px] aspect-[4/3] shadow-lg mb-8 bg-beige">
                  <img 
                    src={property.imageUrl} 
                    alt={property.title}
                    className={`w-full h-full object-cover transition-transform duration-1000 ${property.isSoldOut ? 'grayscale contrast-75' : 'group-hover:scale-110'}`}
                  />
                  
                  {/* Overlay for Sold Out */}
                  {property.isSoldOut && (
                    <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[2px] flex items-center justify-center">
                       <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="border-2 border-white px-8 py-4 rotate-[-12deg]"
                       >
                         <span className="text-white text-3xl font-bold tracking-[0.2em] uppercase">Sold Out</span>
                       </motion.div>
                    </div>
                  )}

                  <div className="absolute top-6 right-6">
                    <span className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-sm ${property.isSoldOut ? 'bg-charcoal text-white' : 'bg-white/90 backdrop-blur-md text-charcoal'}`}>
                      {property.isSoldOut ? 'Habis Terjual' : 'Tersedia'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-3xl transition-colors ${property.isSoldOut ? 'text-charcoal/40' : 'text-charcoal group-hover:text-gold'}`}>{property.title}</h3>
                    <p className={`text-xl font-medium ${property.isSoldOut ? 'text-charcoal/30' : 'text-gold'}`}>{property.price}</p>
                  </div>
                  <p className="text-charcoal/60 text-sm leading-relaxed max-w-md">
                    {property.description}
                  </p>
                  
                  <div className="flex items-center gap-8 py-4 border-y border-beige">
                    <div className="flex items-center gap-2 text-charcoal/70">
                      <Ruler size={16} strokeWidth={1.5} />
                      <span className="text-[10px] uppercase tracking-tighter font-bold">{property.sqft}</span>
                    </div>
                    <div className="flex items-center gap-2 text-charcoal/70">
                      <Bed size={16} strokeWidth={1.5} />
                      <span className="text-[10px] uppercase tracking-tighter font-bold">{property.bedrooms} Kamar</span>
                    </div>
                    <div className="flex items-center gap-2 text-charcoal/70">
                      <Bath size={16} strokeWidth={1.5} />
                      <span className="text-[10px] uppercase tracking-tighter font-bold">{property.bathrooms} KM</span>
                    </div>
                  </div>

                  {!property.isSoldOut ? (
                    <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold group/btn hover:text-gold transition-colors">
                      Lihat Detail & Harga
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-2" />
                    </button>
                  ) : (
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/40 italic">
                      Unit tidak lagi tersedia
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
