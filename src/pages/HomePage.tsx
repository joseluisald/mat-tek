import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { COMPANY_INFO, STORES, isStoreOpenNow } from '../data/stores';
import { BrandCarousel } from '../components/BrandCarousel';
import { 
  ArrowRight, 
  Wrench, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  FileText, 
  MessageCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  featuredProducts: Product[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToQuote,
  featuredProducts,
}) => {
  const storeStatus = isStoreOpenNow();
  const [activeStoreTab, setActiveStoreTab] = useState<'pelotas' | 'cangucu'>('pelotas');

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 md:pb-16 text-[#15181C]">
      
      {/* HERO SECTION - INDUSTRIAL ARCHITECTURAL CANVAS */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-[#0F1216] overflow-hidden text-white border-b border-stone-800">
        {/* Background photo with industrial scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_machinery_workshop_1790171733001.jpg"
            alt="Bancada de Manutenção e Showroom Mat-Tek"
            className="w-full h-full object-cover object-center opacity-25 scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1216] via-[#0F1216]/95 to-[#0F1216]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Clean unboxed metadata with typographic separators (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-stone-300 font-mono">
              <span className="text-[#E31B23] font-bold uppercase tracking-wider">
                Fundada em 17 de Abril de 2017
              </span>
              <span aria-hidden="true" className="text-stone-600">/</span>
              <span>Pelotas & Canguçu · RS</span>
              <span aria-hidden="true" className="text-stone-600">/</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                {storeStatus.message}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Máquinas de Força, Motores & Oficina Autorizada de Fábrica.
            </h1>

            {/* Subcopy with concrete specs */}
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl">
              Venda consultiva e assistência técnica oficial de 12 fabricantes globais. 
              Equipamentos para agricultura, floresta, construção civil e indústria com garantia genuína em Pelotas e Canguçu.
            </p>

            {/* Industrial Action Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg font-bold text-sm bg-[#E31B23] hover:bg-[#C0121A] text-white transition-all active:scale-98 shadow-sm"
              >
                <span>Catálogo de Equipamentos</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all active:scale-98"
              >
                <Wrench className="w-4 h-4 text-[#E31B23]" />
                <span>Assistência Técnica Autorizada</span>
              </button>
            </div>

            {/* Technical Verification Strip */}
            <div className="pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-300 font-mono">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>12 Marcas Credenciadas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Wrench className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>Peças Originais de Fábrica</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>Orçamento Técnico Online</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HORIZONTAL BRAND CAROUSEL (ZERO-PILL, PURE LOGOS) */}
      <BrandCarousel 
        onNavigateToServices={() => onNavigate('services')}
      />

      {/* 4 CORE PILLARS - ARCHITECTURAL EDITORIAL GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-stone-200 gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E31B23]">
              Capacidade Operacional
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              Quatro Linhas de Soluções Industriais
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md">
            Equipamentos e suporte mecânico especializado para alta exigência no campo e na cidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 01 */}
          <div 
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-white border border-stone-200 hover:border-[#E31B23] rounded-lg p-6 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#E31B23]">01 / LINHA</span>
                <span className="font-mono text-[11px] text-stone-400 uppercase">2T & 4T</span>
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-[#E31B23] transition-colors">
                Máquinas & Floresta
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Motosserras profissionais, roçadeiras laterais e costais, podadores de galho e sopradores Husqvarna, Tekna e Vulcan com garantia.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-[#E31B23] transition-colors">
              <span>Ver modelos no catálogo</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Pillar 02 */}
          <div 
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-white border border-stone-200 hover:border-[#E31B23] rounded-lg p-6 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#E31B23]">02 / LINHA</span>
                <span className="font-mono text-[11px] text-stone-400 uppercase">5.5 a 18 HP</span>
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-[#E31B23] transition-colors">
                Motores Estacionários
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Motores horizontais e verticais a gasolina e diesel Branco, Toyama e Kawashima para betoneiras, motobombas e implementos agrícolas.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-[#E31B23] transition-colors">
              <span>Ver motores e implementos</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Pillar 03 */}
          <div 
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-white border border-stone-200 hover:border-[#E31B23] rounded-lg p-6 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#E31B23]">03 / LINHA</span>
                <span className="font-mono text-[11px] text-stone-400 uppercase">Industrial</span>
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-[#E31B23] transition-colors">
                Ferramentas & Oficina
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Inversoras de solda Lynus, compressores de ar, ferramentas manuais Tramontina Master, prensas hidráulicas GMEQ e lavadoras JactoClean.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-[#E31B23] transition-colors">
              <span>Ver linha de ferramentas</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Pillar 04 */}
          <div 
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-white border border-stone-200 hover:border-[#E31B23] rounded-lg p-6 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#E31B23]">04 / LINHA</span>
                <span className="font-mono text-[11px] text-stone-400 uppercase">1.2 a 15 kVA</span>
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-[#E31B23] transition-colors">
                Geradores de Energia
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Grupos geradores portáteis e cabinados a diesel ou gasolina Branco e Toyama para propriedades rurais, comércio, telecom e emergências.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-[#E31B23] transition-colors">
              <span>Ver grupos geradores</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS - CLEAN TECHNICAL SPEC GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-stone-200 gap-3">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E31B23]">
              Pronta Entrega Regional
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-1">
              Máquinas & Equipamentos em Destaque
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs font-bold text-[#E31B23] hover:text-[#C0121A] flex items-center gap-1.5 transition-colors self-start sm:self-auto py-1"
          >
            <span>Ver todo o catálogo ({featuredProducts.length} itens)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-white border border-stone-200 hover:border-stone-400 rounded-lg overflow-hidden transition-all flex flex-col justify-between"
            >
              {/* Image Frame with Clean Aspect Ratio */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative cursor-pointer aspect-4/3 bg-stone-100 overflow-hidden group border-b border-stone-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Body - Zero Pills, Clean Typography */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-1">
                    <span className="font-bold text-stone-900 uppercase">{product.brand}</span>
                    <span>{product.warrantyMonths}m Garantia</span>
                  </div>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="cursor-pointer font-display text-sm font-bold text-stone-900 hover:text-[#E31B23] transition-colors line-clamp-2"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1.5 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-stone-100">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-stone-500">Disponibilidade:</span>
                    <span className="text-emerald-700 font-semibold">Pelotas / Canguçu</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="px-3 py-2.5 min-h-[40px] text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors text-center active:scale-95"
                    >
                      Ficha Técnica
                    </button>
                    <button
                      onClick={() => onAddToQuote(product)}
                      className="px-3 py-2.5 min-h-[40px] text-xs font-bold text-white bg-[#E31B23] hover:bg-[#C0121A] rounded-md transition-colors shadow-xs active:scale-95 text-center"
                    >
                      + Orçamento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY & COMPANY HISTÓRIA - EDITORIAL TECHNICAL JOURNALISM */}
      <section className="bg-stone-100 border-y border-stone-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-xs font-bold text-[#E31B23] uppercase tracking-wider">
                Trajetória Mat-Tek · Desde 17 de Abril de 2017
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
                De uma oficina em Canguçu à liderança regional em máquinas e assistência técnica.
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Toda grande empresa tem um começo. A da <strong>Mat-Tek</strong> nasceu de um sonho simples e determinado: fornecer assistência mecânica honesta e equipamentos de alta confiabilidade para o produtor rural, operário e empresário da região sul do Rio Grande do Sul.
              </p>

              <p className="text-sm text-stone-600 leading-relaxed">
                Começamos em Canguçu, consolidando o credenciamento de fábrica com 12 montadoras multinacionais. Com trabalho contínuo e rigor técnico, expandimos com uma filial completa no centro de Pelotas, unindo estoque de pronta entrega e bancada de conserto oficial.
              </p>

              <blockquote className="p-5 bg-white border-l-4 border-[#E31B23] rounded-r-md shadow-xs text-stone-800 text-sm italic">
                “Construímos nossa história com trabalho, honestidade e dedicação. E seguimos firmes, sempre com o objetivo de crescer e fazer o melhor para nossos clientes e amigos.”
                <span className="block mt-2 font-mono font-bold not-italic text-xs text-stone-900">— Equipe & Fundadores Mat-Tek</span>
              </blockquote>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#0F1216] hover:bg-black px-5 py-3 min-h-[44px] rounded-md transition-colors active:scale-98"
                >
                  <span>Ler História Completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-xs">
                <img
                  src="/src/assets/images/technical_assistance_service_1790171772657.jpg"
                  alt="Oficina e Bancada de Manutenção Mat-Tek"
                  className="w-full h-64 sm:h-80 object-cover rounded-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 text-xs font-mono text-stone-500 flex items-center justify-between">
                  <span className="font-semibold text-stone-800">Oficina Técnica Certificada</span>
                  <span>Pelotas & Canguçu - RS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TWO REGIONAL STORES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-200 gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E31B23]">
              Estrutura Física
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              Showrooms e Oficinas Autorizadas
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md">
            Visite nossas unidades para demonstrações práticas, testes de motor e pedidos de peças sobressalentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {STORES.map((store) => (
            <div
              key={store.id}
              className="bg-white border border-stone-200 hover:border-stone-400 rounded-lg p-6 sm:p-8 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold uppercase text-[#E31B23]">
                    {store.id === 'cangucu' ? 'Matriz Canguçu' : 'Filial Pelotas'}
                  </span>
                  <span className="text-stone-500">
                    {storeStatus.isOpen ? 'Aberto Hoje' : 'Fechado Agora'}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-stone-900">
                  {store.name}
                </h3>

                <dl className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-start gap-2">
                    <dt className="font-mono font-semibold text-stone-500 w-20 shrink-0">Endereço:</dt>
                    <dd>{store.address} · {store.city} - RS, CEP {store.cep}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <dt className="font-mono font-semibold text-stone-500 w-20 shrink-0">Telefone:</dt>
                    <dd>
                      <a href={`tel:${store.phoneRaw}`} className="font-mono font-semibold text-stone-900 hover:text-[#E31B23]">
                        {store.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <dt className="font-mono font-semibold text-stone-500 w-20 shrink-0">Horário:</dt>
                    <dd className="font-mono text-xs text-stone-600">Seg a Sex: 08:30–12:00, 13:30–18:00</dd>
                  </div>
                </dl>
              </div>

              <div className="pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={store.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 min-h-[44px] text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>
                <a
                  href={`https://wa.me/${store.whatsappRaw}?text=${encodeURIComponent(`Olá! Gostaria de atendimento na unidade de ${store.city}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 min-h-[44px] text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp {store.city}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
