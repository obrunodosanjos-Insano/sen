import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, 
  Upload, 
  Trash2, 
  Eye, 
  Plus, 
  X, 
  Tag, 
  SlidersHorizontal, 
  Cpu, 
  Trophy, 
  Wrench, 
  Users, 
  Maximize2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { FrcLogo } from './FrcLogo';

export interface FrcPhoto {
  id: string;
  dataUrl: string;
  title: string;
  category: 'Robô & Mecânica' | 'Swerve Drive' | 'Partidas na Arena' | 'Área de Pits' | 'Impact Award' | 'Geral';
  teamNumber?: string;
  seasonYear?: string;
  timestamp: string;
  isPreset?: boolean;
}

const STORAGE_KEY = 'first_frc_dedicated_photos';

const PRESET_FRC_PHOTOS: FrcPhoto[] = [
  {
    id: 'frc_preset_1',
    dataUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    title: 'Integração Elétrica e Módulos roboRIO 2.0 na Bancada',
    category: 'Robô & Mecânica',
    teamNumber: 'Team Brasil',
    seasonYear: 'Temporada Atual',
    timestamp: 'Documentação Oficial',
    isPreset: true,
  },
  {
    id: 'frc_preset_2',
    dataUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    title: 'Mecanismo de Disparo e Coleta de Notas em Alumínio CNC',
    category: 'Robô & Mecânica',
    teamNumber: 'FRC Regional',
    seasonYear: 'Temporada Atual',
    timestamp: 'Documentação Oficial',
    isPreset: true,
  },
  {
    id: 'frc_preset_3',
    dataUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
    title: 'Aliança 3v3 em Ação na Arena Oficial de Competição',
    category: 'Partidas na Arena',
    teamNumber: 'Aliança Azul',
    seasonYear: 'Playoffs',
    timestamp: 'Documentação Oficial',
    isPreset: true,
  },
  {
    id: 'frc_preset_4',
    dataUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    title: 'Estratégia e Ajustes de Telemetria no Pit Oficial',
    category: 'Área de Pits',
    teamNumber: 'Equipe de Engenharia',
    seasonYear: 'Regional SESI',
    timestamp: 'Documentação Oficial',
    isPreset: true,
  },
];

