import React, { useState } from 'react';
import {
  Trophy,
  CheckSquare,
  Square,
  Users,
  Compass,
  FileCheck,
  DollarSign,
  Calendar,
  Sparkles,
  Lightbulb,
  Shield,
  Layers,
} from 'lucide-react';
import { TEAM_STEPS } from '../data/firstData';

export const TeamGuide: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (itemKey: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const stepIcons = [Users, FileCheck, Layers, DollarSign, Calendar];

  return (
    <section id="como-comecar" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <span>Passo a Passo Prático</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Como Criar uma Equipe FIRST no Brasil
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Qualquer escola, grupo de amigos ou organização comunitária pode fundar uma equipe oficial
            de robótica. Siga este roteiro estruturado com as diretrizes do SESI e da FIRST global.
          </p>
        </div>

        {/* Sub-areas Breakdown Box */}
        <div className="mb-16 p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Divisão de Papéis: Uma Equipe FIRST é como uma Startup
              </h3>
              <p className="text-xs text-slate-400">
                Não é apenas quem constrói o robô que brilha; todos os talentos têm papel vital.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-bold uppercase text-blue-400 block mb-1">
                Engenharia & Mecânica
              </span>
              <p className="text-sm text-slate-300">
                Design em CAD 3D, usinagem, montagem estrutural, caixas de redução e manutenção nos pits.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-bold uppercase text-amber-400 block mb-1">
                Software & Visão
              </span>
              <p className="text-sm text-slate-300">
                Código autônomo em Java/Python, controle PID, telemetria e visão computacional AprilTags.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-bold uppercase text-purple-400 block mb-1">
                Marketing & Branding
              </span>
              <p className="text-sm text-slate-300">
                Criação de identidade visual, redes sociais, fotografia, camisetas e vídeos de apresentação.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-bold uppercase text-emerald-400 block mb-1">
                Business & Impacto Social
              </span>
              <p className="text-sm text-slate-300">
                Captação de patrocínios, orçamento, workshops em escolas públicas e defesa do Impact Award.
              </p>
            </div>
          </div>
        </div>

        {/* 5-Step Timeline with Interactive Checklist */}
        <div className="space-y-8">
          {TEAM_STEPS.map((step, stepIdx) => {
            const StepIcon = stepIcons[stepIdx] || Trophy;
            return (
              <div
                key={step.number}
                id={`team-step-card-${step.number}`}
                className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl transition-all duration-200 hover:border-slate-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left: Step Info */}
                  <div className="space-y-3 lg:max-w-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-blue-500/20">
                        {step.number}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                          {step.subtitle}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-black text-white">{step.title}</h4>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>

                    {/* Pro Tip Callout */}
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800/80 flex items-start gap-3 text-xs sm:text-sm text-amber-300">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-400">Dica de Ouro:</span> {step.tips}
                      </div>
                    </div>
                  </div>

                  {/* Right: Interactive Checklist Box */}
                  <div className="w-full lg:w-96 p-5 rounded-2xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-3">
                      Checklist do Passo {step.number}
                    </span>

                    <div className="space-y-2.5">
                      {step.checklist.map((item, itemIdx) => {
                        const itemKey = `step-${step.number}-${itemIdx}`;
                        const isChecked = !!checkedItems[itemKey];

                        return (
                          <div
                            key={itemIdx}
                            id={`checklist-item-${itemKey}`}
                            onClick={() => toggleCheck(itemKey)}
                            className={`p-2.5 rounded-xl border flex items-start gap-3 cursor-pointer select-none transition-all ${
                              isChecked
                                ? 'bg-emerald-500/10 border-emerald-500/30 text-slate-200'
                                : 'bg-slate-950 border-slate-800/80 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <button
                              type="button"
                              className="mt-0.5 text-emerald-400 shrink-0 focus:outline-none"
                            >
                              {isChecked ? (
                                <CheckSquare className="w-4 h-4" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-500" />
                              )}
                            </button>
                            <span
                              className={`text-xs font-medium leading-tight ${
                                isChecked ? 'line-through text-slate-400' : ''
                              }`}
                            >
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
