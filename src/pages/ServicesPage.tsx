import React, { useState } from 'react';
import { AUTHORIZED_BRANDS } from '../data/brands';
import { COMPANY_INFO, STORES } from '../data/stores';
import { BrandLogo } from '../components/BrandLogo';
import { BrandCarousel } from '../components/BrandCarousel';
import { 
  Wrench, 
  ShieldCheck, 
  ArrowRight,
  MessageCircle,
  Phone
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
      code: '01',
      title: 'Revisão Preventiva & Regulagem',
      description: 'Limpeza de carburadores por ultrassom, descarbonização, teste de compressão e regulagem de marcha-lenta e mistura estequiométrica.',
      appliedTo: 'Motosserras, Roçadeiras e Motores 2T/4T',
    },
    {
      code: '02',
      title: 'Retífica de Motores Estacionários',
      description: 'Retífica de bloco, assentamento de válvulas, substituição de pistões, anéis, bielas e juntas de fábrica.',
      appliedTo: 'Branco, Toyama, Kawashima, Vulcan',
    },
    {
      code: '03',
      title: 'Geradores de Energia & Placas AVR',
      description: 'Diagnóstico de placas reguladoras automáticas de tensão (AVR), escovas, enrolamento de estator/rotor e ensaio com carga resistiva.',
      appliedTo: 'Grupos Geradores Gasolina e Diesel (1 a 15 kVA)',
    },
    {
      code: '04',
      title: 'Lavadoras Industriais de Alta Pressão',
      description: 'Substituição de gaxetas de vedação, pistões de cerâmica maciça, válvulas de aço inox e reguladores de pressão by-pass.',
      appliedTo: 'Especialista Autorizado JactoClean',
    },
    {
      code: '05',
      title: 'Conjuntos de Corte & Afiação Técnica',
      description: 'Afiação com gabarito de passo e profundidade para correntes Oregon e Husqvarna, retífica de calhas de sabre e alinhamento.',
      appliedTo: 'Sabres e Correntes de todos os calibres',
    },
    {
      code: '06',
      title: 'Processamento de Garantia de Fábrica',
      description: 'Abertura de laudo técnico oficial credenciado, solicitação e aplicação direta de peças em garantia junto às 12 montadoras parceiras.',
      appliedTo: '12 Fabricantes Oficiais',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 md:pb-16 text-[#15181C]">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="border-b border-stone-200 pb-8 space-y-4">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#E31B23]">
            Oficina Especializada & Assistência Credenciada
          </div>
          <h1 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Assistência Técnica Oficial de Fábrica
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
            Diagnóstico com instrumental técnico, peças sobressalentes 100% genuínas e profissionais certificados pelos fabricantes em Pelotas e Canguçu.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onOpenQuoteWithService()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] bg-[#E31B23] hover:bg-[#C0121A] text-white text-xs font-bold rounded-md transition-all active:scale-95 shadow-sm"
            >
              <span>Solicitar Orçamento de Oficina</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com o mecânico da oficina Mat-Tek.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Falar com Responsável Técnico</span>
            </a>
          </div>
        </div>
      </div>

      {/* Brand Carousel for continuous reassurance */}
      <BrandCarousel />

      {/* Services Grid - Architectural Editorial Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-200 gap-3">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E31B23]">
              Procedimentos Certificados
            </span>
            <h2 className="font-display text-2xl font-bold text-stone-900 mt-1">
              Principais Serviços Realizados em Bancada
            </h2>
          </div>
          <p className="text-xs text-stone-500 max-w-md">
            Atendimento para máquinas sob garantia e equipamentos fora de garantia de todas as potências.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {maintenanceServices.map((service) => (
            <div
              key={service.code}
              className="bg-white border border-stone-200 hover:border-stone-400 rounded-lg p-6 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <span className="font-mono text-xs font-bold text-[#E31B23]">
                    {service.code} / SERVIÇO
                  </span>
                  <span className="font-mono text-[11px] text-stone-400">Oficina Autorizada</span>
                </div>

                <h3 className="font-display text-lg font-bold text-stone-900">
                  {service.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <div className="text-[11px] font-mono text-stone-500">
                  <span className="font-semibold text-stone-700">Aplicação:</span> {service.appliedTo}
                </div>

                <button
                  onClick={() => onOpenQuoteWithService(service.title)}
                  className="w-full py-2.5 px-3 min-h-[38px] text-xs font-bold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors text-center"
                >
                  Solicitar este serviço
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12 AUTHORIZED BRANDS - PURE CLEAN LOGO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border-b border-stone-200 pb-4 mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E31B23]">
            Credenciamento Direto
          </span>
          <h2 className="font-display text-2xl font-bold text-stone-900 mt-1">
            12 Fabricantes com Assistência Autorizada
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Trabalhamos exclusivamente com peças genuínas fornecidas pelas montadoras.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white border border-stone-200 rounded-lg p-5 flex items-center justify-center h-28 hover:border-stone-400 transition-colors"
              title={brand.name}
            >
              <BrandLogo brand={brand} size="md" />
            </div>
          ))}
        </div>
      </section>

      {/* WORKSHOP LOCATIONS & ADVICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0F1216] text-white rounded-lg p-8 sm:p-10 border border-stone-800 space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E31B23]">
              Atendimento Balcão
            </span>
            <h3 className="font-display text-2xl font-bold">
              Como entregar seu equipamento para manutenção
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Traga sua máquina em qualquer uma de nossas unidades em Pelotas ou Canguçu de segunda a sexta-feira (08:30 às 12:00 e 13:30 às 18:00). Nossos mecânicos realizam a conferência inicial no ato da entrega e emitem a ordem de serviço.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {STORES.map((s) => (
              <div key={s.id} className="p-4 bg-stone-900 border border-stone-800 rounded-md font-mono text-xs space-y-1">
                <div className="font-bold text-white uppercase">{s.name}</div>
                <div className="text-stone-400">{s.address}</div>
                <div className="text-stone-300 font-semibold pt-1">Tel: {s.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
