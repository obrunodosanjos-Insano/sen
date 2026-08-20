import React, { useState } from 'react';
import { Bot, Cpu, Zap, Eye, Wrench, Shield, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { ROBOT_PARTS } from '../data/firstData';
import { RobotPart } from '../types';

export const RobotAnatomy: React.FC = () => {
  const [selectedPartId, setSelectedPartId] = useState<string>(ROBOT_PARTS[0].id);

  const selectedPart: RobotPart =
    ROBOT_PARTS.find((p) => p.id === selectedPartId) || ROBOT_PARTS[0];

  const partIcons: Record<string, React.ElementType> = {
    drivetrain: Wrench,
    brain: Cpu,
    manipulator: Bot,
    vision: Eye,
    power: Zap,
  };

  return (
    <section id="anatomia" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <span>Engenharia Desmistificada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Anatomia de um Robô FIRST
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Descubra os 5 principais subsistemas que compõem uma máquina de competição e como cada
            categoria (FLL, FTC e FRC) escala em complexidade tecnológica.
          </p>
        </div>

        {/* Interactive Anatomy Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Subsystems Navigation List */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-2">
              Selecione o Subsistema
            </span>

            {ROBOT_PARTS.map((part) => {
              const IconComp = partIcons[part.id] || Sparkles;
              const isSelected = selectedPartId === part.id;
              return (
                <button
                  key={part.id}
                  id={`robot-part-btn-${part.id}`}
                  onClick={() => setSelectedPartId(part.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-200 flex items-center gap-4 ${
                    isSelected
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10 scale-[1.02]'
                      : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-950'
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base leading-tight">{part.name}</h4>
                    <span className="text-xs text-slate-400 font-mono mt-0.5 block">
                      {part.system}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Breakdown by Category */}
          <div className="lg:col-span-8 rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8">
            {/* Header of Active Subsystem */}
            <div className="border-b border-slate-800 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 px-3 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                  {selectedPart.system}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedPart.name}</h3>
              <p className="text-base text-slate-300 mt-2 leading-relaxed">
                {selectedPart.description}
              </p>

              {/* Key Components Tag Cloud */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="text-xs font-semibold text-slate-400 mr-2">Componentes-chave:</span>
                {selectedPart.keyComponents.map((comp, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Side-by-Side Category Implementation for this Part */}
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-400">
                Como este subsistema é construído em cada categoria:
              </h4>

              {/* FLL Implementation */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950/20 via-slate-900 to-slate-900 border border-red-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="font-extrabold text-white text-sm">FLL Challenge (LEGO®)</span>
                  </div>
                  <span className="text-xs font-mono text-red-300">Nível Iniciação</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedPart.fllDetail}</p>
              </div>

              {/* FTC Implementation */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/20 via-slate-900 to-slate-900 border border-amber-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="font-extrabold text-white text-sm">
                      FIRST Tech Challenge (FTC)
                    </span>
                  </div>
                  <span className="text-xs font-mono text-amber-300">Nível Intermediário</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedPart.ftcDetail}</p>
              </div>

              {/* FRC Implementation */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/20 via-slate-900 to-slate-900 border border-blue-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="font-extrabold text-white text-sm">
                      FIRST Robotics Competition (FRC)
                    </span>
                  </div>
                  <span className="text-xs font-mono text-blue-300">Nível Industrial Máximo</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedPart.frcDetail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
