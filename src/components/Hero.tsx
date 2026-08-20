import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-white text-slate-900 pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-none bg-slate-900" />
            <span>MORE THAN ROBOTS®</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6 font-display text-slate-900">
            Preparando Jovens Para o Futuro Através da Ciência e Robótica
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            A <strong>FIRST®</strong> é a comunidade global líder em educação STEM, capacitando estudantes dos 9 aos 18 anos com habilidades de engenharia, programação, liderança e resolução de problemas reais.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#programas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-slate-900 hover:bg-black text-white font-bold text-sm shadow-xs transition-all"
            >
              <span>Conhecer os 3 Programas</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 transition-all"
            >
              <span>A Filosofia FIRST</span>
            </a>
          </div>
        </div>

        {/* The 3 Progression Programs Banner */}
        <div className="mt-12 pt-10 border-t border-slate-100">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
              Progressão de Programas FIRST (PreK–12)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* FLL Card */}
            <a
              href="#fll"
              className="group rounded-none bg-white hover:bg-slate-50/70 border border-slate-200 hover:border-slate-400 p-6 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-none bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold uppercase">
                    9 a 16 anos
                  </span>
                  <span className="text-xs font-semibold text-slate-500">LEGO® SPIKE</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-black transition-colors font-display mb-2">
                  FIRST® LEGO® League
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Iniciação científica com robôs autônomos em LEGO, programação em blocos/Python e desenvolvimento de projetos de inovação.
                </p>
              </div>
              <div className="flex items-center text-xs font-bold text-slate-900 group-hover:translate-x-1 transition-transform">
                <span>Ver detalhes da modalidade</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>

            {/* FTC Card */}
            <a
              href="#ftc"
              className="group rounded-none bg-white hover:bg-slate-50/70 border border-slate-200 hover:border-slate-400 p-6 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-none bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold uppercase">
                    12 a 18 anos
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Android & Java</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-black transition-colors font-display mb-2">
                  FIRST® Tech Challenge
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Robôs de metal até 45 cm, controle com gamepads, visão AprilTags, portfólio de engenharia e disputas em alianças 2v2.
                </p>
              </div>
              <div className="flex items-center text-xs font-bold text-slate-900 group-hover:translate-x-1 transition-transform">
                <span>Ver detalhes da modalidade</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>

            {/* FRC Card */}
            <a
              href="#frc"
              className="group rounded-none bg-white hover:bg-slate-50/70 border border-slate-200 hover:border-slate-400 p-6 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-none bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold uppercase">
                    14 a 18 anos
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Escala Industrial</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-black transition-colors font-display mb-2">
                  FIRST® Robotics Competition
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  O ápice da robótica de ensino médio: máquinas de até 56 kg, Swerve Drive, alianças 3v3 em quadras e gestão empresarial.
                </p>
              </div>
              <div className="flex items-center text-xs font-bold text-slate-900 group-hover:translate-x-1 transition-transform">
                <span>Ver detalhes da modalidade</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>
          </div>
        </div>

        {/* Global Impact Numbers */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-none bg-slate-50 border border-slate-200 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">+3,2M</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Jovens Impactados</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">100+</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Países Participantes</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">+$80M</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Bolsas Universitárias</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">320k+</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Mentores & Voluntários</div>
          </div>
        </div>
      </div>
    </section>
  );
};
