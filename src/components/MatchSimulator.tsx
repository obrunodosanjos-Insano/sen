import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Bot,
  Zap,
  Volume2,
  VolumeX,
  Clock,
  Shield,
  Gamepad2,
  Trophy,
  Activity,
} from 'lucide-react';
import { MATCH_SIMULATORS, FIRST_CATEGORIES } from '../data/firstData';
import { CategoryId, MatchPhase } from '../types';

interface MatchSimulatorProps {
  initialCategory?: CategoryId;
}

export const MatchSimulator: React.FC<MatchSimulatorProps> = ({ initialCategory = 'frc' }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(initialCategory);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSeconds, setCurrentSeconds] = useState<number>(0);
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [simulatedScoreRed, setSimulatedScoreRed] = useState<number>(0);
  const [simulatedScoreBlue, setSimulatedScoreBlue] = useState<number>(0);
  const [audioFeedback, setAudioFeedback] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const matchData = MATCH_SIMULATORS[selectedCategory];
  const categoryInfo = FIRST_CATEGORIES[selectedCategory];

  // Calculate cumulative phase timing
  const getPhaseAtSecond = (sec: number) => {
    let accumulated = 0;
    for (let i = 0; i < matchData.phases.length; i++) {
      accumulated += matchData.phases[i].durationSeconds;
      if (sec <= accumulated) {
        return i;
      }
    }
    return matchData.phases.length - 1;
  };

  // Timer loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSeconds((prev) => {
          if (prev >= matchData.totalDuration) {
            setIsPlaying(false);
            return matchData.totalDuration;
          }
          const nextSec = prev + 1;
          const phaseIdx = getPhaseAtSecond(nextSec);
          setActivePhaseIndex(phaseIdx);

          // Simulated score increment
          if (nextSec % 4 === 0) {
            setSimulatedScoreRed((r) => r + Math.floor(Math.random() * 5) + 3);
            setSimulatedScoreBlue((b) => b + Math.floor(Math.random() * 5) + 2);
          }

          return nextSec;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, matchData]);

  // Handle category switch
  const handleCategorySwitch = (cat: CategoryId) => {
    setIsPlaying(false);
    setSelectedCategory(cat);
    setCurrentSeconds(0);
    setActivePhaseIndex(0);
    setSimulatedScoreRed(0);
    setSimulatedScoreBlue(0);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentSeconds(0);
    setActivePhaseIndex(0);
    setSimulatedScoreRed(0);
    setSimulatedScoreBlue(0);
  };

  const handleJumpToPhase = (index: number) => {
    let sec = 0;
    for (let i = 0; i < index; i++) {
      sec += matchData.phases[i].durationSeconds;
    }
    setCurrentSeconds(sec);
    setActivePhaseIndex(index);
  };

  const currentPhase: MatchPhase = matchData.phases[activePhaseIndex] || matchData.phases[0];

  const formatMinutes = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const remainingSeconds = Math.max(0, matchData.totalDuration - currentSeconds);

  return (
    <section id="simulador" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span>Experiência Interativa em Tempo Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simulador de Partida Oficial (2m 30s)
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Veja exatamente o que acontece segundo a segundo na arena: a contagem regressiva, a
            autonomia dos robôs, a pilotagem dos drivers e o clímax emocionante do Endgame!
          </p>
        </div>

        {/* Category Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            {(['fll', 'ftc', 'frc'] as CategoryId[]).map((cat) => (
              <button
                key={cat}
                id={`sim-cat-${cat}`}
                onClick={() => handleCategorySwitch(cat)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {FIRST_CATEGORIES[cat].acronym}
              </button>
            ))}
          </div>
        </div>

        {/* Main Simulator Arena Box */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
          {/* Top Scoreboard Bar */}
          <div className="p-6 bg-slate-950 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Red Alliance */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 font-black text-xl">
                RED
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-red-400 block">
                  {selectedCategory === 'fll' ? 'Mesa A' : 'Aliança Vermelha'}
                </span>
                <span className="text-3xl font-black text-white font-mono">
                  {simulatedScoreRed} pts
                </span>
              </div>
            </div>

            {/* Central Arena Match Timer Clock */}
            <div className="text-center px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-1.5 mb-0.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Tempo Restante da Partida</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-wider">
                {formatMinutes(remainingSeconds)}
              </div>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span
                  className={`h-2 w-2 rounded-full ${
                    isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'
                  }`}
                />
                <span className="text-xs font-semibold text-slate-300">
                  {isPlaying ? 'Partida em Andamento' : 'Partida Pausada / Aguardando'}
                </span>
              </div>
            </div>

            {/* Blue Alliance */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-end">
              <div className="text-right">
                <span className="text-xs uppercase font-bold text-blue-400 block">
                  {selectedCategory === 'fll' ? 'Mesa B' : 'Aliança Azul'}
                </span>
                <span className="text-3xl font-black text-white font-mono">
                  {simulatedScoreBlue} pts
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-xl">
                BLUE
              </div>
            </div>
          </div>

          {/* Progress Bar Timeline */}
          <div className="p-6 bg-slate-900/80 border-b border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span>00:00 (Início)</span>
              <span className="font-bold text-amber-400">{currentPhase.name}</span>
              <span>02:30 (Fim)</span>
            </div>

            {/* Progress Track */}
            <div className="relative h-4 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-amber-500 to-red-500 transition-all duration-300 rounded-full"
                style={{
                  width: `${(currentSeconds / matchData.totalDuration) * 100}%`,
                }}
              />
            </div>

            {/* Phase Stepper Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {matchData.phases.map((phase, idx) => {
                const isCurrent = activePhaseIndex === idx;
                return (
                  <button
                    key={phase.id}
                    id={`phase-step-btn-${phase.id}`}
                    onClick={() => handleJumpToPhase(idx)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      isCurrent
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold block opacity-75">
                      Fase {idx + 1} ({phase.durationSeconds}s)
                    </span>
                    <span className="text-xs font-bold truncate block">{phase.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Phase Live Details Box */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left: Phase Overview & Robot Behavior */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Fase Atual da Partida
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Duração: {currentPhase.durationSeconds} segundos
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{currentPhase.name}</h3>
                <p className="text-base text-slate-300 mt-2 leading-relaxed">
                  {currentPhase.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-400 mb-1">
                    <Gamepad2 className="w-4 h-4" />
                    <span>Papel dos Pilotos / Alunos</span>
                  </div>
                  <p className="text-sm text-slate-200">{currentPhase.driverRole}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-400 mb-1">
                    <Activity className="w-4 h-4" />
                    <span>Comportamento do Robô</span>
                  </div>
                  <p className="text-sm text-slate-200">{currentPhase.robotBehavior}</p>
                </div>
              </div>

              {/* Point scoring highlight */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-950 to-slate-950 border border-amber-500/30 flex items-start gap-3">
                <Trophy className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Destaque de Pontuação Desta Fase
                  </span>
                  <p className="text-sm text-white font-medium">{currentPhase.pointsHighlight}</p>
                </div>
              </div>
            </div>

            {/* Right: Controller Controls */}
            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center space-y-6 text-center shadow-lg">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-xl shadow-blue-600/30">
                <Bot className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-extrabold text-white text-lg">Controles da Partida</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Avance ou pause a reprodução do jogo
                </p>
              </div>

              {/* Main Play / Pause Button */}
              <div className="flex items-center gap-3">
                <button
                  id="sim-btn-toggle-play"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-base shadow-xl transition-all ${
                    isPlaying
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/30'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30 hover:scale-105'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5 fill-slate-950" />
                      <span>Pausar</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-slate-950" />
                      <span>Iniciar Partida</span>
                    </>
                  )}
                </button>

                <button
                  id="sim-btn-reset"
                  onClick={handleReset}
                  className="p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Reiniciar Partida"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                Modalidade: {categoryInfo.name} ({categoryInfo.acronym})
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
