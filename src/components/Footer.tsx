import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, STORES } from '../data/stores';
import { AUTHORIZED_BRANDS } from '../data/brands';
import { 
  Instagram, 
  MessageCircle, 
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-[#0F1216] text-stone-400 text-xs border-t border-stone-800">
      
      {/* Brands strip */}
      <div className="border-b border-stone-800/80 py-6 px-4 sm:px-6 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-stone-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
            <span>Assistência Técnica Autorizada Oficial:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-stone-400 font-medium">
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
            <div>
              <div className="font-display text-2xl font-bold tracking-tight text-white">
                MAT<span className="text-[#E31B23]">-</span>TEK
              </div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-stone-500 mt-0.5">
                Máquinas · Motores · Oficina Autorizada
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed text-xs">
              Venda e assistência técnica autorizada de motores estacionários, motosserras, ferramentas elétricas e grupos geradores. Credenciada oficial de 12 fabricantes em Pelotas e Canguçu desde 17 de Abril de 2017.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-800"
                aria-label="Instagram Pelotas"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-emerald-400 flex items-center justify-center transition-colors border border-stone-800"
                aria-label="WhatsApp Mat-Tek"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
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
                  Nossa História
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stores')}
                  className="hover:text-white transition-colors"
                >
                  Lojas & Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Stores Addresses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">Filial Pelotas - RS</h4>
            <p className="text-stone-400 leading-relaxed font-mono text-[11px]">
              {STORES[0].address}<br />
              Centro, Pelotas - RS, CEP {STORES[0].cep}<br />
              <span className="text-stone-300">Telefone: (53) 3228-5826</span><br />
              <span className="text-emerald-400">WhatsApp: (53) 98448-9179</span>
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">Matriz Canguçu - RS</h4>
            <p className="text-stone-400 leading-relaxed font-mono text-[11px]">
              {STORES[1].address}<br />
              Centro, Canguçu - RS, CEP {STORES[1].cep}<br />
              <span className="text-stone-300">Telefone: (53) 99905.9179</span><br />
              <span className="text-emerald-400">WhatsApp: (53) 99905-9179</span>
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Mat-Tek Comércio e Assistência Técnica de Máquinas e Motores.
          </div>
          <div>
            Pelotas & Canguçu · Rio Grande do Sul
          </div>
        </div>
      </div>
    </footer>
  );
};
