import React from 'react';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import { FrcLogo } from './FrcLogo';
import { SenaiLogo } from './SenaiLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-14 text-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1 shadow-xs">
                <FrcLogo variant="emblem" className="w-full h-full" />
              </div>
              <div className="h-7 w-20 flex items-center shadow-xs border border-red-700/30 overflow-hidden">
                <SenaiLogo className="w-full h-full" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-slate-900 dark:text-white tracking-tight font-display text-base block">
                FIRST® Inspires
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                Brasil & SENAI
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Inspirando jovens a se tornarem líderes e inovadores em ciência e tecnologia através de programas de robótica baseados em mentoria.
            </p>
            <div className="text-xs text-slate-600 dark:text-slate-300">
              Operação de torneios oficiais no Brasil por <strong>SESI e SENAI Robótica</strong>.
            </div>
          </div>

          {/* Programs Col */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4 font-display">
              Programas Oficiais
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="#fll" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-none bg-slate-900 dark:bg-white" />
                  <span>FIRST® LEGO® League (FLL)</span>
                </a>
              </li>
              <li>
                <a href="#ftc" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-none bg-slate-700 dark:bg-slate-300" />
                  <span>FIRST® Tech Challenge (FTC)</span>
                </a>
              </li>
              <li>
                <a href="#frc" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-none bg-slate-500 dark:bg-slate-400" />
                  <span>FIRST® Robotics Competition (FRC)</span>
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-black dark:hover:text-white transition-colors">
                  Comparativo de Categorias
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Culture */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4 font-display">
              Cultura & Recursos
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="#sobre" className="hover:text-black dark:hover:text-white transition-colors">
                  Gracious Professionalism®
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-black dark:hover:text-white transition-colors">
                  Coopertition® & Core Values
                </a>
              </li>
              <li>
                <a href="#impacto" className="hover:text-black dark:hover:text-white transition-colors">
                  Bolsas Universitárias ($80M+)
                </a>
              </li>
              <li>
                <a href="#como-participar" className="hover:text-black dark:hover:text-white transition-colors">
                  Guia para Formar Equipe
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-black dark:hover:text-white font-semibold transition-colors">
                  Galeria & Fotos da Equipe
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-black dark:hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Links Externos Oficiais */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4 font-display">
              Portais Oficiais
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="https://www.firstinspires.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                  <span>FIRST Inspires Global</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="http://portaldaindustria.com.br/sesi/canais/torneio-de-robotica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                  <span>Portal SESI Torneios Brasil</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://ftc-docs.firstinspires.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                  <span>FTC Official Docs</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.wpilib.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                  <span>WPILib Documentation (FRC)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Trademark notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="text-center md:text-left leading-relaxed">
            FIRST®, o logotipo da FIRST, <em>More Than Robots®</em>, <em>Gracious Professionalism®</em> e <em>Coopertition®</em> são marcas registradas da <em>For Inspiration and Recognition of Science and Technology (FIRST)</em>. LEGO® e SPIKE™ são marcas registradas do LEGO Group.
          </p>
          <div className="flex-shrink-0 text-slate-500 dark:text-slate-400 font-medium">
            Guia Educacional e Informativo Brasil
          </div>
        </div>
      </div>
    </footer>
  );
};
