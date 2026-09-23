import React, { useState } from 'react';
import { Brand } from '../types';

interface BrandLogoProps {
  brand: Brand;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  brand,
  className = '',
  size = 'md',
  showLabel = false,
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 px-2 text-xs',
    md: 'h-12 sm:h-14 px-3 sm:px-4 text-sm',
    lg: 'h-16 px-5 text-base',
  }[size];

  // If a real logo URL is supplied and hasn't failed to load, render the image
  if (brand.logoUrl && !imgError) {
    return (
      <div className={`flex items-center justify-center ${sizeClasses} ${className}`}>
        <img
          src={brand.logoUrl}
          alt={`Logo ${brand.name}`}
          onError={() => setImgError(true)}
          className="max-h-full max-w-full object-contain filter contrast-105"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Fallback: Highly stylized SVG vector brand marks matching the identity of each of the 12 brands
  const renderEmblem = () => {
    switch (brand.id) {
      case 'husqvarna':
        return (
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 28 28" className="w-6 h-6 text-sky-400 shrink-0 fill-current">
              <path d="M14 2L9 7v5l5-2 5 2V7l-5-5zm-5 13v6l5 5 5-5v-6l-5 2-5-2z" />
              <circle cx="14" cy="14" r="3" />
            </svg>
            <div className="flex flex-col leading-none text-left">
              <span className="font-black tracking-wider uppercase text-white font-sans text-xs sm:text-sm">
                Husqvarna
              </span>
              <span className="text-[8px] text-sky-300 tracking-widest font-bold uppercase mt-0.5">
                Oficial
              </span>
            </div>
          </div>
        );

      case 'branco':
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center font-black text-white text-xs shadow-xs">
              B
            </div>
            <div className="flex flex-col leading-none text-left">
              <span className="font-extrabold tracking-tight uppercase text-white text-xs sm:text-sm">
                BRANCO
              </span>
              <span className="text-[8px] text-sky-200 tracking-wider font-bold mt-0.5">
                MOTORES
              </span>
            </div>
          </div>
        );

      case 'toyama':
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white font-black text-xs shadow-xs">
              T
            </div>
            <span className="font-black tracking-tight text-white uppercase text-xs sm:text-sm">
              TOYAMA
            </span>
          </div>
        );

      case 'jactoclean':
        return (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500 shadow-xs" />
            <div className="flex flex-col leading-none text-left">
              <span className="font-black text-white text-xs sm:text-sm tracking-tight">
                Jacto<span className="text-orange-400">Clean</span>
              </span>
              <span className="text-[7px] text-slate-300 uppercase tracking-widest mt-0.5">
                Alta Pressão
              </span>
            </div>
          </div>
        );

      case 'oregon':
        return (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-xs bg-red-600 flex items-center justify-center text-[11px] font-black text-white shadow-xs">
              O
            </div>
            <span className="font-black tracking-wider text-white uppercase text-xs sm:text-sm">
              OREGON
            </span>
          </div>
        );

      case 'tekna':
        return (
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-5 bg-orange-500 skew-x-12 rounded-xs shadow-xs" />
            <span className="font-black tracking-wide text-white uppercase text-xs sm:text-sm">
              TEKNA
            </span>
          </div>
        );

      case 'vulcan-trent':
        return (
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <div className="flex flex-col leading-none text-left">
              <span className="font-black tracking-tight text-white uppercase text-xs sm:text-sm">
                VULCAN
              </span>
              <span className="text-[8px] text-red-300 font-bold uppercase tracking-widest mt-0.5">
                TRENT
              </span>
            </div>
          </div>
        );

      case 'gotze':
        return (
          <div className="flex items-center gap-2">
            <span className="text-base font-black text-blue-400">G</span>
            <span className="font-extrabold tracking-tight text-white uppercase text-xs sm:text-sm">
              GÖTZE
            </span>
          </div>
        );

      case 'lynus':
        return (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-xs bg-sky-500/20 border border-sky-400 flex items-center justify-center text-sky-400 font-bold text-xs">
              L
            </div>
            <span className="font-black tracking-widest text-white uppercase text-xs sm:text-sm">
              LYNUS
            </span>
          </div>
        );

      case 'kawashima':
        return (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-xs" />
            <span className="font-black tracking-tight text-white uppercase text-xs sm:text-sm">
              KAWASHIMA
            </span>
          </div>
        );

      case 'gmeq':
        return (
          <div className="flex items-center gap-2">
            <span className="font-mono font-black tracking-widest text-white text-xs sm:text-sm bg-white/10 px-2 py-1 rounded">
              GMEQ
            </span>
          </div>
        );

      case 'tramontina':
        return (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white font-serif font-black text-xs shadow-xs">
              T
            </div>
            <span className="font-bold tracking-tight text-white uppercase text-xs sm:text-sm">
              TRAMONTINA
            </span>
          </div>
        );

      default:
        return (
          <span className="font-extrabold text-white text-xs sm:text-sm tracking-tight">
            {brand.name}
          </span>
        );
    }
  };

  return (
    <div
      className={`flex items-center justify-center rounded-lg ${sizeClasses} ${className}`}
      style={{
        backgroundColor: brand.brandColor ? `${brand.brandColor}33` : 'rgba(255,255,255,0.08)',
        borderColor: brand.brandColor ? `${brand.brandColor}66` : 'rgba(255,255,255,0.15)',
      }}
    >
      {renderEmblem()}
    </div>
  );
};
