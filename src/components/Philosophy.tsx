import React from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Compass, 
  Lightbulb, 
  Globe2, 
  Users2, 
  SmilePlus, 
  Flame, 
  Quote
} from 'lucide-react';

export const Philosophy: React.FC = () => {
  const coreValues = [
    {
      icon: Compass,
      title: 'Descoberta',
      desc: 'Explorar novos conceitos, tecnologias e abordagens sem medo de errar.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      desc: 'Usar a criatividade e a engenharia para resolver problemas reais da sociedade.',
    },
    {
      icon: Globe2,
      title: 'Impacto',
      desc: 'Aplicar o que aprendemos para transformar positivamente nossa comunidade.',
    },
    {
      icon: Users2,
      title: 'Inclusão',
      desc: 'Respeitar as diferenças e garantir que todos tenham espaço e voz ativa.',
    },
    {
      icon: Flame,
      title: 'Trabalho em Equipe',
      desc: 'Compreender que somos mais fortes, resilientes e rápidos juntos.',
    },
    {
      icon: SmilePlus,
      title: 'Diversão',
      desc: 'Celebrar a jornada, as conquistas e o entusiasmo da ciência e tecnologia.',
    },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Nossa Missão & Filosofia</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            A Cultura Que Define a FIRST®
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Fundada em 1989 pelo inventor <strong>Dean Kamen</strong> e pelo professor emérito do MIT <strong>Dr. Woodie Flowers</strong>, a FIRST construiu um movimento global que valoriza a integridade e o respeito tanto quanto a excelência técnica.
          </p>
        </div>

        {/* Citação do Dr. Woodie Flowers */}
        <div className="relative rounded-none bg-slate-50 border border-slate-200 text-slate-900 p-6 sm:p-8 mb-12 shadow-xs">
          <div className="relative z-10 max-w-3xl">
            <Quote className="w-8 h-8 text-slate-400 mb-3" />
            <p className="text-base sm:text-xl text-slate-800 italic font-medium leading-relaxed mb-4">
              "Nós não usamos os jovens para construir robôs; nós usamos os robôs para construir jovens melhores para o futuro."
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-200">
              <div className="w-9 h-9 rounded-none bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                WF
              </div>
              <div>
                <div className="font-bold text-sm text-slate-900">Dr. Woodie Flowers (1943–2019)</div>
                <div className="text-xs text-slate-500">Co-fundador da FIRST & Professor Emérito do MIT</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Pilares Culturais: Gracious Professionalism & Coopertition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Gracious Professionalism */}
          <div className="rounded-none border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="w-11 h-11 rounded-none bg-slate-100 text-slate-900 flex items-center justify-center mb-4 border border-slate-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                Gracious Professionalism®
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Profissionalismo Gracioso
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Criado pelo Dr. Woodie Flowers, é a ideia de que o trabalho de alta qualidade e o respeito às pessoas não são mutuamente exclusivos. Incentiva a busca pela vitória com integridade, empatia e cordialidade.
              </p>
            </div>
            <div className="text-xs text-slate-500 border-t border-slate-100 pt-3">
              Competir com paixão sem nunca diminuir o próximo.
            </div>
          </div>

          {/* Coopertition */}
          <div className="rounded-none border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="w-11 h-11 rounded-none bg-slate-100 text-slate-900 flex items-center justify-center mb-4 border border-slate-200">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                Coopertition®
              </h3>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Cooperadição (Cooperar + Competir)
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Significa cooperar mesmo durante a competição. As equipes compartilham peças, ensinam código e ajudam adversários a consertar robôs nos boxes, garantindo que todos joguem no seu nível mais alto.
              </p>
            </div>
            <div className="text-xs text-slate-500 border-t border-slate-100 pt-3">
              Ajudar os adversários torna a vitória de todos mais significativa.
            </div>
          </div>
        </div>

        {/* 6 Valores Fundamentais */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-1">
            <h3 className="text-xl font-bold text-slate-900 font-display">
              FIRST® Core Values (Valores Fundamentais)
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              Avaliados oficialmente pelos jurados em todos os programas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-none border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-none flex items-center justify-center flex-shrink-0 border border-slate-200 bg-slate-50 text-slate-800">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">{val.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
