import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
import { FrcLogo } from './FrcLogo';
import { SenaiLogo } from './SenaiLogo';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Se estiver no topo da página (<= 20px), sempre mostra a navbar
      if (currentScrollY <= 20) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Se rolou para baixo, esconde a navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Fecha o menu mobile se estiver descendo
      } else if (currentScrollY < lastScrollY.current) {
        // Se rolou para cima (subindo novamente), reaparece
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Main Clean Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand Logo Group - FIRST® & SENAI */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-9 h-7 sm:w-10 sm:h-8 rounded-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1 shadow-xs group-hover:border-slate-400 dark:group-hover:border-slate-500 transition-colors">
              <FrcLogo variant="emblem" className="w-full h-full" />
            </div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base font-display">FIRST®</span>
              <span className="text-slate-500 dark:text-slate-400 font-medium text-[11px] sm:text-xs hidden min-[420px]:inline">Brasil</span>
            </div>
          </a>

          {/* Elegant Divider */}
          <div className="h-4 sm:h-5 w-px bg-slate-200 dark:bg-slate-700" />

          {/* SENAI Logo next to FIRST */}
          <a
            href="https://www.portaldaindustria.com.br/senai/"
            target="_blank"
            rel="noopener noreferrer"
            title="SENAI - Serviço Nacional de Aprendizagem Industrial"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <div className="h-6 sm:h-7 w-20 sm:w-24 flex items-center overflow-hidden shadow-xs border border-red-700/30">
              <SenaiLogo className="h-full w-full" />
            </div>
          </a>
        </div>

        {/* Desktop Links - Streamlined and balanced */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <a
            href="#programas"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            Programas
          </a>
          <a
            href="#sobre"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            Sobre
          </a>
          <a
            href="#comparativo"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            Comparativo
          </a>
          <a
            href="#como-participar"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            Como Criar
          </a>
          <a
            href="#galeria"
            className="text-slate-900 dark:text-white font-bold hover:text-black dark:hover:text-slate-200 transition-colors py-1"
          >
            Galeria
          </a>
          <a
            href="#faq"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            FAQ
          </a>
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-navbar"
            aria-label={theme === 'dark' ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro'}
            title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-none border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-bold shadow-xs cursor-pointer"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Claro</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span className="hidden sm:inline">Escuro</span>
              </>
            )}
          </button>

          <a
            href="http://portaldaindustria.com.br/sesi/canais/torneio-de-robotica/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-none bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 transition-all shadow-xs"
          >
            <span>SESI / SENAI</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-none text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Menu de Navegação"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Clean & Simple */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-md">
          <a
            href="#programas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1.5 px-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-none text-xs font-semibold"
          >
            Programas (FLL, FTC, FRC)
          </a>
          <a
            href="#sobre"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1.5 px-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-none text-xs font-semibold"
          >
            Sobre a FIRST
          </a>
          <a
            href="#comparativo"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1.5 px-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-none text-xs font-semibold"
          >
            Comparativo de Categorias
          </a>
          <a
            href="#como-participar"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1.5 px-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-none text-xs font-semibold"
          >
            Como Criar uma Equipe
          </a>
          <a
            href="#galeria"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1.5 px-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-none text-xs font-bold text-slate-900 dark:text-white"
          >
            Galeria & Fotos
          </a>
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1.5 px-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-none text-xs font-semibold"
          >
            Dúvidas Frequentes
          </a>

          {/* Theme switcher inside mobile menu */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Tema da Interface:</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Modo Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                  <span>Modo Escuro</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2">
            <a
              href="http://portaldaindustria.com.br/sesi/canais/torneio-de-robotica/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2 rounded-none bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold"
            >
              <span>Portal SESI / SENAI Robótica</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

