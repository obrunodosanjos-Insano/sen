import React from 'react';
import { Compass, Lightbulb, Globe, HeartHandshake, Users, Sparkles, Shield, Heart } from 'lucide-react';
import { CORE_VALUES } from '../data/firstData';

export const CoreValuesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Lightbulb,
    Globe,
    HeartHandshake,
    Users,
    Sparkles,
  };

  return (
    <section id="sobre" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <span>A Filosofia que Move o Mundo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mais do que Construir Robôs: <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Construindo Pessoas Extraordinárias
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A FIRST não é apenas sobre competição tecnológica. O verdadeiro coração de cada torneio
            é a ética, a colaboração sem fronteiras e a formação de cidadãos globais conscientes.
          </p>
        </div>

        {/* The Two Great Pillars: Gracious Professionalism & Coopertition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Gracious Professionalism */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-blue-500/30 shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Conceito do Dr. Woodie Flowers
                </span>
                <h3 className="text-2xl font-black text-white">Gracious Professionalism®</h3>
              </div>
            </div>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              É uma forma de agir que encoraja o <strong>trabalho de alta qualidade</strong>, enfatiza o
              <strong> valor dos outros</strong> e respeita os indivíduos e a comunidade.
            </p>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-300 space-y-2">
              <p className="italic text-slate-400">
                "Competir com toda a garra e excelência técnica, mas tratando cada equipe adversária
                com máxima generosidade e integridade."
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                <span>Emprestar ferramentas e peças nos pits é a regra, nunca a exceção!</span>
              </div>
            </div>
          </div>

          {/* Coopertition */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-amber-600/20 border border-amber-500/30 text-amber-400">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Competição com Cooperação
                </span>
                <h3 className="text-2xl font-black text-white">Coopertition®</h3>
              </div>
            </div>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              Produz inovação ao promover a <strong>cooperação mútua feroz</strong> mesmo durante a
              disputa acirrada. Significa ensinar, orientar e aprender com outras equipes rivais.
            </p>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-300 space-y-2">
              <p className="italic text-slate-400">
                "Você pode competir com vigor implacável na quadra e, no minuto seguinte, estar ensinando
                seu adversário como programar a visão computacional do robô dele."
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>O sucesso de um participante nunca depende da humilhação do outro.</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 6 Core Values Cards */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Os 6 Valores Fundamentais (Core Values)
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Pilares avaliados por juízes em todas as categorias da FIRST
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const IconComp = iconMap[val.icon] || Sparkles;
              return (
                <div
                  key={val.title}
                  id={`core-value-card-${idx}`}
                  className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/40 transition-all duration-200 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
