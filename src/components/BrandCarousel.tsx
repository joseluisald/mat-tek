import React, { useState } from 'react';
import { AUTHORIZED_BRANDS } from '../data/brands';
import { Brand } from '../types';
import { BrandLogo } from './BrandLogo';
import { 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';

interface BrandCarouselProps {
  onSelectBrand?: (brand: Brand) => void;
  onNavigateToServices?: (brandId?: string) => void;
  title?: string;
  subtitle?: string;
}

export const BrandCarousel: React.FC<BrandCarouselProps> = ({
  onSelectBrand,
  onNavigateToServices,
  title = "Marcas com Assistência Autorizada",
  subtitle = "Garantia de fábrica e peças genuínas para os maiores fabricantes"
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleBrandClick = (brand: Brand) => {
    if (onSelectBrand) {
      onSelectBrand(brand);
    } else if (onNavigateToServices) {
      onNavigateToServices(brand.id);
    }
  };

  // Duplicate the brands array to create the infinite continuous loop effect
  const marqueeItems = [...AUTHORIZED_BRANDS, ...AUTHORIZED_BRANDS];

  return (
    <div className="relative w-full py-8 md:py-10 bg-[#12151A] text-white overflow-hidden border-y border-neutral-800">
      {/* Background visual texture */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header bar with controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#E31B23] text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Garantia de Fábrica · 12 Fabricantes Oficiais</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {title}
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              {subtitle}
            </p>
          </div>

          {onNavigateToServices && (
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                onClick={() => onNavigateToServices()}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#E31B23] hover:text-red-400 bg-red-500/10 hover:bg-red-500/20 px-3 py-2 rounded-lg border border-red-500/30 transition-colors active:scale-95"
              >
                <span>Serviços</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Horizontal Continuous Infinite Marquee Container - PURE OVERFLOW HIDDEN (NO SCROLLBAR) */}
      <div 
        className="relative w-full overflow-hidden py-2 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft edge gradient fades for desktop */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#12151A] to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#12151A] to-transparent z-10 pointer-events-none" />

        {/* Continuous moving track with pure logos */}
        <div 
          className={`animate-marquee-infinite flex items-center gap-4 sm:gap-5 px-4 ${isPaused ? 'paused' : ''}`}
        >
          {marqueeItems.map((brand, index) => {
            const isHighlighted = brand.id === 'husqvarna' || brand.id === 'branco' || brand.id === 'toyama';
            return (
              <div
                key={`${brand.id}-${index}`}
                onClick={() => handleBrandClick(brand)}
                className={`group relative w-44 sm:w-56 h-20 sm:h-22 shrink-0 bg-[#1A1F26] hover:bg-[#222933] border rounded-xl p-3 flex items-center justify-center transition-all duration-200 hover:shadow-lg select-none cursor-pointer ${
                  isHighlighted
                    ? 'border-red-500/30 hover:border-red-500/60'
                    : 'border-neutral-800 hover:border-neutral-700'
                }`}
                title={brand.name}
              >
                {/* Dedicated Pure Brand Logo */}
                <BrandLogo brand={brand} size="md" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Sub-strip caption */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-2 text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Atendimento autorizado com peças 100% originais em Pelotas e Canguçu</span>
        </span>
      </div>
    </div>
  );
};
