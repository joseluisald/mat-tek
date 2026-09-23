import React, { useState } from 'react';
import { PageId, Product } from '../types';
import { COMPANY_INFO, STORES, isStoreOpenNow } from '../data/stores';
import { BrandCarousel } from '../components/BrandCarousel';
import { 
  ArrowRight, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  FileText, 
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ExternalLink
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
    <div className="space-y-12 sm:space-y-20 pb-20 md:pb-12">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[560px] lg:min-h-[640px] flex items-center bg-[#15191E] overflow-hidden text-white">
        {/* Background photo with measured contrast scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_machinery_workshop_1790171733001.jpg"
            alt="Showroom e Oficina Técnica Mat-Tek"
            className="w-full h-full object-cover object-center opacity-25 sm:opacity-30 scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111417] via-[#111417]/95 to-[#111417]/40 sm:to-transparent" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#111417]/60 to-[#111417]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            
            {/* Context meta line */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
              <span className="text-[#E31B23] uppercase tracking-wider font-black">
                Desde 17 de Abril de 2017
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#E31B23]" />
                Pelotas & Canguçu - RS
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1 bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                {storeStatus.message}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2.5xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] text-balance">
              Força, precisão e assistência técnica autorizada para o seu trabalho.
            </h1>

            {/* Slogan Prose */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Venda e manutenção especializada de <strong className="text-white font-semibold">máquinas, motores, geradores e ferramentas</strong>. 
              Assistência autorizada de 12 fabricantes mundiais com garantia e peças genuínas.
            </p>

            {/* CTA Action Buttons - Thumb friendly on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-xl font-bold text-sm bg-[#E31B23] hover:bg-[#C0121A] text-white shadow-lg shadow-red-600/30 transition-all active:scale-98 whitespace-nowrap"
              >
                <span>Explorar Catálogo de Máquinas</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all active:scale-98 whitespace-nowrap backdrop-blur-xs"
              >
                <Wrench className="w-4 h-4 text-[#E31B23]" />
                <span>Solicitar Assistência Técnica</span>
              </button>
            </div>

            {/* Mobile Direct Quick Actions (One-tap call or WhatsApp) */}
            <div className="sm:hidden pt-3 grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_INFO.centralPhoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 min-h-[44px] bg-white/5 border border-white/15 rounded-lg text-xs font-semibold text-slate-200 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>Ligar Pelotas</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá Mat-Tek! Gostaria de um orçamento rápido.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 min-h-[44px] bg-emerald-600/20 border border-emerald-500/40 rounded-lg text-xs font-semibold text-emerald-300 active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>12 Marcas com Garantia Oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>Oficina Certificada e Peças Originais</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <FileText className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>Orçamento Rápido via WhatsApp</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTINUOUS HORIZONTAL BRAND CAROUSEL WITH LOGOS */}
      <BrandCarousel 
        onNavigateToServices={() => onNavigate('services')}
      />

      {/* 4 CORE PILLARS OF MAT-TEK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E31B23]">
            Linha Completa para Campo, Cidade e Indústria
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nossos Quatro Pilares de Soluções
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Equipamentos de alta durabilidade selecionados para enfrentar os trabalhos mais exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Pillar 1: Máquinas & Floresta */}
          <div 
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between active:scale-98"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center font-bold">
                <span className="text-xl">⚙️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E31B23] transition-colors">
                  Máquinas & Floresta
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Motosserras, roçadeiras laterais e costais, cortadores de grama, podadores de galho e sopradores Husqvarna, Tekna e Vulcan.
                </p>
              </div>
            </div>
            <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E31B23]">
              <span>Ver modelos no catálogo</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Pillar 2: Motores Estacionários */}
          <div 
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between active:scale-98"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center font-bold">
                <span className="text-xl">🔩</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E31B23] transition-colors">
                  Motores Estacionários
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Motores 4 tempos a gasolina e diesel de 5.5HP a 18HP Branco, Toyama e Kawashima para betoneiras, motobombas e implementos.
                </p>
              </div>
            </div>
            <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E31B23]">
              <span>Ver motores e implementos</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Pillar 3: Ferramentas & Oficina */}
          <div 
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between active:scale-98"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center font-bold">
                <span className="text-xl">🧰</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E31B23] transition-colors">
                  Ferramentas & Oficinas
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Inversoras de solda Lynus, compressores de ar, ferramentas manuais Tramontina Master e prensas hidráulicas GMEQ.
                </p>
              </div>
            </div>
            <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E31B23]">
              <span>Ver ferramentas industriais</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Pillar 4: Geradores de Energia */}
          <div 
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between active:scale-98"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E31B23] flex items-center justify-center font-bold">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E31B23] transition-colors">
                  Geradores de Energia
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Grupos geradores portáteis e cabinados a diesel ou gasolina Branco e Toyama de 1.2 kVA a 15 kVA para sítios, comércio e emergências.
                </p>
              </div>
            </div>
            <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E31B23]">
              <span>Ver grupos geradores</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E31B23]">
              Destaques com Entrega Imediata
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Máquinas & Equipamentos em Destaque
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs font-bold text-[#E31B23] hover:text-[#C0121A] flex items-center gap-1.5 transition-colors self-start sm:self-auto py-1"
          >
            <span>Ver todo o catálogo ({featuredProducts.length}+ itens)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              {/* Image Container with Fallback */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative cursor-pointer aspect-4/3 bg-slate-100 overflow-hidden group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                  {product.brand}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    {product.categoryLabel}
                  </div>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="cursor-pointer text-sm font-bold text-slate-900 hover:text-[#E31B23] transition-colors line-clamp-2 mt-1"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Disponibilidade:</span>
                    <span className="text-emerald-700 font-bold">Pelotas & Canguçu</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="px-3 py-2.5 min-h-[44px] text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center active:scale-95"
                    >
                      Ficha Técnica
                    </button>
                    <button
                      onClick={() => onAddToQuote(product)}
                      className="px-3 py-2.5 min-h-[44px] text-xs font-bold text-white bg-[#E31B23] hover:bg-[#C0121A] rounded-lg transition-colors shadow-xs active:scale-95 text-center"
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

      {/* STORY & HISTÓRIA SNIPPET (FROM NEWSPAPER ARTICLE) */}
      <section className="bg-slate-50 border-y border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E31B23] uppercase tracking-wider bg-red-100/60 px-3 py-1 rounded-md">
                <span>Nossa História</span>
                <span aria-hidden="true">·</span>
                <span>Fundada em 17 de Abril de 2017</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                De um sonho em 2017 a uma empresa sólida e referência na região sul.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Toda grande empresa tem um começo. A da <strong>Mat-Tek</strong> começou com um sonho simples, mas poderoso: ter o próprio negócio e fazer a diferença no mercado de máquinas, motores e ferramentas.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Começamos alugando o primeiro prédio em Canguçu e construindo aos poucos, passo a passo, superando os desafios do mercado até consolidar nossa assistência técnica autorizada das maiores marcas do mundo e expandir com uma loja completa no centro de Pelotas.
              </p>

              {/* Real quote from founders from the uploaded article */}
              <div className="p-4 bg-white border-l-4 border-[#E31B23] rounded-r-xl shadow-xs italic text-slate-700 text-sm">
                “Construímos nossa história com trabalho, honestidade e dedicação. E seguimos firmes, sempre com o objetivo de crescer e fazer o melhor para nossos clientes e amigos.”
                <span className="block mt-2 font-bold not-italic text-xs text-slate-900">— Equipe & Fundadores Mat-Tek</span>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#1E2229] hover:bg-black px-5 py-3 min-h-[44px] rounded-lg transition-colors active:scale-98"
                >
                  <span>Conhecer Nossa Trajetória Completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-md">
                <img
                  src="/src/assets/images/technical_assistance_service_1790171772657.jpg"
                  alt="Oficina e Bancada de Manutenção Mat-Tek"
                  className="w-full h-60 sm:h-72 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 text-xs text-slate-500 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Oficina Técnica Especializada</span>
                  <span>Pelotas & Canguçu - RS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TWO STORES CARDS WITH MOBILE TAB SWITCHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E31B23]">
            Venha nos Visitar
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Duas Lojas com Estrutura Completa
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Showroom de máquinas prontas para trabalhar e oficina autorizada no centro de Pelotas e Canguçu.
          </p>

          {/* Mobile quick tabs */}
          <div className="sm:hidden inline-flex p-1 bg-slate-100 rounded-xl mt-3 border border-slate-200">
            <button
              onClick={() => setActiveStoreTab('pelotas')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors min-h-[40px] ${
                activeStoreTab === 'pelotas' ? 'bg-white text-[#E31B23] shadow-xs' : 'text-slate-600'
              }`}
            >
              Loja Pelotas
            </button>
            <button
              onClick={() => setActiveStoreTab('cangucu')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors min-h-[40px] ${
                activeStoreTab === 'cangucu' ? 'bg-white text-[#E31B23] shadow-xs' : 'text-slate-600'
              }`}
            >
              Loja Canguçu
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {STORES.map((store) => {
            const isHiddenOnMobile = activeStoreTab !== store.id;
            return (
              <div
                key={store.id}
                className={`bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-xs flex flex-col justify-between space-y-5 ${
                  isHiddenOnMobile ? 'hidden sm:flex' : 'flex'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E31B23]">
                      {store.id === 'cangucu' ? 'Matriz Canguçu' : 'Filial Pelotas'}
                    </span>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {storeStatus.isOpen ? 'Aberto Hoje' : 'Fechado Agora'}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {store.name}
                  </h3>

                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    <p className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                      <span>{store.address} - {store.city} - RS, {store.cep}</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#E31B23] shrink-0" />
                      <a href={`tel:${store.phoneRaw}`} className="font-semibold text-slate-800 hover:text-[#E31B23] underline">
                        {store.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#E31B23] shrink-0" />
                      <span>Segunda a Sexta: 08:30–12:00, 13:30–18:00</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={store.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 min-h-[44px] text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Ver no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a
                    href={`https://wa.me/${store.whatsappRaw}?text=${encodeURIComponent(`Olá! Gostaria de atendimento na unidade de ${store.city}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 min-h-[44px] text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp {store.city}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

