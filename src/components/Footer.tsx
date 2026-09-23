import React from 'react';
import { PageId } from '../types';
import { MatTekLogo } from './MatTekLogo';
import { COMPANY_INFO, STORES } from '../data/stores';
import { AUTHORIZED_BRANDS } from '../data/brands';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  MessageCircle, 
  ShieldCheck, 
  Heart,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-[#14171A] text-slate-400 text-xs border-t border-neutral-800">
      
      {/* Brands strip */}
      <div className="border-b border-neutral-800/80 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
            <span>Assistência Técnica Autorizada Oficial:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-slate-300 font-medium">
            {AUTHORIZED_BRANDS.map((b) => (
              <span key={b.id} className="hover:text-white transition-colors">
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <MatTekLogo theme="dark" size="md" />
            <p className="text-slate-400 leading-relaxed text-xs">
              Venda, manutenção e assistência técnica autorizada em máquinas florestais, motores estacionários, ferramentas elétricas e geradores. Atendendo Canguçu, Pelotas e toda a região sul desde 2017.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Mat-Tek"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-emerald-800/60 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Mat-Tek"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Página Inicial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors"
                >
                  Catálogo de Máquinas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Assistência Técnica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  Nossa História (2017)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stores')}
                  className="hover:text-white transition-colors"
                >
                  Pelotas & Canguçu
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="text-[#E31B23] font-bold hover:underline"
                >
                  Montar Orçamento
                </button>
              </li>
            </ul>
          </div>

          {/* Store Pelotas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Unidade Pelotas</h4>
            <div className="space-y-2 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E31B23] shrink-0 mt-0.5" />
                <span>R. Gen. Argolo, 1322 - Centro, Pelotas - RS, 96020-380</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E31B23] shrink-0" />
                <a href="tel:555332285826" className="hover:text-white font-mono">
                  (53) 3228-5826
                </a>
              </p>
              <p className="flex items-start gap-2 text-[11px] text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Seg a Sex: 08:30–12:00, 13:30–18:00</span>
              </p>
            </div>
          </div>

          {/* Store Canguçu */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Unidade Canguçu (Matriz)</h4>
            <div className="space-y-2 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E31B23] shrink-0 mt-0.5" />
                <span>R. Gen. Câmara, 1556 - Centro, Canguçu - RS, 96600-000</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E31B23] shrink-0" />
                <a href="tel:5553999059179" className="hover:text-white font-mono">
                  (53) 99905-9179
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a href="https://wa.me/5553984489179" target="_blank" rel="noreferrer" className="text-emerald-400 font-mono hover:underline">
                  Whats: (53) 98448-9179
                </a>
              </p>
              <p className="flex items-start gap-2 text-[11px] text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Seg a Sex: 08:30–12:00, 13:30–18:00</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Mat-Tek Máquinas, Motores e Ferramentas. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Construindo nossa história com trabalho, honestidade e dedicação desde 2017.</span>
          </p>
        </div>
      </div>

    </footer>
  );
};
