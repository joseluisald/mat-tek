import React, { useState } from 'react';
import { AUTHORIZED_BRANDS } from '../data/brands';
import { COMPANY_INFO, STORES } from '../data/stores';
import { BrandLogo } from '../components/BrandLogo';
import { BrandCarousel } from '../components/BrandCarousel';
import { 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  Settings, 
  Clock, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  Phone,
  MessageCircle,
  HelpCircle,
  Filter
} from 'lucide-react';

interface ServicesPageProps {
  onOpenQuoteWithService: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenQuoteWithService,
}) => {
  const [activeBrandFilter, setActiveBrandFilter] = useState<string>('all');

  const filteredBrands = activeBrandFilter === 'all'
    ? AUTHORIZED_BRANDS
    : AUTHORIZED_BRANDS.filter((b) => b.id === activeBrandFilter);

  const maintenanceServices = [
    {
      title: 'Revisão Preventiva e Regulagem',
      icon: '⚙️',
      description: 'Limpeza de carburadores por ultrassom, descarbonização, troca de velas, regulagem de marcha-lenta e testes de compressão.',
      appliedTo: 'Motosserras, Roçadeiras e Motores 2T/4T',
    },
    {
      title: 'Conserto de Motores Estacionários',
      icon: '🔩',
      description: 'Retífica, substituição de pistões, anéis, bielas, válvulas, juntas originais e regulagem de governador mecânico.',
      appliedTo: 'Branco, Toyama, Kawashima, Vulcan',
    },
    {
      title: 'Manutenção de Geradores de Energia',
      icon: '⚡',
      description: 'Diagnóstico de placa reguladora AVR, bobinagem, escovas de carvão, disjuntores e teste sob carga real.',
      appliedTo: 'Geradores Gasolina e Diesel (1 a 15 kVA)',
    },
    {
      title: 'Lavadoras de Alta Pressão Industriais',
      icon: '💧',
      description: 'Troca de gaxetas de vedação de água e óleo, válvulas de sucção/pressão, pistões de cerâmica e cabeçote de latão.',
      appliedTo: 'Especialista Autorizado JactoClean',
    },
    {
      title: 'Afiação e Montagem de Conjuntos de Corte',
      icon: '🪓',
      description: 'Afiação técnica com gabarito de profundidade para correntes Oregon e Husqvarna, retífica de calhas de sabre e rebite.',
      appliedTo: 'Sabres e Correntes de todos os calibres',
    },
    {
      title: 'Garantia de Fábrica Oficial',
      icon: '🛡️',
      description: 'Abertura de laudo técnico oficial, pedido de peças em garantia direto com as 12 montadoras sem burocracia para o cliente.',
      appliedTo: '12 Marcas Credenciadas Oficialmente',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 md:pb-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <div className="border-b border-slate-200 pb-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E31B23]">
            <Wrench className="w-4 h-4" />
            <span>Oficina Especializada & Assistência Autorizada</span>
          </div>
          <h1 className="text-2.5xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Assistência Técnica Oficial das 12 Maiores Marcas
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Nossa equipe técnica possui treinamento direto com as fábricas para realizar revisões preventivas, reparos completos de motor e acionamento de garantias em Pelotas e Canguçu.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onOpenQuoteWithService()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] bg-[#E31B23] hover:bg-[#C0121A] text-white text-xs font-bold rounded-lg shadow-sm active:scale-95 transition-all"
            >
              <span>Solicitar Orçamento de Conserto / Peça</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com o responsável técnico da oficina Mat-Tek.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Falar com Técnico no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* CONTINUOUS HORIZONTAL BRAND CAROUSEL WITH LOGOS */}
      <BrandCarousel 
        title="12 Redes Autorizadas com Peças Originais"
        subtitle="Carrossel contínuo das marcas parceiras - toque para consultar peças e revisões"
      />

      {/* 12 AUTHORIZED BRANDS - ONLY LOGOS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E31B23]">
              Credenciamento de Fábrica
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              12 Marcas com Atendimento Autorizado
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            Peças genuínas com nota fiscal e garantia oficial
          </span>
        </div>

        {/* Brand quick filter chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1">
          <button
            onClick={() => setActiveBrandFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap min-h-[38px] transition-colors ${
              activeBrandFilter === 'all'
                ? 'bg-[#E31B23] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Todas as 12 Marcas
          </button>
          {AUTHORIZED_BRANDS.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBrandFilter(b.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap min-h-[38px] transition-colors ${
                activeBrandFilter === b.id
                  ? 'bg-[#1E2229] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Clean Brands Logo Grid - Pure Logos, No Descriptions, No Modals */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white border border-slate-200 hover:border-[#E31B23]/50 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-between space-y-4 group"
            >
              {/* Authorized Badge */}
              <div className="w-full flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Oficial</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-mono">
                  Autorizada
                </span>
              </div>

              {/* Prominent Pure Logo Display */}
              <div className="w-full py-4 px-2 bg-[#12151A] rounded-xl flex items-center justify-center min-h-[72px] shadow-inner group-hover:scale-102 transition-transform">
                <BrandLogo brand={brand} size="md" />
              </div>

              {/* Direct Action Button to Quote Parts/Repairs */}
              <button
                onClick={() => onOpenQuoteWithService(brand.name)}
                className="w-full py-2.5 px-3 min-h-[40px] text-xs font-bold text-slate-800 hover:text-white bg-slate-100 hover:bg-[#E31B23] rounded-xl transition-colors flex items-center justify-center gap-1.5 active:scale-95 text-center"
              >
                <span>Pedir Peças / Conserto</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CORE WORKSHOP SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E31B23]">
            Procedimentos Mecânicos
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Serviços Realizados nas Nossas Oficinas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {maintenanceServices.map((svc, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-3"
            >
              <div className="text-2xl">{svc.icon}</div>
              <h3 className="text-base font-bold text-slate-900">
                {svc.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {svc.description}
              </p>
              <div className="pt-2 text-[11px] font-semibold text-slate-500 border-t border-slate-200">
                <span>Aplicação: {svc.appliedTo}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIPS & PREVENTIVE GUIDELINES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#181C21] text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E31B23]">
              Dicas dos Mecânicos da Mat-Tek
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold">
              Como Prolongar a Vida Útil do seu Motor ou Motosserra
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-xs text-slate-300">
            <div className="space-y-2 p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-white text-sm">1. Cuidado com Combustível Velho</h4>
              <p className="leading-relaxed">
                A gasolina comum tem alto teor de álcool e se degrada em 20 a 30 dias dentro do tanque, criando borra e entupindo o carburador. Se não for usar por mais de 15 dias, esgote o tanque e deixe o motor apagar.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-white text-sm">2. Proporção Exata de Óleo 2 Tempos</h4>
              <p className="leading-relaxed">
                Para equipamentos Husqvarna, Tekna e Vulcan, utilize sempre óleo 2T na proporção recomendada (ex: 50:1 para óleos Husqvarna). Óleo a menos funde o pistão; óleo a mais carboniza a vela.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-white text-sm">3. Limpeza Diária do Filtro de Ar</h4>
              <p className="leading-relaxed">
                Em motosserras e roçadeiras, a poeira e serragem aspiradas sem filtro provocam desgaste severo da camisa do cilindro. Lave ou sopre o filtro de ar a cada dia de serviço intenso.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              Seu equipamento precisa de uma revisão profissional? Traga para a Mat-Tek em Pelotas ou Canguçu.
            </p>
            <button
              onClick={() => onOpenQuoteWithService()}
              className="w-full sm:w-auto px-5 py-3 min-h-[44px] bg-[#E31B23] hover:bg-[#C0121A] text-white text-xs font-bold rounded-lg transition-colors text-center"
            >
              Agendar Revisão Técnica
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

