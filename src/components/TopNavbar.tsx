import React, { useState } from 'react';
import { MatTekLogo } from './MatTekLogo';
import { PageId } from '../types';
import { 
  FileText, 
  MessageCircle, 
  Phone, 
  Menu, 
  X,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO, isStoreOpenNow } from '../data/stores';

interface TopNavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  quoteCount: number;
  onOpenQuote: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  currentPage,
  onNavigate,
  quoteCount,
  onOpenQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const storeStatus = isStoreOpenNow();

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Início' },
    { id: 'products', label: 'Produtos' },
    { id: 'services', label: 'Assistência' },
    { id: 'about', label: 'História' },
    { id: 'stores', label: 'Lojas' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá Mat-Tek! Gostaria de tirar uma dúvida sobre máquinas e serviços.')}`}
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

      {/* Strict 3-Zone Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          
          {/* ZONE 1: Brand Title (Single Logo Link) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E31B23] rounded-md transition-opacity hover:opacity-90"
            aria-label="Mat-Tek Página Inicial"
          >
            <MatTekLogo size="md" showSubtitle={true} />
          </button>

          {/* ZONE 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
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

          {/* ZONE 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick WhatsApp Contact */}
            <a
              href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá, vim pelo site da Mat-Tek e gostaria de atendimento.')}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 bg-slate-100 hover:bg-emerald-50 rounded-lg transition-colors border border-slate-200/60"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>Atendimento</span>
            </a>

            {/* Quote System Button with Counter */}
            <button
              onClick={onOpenQuote}
              className={`relative inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white rounded-lg transition-all shadow-sm active:scale-95 whitespace-nowrap ${
                quoteCount > 0
                  ? 'bg-[#E31B23] hover:bg-[#C0121A] shadow-red-500/20 shadow-md ring-2 ring-red-300'
                  : 'bg-[#1E2229] hover:bg-black'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Orçamento</span>
              {quoteCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-black bg-white text-[#E31B23] rounded-full tabular-nums shadow-xs">
                  {quoteCount}
                </span>
              )}
            </button>

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
                className={`w-full text-left px-3.5 py-3 min-h-[44px] rounded-xl text-sm font-semibold transition-colors flex items-center justify-between active:scale-95 ${
                  currentPage === link.id
                    ? 'bg-red-50 text-[#E31B23]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {currentPage === link.id && <span className="w-2 h-2 rounded-full bg-[#E31B23]" />}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  onOpenQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] bg-[#E31B23] text-white rounded-xl text-sm font-bold active:scale-95 transition-transform"
              >
                <FileText className="w-4 h-4" />
                <span>Ver Orçamento {quoteCount > 0 ? `(${quoteCount})` : ''}</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Mat-Tek e gostaria de atendimento.')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold active:scale-95 transition-transform"
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
