import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, STORES } from '../data/stores';
import { 
  Award, 
  Calendar, 
  Heart, 
  MapPin, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Users, 
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { MatTekLogo } from '../components/MatTekLogo';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const milestones = [
    {
      year: '17 de Abril de 2017',
      title: 'O Início de um Grande Sonho em Canguçu',
      description: 'Fundação oficial da Mat-Tek. Com coragem e determinação, os fundadores alugaram o primeiro prédio comercial, dando os primeiros passos no comércio e conserto de motores e máquinas.',
    },
    {
      year: '2018 - 2019',
      title: 'Conquista de Carteira e Credenciamento Inicial',
      description: 'Mesmo enfrentando um mercado com empresas tradicionais já estabelecidas, a Mat-Tek conquistou clientes fiéis pela honestidade nos diagnósticos, agilidade e preços justos.',
    },
    {
      year: '2020 - 2022',
      title: 'Autorização das Maiores Marcas Mundiais',
      description: 'A empresa obteve o selo de Assistência Técnica Autorizada de gigantes globais e nacionais como Husqvarna, Branco, Toyama, Tekna, Vulcan, JactoClean e Oregon.',
    },
    {
      year: 'Expansão',
      title: 'Inauguração da Filial em Pelotas',
      description: 'Para atender com excelência toda a região sul do Rio Grande do Sul, a Mat-Tek expandiu suas operações com uma loja completa e oficina no Centro de Pelotas, na Rua Gen. Argolo.',
    },
    {
      year: 'Hoje & Futuro',
      title: 'Referência Sólida e Inovação Contínua',
      description: 'Com milhares de máquinas entregues e reparadas, a Mat-Tek continua crescendo, agregando canais digitais, orçamento instantâneo e ampliação contínua de peças e equipamentos.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-16 pb-20 md:pb-16">
      
      {/* Editorial Title Block */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E31B23]">
          <span>Matéria Especial & Memória Institucional</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          MAT-TEK: Uma História de Sonho, Trabalho e Superação
        </h1>
        <p className="text-lg font-medium text-[#E31B23]">
          De um sonho em 2017 a uma empresa sólida e referência no mercado de máquinas e motores.
        </p>
      </div>

      {/* Main Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Narrative column */}
        <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p className="first-letter:text-5xl first-letter:font-black first-letter:text-[#E31B23] first-letter:mr-2 first-letter:float-left">
            Toda grande empresa tem um começo. A da <strong>Mat-Tek</strong> começou com um sonho simples, mas poderoso: ter o próprio negócio e fazer a diferença no mercado.
          </p>

          <p>
            No dia <strong>17 de abril de 2017</strong>, nascia oficialmente a Mat-Tek, que hoje é sinônimo de confiança, qualidade e atendimento especializado em <strong>máquinas, motores e ferramentas</strong>.
          </p>

          <p>
            Começamos com a coragem de alugar o primeiro espaço comercial em Canguçu e construir a empresa aos poucos, em cada passo. Os primeiros desafios não foram fáceis: era preciso conquistar uma carteira sólida de clientes em um segmento onde já existiam concorrentes estabelecidos há décadas.
          </p>

          <p>
            Com honestidade no diagnóstico, preço justo e compromisso absoluto de consertar aquilo que o cliente realmente necessitava, a Mat-Tek ganhou o respeito de agricultores, profissionais da construção civil, jardineiros e indústrias de toda a região.
          </p>

          {/* Blockquote from founders */}
          <div className="p-6 bg-slate-50 border-l-4 border-[#E31B23] rounded-r-2xl space-y-2">
            <p className="italic text-slate-800 font-medium text-base">
              “Construímos nossa história com trabalho, honestidade e dedicação. E seguimos firmes, sempre com o objetivo de crescer e fazer o melhor para nossos clientes e amigos.”
            </p>
            <p className="text-xs font-bold text-slate-900 not-italic uppercase tracking-wider">
              — Equipe & Fundadores Mat-Tek
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 pt-4">
            A Entrevista com os Fundadores
          </h3>

          <div className="space-y-4 text-sm bg-white p-6 rounded-2xl border border-slate-200">
            <div>
              <h4 className="font-bold text-slate-900">
                Quando e como iniciou a história da Mat-Tek?
              </h4>
              <p className="text-slate-600 mt-1">
                A história da Mat-Tek começou em 17 de abril de 2017. Começou com um sonho nosso de ter nosso próprio comércio, começamos alugando o primeiro prédio e construindo aos poucos cada passo.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <h4 className="font-bold text-slate-900">
                Quais foram os primeiros desafios enfrentados, e os principais até hoje?
              </h4>
              <p className="text-slate-600 mt-1">
                Os primeiros desafios no começo foi conseguir um portfólio de cliente fixo e entrar num mercado onde várias empresas já estavam consolidadas. Os principais até hoje é manter preços acessíveis com impostos altos e acompanhar um mundo que está cada vez mais girando em torno da internet.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <h4 className="font-bold text-slate-900">
                Tem planos para o futuro? Se sim, quais?
              </h4>
              <p className="text-slate-600 mt-1">
                Sim. Temos planos de expandir mais nossa variedade de produtos, sempre pensando em atender melhor nossos clientes e acompanhar as novas necessidades do mercado.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <h4 className="font-bold text-slate-900">
                Em qual época do ano a loja recebe mais clientes?
              </h4>
              <p className="text-slate-600 mt-1">
                No verão — época intensa de jardinagem, manejo de lavouras, corte de lenha e necessidade de geradores e motobombas.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <h4 className="font-bold text-slate-900">
                E por último, que conselho você daria para alguém que quer abrir seu próprio negócio?
              </h4>
              <p className="text-slate-600 mt-1 font-medium italic">
                “Pensar bem no negócio que quer abrir, se dedicar e correr atrás dos seus sonhos.”
              </p>
            </div>
          </div>
        </div>

        {/* Visual & Values Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Historical Imagery Card */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-md space-y-3">
            <div className="aspect-4/3 rounded-xl overflow-hidden bg-slate-100">
              <img
                src="/src/assets/images/hero_machinery_workshop_1790171733001.jpg"
                alt="Fachada e oficina Mat-Tek"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-xs text-slate-500">
              <p className="font-bold text-slate-900">Mat-Tek Canguçu e Mat-Tek Pelotas</p>
              <p>Estrutura própria com oficina completa e atendimento autorizado.</p>
            </div>
          </div>

          {/* Pillars of our Culture */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#E31B23]" />
              <span>Nossos Valores Fundamentais</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Honestidade Técnica:</strong>
                  <span className="text-slate-300">Nunca trocamos peças desnecessárias. Diagnosticamos com transparência e respeito ao bolso do cliente.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Peças 100% Genuínas:</strong>
                  <span className="text-slate-300">Segurança operacional que prolonga a durabilidade e mantém a garantia de fábrica ativa.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Compromisso com o Cliente e Amigo:</strong>
                  <span className="text-slate-300">Cada produtor, profissional e cliente que entra pela porta é tratado como um parceiro de longa data.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Timeline Section */}
      <section className="space-y-8 pt-8 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E31B23]">
            Linha do Tempo
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            A Trajetória da Mat-Tek de 2017 até Hoje
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-8 py-4">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#E31B23] border-4 border-white shadow-xs" />
              
              <div className="space-y-1">
                <span className="text-xs font-bold font-mono text-[#E31B23] uppercase tracking-wider">
                  {m.year}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA: Visit Stores */}
      <div className="bg-slate-100 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200">
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Quer ver nossos equipamentos de perto ou tomar um café conosco?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Nossas portas em Pelotas e Canguçu estão abertas de segunda a sexta-feira.
          </p>
        </div>
        <button
          onClick={() => onNavigate('stores')}
          className="w-full sm:w-auto px-5 py-3 min-h-[44px] bg-[#E31B23] hover:bg-[#C0121A] text-white font-bold text-xs rounded-xl transition-colors shrink-0 active:scale-95 text-center"
        >
          Ver Endereços e Telefones
        </button>
      </div>

    </div>
  );
};
