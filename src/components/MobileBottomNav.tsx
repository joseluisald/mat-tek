import React from 'react';
import { SectionId } from '../types';
import { 
  Home, 
  ShieldCheck, 
  BookOpen, 
  MapPin, 
  MessageCircle 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/stores';

interface MobileBottomNavProps {
  activeSection: SectionId;
  onNavigateSection: (section: SectionId) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigateSection,
}) => {
  const tabs: { id: SectionId; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'parceiros', label: 'Parceiros', icon: ShieldCheck },
    { id: 'historia', label: 'História', icon: BookOpen },
    { id: 'unidades', label: 'Lojas', icon: MapPin },
  ];

  return (
    <nav 
      aria-label="Navegação móvel inferior"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1 pb-[max(0.35rem,env(safe-area-inset-bottom))] shadow-lg"
    >
      <div className="grid grid-cols-5 items-center justify-items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onNavigateSection(tab.id)}
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

        {/* WhatsApp Direct Tab */}
        <a
          href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá Mat-Tek! Vim pelo site e gostaria de atendimento.')}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center w-full min-h-[48px] py-1 rounded-lg transition-all active:scale-95 text-emerald-600 hover:text-emerald-700"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 scale-105" />
          </div>
          <span className="text-[10px] tracking-tight mt-1 font-bold text-emerald-700">
            WhatsApp
          </span>
        </a>
      </div>
    </nav>
  );
};
