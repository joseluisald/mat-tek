import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  FileText, 
  MessageCircle, 
  Menu, 
  X
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
    { id: 'products', label: 'Catálogo de Máquinas' },
    { id: 'services', label: 'Oficina Autorizada' },
    { id: 'about', label: 'Nossa História' },
    { id: 'stores', label: 'Lojas & Contato' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar - Clean, unboxed editorial information */}
      <div className="bg-[#0F1216] text-stone-400 text-xs py-1.5 px-4 sm:px-6 border-b border-stone-800 font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span className="text-stone-300">{storeStatus.message}</span>
            </span>
            <span className="hidden md:inline text-stone-700">/</span>
            <span className="hidden md:inline text-stone-400">Pelotas: (53) 3228-5826</span>
            <span className="hidden md:inline text-stone-700">·</span>
            <span className="hidden md:inline text-stone-400">Canguçu: (53) 99905-9179</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá Mat-Tek! Gostaria de informações.')}`}
              target="_blank"
              rel="noreferrer"
              className="text-stone-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: (53) 98448-9179</span>
            </a>
          </div>
        </div>
      </div>

      {/* Strict 3-Zone Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-6">
          
          {/* ZONE 1: Single Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-baseline gap-2.5 text-left focus:outline-hidden group"
            aria-label="Mat-Tek Página Inicial"
          >
            <span className="font-display text-2xl font-bold tracking-tight text-stone-900 group-hover:text-[#E31B23] transition-colors">
              MAT<span className="text-[#E31B23]">-</span>TEK
            </span>
            <span className="hidden sm:inline font-mono text-[11px] font-semibold text-stone-500 uppercase tracking-widest border-l border-stone-200 pl-2.5">
              Máquinas & Motores
            </span>
          </button>

          {/* ZONE 2: 5 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-semibold transition-colors relative py-1 whitespace-nowrap ${
                    isActive
                      ? 'text-[#E31B23]'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E31B23]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ZONE 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3">
            {/* Primary Action: Quote System */}
            <button
              onClick={onOpenQuote}
              className={`inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] text-xs font-bold rounded-md transition-all active:scale-95 ${
                quoteCount > 0
                  ? 'bg-[#E31B23] hover:bg-[#C0121A] text-white shadow-sm'
                  : 'bg-stone-900 hover:bg-black text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Orçamento Técnico</span>
              {quoteCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 text-[11px] font-mono font-bold bg-white text-[#E31B23] rounded-sm tabular-nums">
                  {quoteCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-md focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-semibold transition-colors ${
                  currentPage === link.id
                    ? 'bg-stone-100 text-[#E31B23]'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
