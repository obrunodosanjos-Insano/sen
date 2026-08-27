import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { ImpactSection } from './components/ImpactSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ComparisonTable } from './components/ComparisonTable';
import { StepsGuide } from './components/StepsGuide';
import { PhotoUploadSection } from './components/PhotoUploadSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans antialiased selection:bg-slate-900 selection:text-white dark:selection:bg-blue-600 transition-colors duration-200">
        {/* 1. Header & Navigation with Theme Toggle */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="flex-grow">
          {/* 2. Hero Section (More Than Robots & PreK-12 Progression) */}
          <Hero />

          {/* 3. Filosofia FIRST, Dr. Woodie Flowers & Valores Fundamentais */}
          <Philosophy />

          {/* 4. Impacto Comprovado, Bolsas Universitárias ($80M+) e Formação STEM */}
          <ImpactSection />

          {/* 5. As 3 Categorias Oficiais em Detalhe (FLL, FTC, FRC) */}
          <CategoriesSection />

          {/* 6. Matriz Comparativa Direta */}
          <ComparisonTable />

          {/* 7. Guia Oficial: Como Criar uma Equipe no Brasil (SESI) */}
          <StepsGuide />

          {/* 8. Campo para Adicionar Fotos da Equipe & Robôs */}
          <PhotoUploadSection />

          {/* 9. Perguntas Frequentes & Termos Essenciais */}
          <FaqSection />
        </main>

        {/* 10. Institutional Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

