import React, { useState } from 'react';
import { Cpu, Search, Check, Layers, ArrowUpDown, Filter } from 'lucide-react';
import { COMPARISON_METRICS } from '../data/firstData';
import { ComparisonMetric } from '../types';

export const ComparisonMatrix: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = ['Todas', 'Geral', 'Hardware', 'Software', 'Competição', 'Custos'];

  const filteredMetrics = COMPARISON_METRICS.filter((item) => {
    const matchesCategory = activeFilter === 'Todas' || item.category === activeFilter;
    const matchesSearch =
      item.feature.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fll.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ftc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.frc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="comparativo" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <span>Análise Lado a Lado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comparativo Completo: FLL vs FTC vs FRC
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Compare todas as especificações técnicas, limites de hardware, requisitos de idade,
            ferramentas de software e investimentos necessários.
          </p>
        </div>

        {/* Filter Pills and Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                id={`filter-comp-${filter.toLowerCase()}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              id="search-comparison-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar característica (ex: Java, peso, arena)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/90 text-sm">
                <th className="py-5 px-6 font-extrabold text-slate-300 w-1/4">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span>Critério de Comparação</span>
                  </div>
                </th>

                {/* FLL Column Header */}
                <th className="py-5 px-6 font-extrabold text-white w-1/4 bg-red-950/20 border-l border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-red-400 font-mono text-xs uppercase tracking-wider block">
                        Iniciação
                      </span>
                      <span className="text-base text-white font-black">FLL Challenge</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-semibold border border-red-500/30">
                      9 a 16 anos
                    </span>
                  </div>
                </th>

                {/* FTC Column Header */}
                <th className="py-5 px-6 font-extrabold text-white w-1/4 bg-amber-950/20 border-l border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-amber-400 font-mono text-xs uppercase tracking-wider block">
                        Intermediário
                      </span>
                      <span className="text-base text-white font-black">FTC</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                      12 a 18 anos
                    </span>
                  </div>
                </th>

                {/* FRC Column Header */}
                <th className="py-5 px-6 font-extrabold text-white w-1/4 bg-blue-950/20 border-l border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-blue-400 font-mono text-xs uppercase tracking-wider block">
                        Nível Industrial
                      </span>
                      <span className="text-base text-white font-black">FRC</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
                      14 a 18 anos
                    </span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800 text-sm">
              {filteredMetrics.length > 0 ? (
                filteredMetrics.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-900/60 transition-colors ${
                      item.highlight ? 'bg-slate-900/30' : ''
                    }`}
                  >
                    {/* Feature Label */}
                    <td className="py-4 px-6 font-semibold text-slate-200">
                      <div className="flex items-center gap-2">
                        <span>{item.feature}</span>
                        {item.highlight && (
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" title="Destaque" />
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase">
                        {item.category}
                      </span>
                    </td>

                    {/* FLL Value */}
                    <td className="py-4 px-6 text-slate-300 bg-red-950/5 border-l border-slate-800">
                      <p className="font-medium leading-relaxed">{item.fll}</p>
                    </td>

                    {/* FTC Value */}
                    <td className="py-4 px-6 text-slate-300 bg-amber-950/5 border-l border-slate-800">
                      <p className="font-medium leading-relaxed">{item.ftc}</p>
                    </td>

                    {/* FRC Value */}
                    <td className="py-4 px-6 text-slate-300 bg-blue-950/5 border-l border-slate-800">
                      <p className="font-medium leading-relaxed font-semibold text-slate-100">
                        {item.frc}
                      </p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-slate-400">
                    Nenhum critério encontrado para a busca "{searchQuery}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Quick Summary Footnote */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <Check className="w-4 h-4" />
            </span>
            <span>
              Todas as 3 categorias promovem bolsa de estudo universitárias globais e desenvolvem as
              mesmas competências socioemocionais (soft skills).
            </span>
          </div>
          <span className="font-mono text-slate-500 whitespace-nowrap">
            Atualizado com os Manuais Oficiais FIRST
          </span>
        </div>
      </div>
    </section>
  );
};
