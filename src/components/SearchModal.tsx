import React, { useState, useEffect, useRef } from 'react';
import { useGallery } from '../context/GalleryContext';
import { artworks } from '../data/artworks';
import { collections } from '../data/collections';
import { artists } from '../data/artists';
import { Search, X, ArrowRight, Palette, Layers, User } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToArtwork, navigateToCollection, navigateToArtist, formatPrice } = useGallery();
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
          art.artistName.toLowerCase().includes(cleanQuery) ||
          art.medium.toLowerCase().includes(cleanQuery) ||
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

  const matchingArtists = cleanQuery
    ? artists.filter(
        (a) =>
          a.name.toLowerCase().includes(cleanQuery) ||
          a.location.toLowerCase().includes(cleanQuery) ||
          a.mediums.some((m) => m.toLowerCase().includes(cleanQuery))
      )
    : [];

  const totalResults = matchingArtworks.length + matchingCollections.length + matchingArtists.length;

  const popularSearches = [
    'Abstract Art',
    'Modern Indian Art',
    'Gold Leaf',
    'Oil on Linen',
    'Ananya Deshmukh',
    'Minimalist',
    'Nature & Landscapes'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md transition-all">
      <div
        className="bg-[#FAF8F5] border border-[#E2D9C8] w-full max-w-3xl rounded-none shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Input */}
        <div className="flex items-center px-6 py-5 border-b border-[#E8E2D5] bg-[#FAF8F5]">
          <Search className="w-5 h-5 text-[#8C8578] mr-4 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search paintings, artists, styles, mediums..."
            className="w-full bg-transparent text-lg text-[#191817] placeholder-[#9E978B] focus:outline-none font-serif tracking-wide"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8C8578] hover:text-[#191817] mr-2"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-[#6E685F] hover:text-[#191817] rounded hover:bg-[#EAE5D9] transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content area */}
        <div className="overflow-y-auto p-6 flex-1 space-y-6">
          {!cleanQuery && (
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8C8578] font-medium mb-3">
                Curated Suggestions
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 text-xs text-[#2D2B29] bg-[#F3EFE6] hover:bg-[#E8E2D5] border border-[#DDD5C5] transition-colors tracking-wide"
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
              <p className="font-serif text-lg text-[#191817]">No art pieces found for "{query}"</p>
              <p className="text-xs text-[#736E65] mt-1">
                Try searching for general terms like "Abstract", "Linen", or browse our collections.
              </p>
            </div>
          )}

          {/* Artworks results */}
          {matchingArtworks.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-[#EFEBE1] pb-1.5">
                <span className="text-xs uppercase tracking-widest text-[#8C8578] font-medium flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#C5A059]" /> Artworks ({matchingArtworks.length})
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingArtworks.slice(0, 6).map((art) => (
                  <div
                    key={art.id}
                    onClick={() => {
                      navigateToArtwork(art.id);
                      setIsSearchOpen(false);
                    }}
                    className="flex items-center gap-3.5 p-2.5 hover:bg-[#F3EFE6] border border-transparent hover:border-[#E2D9C8] cursor-pointer transition-all group"
                  >
                    <img
                      src={art.imageUrl}
                      alt={art.title}
                      className="w-14 h-14 object-cover shrink-0 bg-[#E8E2D5]"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-serif font-medium text-[#191817] truncate group-hover:text-[#A38038] transition-colors">
                        {art.title}
                      </h4>
                      <p className="text-xs text-[#736E65]">{art.artistName}</p>
                      <p className="text-xs font-medium text-[#191817] mt-0.5">{formatPrice(art.price)}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C8BCAC] group-hover:text-[#191817] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Collections results */}
          {matchingCollections.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-[#EFEBE1] pb-1.5">
                <span className="text-xs uppercase tracking-widest text-[#8C8578] font-medium flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C5A059]" /> Collections ({matchingCollections.length})
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
                    className="flex items-center gap-3.5 p-2.5 hover:bg-[#F3EFE6] border border-transparent hover:border-[#E2D9C8] cursor-pointer transition-all group"
                  >
                    <img
                      src={col.imageUrl}
                      alt={col.title}
                      className="w-12 h-12 object-cover shrink-0 bg-[#E8E2D5]"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-serif font-medium text-[#191817] group-hover:text-[#A38038] transition-colors">
                        {col.title}
                      </h4>
                      <p className="text-xs text-[#736E65]">{col.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Artists results */}
          {matchingArtists.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-[#EFEBE1] pb-1.5">
                <span className="text-xs uppercase tracking-widest text-[#8C8578] font-medium flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C5A059]" /> Artists ({matchingArtists.length})
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingArtists.map((artist) => (
                  <div
                    key={artist.id}
                    onClick={() => {
                      navigateToArtist(artist.id);
                      setIsSearchOpen(false);
                    }}
                    className="flex items-center gap-3.5 p-2.5 hover:bg-[#F3EFE6] border border-transparent hover:border-[#E2D9C8] cursor-pointer transition-all group"
                  >
                    <img
                      src={artist.profileImage}
                      alt={artist.name}
                      className="w-11 h-11 rounded-full object-cover shrink-0 border border-[#DDD5C5]"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-serif font-medium text-[#191817] group-hover:text-[#A38038] transition-colors">
                        {artist.name}
                      </h4>
                      <p className="text-xs text-[#736E65]">{artist.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#F5F1E8] border-t border-[#E8E2D5] flex items-center justify-between text-xs text-[#736E65]">
          <span>Press ESC to exit</span>
          <span>renus_palette Curated Search</span>
        </div>
      </div>
    </div>
  );
};
