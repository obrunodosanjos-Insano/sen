import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, 
  Image as ImageIcon, 
  Trash2, 
  Eye, 
  X, 
  Camera, 
  Tag, 
  Sparkles,
  Plus,
  Maximize2
} from 'lucide-react';

interface PhotoItem {
  id: string;
  dataUrl: string;
  name: string;
  category: 'Geral' | 'FLL' | 'FTC' | 'FRC' | 'Equipe' | 'Robô';
  caption: string;
  timestamp: string;
}

const STORAGE_KEY = 'first_robotics_custom_photos';

export const PhotoUploadSection: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return [];
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [uploadCategory, setUploadCategory] = useState<PhotoItem['category']>('Robô');
  const [captionInput, setCaptionInput] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [activeModalPhoto, setActiveModalPhoto] = useState<PhotoItem | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
    } catch (e) {
      console.error('Storage full or error saving photos', e);
    }
  }, [photos]);

  const processFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) {
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        if (dataUrl) {
          const newPhoto: PhotoItem = {
            id: 'photo_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
            dataUrl,
            name: file.name.replace(/\.[^/.]+$/, ''),
            category: uploadCategory,
            caption: captionInput.trim() || file.name,
            timestamp: new Date().toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            })
          };

          setPhotos((prev) => [newPhoto, ...prev]);
        }
      };
      reader.readAsDataURL(file);
    });

    setCaptionInput('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    processFiles(e.target.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  };

  const handleDeletePhoto = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    if (activeModalPhoto?.id === id) {
      setActiveModalPhoto(null);
    }
  };

  const filteredPhotos = photos.filter((photo) => {
    if (selectedCategory === 'Todos') return true;
    return photo.category === selectedCategory;
  });

  return (
    <section id="galeria" className="py-16 sm:py-24 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-slate-600" />
              <span>Galeria da Equipe & Robôs</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Adicionar Fotos e Registros
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
              Faça upload de fotos do seu robô, equipe, bancada de testes ou torneios para documentar o seu progresso na temporada.
            </p>
          </div>

          {/* Quick Count Badge */}
          <div className="flex items-center gap-2 self-start md:self-auto px-4 py-2 bg-slate-50 rounded-none border border-slate-200 text-xs font-bold text-slate-700 shadow-xs">
            <ImageIcon className="w-4 h-4 text-slate-700" />
            <span>{photos.length} {photos.length === 1 ? 'foto registrada' : 'fotos registradas'}</span>
          </div>
        </div>

        {/* Upload Field Card */}
        <div className="bg-white rounded-none border border-slate-200 p-6 sm:p-8 shadow-xs mb-12">
          <h3 className="text-base font-bold text-slate-900 mb-4 font-display flex items-center gap-2">
            <Plus className="w-4 h-4 text-slate-700" />
            Enviar Novas Fotos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Options: Caption & Category */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Categoria da Foto
                </label>
                <select
                  value={uploadCategory}
                  onChange={(e) => setUploadCategory(e.target.value as PhotoItem['category'])}
                  className="w-full px-3.5 py-2.5 rounded-none border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                >
                  <option value="Robô">Robô / Mecânica</option>
                  <option value="Equipe">Equipe / Mentores</option>
                  <option value="FLL">FLL Challenge</option>
                  <option value="FTC">FTC (Tech Challenge)</option>
                  <option value="FRC">FRC (Robotics Comp)</option>
                  <option value="Geral">Geral / Torneio</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Legenda ou Título da Foto (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Teste do chassi Swerve Drive"
                  value={captionInput}
                  onChange={(e) => setCaptionInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-none border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                />
              </div>

              <div className="text-xs text-slate-500 pt-1">
                Suporta imagens PNG, JPG, JPEG e WebP. As fotos ficam salvas diretamente no seu navegador.
              </div>
            </div>

            {/* Right: Drag & Drop Dropzone */}
            <div className="md:col-span-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="photo-upload-input"
              />

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`w-full h-48 sm:h-52 rounded-none border-2 border-dashed flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all ${
                  isDragging
                    ? 'border-slate-900 bg-slate-100 scale-[0.99]'
                    : 'border-slate-300 hover:border-slate-500 bg-slate-50/70 hover:bg-slate-100/50'
                }`}
              >
                <div className="w-12 h-12 rounded-none bg-slate-100 text-slate-800 flex items-center justify-center mb-3 border border-slate-200">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-slate-800 mb-1">
                  Arraste e solte fotos aqui ou <span className="text-slate-900 underline underline-offset-2">clique para selecionar</span>
                </div>
                <div className="text-xs text-slate-500">
                  Você pode selecionar várias fotos de uma vez
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photos Grid Section */}
        <div>
          {/* Filter Tabs */}
          {photos.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-none overflow-x-auto">
                {['Todos', 'Robô', 'Equipe', 'FLL', 'FTC', 'FRC', 'Geral'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-none text-xs font-bold transition-all whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  if (window.confirm('Deseja realmente limpar todas as fotos adicionadas?')) {
                    setPhotos([]);
                  }
                }}
                className="text-xs text-slate-500 hover:text-red-600 font-semibold px-3 py-1.5 rounded-none hover:bg-slate-100 transition-colors"
              >
                Limpar Todas as Fotos
              </button>
            </div>
          )}

          {/* Empty State */}
          {photos.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white rounded-none border border-slate-200">
              <div className="w-16 h-16 rounded-none bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-display mb-1">
                Nenhuma foto adicionada ainda
              </h4>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                Utilize o campo acima para carregar imagens do seu projeto, protótipos de peças, equipe ou registros das competições.
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-xs"
              >
                <Upload className="w-4 h-4" />
                <span>Selecionar Fotos Agora</span>
              </button>
            </div>
          ) : filteredPhotos.length === 0 ? (
            <div className="text-center py-12 px-4 bg-white rounded-none border border-slate-200">
              <p className="text-sm text-slate-500">
                Nenhuma foto encontrada na categoria <strong>{selectedCategory}</strong>.
              </p>
            </div>
          ) : (
            /* Photo Cards Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo) => {
                const categoryBadgeColors = {
                  FLL: 'bg-slate-100 text-slate-800 border-slate-200',
                  FTC: 'bg-slate-100 text-slate-800 border-slate-200',
                  FRC: 'bg-slate-100 text-slate-800 border-slate-200',
                  Robô: 'bg-slate-900 text-white border-slate-800',
                  Equipe: 'bg-slate-100 text-slate-800 border-slate-200',
                  Geral: 'bg-slate-100 text-slate-800 border-slate-200',
                }[photo.category] || 'bg-slate-100 text-slate-800';

                return (
                  <div
                    key={photo.id}
                    onClick={() => setActiveModalPhoto(photo)}
                    className="group bg-white rounded-none border border-slate-200 hover:border-slate-400 overflow-hidden shadow-xs hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-4/3 bg-slate-950 overflow-hidden">
                      <img
                        src={photo.dataUrl}
                        alt={photo.caption || photo.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                        <span className="text-white text-xs font-semibold flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5" />
                          Ampliar
                        </span>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className={`px-2.5 py-0.5 rounded-none text-[10px] font-extrabold uppercase tracking-wider border shadow-xs ${categoryBadgeColors}`}>
                          {photo.category}
                        </span>
                      </div>

                      {/* Delete button */}
                      <button
                        onClick={(e) => handleDeletePhoto(photo.id, e)}
                        className="absolute top-3 right-3 w-8 h-8 rounded-none bg-black/60 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-sm"
                        title="Remover foto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Meta info */}
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm line-clamp-1 group-hover:text-black transition-colors">
                          {photo.caption || photo.name}
                        </h4>
                        {photo.caption && photo.name !== photo.caption && (
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                            {photo.name}
                          </p>
                        )}
                      </div>
                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Adicionada em {photo.timestamp}</span>
                        <span className="text-slate-700 font-semibold flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          Ver foto
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {activeModalPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalPhoto(null)}
        >
          <div 
            className="bg-white rounded-none max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-none bg-slate-200 text-slate-900 text-xs font-bold uppercase">
                  {activeModalPhoto.category}
                </span>
                <h3 className="font-bold text-slate-900 text-base font-display">
                  {activeModalPhoto.caption || activeModalPhoto.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalPhoto(null)}
                className="w-8 h-8 rounded-none bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-4 bg-slate-950 flex items-center justify-center max-h-[60vh] sm:max-h-[70vh] overflow-auto">
              <img
                src={activeModalPhoto.dataUrl}
                alt={activeModalPhoto.caption}
                className="max-h-[58vh] sm:max-h-[68vh] max-w-full object-contain rounded-none shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 bg-white">
              <span>Registrada em {activeModalPhoto.timestamp}</span>
              <button
                onClick={(e) => handleDeletePhoto(activeModalPhoto.id, e)}
                className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1.5 py-1 px-2.5 rounded-none hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Excluir esta foto
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
