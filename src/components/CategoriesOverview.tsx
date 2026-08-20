import React, { useState } from 'react';
import {
  Layers,
  ArrowRight,
  Sparkles,
  Bot,
  Cpu,
  Trophy,
  Users,
  Clock,
  Scale,
  Maximize2,
  Code2,
  Wrench,
  CheckCircle2,
  X,
  Zap,
} from 'lucide-react';
import { FIRST_CATEGORIES } from '../data/firstData';
import { CategoryId, CategoryInfo } from '../types';

interface CategoriesOverviewProps {
  selectedCategory: CategoryId | null;
  onSelectCategory: (cat: CategoryId | null) => void;
  onSimulateMatch: (cat: CategoryId) => void;
}

export const CategoriesOverview: React.FC<CategoriesOverviewProps> = ({
  selectedCategory,
  onSelectCategory,
  onSimulateMatch,
}) => {
  const [activeTab, setActiveTab] = useState<CategoryId>('frc');

  const currentCat = FIRST_CATEGORIES[activeTab];

  return (
    <section id="categorias" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <span>Progressão Completa de Aprendizado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            As Três Grandes Modalidades da FIRST
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Uma jornada contínua dos 9 aos 18 anos. Conheça cada categoria, seus robôs, regras de
            partida, softwares e impacto educacional.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner max-w-full overflow-x-auto">
            {(['fll', 'ftc', 'frc'] as CategoryId[]).map((catId) => {
              const cat = FIRST_CATEGORIES[catId];
              const isActive = activeTab === catId;
              return (
                <button
                  key={catId}
                  id={`tab-select-${catId}`}
                  onClick={() => {
                    setActiveTab(catId);
                    onSelectCategory(catId);
                  }}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all whitespace-nowrap ${
                    isActive
                      ? catId === 'fll'
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                        : catId === 'ftc'
                        ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                        : 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <span className="font-extrabold">{cat.acronym}</span>
                  <span className="hidden sm:inline text-xs font-normal opacity-90">({cat.ageRange.split(' ')[0]} anos)</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Detail Panel */}
        <div
          id={`category-detail-panel-${currentCat.id}`}
          className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden transition-all duration-300"
        >
          {/* Header Banner */}
          <div
            className={`p-6 sm:p-10 bg-gradient-to-r ${
              currentCat.id === 'fll'
                ? 'from-red-950/70 via-slate-900 to-slate-900 border-b border-red-500/20'
                : currentCat.id === 'ftc'
                ? 'from-amber-950/70 via-slate-900 to-slate-900 border-b border-amber-500/20'
                : 'from-blue-950/70 via-slate-900 to-slate-900 border-b border-blue-500/20'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                      currentCat.id === 'fll'
                        ? 'bg-red-500/20 text-red-300 border-red-500/30'
                        : currentCat.id === 'ftc'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                        : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                    }`}
                  >
                    {currentCat.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Temporada Global Anual
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  {currentCat.name}{' '}
                  <span className="text-slate-400 font-normal">({currentCat.acronym})</span>
                </h3>
                <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
                  {currentCat.shortDesc}
                </p>
              </div>

              {/* Quick Action inside detail */}
              <div className="flex flex-wrap gap-3">
                <button
                  id={`simulate-match-btn-${currentCat.id}`}
                  onClick={() => onSimulateMatch(currentCat.id)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm transition-all shadow-md"
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Simular Partida 2m30s</span>
                </button>
              </div>
            </div>
          </div>

          {/* Core Metrics Quick Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-slate-800 border-b border-slate-800 bg-slate-950/50">
            <div className="p-4 text-center">
              <span className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-1">
                <Users className="w-3.5 h-3.5" /> Faixa Etária
              </span>
              <span className="text-sm sm:text-base font-bold text-white block">
                {currentCat.ageRange}
              </span>
            </div>

            <div className="p-4 text-center">
              <span className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-1">
                <Scale className="w-3.5 h-3.5" /> Peso do Robô
              </span>
              <span className="text-sm sm:text-base font-bold text-white block">
                {currentCat.robotWeight}
              </span>
            </div>

            <div className="p-4 text-center">
              <span className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-1">
                <Maximize2 className="w-3.5 h-3.5" /> Dimensões
              </span>
              <span className="text-sm sm:text-base font-bold text-white block">
                {currentCat.robotDimensions.split('(')[0]}
              </span>
            </div>

            <div className="p-4 text-center">
              <span className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-1">
                <Clock className="w-3.5 h-3.5" /> Duração do Jogo
              </span>
              <span className="text-sm sm:text-base font-bold text-white block">
                2 min e 30 seg
              </span>
            </div>

            <div className="p-4 text-center">
              <span className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-1">
                <Code2 className="w-3.5 h-3.5" /> Programação
              </span>
              <span className="text-sm sm:text-base font-bold text-white block">
                {currentCat.programmingLanguages[0]}
              </span>
            </div>

            <div className="p-4 text-center">
              <span className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-1">
                <Trophy className="w-3.5 h-3.5" /> Prêmio Máximo
              </span>
              <span className="text-sm sm:text-base font-bold text-amber-400 block truncate" title={currentCat.prestigiousAward}>
                {currentCat.prestigiousAward.split('(')[0]}
              </span>
            </div>
          </div>

          {/* Deep Content: Pillars, Robot Hardware & Match Dynamics */}
          <div className="p-6 sm:p-10 space-y-10">
            {/* Description & Key Pillars */}
            <div>
              <h4 className="text-xl font-bold text-white mb-3">Como Funciona a Modalidade</h4>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {currentCat.fullDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCat.keyPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-4"
                  >
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-base mb-1">{pillar.title}</h5>
                      <p className="text-sm text-slate-300 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware & Software Tech Specs */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Especificações Técnicas do Robô ({currentCat.acronym})
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400">
                    Sistema de Tração (Drivetrain)
                  </span>
                  <p className="text-slate-200 font-medium">{currentCat.sampleRobotSpecs.drivetrain}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400">
                    Controlador Central & Processador
                  </span>
                  <p className="text-slate-200 font-medium">{currentCat.sampleRobotSpecs.controllers}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400">
                    Motores & Atuadores
                  </span>
                  <p className="text-slate-200 font-medium">{currentCat.sampleRobotSpecs.motors}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400">
                    Sensores & Percepção
                  </span>
                  <p className="text-slate-200 font-medium">{currentCat.sampleRobotSpecs.sensors}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400">
                    Alimentação & Bateria
                  </span>
                  <p className="text-slate-200 font-medium">{currentCat.sampleRobotSpecs.power}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400">
                    Ambiente de Programação
                  </span>
                  <p className="text-slate-200 font-medium">
                    {currentCat.programmingLanguages.join(', ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Arena and Match Structure Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase text-blue-400">Fase 1</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                    Autônomo
                  </span>
                </div>
                <h5 className="font-bold text-white text-base mb-2">Sem Controle Humano</h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentCat.autonomousPhase}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase text-amber-400">Fase 2</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                    Teleoperado
                  </span>
                </div>
                <h5 className="font-bold text-white text-base mb-2">Pilotagem & Estratégia</h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentCat.teleopPhase}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase text-emerald-400">Fase 3</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                    Endgame
                  </span>
                </div>
                <h5 className="font-bold text-white text-base mb-2">Desafio Final de 30s</h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentCat.endgamePhase}
                </p>
              </div>
            </div>

            {/* School Fit & Budget */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 gap-4">
              <div>
                <span className="text-xs font-bold uppercase text-slate-400 block mb-1">
                  Público-Alvo Recomendado
                </span>
                <p className="text-white font-semibold text-base">{currentCat.idealFor}</p>
                <p className="text-xs text-slate-400 mt-1">
                  Estimativa de orçamento de entrada: <strong className="text-slate-200">{currentCat.estimatedBudget}</strong>
                </p>
              </div>

              <button
                id={`detail-simulate-cta-${currentCat.id}`}
                onClick={() => onSimulateMatch(currentCat.id)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 whitespace-nowrap transition-all"
              >
                Abrir Simulador de Partida
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
