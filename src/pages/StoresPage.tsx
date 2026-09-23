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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 pb-20 md:pb-16 text-[#15181C]">
      
      {/* Page Header */}
      <div className="border-b border-stone-200 pb-6 space-y-2">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#E31B23]">
          Unidades & Oficinas Físicas
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          Lojas em Pelotas e Canguçu
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
          Atendimento presencial com bancada para diagnóstico de motores, demonstração prática de ferramentas e estoque de peças genuínas com garantia de fábrica.
        </p>
      </div>

      {/* Side by Side Physical Store Cards - Industrial Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {STORES.map((store) => {
          const isPelotas = store.id === 'pelotas';
          return (
            <div
              key={store.id}
              className="bg-white border border-stone-200 hover:border-stone-400 rounded-lg p-6 sm:p-8 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                {/* Store Tag & Live Status - Zero Pills */}
                <div className="flex items-center justify-between font-mono text-xs border-b border-stone-100 pb-3">
                  <span className="font-bold uppercase tracking-wider text-[#E31B23]">
                    {isPelotas ? 'Filial Pelotas' : 'Matriz Canguçu'}
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span>{storeStatus.message}</span>
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-stone-900">
                    {store.name}
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    {store.notes}
                  </p>
                </div>

                {/* Info List */}
                <dl className="space-y-3 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-start gap-3">
                    <dt className="font-mono font-semibold text-stone-500 w-24 shrink-0 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>Endereço</span>
                    </dt>
                    <dd>
                      <span className="text-stone-900 font-medium">{store.address}</span>
                      <p className="text-stone-500 text-xs">{store.city} - RS, CEP {store.cep}</p>
                    </dd>
                  </div>

                  <div className="flex items-center gap-3">
                    <dt className="font-mono font-semibold text-stone-500 w-24 shrink-0 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-stone-400" />
                      <span>Telefone</span>
                    </dt>
                    <dd>
                      <a href={`tel:${store.phoneRaw}`} className="text-stone-900 font-mono font-bold hover:text-[#E31B23]">
                        {store.phone}
                      </a>
                    </dd>
                  </div>

                  <div className="flex items-center gap-3">
                    <dt className="font-mono font-semibold text-stone-500 w-24 shrink-0 flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span>WhatsApp</span>
                    </dt>
                    <dd>
                      <a 
                        href={`https://wa.me/${store.whatsappRaw}?text=${encodeURIComponent(`Olá ${store.name}! Gostaria de atendimento.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-700 font-mono font-bold hover:underline"
                      >
                        {store.whatsapp}
                      </a>
                    </dd>
                  </div>

                  <div className="flex items-start gap-3">
                    <dt className="font-mono font-semibold text-stone-500 w-24 shrink-0 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>Horário</span>
                    </dt>
                    <dd className="font-mono text-xs text-stone-600">
                      <span>Segunda a Sexta: 08:30–12:00, 13:30–18:00</span>
                      <span className="block text-stone-400">Sábado e Domingo: Fechado</span>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={store.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-md text-xs font-semibold transition-colors active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-stone-500" />
                  <span>Traçar Rota</span>
                </a>

                <a
                  href={`https://wa.me/${store.whatsappRaw}?text=${encodeURIComponent(`Olá! Vim pelo site da Mat-Tek e gostaria de atendimento na unidade de ${store.city}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold transition-colors shadow-xs active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Official Instagram Channels - Crisp Technical Cards (No AI purple gradient) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Instagram Pelotas */}
        <div className="bg-[#0F1216] border border-stone-800 text-white p-6 sm:p-8 rounded-lg space-y-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-xs border-b border-stone-800 pb-3">
              <span className="text-[#E31B23] font-bold uppercase tracking-wider">
                Canal Oficial Pelotas
              </span>
              <span className="text-stone-500">Instagram</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-white">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">@mattekpelotas</h3>
                <p className="text-xs text-stone-400">Filial Pelotas · R. Gen. Argolo, 1322</p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              Demonstrações práticas de motosserras, dicas de manutenção preventiva, entregas técnicas e novidades das marcas parceiras.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 min-h-[42px] bg-white text-stone-900 hover:bg-stone-100 rounded-md font-bold text-xs transition-colors flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Acessar Instagram Pelotas</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Instagram Canguçu */}
        <div className="bg-[#0F1216] border border-stone-800 text-white p-6 sm:p-8 rounded-lg space-y-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-xs border-b border-stone-800 pb-3">
              <span className="text-[#E31B23] font-bold uppercase tracking-wider">
                Canal Oficial Canguçu
              </span>
              <span className="text-stone-500">Instagram</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-white">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">@mattekcangucu</h3>
                <p className="text-xs text-stone-400">Matriz Canguçu · R. Gen. Câmara, 1556</p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              Rotina da oficina, revisão de motores estacionários, motobombas e soluções especializadas para o homem do campo e pequenos produtores.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://www.instagram.com/mattekcangucu/"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 min-h-[42px] bg-white text-stone-900 hover:bg-stone-100 rounded-md font-bold text-xs transition-colors flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Acessar Instagram Canguçu</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
