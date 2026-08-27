import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Trophy, 
  Layers
} from 'lucide-react';
import { FrcLogo } from './FrcLogo';
import { FrcPhotoGallery } from './FrcPhotoGallery';

export const CategoriesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fll' | 'ftc' | 'frc'>('all');

  return (
    <section id="programas" className="py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200 dark:border-slate-700">
              <Layers className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span>Programas Oficiais da FIRST</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              As Três Modalidades Principais
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              Cada programa é desenhado com rigor pedagógico e desafios crescentes de engenharia para cada faixa etária.
            </p>
          </div>

          {/* Clean Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-none self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-none text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs border border-slate-200/80 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Todos (3)
            </button>
            <button
              onClick={() => setFilter('fll')}
              className={`px-3.5 py-1.5 rounded-none text-xs font-bold transition-all ${
                filter === 'fll'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              FLL Challenge
            </button>
            <button
              onClick={() => setFilter('ftc')}
              className={`px-3.5 py-1.5 rounded-none text-xs font-bold transition-all ${
                filter === 'ftc'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              FTC
            </button>
            <button
              onClick={() => setFilter('frc')}
              className={`px-3.5 py-1.5 rounded-none text-xs font-bold transition-all ${
                filter === 'frc'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              FRC
            </button>
          </div>
        </div>

        {/* Stack of Programs */}
        <div className="space-y-10">
          {/* 1. FLL CHALLENGE */}
          {(filter === 'all' || filter === 'fll') && (
            <div 
              id="fll"
              className="bg-white dark:bg-slate-800/90 rounded-none border border-slate-200 dark:border-slate-700 shadow-xs overflow-hidden transition-all hover:border-slate-300 dark:hover:border-slate-600"
            >
              {/* Header Bar */}
              <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-6 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-black text-slate-900 dark:text-white text-lg font-display shadow-xs">
                    FLL
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block">
                      Iniciação Científica & Robótica Autônoma
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white">
                      FIRST® LEGO® League Challenge
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-extrabold uppercase shadow-xs">
                    9 a 16 anos
                  </span>
                  <span className="px-3 py-1 rounded-none bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold">
                    2 a 10 alunos
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Text Description */}
                  <div className="lg:col-span-2 space-y-4">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">Visão Geral do Programa:</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      No <strong className="text-slate-900 dark:text-white">FLL Challenge</strong>, equipes constroem e programam um robô <strong className="text-slate-900 dark:text-white">100% autônomo</strong> utilizando exclusivamente peças e motores LEGO®. Na arena (tapete oficial de 2,4 × 1,2 m), o robô tem 2 minutos e 30 segundos para cumprir o maior número de missões temáticas sem qualquer controle remoto.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Paralelamente, a equipe conduz um <strong className="text-slate-900 dark:text-white">Projeto de Inovação</strong>: pesquisa um problema real ligado ao tema anual da temporada e cria uma solução inédita, apresentando-a perante bancas de jurados.
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        Composição da Avaliação (Pesos Iguais - 25% cada):
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                        <div className="p-2.5 rounded-none bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200">
                          Desafio do Robô
                        </div>
                        <div className="p-2.5 rounded-none bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200">
                          Design do Robô
                        </div>
                        <div className="p-2.5 rounded-none bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200">
                          Projeto de Inovação
                        </div>
                        <div className="p-2.5 rounded-none bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200">
                          Core Values
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Specs */}
                  <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-none p-5 space-y-3 text-xs text-slate-700 dark:text-slate-300 self-start">
                    <div className="font-bold text-slate-900 dark:text-white text-sm pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-1.5 font-display">
                      <SlidersHorizontal className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      Ficha Técnica do FLL
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Kit Homologado:</span>
                      LEGO® Education SPIKE™ Prime ou EV3
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Linguagens:</span>
                      Word Blocks (Scratch) ou Python nativo
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Arena & Partida:</span>
                      Tapete oficial (2,4m × 1,2m) | 2m30s de duração
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Peso & Dimensões:</span>
                      1 a 2 kg | Cabe na área inicial de base da mesa
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Perfil de Entrada:</span>
                      Escolas e projetos com foco no Ensino Fundamental
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. FTC */}
          {(filter === 'all' || filter === 'ftc') && (
            <div 
              id="ftc"
              className="bg-white dark:bg-slate-800/90 rounded-none border border-slate-200 dark:border-slate-700 shadow-xs overflow-hidden transition-all hover:border-slate-300 dark:hover:border-slate-600"
            >
              {/* Header Bar */}
              <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-6 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-black text-slate-900 dark:text-white text-lg font-display shadow-xs">
                    FTC
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block">
                      Engenharia Intermediária & Estratégia de Alianças
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white">
                      FIRST® Tech Challenge
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-extrabold uppercase shadow-xs">
                    12 a 18 anos
                  </span>
                  <span className="px-3 py-1 rounded-none bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold">
                    4 a 15 alunos
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Text Description */}
                  <div className="lg:col-span-2 space-y-4">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">Visão Geral do Programa:</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      No <strong className="text-slate-900 dark:text-white">FTC</strong>, os alunos projetam robôs de porte médio (até 45,7 cm e ~15 kg) usando perfis de alumínio, motores industriais compactos e sensores. As partidas acontecem em uma arena cercada de 3,6 × 3,6 m, em formato de <strong className="text-slate-900 dark:text-white">alianças de 2 contra 2</strong> (Aliança Vermelha vs. Aliança Azul).
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      A partida dura 2m30s: os primeiros <strong className="text-slate-900 dark:text-white">30 segundos são 100% autônomos</strong> (guiados por visão computacional AprilTags e sensores de odometria) seguidos por <strong className="text-slate-900 dark:text-white">2 minutos de teleoperação manual</strong> com gamepads pelos alunos pilotos.
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        Destaques da Modalidade:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="p-3 rounded-none bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200">
                          <strong className="text-slate-900 dark:text-white block mb-1">Caderno de Engenharia:</strong> Registro técnico de testes, física, design e decisões.
                        </div>
                        <div className="p-3 rounded-none bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200">
                          <strong className="text-slate-900 dark:text-white block mb-1">Android & Java:</strong> Controlador REV Control Hub rodando sistema Android integrado.
                        </div>
                        <div className="p-3 rounded-none bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200">
                          <strong className="text-slate-900 dark:text-white block mb-1">Inspire Award:</strong> Prêmio principal que homenageia a equipe mais completa e exemplar.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Specs */}
                  <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-none p-5 space-y-3 text-xs text-slate-700 dark:text-slate-300 self-start">
                    <div className="font-bold text-slate-900 dark:text-white text-sm pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-1.5 font-display">
                      <SlidersHorizontal className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      Ficha Técnica do FTC
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Kit Estrutural:</span>
                      REV Robotics, goBILDA, Tetrix ou peças em CNC/3D
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Controlador & Código:</span>
                      REV Control Hub | Java (Android Studio) / Blocks
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Arena & Disputa:</span>
                      Arena de 3,6m × 3,6m | Alianças 2v2
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Dimensões do Robô:</span>
                      Cubo de 45,7 cm (18") no início da partida | Peso ~15 kg
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Visão Computacional:</span>
                      Câmeras USB com AprilTags e reconhecimento de objetos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. FRC */}
          {(filter === 'all' || filter === 'frc') && (
            <div 
              id="frc"
              className="bg-white dark:bg-slate-800/90 rounded-none border border-slate-200 dark:border-slate-700 shadow-xs overflow-hidden transition-all hover:border-slate-300 dark:hover:border-slate-600"
            >
              {/* Header Bar */}
              <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-6 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-12 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1.5 shadow-xs">
                    <FrcLogo variant="emblem" className="w-full h-full" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block">
                      Escala Industrial & O "Maior Esporte Para a Mente"
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white flex items-center gap-2">
                      <span>FIRST® Robotics Competition</span>
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-extrabold uppercase shadow-xs">
                    14 a 18 anos
                  </span>
                  <span className="px-3 py-1 rounded-none bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold">
                    10 a 50+ alunos
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Text Description */}
                  <div className="lg:col-span-2 space-y-4">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">Visão Geral do Programa:</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      O <strong className="text-slate-900 dark:text-white">FRC</strong> é o nível industrial da FIRST. Cada equipe opera como uma <strong className="text-slate-900 dark:text-white">empresa profissional de engenharia</strong>: constrói um robô de até <strong className="text-slate-900 dark:text-white">56 kg</strong> em ciclos acelerados, gerencia captação de patrocínios corporativos, elabora planos de marketing e disputa partidas <strong className="text-slate-900 dark:text-white">3 contra 3</strong> em arenas de ~16 × 8 metros.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      As máquinas atingem velocidades de até 6 m/s utilizando tração omnidirecional <strong className="text-slate-900 dark:text-white">Swerve Drive</strong>, motores brushless de alta densidade de potência, pneumática, corte a laser e processamento de visão em tempo real com módulos Limelight.
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        Prêmio Máximo da FIRST:
                      </div>
                      <div className="p-4 rounded-none bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-3">
                        <Trophy className="w-5 h-5 text-slate-700 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 dark:text-white">FIRST Impact Award (antigo Chairman's Award):</strong> É a maior honraria da FIRST. Não premia quem vence na arena, mas sim a equipe que comprova a maior transformação social, disseminando a ciência e os valores da FIRST na sua comunidade.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Specs & Official Logo Card */}
                  <div className="space-y-4 self-start">
                    <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-none p-5 space-y-3 text-xs text-slate-700 dark:text-slate-300">
                      <div className="font-bold text-slate-900 dark:text-white text-sm pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-1.5 font-display">
                        <SlidersHorizontal className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                        Ficha Técnica do FRC
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">Controlador Principal:</span>
                        NI roboRIO 2.0 (National Instruments)
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">Linguagens:</span>
                        Java (WPILib), C++ ou Python
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">Motores & Bateria:</span>
                        Kraken X60, Falcon 500, NEO Brushless | Bateria SLA 12V 18Ah
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">Dimensões & Peso:</span>
                        Até 56 kg (125 lbs) + bumpers | Perímetro ~300 cm
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">Arena & Partida:</span>
                        Quadra de ~16m × 8m | 15s Autônomo + 2m15s Teleop (3v3)
                      </div>
                    </div>

                    {/* Official FRC Logo Showcase Card */}
                    <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-none p-6 text-center shadow-xs">
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-500 block mb-3">
                        Logo Oficial do Programa
                      </span>
                      <div className="py-2 px-3 bg-slate-50/70 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-none">
                        <FrcLogo variant="full" className="max-w-[200px] mx-auto py-1" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campo e Galeria Dedicada de Fotos do FIRST Robotics Competition */}
                <FrcPhotoGallery />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

