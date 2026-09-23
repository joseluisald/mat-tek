import React from 'react';
import { PageId } from '../types';
import { 
  Award, 
  MapPin, 
  Target, 
  Users, 
  Wrench,
  CheckCircle2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const milestones = [
    {
      year: '17 de Abril de 2017',
      title: 'O Início em Canguçu',
      description: 'Fundação oficial da Mat-Tek. Com coragem e determinação, os fundadores alugaram o primeiro espaço comercial, iniciando o comércio e a assistência técnica de motores e máquinas.',
    },
    {
      year: '2018 - 2019',
      title: 'Conquista de Carteira e Rigor Técnico',
      description: 'Em um mercado com empresas tradicionais já estabelecidas, a Mat-Tek conquistou produtores e empresários pela transparência nos diagnósticos, agilidade e preços justos.',
    },
    {
      year: '2020 - 2022',
      title: 'Credenciamento Direto das 12 Fabricantes',
      description: 'A empresa obteve a concessão de Assistência Técnica Autorizada de montadoras mundiais e nacionais como Husqvarna, Branco, Toyama, Tekna, Vulcan, JactoClean e Oregon.',
    },
    {
      year: 'Expansão Regional',
      title: 'Inauguração da Filial em Pelotas',
      description: 'Para atender com rapidez toda a região sul do Rio Grande do Sul, a Mat-Tek instalou uma loja e oficina completa no centro de Pelotas, na Rua General Argolo, 1322.',
    },
    {
      year: 'Presente & Futuro',
      title: 'Consolidação e Atendimento Digital',
      description: 'Com milhares de máquinas entregues e recuperadas, a Mat-Tek segue investindo em capacitação técnica contínua e ferramentas de orçamento digital para seus clientes.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-16 pb-20 md:pb-16 text-[#15181C]">
      
      {/* Editorial Title Block */}
      <div className="max-w-3xl space-y-4 border-b border-stone-200 pb-8">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#E31B23]">
          Registro Histórico · Desde 17 de Abril de 2017
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
          Uma História de Trabalho, Honestidade e Superação
        </h1>
        <p className="text-base sm:text-lg font-normal text-stone-600">
          De uma oficina inicial em Canguçu a uma referência regional credenciada por 12 grandes marcas mundiais de máquinas e motores.
        </p>
      </div>

      {/* Main Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Narrative column */}
        <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#E31B23] first-letter:mr-3 first-letter:float-left first-letter:font-display">
            Toda grande empresa tem um começo. A da <strong>Mat-Tek</strong> começou com um sonho simples e corajoso: abrir o próprio negócio e fazer a diferença no atendimento mecânico da região.
          </p>

          <p>
            No dia <strong>17 de abril de 2017</strong>, nascia oficialmente a Mat-Tek. O objetivo era claro: aliar venda consultiva com uma oficina de excelência em máquinas, motores e ferramentas para o homem do campo, o profissional da floresta e a indústria.
          </p>

          <p>
            Os primeiros desafios não foram fáceis: era preciso conquistar a confiança dos clientes em um segmento com empresas já estabelecidas há décadas. Com honestidade rigorosa no diagnóstico, peças originais e respeito aos prazos, a empresa construiu uma reputação inabalável.
          </p>

          {/* Blockquote from founders */}
          <blockquote className="p-6 bg-stone-100 border-l-4 border-[#E31B23] rounded-r-md text-stone-800 text-sm italic">
            “Construímos nossa história com trabalho, honestidade e dedicação. E seguimos firmes, sempre com o objetivo de crescer e fazer o melhor para nossos clientes e amigos.”
            <span className="block mt-2 font-mono font-bold not-italic text-xs text-stone-900 uppercase">
              — Equipe & Fundadores Mat-Tek
            </span>
          </blockquote>

          <h3 className="font-display text-xl font-bold text-stone-900 pt-4">
            Princípios Operacionais da Empresa
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white border border-stone-200 rounded-md space-y-2">
              <div className="flex items-center gap-2 text-[#E31B23] font-bold text-xs uppercase font-mono">
                <Wrench className="w-4 h-4" />
                <span>Honestidade Mecânica</span>
              </div>
              <p className="text-xs text-stone-600">
                Substituição exclusiva de peças que realmente necessitam de troca, com laudo técnico transparente.
              </p>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-md space-y-2">
              <div className="flex items-center gap-2 text-[#E31B23] font-bold text-xs uppercase font-mono">
                <Award className="w-4 h-4" />
                <span>Garantia de Fábrica</span>
              </div>
              <p className="text-xs text-stone-600">
                12 montadoras mundiais com suporte oficial e aplicação de peças 100% genuínas.
              </p>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-md space-y-2">
              <div className="flex items-center gap-2 text-[#E31B23] font-bold text-xs uppercase font-mono">
                <Users className="w-4 h-4" />
                <span>Atendimento Consultivo</span>
              </div>
              <p className="text-xs text-stone-600">
                Orientação especializada para indicar o equipamento exato para a demanda do cliente.
              </p>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-md space-y-2">
              <div className="flex items-center gap-2 text-[#E31B23] font-bold text-xs uppercase font-mono">
                <MapPin className="w-4 h-4" />
                <span>Presença Regional</span>
              </div>
              <p className="text-xs text-stone-600">
                Estrutura física completa em Pelotas e Canguçu para atender toda a zona sul do estado.
              </p>
            </div>
          </div>
        </div>

        {/* Side column: Editorial Card & Historic Photo */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-xs space-y-3">
            <img
              src="/src/assets/images/hero_machinery_workshop_1790171733001.jpg"
              alt="Bancada de Manutenção Mat-Tek"
              className="w-full h-64 object-cover rounded-sm"
              referrerPolicy="no-referrer"
            />
            <div className="p-2 text-xs font-mono text-stone-500 flex items-center justify-between border-t border-stone-100">
              <span className="font-semibold text-stone-800">Oficina & Showroom</span>
              <span>Pelotas & Canguçu</span>
            </div>
          </div>

          <div className="bg-[#0F1216] text-white p-6 rounded-lg border border-stone-800 space-y-4">
            <div className="font-mono text-xs font-bold text-[#E31B23] uppercase">
              Linha do Tempo
            </div>
            <h4 className="font-display text-lg font-bold">
              Marcos de Crescimento
            </h4>
            <div className="space-y-4 border-l border-stone-800 pl-4 text-xs">
              {milestones.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-mono text-[#E31B23] font-bold">{m.year}</div>
                  <div className="font-semibold text-white">{m.title}</div>
                  <p className="text-stone-400 leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
