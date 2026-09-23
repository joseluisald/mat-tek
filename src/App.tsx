import React, { useState, useEffect } from 'react';
import { SectionId } from './types';
import { COMPANY_INFO, STORES, isStoreOpenNow } from './data/stores';
import { TopNavbar } from './components/TopNavbar';
import { Footer } from './components/Footer';
import { BrandCarousel } from './components/BrandCarousel';
import { MobileBottomNav } from './components/MobileBottomNav';
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Navigation, 
  ShieldCheck, 
  Wrench, 
  Heart, 
  CheckCircle2, 
  ArrowUp,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Calendar
} from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('inicio');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const storeStatus = isStoreOpenNow();

  // Scroll spy & Scroll to Top monitor
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);

      // Simple scroll spy
      const sections: SectionId[] = ['inicio', 'parceiros', 'historia', 'unidades', 'contato'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const milestones = [
    {
      year: '17 de Abril de 2017',
      title: 'O Início de um Grande Sonho em Canguçu',
      description: 'Fundação oficial da Mat-Tek. Com coragem e determinação, os fundadores alugaram o primeiro prédio comercial, dando os primeiros passos no comércio e conserto de motores e máquinas.',
    },
    {
      year: '2018 - 2019',
      title: 'Conquista de Clientes e Credenciamento Inicial',
      description: 'Mesmo enfrentando um mercado com empresas tradicionais já estabelecidas, a Mat-Tek conquistou clientes fiéis pela honestidade nos diagnósticos, agilidade e preços justos.',
    },
    {
      year: '2020 - 2022',
      title: 'Autorização Oficial das Maiores Marcas',
      description: 'A empresa obteve o selo de Assistência Técnica Autorizada de gigantes mundiais como Husqvarna, Branco, Toyama, Tekna, JactoClean, Trapp e Buffalo.',
    },
    {
      year: 'Expansão',
      title: 'Inauguração da Loja e Oficina em Pelotas',
      description: 'Para atender com excelência toda a região sul do RS, a Mat-Tek expandiu suas operações com uma unidade completa no Centro de Pelotas, na Rua Gen. Argolo.',
    },
    {
      year: 'Hoje & Futuro',
      title: 'Referência Sólida em Assistência Técnica',
      description: 'Com milhares de equipamentos entregues e revisados, a Mat-Tek segue firme no compromisso com o produtor rural e o cliente urbano, investindo sempre em atendimento ágil e peças genuínas.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFC] text-[#1E2229] selection:bg-[#E31B23] selection:text-white">
      
      {/* Top Fixed / Sticky Navigation Bar */}
      <TopNavbar
        activeSection={activeSection}
        onNavigateSection={scrollToSection}
      />

      <main className="flex-1">
        
        {/* ============================================================ */}
        {/* SECTION 1: HERO / APRESENTAÇÃO (#inicio)                     */}
        {/* ============================================================ */}
        <section 
          id="inicio" 
          className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-[#15191E] overflow-hidden text-white border-b border-neutral-800"
        >
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/src/assets/images/hero_machinery_workshop_1790171733001.jpg"
              alt="Showroom e Oficina Técnica Mat-Tek"
              className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111417] via-[#111417]/95 to-[#111417]/60" />
            <div className="absolute inset-0 bg-radial from-transparent via-[#111417]/70 to-[#111417]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-24 w-full">
            <div className="max-w-3xl space-y-6">
              
              {/* Context badges */}
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
                <span className="text-emerald-400 font-medium flex items-center gap-1 bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  {storeStatus.message}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
                Máquinas, Motores e Assistência Técnica Autorizada.
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Venda, manutenção especializada e peças genuínas para produtores rurais, profissionais e indústrias da região sul. Garantia oficial de fábrica para 12 grandes marcas mundiais.
              </p>

              {/* Highlights pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <ShieldCheck className="w-5 h-5 text-[#E31B23] shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">12 Marcas Autorizadas</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <Wrench className="w-5 h-5 text-[#E31B23] shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Oficina Técnica Própria</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <MapPin className="w-5 h-5 text-[#E31B23] shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Lojas em Pelotas e Canguçu</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Mat-Tek e gostaria de atendimento.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 transition-all active:scale-98 whitespace-nowrap text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar no WhatsApp Oficial</span>
                </a>

                <button
                  onClick={() => scrollToSection('unidades')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all active:scale-98 whitespace-nowrap backdrop-blur-xs"
                >
                  <MapPin className="w-4 h-4 text-[#E31B23]" />
                  <span>Ver Lojas & Horários</span>
                </button>

                <button
                  onClick={() => scrollToSection('historia')}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 min-h-[48px] text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span>Conhecer História</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: PARCEIROS / MARCAS AUTORIZADAS (#parceiros)       */}
        {/* ============================================================ */}
        <section id="parceiros" className="scroll-mt-20">
          <BrandCarousel
            title="Marcas com Assistência Autorizada"
            subtitle="Garantia oficial de fábrica e peças 100% originais para os principais fabricantes mundiais"
          />
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: NOSSA HISTÓRIA (#historia)                        */}
        {/* ============================================================ */}
        <section id="historia" className="scroll-mt-20 py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E31B23]">
              <Calendar className="w-4 h-4" />
              <span>Memória Institucional & Tradição</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              MAT-TEK: Uma História de Sonho, Trabalho e Superação
            </h2>
            <p className="text-base sm:text-lg font-medium text-[#E31B23]">
              De um sonho em 2017 a uma empresa sólida e referência regional no mercado de máquinas, motores e ferramentas.
            </p>
          </div>

          {/* Narrative & Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Story column */}
            <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:text-[#E31B23] first-letter:mr-2 first-letter:float-left">
                Toda grande empresa tem um começo. A da <strong>Mat-Tek</strong> começou com um sonho simples, mas poderoso: ter o próprio negócio e fazer a diferença no mercado.
              </p>

              <p>
                No dia <strong>17 de abril de 2017</strong>, nascia oficialmente a Mat-Tek em Canguçu, que hoje é sinônimo de confiança, qualidade e atendimento especializado em <strong>máquinas, motores e ferramentas</strong>.
              </p>

              <p>
                Começamos com a coragem de alugar o primeiro espaço comercial e construir a empresa aos poucos, em cada passo. Os primeiros desafios não foram fáceis: era preciso conquistar uma carteira sólida de clientes em um segmento onde já existiam concorrentes estabelecidos há décadas.
              </p>

              <p>
                Com honestidade no diagnóstico, preço justo e compromisso absoluto de consertar aquilo que o cliente realmente necessitava, a Mat-Tek ganhou o respeito de agricultores, construtores, jardineiros e indústrias de toda a região sul.
              </p>

              {/* Blockquote from founders */}
              <div className="p-6 bg-red-50/70 border-l-4 border-[#E31B23] rounded-r-2xl space-y-2">
                <p className="italic text-slate-800 font-medium text-base">
                  “Construímos nossa história com trabalho, honestidade e dedicação. E seguimos firmes, sempre com o objetivo de crescer e fazer o melhor para nossos clientes e amigos.”
                </p>
                <p className="text-xs font-bold text-slate-900 not-italic uppercase tracking-wider">
                  — Equipe & Fundadores Mat-Tek
                </p>
              </div>

              {/* Founders Q&A */}
              <div className="pt-4">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Perguntas Frequentes sobre Nossa Trajetória
                </h3>

                <div className="space-y-4 text-sm bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Como iniciou a Mat-Tek?
                    </h4>
                    <p className="text-slate-600 mt-1">
                      Iniciou em 17 de abril de 2017 com um sonho de ter nosso próprio comércio de motores e ferramentas, começando em Canguçu e construindo aos poucos cada conquista.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <h4 className="font-bold text-slate-900">
                      Quais são os principais desafios do dia a dia?
                    </h4>
                    <p className="text-slate-600 mt-1">
                      Manter preços acessíveis com impostos e acompanhar a tecnologia dos motores e ferramentas, investindo constantemente no aperfeiçoamento da equipe técnica.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <h4 className="font-bold text-slate-900">
                      Qual o conselho para quem sonha em empreender?
                    </h4>
                    <p className="text-slate-600 mt-1 italic font-medium text-slate-800">
                      “Pensar bem no negócio que quer abrir, se dedicar de verdade e correr atrás dos seus sonhos com honestidade.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual & Values Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Photo card */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="aspect-4/3 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/src/assets/images/hero_machinery_workshop_1790171733001.jpg"
                    alt="Oficina e Fachada Mat-Tek"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="font-bold text-slate-900">Mat-Tek Pelotas e Mat-Tek Canguçu</p>
                  <p>Estrutura física completa com bancadas de teste e oficina técnica autorizada.</p>
                </div>
              </div>

              {/* Pillars of Culture */}
              <div className="bg-[#12151A] text-white p-6 sm:p-7 rounded-2xl space-y-5 border border-neutral-800 shadow-md">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#E31B23]" />
                  <span>Nossos Pilares Inegociáveis</span>
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold text-sm">Diagnóstico Honesto:</strong>
                      <span className="text-slate-300">Nunca substituímos peças desnecessárias. Diagnosticamos com transparência e respeito ao cliente.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold text-sm">Peças 100% Genuínas:</strong>
                      <span className="text-slate-300">Trabalhamos com componentes originais das fábricas credenciadas, assegurando durabilidade e garantia.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold text-sm">Compromisso com o Cliente:</strong>
                      <span className="text-slate-300">Seja você produtor rural, empresa ou autônomo, nossa prioridade é recolocar seu equipamento em funcionamento sem demora.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Timeline Section */}
          <div className="space-y-8 pt-8 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E31B23]">
                Linha do Tempo
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                A Trajetória da Mat-Tek
              </h3>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-12 md:ml-32 space-y-8 py-4">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#E31B23] border-4 border-white shadow-xs" />
                  <div className="space-y-1">
                    <span className="text-xs font-bold font-mono text-[#E31B23] uppercase tracking-wider">
                      {m.year}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {m.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ============================================================ */}
        {/* SECTION 4: LOJAS FÍSICAS & HORÁRIOS (#unidades)              */}
        {/* ============================================================ */}
        <section id="unidades" className="scroll-mt-20 py-16 bg-slate-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E31B23]">
                <MapPin className="w-4 h-4" />
                <span>Nossas Unidades & Horários</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Lojas em Pelotas e Canguçu
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                Estrutura física própria com atendimento balcão, peças e oficina técnica autorizada.
              </p>
            </div>

            {/* Side-by-Side Stores Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {STORES.map((store) => {
                const isPelotas = store.id === 'pelotas';
                return (
                  <div
                    key={store.id}
                    className="bg-white border-2 border-slate-200 hover:border-[#E31B23]/50 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      {/* Store Header & Live Status */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-widest text-[#E31B23]">
                          {isPelotas ? 'Filial Pelotas' : 'Matriz Canguçu'}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{storeStatus.message}</span>
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-black text-slate-900">
                          {store.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          {store.notes}
                        </p>
                      </div>

                      {/* Info list */}
                      <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-700">
                        {/* Address */}
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

                        {/* Phone */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 mt-0.5">
                            <Phone className="w-4 h-4" />
                          </div>
                          <div>
                            <strong className="block text-slate-900 font-bold">Telefone:</strong>
                            <a href={`tel:${store.phoneRaw}`} className="text-slate-900 font-mono font-semibold hover:text-[#E31B23]">
                              {store.phone}
                            </a>
                          </div>
                        </div>

                        {/* WhatsApp */}
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

                        {/* Schedule */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E31B23] flex items-center justify-center shrink-0 mt-0.5">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div>
                            <strong className="block text-slate-900 font-bold">Horário de Funcionamento:</strong>
                            <div className="text-xs text-slate-600 space-y-0.5 mt-1 font-mono">
                              <p className="font-semibold text-slate-800">Segunda a Sexta: 08:30–12:00, 13:30–18:00</p>
                              <p className="text-red-700 font-bold">Sábado e Domingo: Fechado</p>
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

          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: CONTATO & REDES OFICIAIS (#contato)              */}
        {/* ============================================================ */}
        <section id="contato" className="scroll-mt-20 py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E31B23]">
              <MessageCircle className="w-4 h-4" />
              <span>Canais de Atendimento</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Entre em Contato com a Mat-Tek
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Tire dúvidas sobre manutenção, revisão de motores, disponibilidade de peças ou orçamentos.
            </p>
          </div>

          {/* WhatsApp Direct Banner */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 sm:p-12 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Atendimento Ágil pelo WhatsApp</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Converse diretamente com nossos técnicos
              </h3>
              <p className="text-sm text-emerald-100 leading-relaxed">
                Envie fotos do equipamento, código de peças ou solicite informações de revisão para Pelotas e Canguçu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá Mat-Tek! Gostaria de tirar dúvidas com a equipe.')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white text-emerald-800 hover:bg-emerald-50 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 text-center"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Falar no WhatsApp: (53) 98448-9179</span>
              </a>
            </div>
          </div>

          {/* Social Instagram Profiles - 2 Cards Symmetrical */}
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
                      <span className="text-[11px] uppercase tracking-wider text-pink-200 font-bold block">Canal Oficial Pelotas</span>
                      <strong className="text-lg font-bold">{COMPANY_INFO.instagramHandle}</strong>
                    </div>
                  </div>
                  <span className="text-[11px] bg-white/20 px-2.5 py-0.5 rounded-full font-mono text-white/90">Pelotas</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Acompanhe novidades, manutenções em bancada, novos equipamentos e dicas da unidade de Pelotas.
                </p>
              </div>

              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-purple-900 hover:bg-white/90 rounded-xl font-bold text-xs transition-all active:scale-95 shadow-sm text-center"
              >
                <span>Seguir @mattekpelotas</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
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
                      <span className="text-[11px] uppercase tracking-wider text-purple-200 font-bold block">Canal Oficial Canguçu</span>
                      <strong className="text-lg font-bold">{COMPANY_INFO.instagramCangucuHandle}</strong>
                    </div>
                  </div>
                  <span className="text-[11px] bg-white/20 px-2.5 py-0.5 rounded-full font-mono text-white/90">Matriz</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Fique por dentro das novidades, entregas técnicas, atendimento rural e fotos da matriz em Canguçu.
                </p>
              </div>

              <a
                href="https://www.instagram.com/mattekcangucu/"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-rose-900 hover:bg-white/90 rounded-xl font-bold text-xs transition-all active:scale-95 shadow-sm text-center"
              >
                <span>Seguir @mattekcangucu</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </section>

      </main>

      {/* Global Footer */}
      <Footer onNavigateSection={scrollToSection} />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavigateSection={scrollToSection}
      />

      {/* Floating Action Button: Scroll to Top and WhatsApp */}
      <aside aria-label="Ações rápidas de navegação e contato" className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3 bg-slate-900/90 hover:bg-[#E31B23] text-white rounded-full shadow-lg border border-slate-700 transition-all active:scale-95 flex items-center justify-center backdrop-blur-xs group"
            aria-label="Voltar ao topo da página"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá Mat-Tek! Gostaria de atendimento.')}`}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all active:scale-95 flex items-center justify-center group"
          aria-label="Abrir WhatsApp oficial"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
            Falar no WhatsApp
          </span>
        </a>
      </aside>

    </div>
  );
}

export default App;
