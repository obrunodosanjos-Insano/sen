import React, { useState } from 'react';
import {
  HelpCircle,
  BookOpen,
  Search,
  ChevronDown,
  ChevronUp,
  Tag,
  Sparkles,
  Award,
} from 'lucide-react';
import { GLOSSARY_ITEMS, FAQ_ITEMS } from '../data/firstData';
import { GlossaryItem, FaqItem } from '../types';

export const GlossaryAndFaq: React.FC = () => {
  const [glossarySearch, setGlossarySearch] = useState<string>('');
  const [glossaryCategory, setGlossaryCategory] = useState<string>('Todos');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const glossaryCategories = [
    'Todos',
    'Cultura & Valores',
    'Competição',
    'Robótica & Engenharia',
    'Prêmios',
  ];

  const filteredGlossary = GLOSSARY_ITEMS.filter((item) => {
    const matchesCat =
      glossaryCategory === 'Todos' || item.category === glossaryCategory;
    const matchesQuery =
      item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      (item.englishTranslation &&
        item.englishTranslation.toLowerCase().includes(glossarySearch.toLowerCase())) ||
      item.definition.toLowerCase().includes(glossarySearch.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="glossario" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <span>Dicionário & Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Glossário da FIRST & Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Aprenda o vocabulário oficial do maior esporte da mente e tire todas as suas dúvidas sobre
            como ingressar na comunidade.
          </p>
        </div>

        {/* Section 1: Searchable Glossary */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-400" />
                <span>Glossário de Termos Indispensáveis</span>
              </h3>
              <p className="text-sm text-slate-400">
                Terminologias técnicas, conceitos de cultura e regras de arena.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {glossaryCategories.map((cat) => (
                <button
                  key={cat}
                  id={`glossary-cat-${cat.toLowerCase()}`}
                  onClick={() => setGlossaryCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                    glossaryCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              id="glossary-search-input"
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              placeholder="Buscar termo (ex: Gracious Professionalism, Swerve, Impact Award, Pit)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-inner"
            />
          </div>

          {/* Glossary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.length > 0 ? (
              filteredGlossary.map((item, idx) => (
                <div
                  key={idx}
                  id={`glossary-card-${idx}`}
                  className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-extrabold text-white text-lg">{item.term}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-blue-300 border border-slate-700">
                        {item.category}
                      </span>
                    </div>

                    {item.englishTranslation && (
                      <span className="text-xs font-medium text-amber-400/90 block mb-2">
                        {item.englishTranslation}
                      </span>
                    )}

                    <p className="text-sm text-slate-300 leading-relaxed">{item.definition}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 py-12 text-center text-slate-400 bg-slate-900 rounded-2xl border border-slate-800">
                Nenhum termo encontrado para a busca "{glossarySearch}".
              </div>
            )}
          </div>
        </div>

        {/* Section 2: FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-400" />
              <span>Perguntas Frequentes (FAQ)</span>
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Dúvidas comuns de alunos, pais, professores e escolas sobre a FIRST no Brasil.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  id={`faq-item-${idx}`}
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    id={`faq-toggle-${idx}`}
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-base hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-blue-400 text-xs font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                        {faq.categoryTag}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 bg-slate-950/40">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
