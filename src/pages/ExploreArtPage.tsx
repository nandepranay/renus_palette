import React, { useState, useMemo } from 'react';
import { useGallery } from '../context/GalleryContext';
import { artworks } from '../data/artworks';
import { collections } from '../data/collections';
import { ArtworkCard } from '../components/ArtworkCard';
import { ARTIST_CONFIG } from '../config/artistConfig';
import { Search, Sparkles, X, Filter } from 'lucide-react';

export const ExploreArtPage: React.FC = () => {
  const { filters, setFilters } = useGallery();
  const [searchQuery, setSearchQuery] = useState('');

  // Supported Categories based on Renuka's real collection
  const categoryFilters = [
    { id: 'all', label: 'All Paintings', count: artworks.length },
    ...collections.map((c) => ({
      id: c.id,
      label: c.title,
      count: c.artworkCount
    }))
  ];

  // Filtered artworks list
  const filteredList = useMemo(() => {
    return artworks.filter((item) => {
      // Category filter
      if (filters.category !== 'all') {
        const matchesCategory =
          item.categorySlug === filters.category ||
          (item.secondaryCategories &&
            item.secondaryCategories.some((cat) => {
              if (filters.category === 'custom-art' && cat === 'Custom Art') return true;
              if (filters.category === 'nature-landscapes' && cat === 'Nature & Landscapes') return true;
              if (filters.category === 'portraits' && cat === 'Portraits') return true;
              return false;
            }));

        if (!matchesCategory) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesMedium = (item.medium || '').toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesTitle && !matchesCategory && !matchesMedium && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [filters.category, searchQuery]);

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#FFF4D2] text-[#8C6D00] mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6161]" />
          <span>Renuka's Studio Portfolio</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#2B2623] tracking-tight mb-4">
          Shop Original Paintings 🎨
        </h1>
        <p className="text-sm sm:text-base text-[#5C5248] leading-relaxed">
          {ARTIST_CONFIG.about.shortBio} Each painting is an authentic hand-painted canvas.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border-2 border-[#F0E6D8] rounded-3xl p-4 sm:p-5 mb-10 shadow-xs space-y-4">
        {/* Top: Search and Result Count */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#7A6F66] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, subject, or floral..."
              className="w-full pl-10 pr-9 py-2.5 bg-[#FFFDF9] border border-[#EAE0D4] rounded-full text-xs sm:text-sm text-[#2B2623] placeholder-[#9E9085] focus:outline-none focus:border-[#FF6161] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C8075] hover:text-[#2B2623] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="text-xs font-bold text-[#7A6F66]">
            Showing <span className="text-[#FF6161]">{filteredList.length}</span> of {artworks.length} Original Paintings
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-t border-[#F4EBE0] pt-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#7A6F66] mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#FF6161]" />
            <span>Categories:</span>
          </div>
          {categoryFilters.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilters((prev) => ({ ...prev, category: cat.id }))}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                filters.category === cat.id
                  ? 'bg-[#FF6161] text-white shadow-xs'
                  : 'bg-[#FFF4D2] text-[#6E5500] hover:bg-[#FFE082]'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredList.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-[#F0E6D8] p-8 max-w-md mx-auto">
          <span className="text-4xl mb-3 block">🎨</span>
          <h3 className="font-heading font-bold text-xl text-[#2B2623] mb-2">No Paintings Found</h3>
          <p className="text-xs text-[#7A6F66] mb-6">
            Try adjusting your search keyword or selecting a different category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilters((prev) => ({ ...prev, category: 'all' }));
            }}
            className="btn-sunshine px-6 py-2.5 text-xs font-bold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredList.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
};
