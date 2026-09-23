import React from 'react';
import { PageId } from '../types';
import { 
  Home, 
  ShoppingBag, 
  Wrench, 
  MapPin, 
  FileText 
} from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  quoteCount: number;
  onOpenQuote: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage,
  onNavigate,
  quoteCount,
  onOpenQuote,
}) => {
  const tabs: { id: PageId; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'products', label: 'Produtos', icon: ShoppingBag },
    { id: 'services', label: 'Oficina', icon: Wrench },
    { id: 'stores', label: 'Lojas', icon: MapPin },
  ];

  const handleTabClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      aria-label="Navegação móvel inferior"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1 pb-[max(0.35rem,env(safe-area-inset-bottom))] shadow-lg"
    >
      <div className="grid grid-cols-5 items-center justify-items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = currentPage === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center justify-center w-full min-h-[48px] py-1 rounded-lg transition-all active:scale-95 ${
                isActive ? 'text-[#E31B23]' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#E31B23] rounded-full" />
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-1 font-semibold ${isActive ? 'text-[#E31B23]' : 'text-slate-600'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}

        {/* Orçamento Tab with badge */}
        <button
          onClick={onOpenQuote}
          className={`flex flex-col items-center justify-center w-full min-h-[48px] py-1 rounded-lg transition-all active:scale-95 ${
            quoteCount > 0 ? 'text-[#E31B23]' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <div className="relative">
            <FileText className={`w-5 h-5 ${quoteCount > 0 ? 'scale-110 text-[#E31B23]' : ''}`} />
            {quoteCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 min-w-[18px] h-[18px] px-1 bg-[#E31B23] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-xs animate-pulse">
                {quoteCount}
              </span>
            )}
          </div>
          <span className={`text-[10px] tracking-tight mt-1 font-bold ${quoteCount > 0 ? 'text-[#E31B23]' : 'text-slate-600'}`}>
            Cotação
          </span>
        </button>
      </div>
    </nav>
  );
};
