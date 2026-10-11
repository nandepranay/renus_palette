import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { X, Sparkles, Check } from 'lucide-react';

export const RoomViewModal: React.FC = () => {
  const { isRoomViewOpen, setIsRoomViewOpen, roomViewArtwork, formatPrice } = useGallery();
  const [wallColor, setWallColor] = useState<'ivory' | 'charcoal' | 'terracotta' | 'sage'>('ivory');
  const [frameStyle, setFrameStyle] = useState<'none' | 'oak' | 'black' | 'gold'>('oak');

  if (!isRoomViewOpen || !roomViewArtwork) return null;

  const wallColors = {
    ivory: { bg: '#F2EDE4', name: 'Warm Ivory' },
    charcoal: { bg: '#2B2B2C', name: 'Museum Charcoal' },
    terracotta: { bg: '#8B4F39', name: 'Terracotta Earth' },
    sage: { bg: '#48564D', name: 'Heritage Sage' },
  };

  const frameStyles = {
    none: 'shadow-2xl',
    oak: 'p-3 bg-[#A47148] shadow-2xl border border-[#7D5230]',
    black: 'p-3 bg-[#111111] shadow-2xl border border-[#222222]',
    gold: 'p-3 bg-gradient-to-tr from-[#9B7C37] via-[#D5B76E] to-[#9B7C37] shadow-2xl border border-[#6D5422]',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div
        className="bg-[#FAF8F5] border border-[#E2D9C8] w-full max-w-5xl rounded-none shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D5] bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span className="font-serif text-lg text-[#191817]">Virtual Wall Preview</span>
            <span className="text-xs text-[#8C8578] ml-2 hidden sm:inline">
              • Scaled to {roomViewArtwork.dimensions}
            </span>
          </div>

          <button
            onClick={() => setIsRoomViewOpen(false)}
            className="p-1.5 text-[#6E685F] hover:text-[#191817] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Room Visualizer Area */}
        <div
          className="relative flex-1 min-h-[380px] sm:min-h-[480px] flex items-center justify-center overflow-hidden transition-colors duration-500 p-8"
          style={{ backgroundColor: wallColors[wallColor].bg }}
        >
          {/* Subtle architectural wall lighting spotlight */}
          <div className="absolute inset-0 bg-radial from-white/20 via-transparent to-black/20 pointer-events-none" />

          {/* Wall floor boundary */}
          <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-t from-[#C5B79F] to-[#D8CBBA] border-t border-[#A8987E] flex items-center justify-center">
            <span className="text-[11px] font-mono tracking-widest text-[#7B6E57] uppercase">
              Solid White Oak Parquet Floor
            </span>
          </div>

          {/* Luxury Sofa/Bench Silhouette */}
          <div className="absolute bottom-8 w-72 sm:w-96 h-14 bg-[#1B1A19]/80 rounded-t-lg backdrop-blur-sm shadow-xl flex items-center justify-center border-t border-[#3B3A39]">
            <span className="text-[10px] tracking-widest uppercase text-[#9E978B]">
              Standard 8ft Collector Credenza
            </span>
          </div>

          {/* Hung Artwork */}
          <div className="relative z-10 flex flex-col items-center mb-16 transition-all duration-300">
            {/* Hanging wire hint */}
            <div className="w-px h-8 bg-black/40 mb-1" />

            <div className={`transition-all duration-300 ${frameStyles[frameStyle]}`}>
              <img
                src={roomViewArtwork.imageUrl}
                alt={roomViewArtwork.title}
                className={`max-h-[220px] sm:max-h-[280px] max-w-[280px] sm:max-w-[420px] object-cover transition-all duration-300 ${
                  frameStyle === 'none' ? 'border border-[#222]/20' : ''
                }`}
              />
            </div>

            {/* Museum Gallery Placard */}
            <div className="mt-4 px-3 py-1 bg-white/90 backdrop-blur-sm border border-[#DDD5C5] shadow-sm text-center">
              <p className="text-[11px] font-serif font-bold text-[#191817]">{roomViewArtwork.title}</p>
              <p className="text-[10px] text-[#736E65]">
                {roomViewArtwork.artistName} • {roomViewArtwork.dimensions}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Customization Controls */}
        <div className="px-6 py-4 bg-[#F5F1E8] border-t border-[#E8E2D5] flex flex-wrap items-center justify-between gap-4">
          {/* Wall Colors */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#736E65] font-medium">Wall Tone:</span>
            <div className="flex items-center gap-2">
              {(Object.keys(wallColors) as Array<keyof typeof wallColors>).map((key) => (
                <button
                  key={key}
                  onClick={() => setWallColor(key)}
                  className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                    wallColor === key ? 'border-[#191817] scale-110' : 'border-transparent opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: wallColors[key].bg }}
                  title={wallColors[key].name}
                >
                  {wallColor === key && (
                    <Check
                      className={`w-3.5 h-3.5 ${
                        key === 'ivory' ? 'text-[#191817]' : 'text-white'
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Framing Options */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#736E65] font-medium">Frame:</span>
            <div className="flex items-center gap-1.5">
              {(
                [
                  { id: 'none', label: 'Unframed' },
                  { id: 'oak', label: 'Solid Oak' },
                  { id: 'black', label: 'Matte Black' },
                  { id: 'gold', label: 'Museum Gold' },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFrameStyle(f.id)}
                  className={`px-2.5 py-1 text-xs border transition-colors ${
                    frameStyle === f.id
                      ? 'bg-[#191817] text-white border-[#191817]'
                      : 'bg-white text-[#555] border-[#DDD5C5] hover:border-[#999]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Artwork Info & Price */}
          <div className="text-right ml-auto hidden sm:block">
            <span className="text-sm font-serif font-bold text-[#191817]">
              {formatPrice(roomViewArtwork.price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
