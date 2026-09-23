import React from 'react';
import { STORES, COMPANY_INFO, isStoreOpenNow } from '../data/stores';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Navigation,
  ExternalLink
} from 'lucide-react';

interface StoresPageProps {
  onOpenQuote?: () => void;
}

export const StoresPage: React.FC<StoresPageProps> = () => {
  const storeStatus = isStoreOpenNow();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12 pb-20 md:pb-12">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E31B23]">
          <MapPin className="w-4 h-4" />
          <span>Localização & Atendimento Regional</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Nossas Lojas em Pelotas e Canguçu
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          Visite nossos showrooms de máquinas novas, traga seu motor para revisão autorizada ou entre em contato direto pelo WhatsApp.
        </p>
      </div>

      {/* Side by Side Stores Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {STORES.map((store) => {
          const isPelotas = store.id === 'pelotas';
          return (
            <div
              key={store.id}
              className="bg-white border-2 border-slate-200 hover:border-[#E31B23]/50 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Store Tag & Live Status */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-[#E31B23]">
                    {isPelotas ? 'Filial Pelotas' : 'Matriz Canguçu'}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{storeStatus.message}</span>
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    {store.name}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {store.notes}
                  </p>
                </div>

                {/* Info List */}
                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Endereço:</strong>
                      <span>{store.address}</span>
                      <p className="text-slate-500 text-xs">{store.city} - RS, CEP {store.cep}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Telefone da Loja:</strong>
                      <a href={`tel:${store.phoneRaw}`} className="text-slate-900 font-mono font-semibold hover:text-[#E31B23]">
                        {store.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">WhatsApp Direto:</strong>
                      <a 
                        href={`https://wa.me/${store.whatsappRaw}?text=${encodeURIComponent(`Olá ${store.name}! Gostaria de atendimento.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-700 font-mono font-bold hover:underline"
                      >
                        {store.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Horário de Funcionamento:</strong>
                      <div className="text-xs text-slate-600 space-y-0.5 mt-1 font-mono">
                        <p>Segunda a Sexta: 08:30–12:00, 13:30–18:00</p>
                        <p className="text-red-700 font-semibold">Sábado e Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <a
                  href={store.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors active:scale-95 text-center"
                >
                  <Navigation className="w-4 h-4 text-slate-600" />
                  <span>Traçar Rota no Mapa</span>
                </a>

                <a
                  href={`https://wa.me/${store.whatsappRaw}?text=${encodeURIComponent(`Olá! Vim pelo site da Mat-Tek e gostaria de atendimento na unidade de ${store.city}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors sm:ml-auto shadow-xs active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Siga no Instagram - Balanced 2-Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Instagram Pelotas Card */}
        <div className="bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800 text-white p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-xs">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">Instagram Pelotas</h3>
                  <p className="text-xs text-pink-200">{COMPANY_INFO.instagramHandle}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Oficial
              </span>
            </div>

            <p className="text-xs text-pink-100 leading-relaxed">
              Vídeos de novos equipamentos, entregas técnicas, testes práticos de motosserras e dicas da oficina em Pelotas.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 px-4 min-h-[44px] bg-white text-purple-900 rounded-xl font-bold text-xs hover:bg-pink-50 transition-colors shadow-xs flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Seguir @mattekpelotas</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Instagram Canguçu Card */}
        <div className="bg-gradient-to-br from-purple-700 via-pink-600 to-rose-700 text-white p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-xs">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">Instagram Canguçu</h3>
                  <p className="text-xs text-pink-200">{COMPANY_INFO.instagramCangucuHandle}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Matriz
              </span>
            </div>

            <p className="text-xs text-pink-100 leading-relaxed">
              Acompanhe a rotina da matriz em Canguçu, manutenção de motores, chegadas de peças e novidades para o campo.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://www.instagram.com/mattekcangucu/"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 px-4 min-h-[44px] bg-white text-rose-900 rounded-xl font-bold text-xs hover:bg-pink-50 transition-colors shadow-xs flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Seguir @mattekcangucu</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
