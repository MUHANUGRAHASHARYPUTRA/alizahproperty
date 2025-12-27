
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyProfile from './components/CompanyProfile';
import ExecutiveTeam from './components/ExecutiveTeam';
import CategorySection from './components/CategorySection';
import ComparisonTable from './components/ComparisonTable';
import Gallery from './components/Gallery';
import LocationMap from './components/LocationMap';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';
import OpeningLoader from './components/OpeningLoader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Mencegah scroll saat loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white bg-cream">
      <AnimatePresence>
        {isLoading && (
          <OpeningLoader onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <Hero />
        <main>
          {/* Bagian Baru: Profil & Tim */}
          <CompanyProfile />
          <ExecutiveTeam />

          <CategorySection />
          
          {/* Transitional Quote/Image Section */}
          <section className="h-[60vh] relative overflow-hidden flex items-center justify-center">
            <div 
              className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687940-4e524cb515d1?auto=format&fit=crop&q=80&w=1920)' }}
            />
            <div className="absolute inset-0 bg-charcoal/60 z-10" />
            <div className="relative z-20 text-center max-w-3xl px-6">
              <h3 className="text-black text-3xl md:text-5xl leading-tight italic serif">
                "Kemewahan sejati bukanlah tentang kelimpahan, melainkan tentang kesempurnaan dalam hal yang paling esensial."
              </h3>
            </div>
          </section>

          <ComparisonTable />
          <Gallery />

          {/* Bagian Baru: Peta Lokasi */}
          <LocationMap />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default App;
