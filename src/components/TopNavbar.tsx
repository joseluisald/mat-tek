import React, { useState } from 'react';
import { MatTekLogo } from './MatTekLogo';
import { SectionId } from '../types';
import { 
  MessageCircle, 
  Menu, 
  X,
  MapPin,
  Clock
} from 'lucide-react';
import { COMPANY_INFO, isStoreOpenNow } from '../data/stores';

interface TopNavbarProps {
  activeSection: SectionId;
  onNavigateSection: (section: SectionId) => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeSection,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const storeStatus = isStoreOpenNow();

  const navLinks: { id: SectionId; label: string }[] = [
    { id: 'inicio', label: 'Início' },
    { id: 'parceiros', label: 'Parceiros' },
    { id: 'historia', label: 'Nossa História' },
    { id: 'unidades', label: 'Lojas & Horários' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (section: SectionId) => {
    onNavigateSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Utility Bar with store hours & locations */}
      <div className="bg-[#15181C] text-slate-300 text-xs py-1.5 px-4 sm:px-6 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span className="text-slate-200">{storeStatus.message}</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#E31B23]" />
              <span>Pelotas: (53) 3228-5826</span>
              <span className="mx-1 text-slate-600">·</span>
              <span>Canguçu: (53) 99905-9179</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            <a
              href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá Mat-Tek! Gostaria de informações sobre atendimento e assistência técnica.')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: (53) 98448-9179</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Single-Page Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Title / Logo */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E31B23] rounded-md transition-opacity hover:opacity-90"
            aria-label="Mat-Tek Página Inicial"
          >
            <MatTekLogo size="md" showSubtitle={true} />
          </button>

          {/* Section Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-semibold tracking-tight transition-colors relative py-1 whitespace-nowrap ${
                    isActive
                      ? 'text-[#E31B23]'
                      : 'text-slate-700 hover:text-[#E31B23]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E31B23] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Button: WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Mat-Tek e gostaria de atendimento.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-all active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg active:scale-95"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-xl animate-in fade-in duration-150">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-red-50 text-[#E31B23] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
                )}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Mat-Tek e gostaria de atendimento.')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