export const FrcPhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<FrcPhoto[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Erro ao ler fotos do FRC no localStorage', e);
    }
    return PRESET_FRC_PHOTOS;
  });

  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [activePhotoModal, setActivePhotoModal] = useState<FrcPhoto | null>(null);

  // Form state
  const [titleInput, setTitleInput] = useState('');
  const [categoryInput, setCategoryInput] = useState<FrcPhoto['category']>('Robô & Mecânica');
  const [teamNumberInput, setTeamNumberInput] = useState('');
  const [seasonYearInput, setSeasonYearInput] = useState('2025/2026');
  const [isDragging, setIsDragging] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
    } catch (e) {
      console.error('Erro ao gravar fotos do FRC no localStorage', e);
    }
  }, [photos]);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        if (dataUrl) {
          const newPhoto: FrcPhoto = {
            id: 'frc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
            dataUrl,
            title: titleInput.trim() || file.name.replace(/\.[^/.]+$/, ''),
            category: categoryInput,
            teamNumber: teamNumberInput.trim() ? `#${teamNumberInput.trim().replace(/^#/, '')}` : 'Equipe FRC',
            seasonYear: seasonYearInput.trim() || '2025/2026',
            timestamp: new Date().toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            }),
            isPreset: false,
          };

          setPhotos((prev) => [newPhoto, ...prev]);
        }
      };
      reader.readAsDataURL(file);
    });

    setTitleInput('');
    setTeamNumberInput('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setShowUploadForm(false);
  };

  const handleDeletePhoto = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    if (activePhotoModal?.id === id) {
      setActivePhotoModal(null);
    }
  };

  const handleResetPresets = () => {
    if (window.confirm('Deseja restaurar as fotos padrão do FRC?')) {
      setPhotos(PRESET_FRC_PHOTOS);
    }
  };

  const filteredPhotos = photos.filter((photo) => {
    if (activeFilter === 'Todos') return true;
    return photo.category === activeFilter;
  });

  const categoriesList: Array<'Todos' | FrcPhoto['category']> = [
    'Todos',
    'Robô & Mecânica',
    'Swerve Drive',
    'Partidas na Arena',
    'Área de Pits',
    'Impact Award',
  ];

  return (
    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
      {/* Header of FRC Photo Field */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
            <span>Galeria Técnica & Registros do FRC</span>
          </div>
          <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-display flex items-center gap-2">
            <span>Fotos Oficiais e Registros de Robôs FRC</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
            Visualize imagens de robôs de 56 kg, chassis de alta tração Swerve Drive, bancada de testes e envie fotos do seu robô FRC.
          </p>
        </div>

        {/* Action Toggle Button */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold transition-all shadow-xs border ${
              showUploadForm
                ? 'bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white'
                : 'bg-slate-900 dark:bg-white border-slate-900 dark:border-white hover:bg-black dark:hover:bg-slate-100 text-white dark:text-slate-900'
            }`}
          >
            {showUploadForm ? (
              <>
                <X className="w-4 h-4" />
                <span>Fechar Envio</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Adicionar Foto do Robô FRC</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Upload Dropzone Form (Expandable) */}
      {showUploadForm && (
        <div className="bg-slate-50 dark:bg-slate-800/90 border-2 border-slate-900 dark:border-slate-500 p-5 sm:p-6 mb-6 shadow-sm animate-fadeIn">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm font-display">
              <Upload className="w-4 h-4 text-slate-800 dark:text-slate-200" />
              <span>Upload de Foto do Robô / Equipe FRC</span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              Formatos aceitos: JPG, PNG, WEBP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Title / Description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Título ou Mecanismo
              </label>
              <input
                type="text"
                placeholder="Ex: Chassi Swerve Drive MK4i com Falcon 500"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-400 outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Categoria da Foto
              </label>
              <select
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value as FrcPhoto['category'])}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-400 outline-none"
              >
                <option value="Robô & Mecânica">Robô & Mecânica Industrial</option>
                <option value="Swerve Drive">Módulos Swerve Drive</option>
                <option value="Partidas na Arena">Partidas na Arena 3v3</option>
                <option value="Área de Pits">Área de Pits & Ferramentas</option>
                <option value="Impact Award">FIRST Impact Award / Outreach</option>
                <option value="Geral">Geral da Equipe</option>
              </select>
            </div>

            {/* Team Number & Season */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Nº da Equipe
                </label>
                <input
                  type="text"
                  placeholder="Ex: #1156, #9458"
                  value={teamNumberInput}
                  onChange={(e) => setTeamNumberInput(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Temporada
                </label>
                <input
                  type="text"
                  placeholder="Ex: 2025/2026"
                  value={seasonYearInput}
                  onChange={(e) => setSeasonYearInput(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-400 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Drag & Drop Area */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => handleFiles(e.target.files)}
            accept="image/*"
            multiple
            className="hidden"
          />

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              handleFiles(e.dataTransfer.files);
            }}
            onClick={() => fileInputRef.current?.click()}
            className={`w-full py-8 px-4 border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
              isDragging
                ? 'border-slate-900 dark:border-white bg-slate-200/80 dark:bg-slate-700'
                : 'border-slate-300 dark:border-slate-600 hover:border-slate-600 dark:hover:border-slate-400 bg-white dark:bg-slate-900'
            }`}
          >
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-2">
              <Upload className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">
              Clique para selecionar ou arraste fotos do robô FRC aqui
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Imagens salvas localmente no seu navegador
            </div>
          </div>
        </div>
      )}

      {/* Category Filter Tabs & Photo Counter */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-x-auto">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 text-xs font-bold whitespace-nowrap transition-colors ${
                activeFilter === cat
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span>{filteredPhotos.length} {filteredPhotos.length === 1 ? 'foto exibida' : 'fotos exibidas'}</span>
          <button
            onClick={handleResetPresets}
            className="hover:text-slate-900 dark:hover:text-white underline transition-colors"
          >
            Restaurar fotos padrão
          </button>
        </div>
      </div>

      {/* Photos Grid */}
      {filteredPhotos.length === 0 ? (
        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-8 text-center">
          <Camera className="w-8 h-8 text-slate-400 dark:text-slate-500 mx-auto mb-2" />
          <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Nenhuma foto encontrada nesta categoria.</p>
          <button
            onClick={() => setShowUploadForm(true)}
            className="mt-3 px-3.5 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:bg-black dark:hover:bg-slate-100 inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Adicionar Foto Agora</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoModal(photo)}
              className="group bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-slate-500 dark:hover:border-slate-400 transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-sm"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-4/3 bg-slate-950 overflow-hidden">
                <img
                  src={photo.dataUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Top Badge */}
                <div className="absolute top-2 left-2 flex items-center gap-1">
                  <span className="px-2 py-0.5 bg-slate-900/90 dark:bg-slate-900/90 text-white text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-xs">
                    {photo.category}
                  </span>
                </div>

                {/* Delete button */}
                <button
                  onClick={(e) => handleDeletePhoto(photo.id, e)}
                  className="absolute top-2 right-2 w-7 h-7 bg-black/70 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-xs"
                  title="Remover foto"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold pointer-events-none">
                  <Maximize2 className="w-4 h-4" />
                  <span>Ampliar</span>
                </div>
              </div>

              {/* Photo Meta & Caption */}
              <div className="p-3 bg-white dark:bg-slate-800 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">
                    <span>{photo.teamNumber || 'FRC'}</span>
                    <span>{photo.seasonYear || photo.timestamp}</span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
                    {photo.title}
                  </h5>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-slate-700 dark:text-slate-300" />
                    FRC Oficial
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold group-hover:underline">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox / Zoom Modal */}
      {activePhotoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActivePhotoModal(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/80">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold uppercase">
                  {activePhotoModal.category}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base font-display line-clamp-1">
                  {activePhotoModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActivePhotoModal(null)}
                className="w-7 h-7 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 flex items-center justify-center transition-colors"
                title="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="bg-slate-950 p-3 sm:p-6 flex items-center justify-center overflow-auto max-h-[65vh]">
              <img
                src={activePhotoModal.dataUrl}
                alt={activePhotoModal.title}
                className="max-h-[55vh] sm:max-h-[62vh] max-w-full object-contain shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-300 gap-2">
              <div className="flex items-center gap-4">
                <span><strong>Equipe:</strong> {activePhotoModal.teamNumber || 'FRC'}</span>
                <span><strong>Temporada / Data:</strong> {activePhotoModal.seasonYear || activePhotoModal.timestamp}</span>
              </div>
              <button
                onClick={(e) => handleDeletePhoto(activePhotoModal.id, e)}
                className="text-red-600 hover:text-red-700 dark:text-red-400 font-bold flex items-center gap-1 py-1 px-2 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Excluir Foto
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
