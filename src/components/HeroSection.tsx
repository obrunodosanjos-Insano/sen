import React from 'react';
import { Bot, Sparkles, Award, Globe, Users, ArrowRight, ShieldCheck, PlayCircle, Cpu } from 'lucide-react';
import { CategoryId } from '../types';

interface HeroSectionProps {
  onExploreCategories: () => void;
  onOpenQuiz: () => void;
  onSelectCategory: (cat: CategoryId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCategories,
  onOpenQuiz,
  onSelectCategory,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background Decorative Tech Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>O Maior Movimento Global de Robótica e STEM</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Transformando Jovens em{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-400 bg-clip-text text-transparent">
              Líderes e Inovadores da Tecnologia
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Fundada por <strong className="text-white font-semibold">Dean Kamen</strong>, a{' '}
            <span className="text-blue-400 font-semibold">FIRST®</span> (
            <em>For Inspiration and Recognition of Science and Technology</em>) combina a paixão dos
            esportes com o rigor da ciência e engenharia. Conheça as três principais modalidades
            mundiais e descubra como participar no Brasil!
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              id="hero-cta-explore-categories"
              onClick={onExploreCategories}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explorar as 3 Categorias</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              id="hero-cta-open-quiz"
              onClick={onOpenQuiz}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/90 border border-slate-700 text-slate-100 font-semibold text-base shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Descubra a Categoria Ideal</span>
            </button>
          </div>
        </div>

        {/* Global Impact Highlights Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 max-w-5xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-xl bg-blue-500/10 text-blue-400">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">+679.000</div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Alunos participantes por ano
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-xl bg-amber-500/10 text-amber-400">
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">110+ Países</div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Comunidade internacional unida
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">+US$ 80M</div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Em bolsas universitárias STEM
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-xl bg-purple-500/10 text-purple-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">SESI & SENAI</div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Operadores oficiais no Brasil
            </p>
          </div>
        </div>

        {/* Quick 3 Pillar Cards Switcher preview */}
        <div className="mt-14 pt-10 border-t border-slate-800/80">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              As Três Categorias Principais
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FLL Card */}
            <div
              id="hero-card-fll"
              onClick={() => onSelectCategory('fll')}
              className="group cursor-pointer relative p-6 rounded-2xl bg-gradient-to-b from-red-950/40 via-slate-900 to-slate-900/90 border border-red-500/30 hover:border-red-500/70 transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-red-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                  9 a 16 anos
                </span>
                <span className="text-xs font-mono text-slate-400">LEGO® SPIKE</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                FLL Challenge
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5 mb-3">FIRST LEGO League</p>
              <p className="text-sm text-slate-300 line-clamp-3">
                Robôs 100% autônomos construídos com blocos LEGO e pesquisa científica de problemas reais no Projeto de Inovação.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-red-400 group-hover:underline">
                <span>Ver detalhes completos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* FTC Card */}
            <div
              id="hero-card-ftc"
              onClick={() => onSelectCategory('ftc')}
              className="group cursor-pointer relative p-6 rounded-2xl bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-900/90 border border-amber-500/30 hover:border-amber-500/70 transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-amber-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  12 a 18 anos
                </span>
                <span className="text-xs font-mono text-slate-400">Android & Java</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                FTC
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5 mb-3">FIRST Tech Challenge</p>
              <p className="text-sm text-slate-300 line-clamp-3">
                Robôs de metal até 45 cm controlados por Android, visão computacional AprilTags e partidas 2x2 em arena fechada.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:underline">
                <span>Ver detalhes completos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* FRC Card */}
            <div
              id="hero-card-frc"
              onClick={() => onSelectCategory('frc')}
              className="group cursor-pointer relative p-6 rounded-2xl bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-900/90 border border-blue-500/30 hover:border-blue-500/70 transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-blue-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  14 a 18 anos
                </span>
                <span className="text-xs font-mono text-slate-400">RoboRIO • 56 kg</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                FRC
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5 mb-3">FIRST Robotics Competition</p>
              <p className="text-sm text-slate-300 line-clamp-3">
                O "esporte para a mente" em nível industrial. Robôs de até 56 kg competindo em alianças 3x3 em arenas do tamanho de quadras.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:underline">
                <span>Ver detalhes completos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
