import React, { useState, useEffect, useRef } from 'react';
import { useGallery } from '../context/GalleryContext';
import { artworks } from '../data/artworks';
import { collections } from '../data/collections';
import { Search, X, ArrowRight, Palette, Layers } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToArtwork, navigateToCollection } = useGallery();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  const matchingArtworks = cleanQuery
    ? artworks.filter(
        (art) =>
          art.title.toLowerCase().includes(cleanQuery) ||
          art.category.toLowerCase().includes(cleanQuery) ||
          (art.medium || '').toLowerCase().includes(cleanQuery) ||
          art.tags.some((t) => t.toLowerCase().includes(cleanQuery))
      )
    : [];

  const matchingCollections = cleanQuery
    ? collections.filter(
        (c) =>
          c.title.toLowerCase().includes(cleanQuery) ||
          c.subtitle.toLowerCase().includes(cleanQuery) ||
          c.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const totalResults = matchingArtworks.length + matchingCollections.length;

  const popularSearches = [
    'Lotus Pond',
    'Buddha Portrait',
    'Radha Krishna',
    'Ocean Sunset',
    'Family Portrait',
    'Child Portrait',
    'Forest Landscape',
    'Floral & Botanical'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md transition-all">
      <div
        className="bg-[#FFFDF9] border-2 border-[#F0E6D8] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Input */}
        <div className="flex items-center px-6 py-5 border-b border-[#F0E6D8] bg-[#FFFDF9]">
          <Search className="w-5 h-5 text-[#7A6F66] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search paintings by title, theme, subject..."
            className="w-full bg-transparent text-base sm:text-lg text-[#2B2623] placeholder-[#9E9085] focus:outline-none font-medium tracking-wide"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8C8075] hover:text-[#2B2623] mr-2 cursor-pointer"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-[#7A6F66] hover:text-[#2B2623] rounded-full hover:bg-[#FFF4D2] transition-colors cursor-pointer"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content area */}
        <div className="overflow-y-auto p-6 flex-1 space-y-6">
          {!cleanQuery && (
            <div>
              <p className="text-xs uppercase tracking-wider text-[#8C8075] font-bold mb-3">
                Curated Suggestions
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2B2623] bg-[#FFF4D2] hover:bg-[#FFE082] transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {cleanQuery && totalResults === 0 && (
            <div className="text-center py-12">
              <Palette className="w-10 h-10 text-[#C8BCAC] mx-auto mb-3 stroke-[1.5]" />
              <p className="font-heading font-bold text-lg text-[#2B2623]">No paintings found for "{query}"</p>
              <p className="text-xs text-[#7A6F66] mt-1">
                Try searching for terms like "Lotus", "Sunset", "Portrait", or browse the categories.
              </p>
            </div>
          )}

          {/* Artworks results */}
          {matchingArtworks.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-[#F4EBE0] pb-1.5">
                <span className="text-xs uppercase tracking-wider text-[#7A6F66] font-bold flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#FF6161]" /> Original Paintings ({matchingArtworks.length})
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingArtworks.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => {
                      navigateToArtwork(art.id);
                      setIsSearchOpen(false);
                    }}
                    className="flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-[#FFF4D2]/60 border border-[#F0E6D8] cursor-pointer transition-all group"
                  >
                    <img
                      src={art.imageUrl}
                      alt={art.title}
                      className="w-14 h-14 object-contain rounded-xl shrink-0 bg-[#FAF5ED] p-1 border border-[#F0E6D8]"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-[#2B2623] truncate group-hover:text-[#FF6161] transition-colors">
                        {art.title}
                      </h4>
                      <p className="text-xs text-[#7A6F66]">{art.category}</p>
                      <p className="text-xs font-bold text-[#FF6161] mt-0.5">{art.priceDisplay}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C8BCAC] group-hover:text-[#FF6161] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Collections results */}
          {matchingCollections.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-[#F4EBE0] pb-1.5">
                <span className="text-xs uppercase tracking-wider text-[#7A6F66] font-bold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#FF6161]" /> Collections ({matchingCollections.length})
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingCollections.map((col) => (
                  <div
                    key={col.id}
                    onClick={() => {
                      navigateToCollection(col.id);
                      setIsSearchOpen(false);
                    }}
                    className="flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-[#FFF4D2]/60 border border-[#F0E6D8] cursor-pointer transition-all group"
                  >
                    <img
                      src={col.imageUrl}
                      alt={col.title}
                      className="w-14 h-14 object-contain rounded-xl shrink-0 bg-[#FAF5ED] p-1 border border-[#F0E6D8]"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-[#2B2623] truncate group-hover:text-[#FF6161] transition-colors">
                        {col.title}
                      </h4>
                      <p className="text-xs text-[#7A6F66]">{col.artworkCount} Paintings</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C8BCAC] group-hover:text-[#FF6161] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
