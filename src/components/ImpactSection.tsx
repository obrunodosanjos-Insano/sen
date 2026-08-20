import React from 'react';
import { 
  GraduationCap, 
  TrendingUp, 
  Briefcase, 
  ExternalLink
} from 'lucide-react';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impacto" className="py-16 sm:py-24 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-slate-600" />
            <span>Impacto Comprovado & Oportunidades</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Bolsas de Estudo e Formação Para a Vida
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Pesquisas de longo prazo (como o estudo longitudinal da Brandeis University) comprovam que a participação na FIRST transforma a trajetória acadêmica e profissional dos estudantes.
          </p>
        </div>

        {/* 3 Impact Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Bolsas */}
          <div className="bg-white rounded-none border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-none bg-slate-50 text-slate-800 border border-slate-200 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-2xl font-black text-slate-900 mb-1 font-display">+$80 Milhões</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Bolsas de Estudo Universitárias
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mais de 200 faculdades, universidades e empresas parceiras disponibilizam bolsas exclusivas para participantes e ex-alunos (alumni) da FIRST no mundo todo.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-6 text-xs text-slate-500 font-medium">
              Acesso a oportunidades em instituições de ponta (MIT, WPI, Purdue e mais).
            </div>
          </div>

          {/* Card 2: Impacto STEM */}
          <div className="bg-white rounded-none border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-none bg-slate-50 text-slate-800 border border-slate-200 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-2xl font-black text-slate-900 mb-1 font-display">2x Mais Chances</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                De Cursar Ciências e Engenharia
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Estudantes da FIRST são comprovadamente duas vezes mais propensos a ingressar em cursos de Exatas, Tecnologia da Informação ou Engenharia em nível superior.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-6 text-xs text-slate-500 font-medium">
              Especialmente expressivo entre meninas e minorias sub-representadas.
            </div>
          </div>

          {/* Card 3: Soft Skills e Mercado */}
          <div className="bg-white rounded-none border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-none bg-slate-50 text-slate-800 border border-slate-200 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="text-2xl font-black text-slate-900 mb-1 font-display">Habilidades Reais</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Liderança, Gestão & Comunicação
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Além do código e das peças de metal, os alunos aprendem gerenciamento de projetos com orçamento real, captação de patrocínios corporativos e oratória perante jurados.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-6 text-xs text-slate-500 font-medium">
              Apoiado por gigantes globais como Boeing, Apple, Google e NASA.
            </div>
          </div>
        </div>

        {/* Banner de Parcerias Corporativas */}
        <div className="bg-slate-50 rounded-none border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Apoiadores Globais e no Brasil
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl">
              No Brasil, os programas contam com a estrutura da CNI, <strong>SESI e SENAI</strong>, além do patrocínio e mentoria de indústrias nacionais e multinacionais de ponta.
            </p>
          </div>
          <a
            href="http://portaldaindustria.com.br/sesi/canais/torneio-de-robotica/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-none bg-slate-900 hover:bg-black text-white text-xs font-bold transition-colors whitespace-nowrap shadow-xs"
          >
            <span>Ver Torneios Nacionais</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
