import React, { useState, useMemo } from 'react';
import { useGallery } from '../context/GalleryContext';
import { artworks } from '../data/artworks';
import { collections } from '../data/collections';
import { ArtworkCard } from '../components/ArtworkCard';
import { Search, SlidersHorizontal, RotateCcw, Sparkles, Filter, X } from 'lucide-react';

export const ExploreArtPage: React.FC = () => {
  const { filters, setFilters, resetFilters, formatPrice } = useGallery();
  const [showFiltersDrawer, setShowFiltersDrawer] = useState(false);

  // Available unique mediums
  const availableMediums = useMemo(() => {
    const list = new Set<string>();
    artworks.forEach((a) => {
      if (a.medium.includes('Oil')) list.add('Oil');
      if (a.medium.includes('Gold')) list.add('Gold Leaf');
      if (a.medium.includes('Tempera') || a.medium.includes('Wasli')) list.add('Tempera & Wasli');
      if (a.medium.includes('Marble')) list.add('Marble Relief');
      if (a.medium.includes('Encaustic')) list.add('Encaustic');
      if (a.medium.includes('Watercolor') || a.medium.includes('Inks')) list.add('Watercolor / Inks');
    });
    return Array.from(list);
  }, []);

  // Filtered artworks
  const filteredList = useMemo(() => {
    return artworks.filter((item) => {
      // Category filter
      if (filters.category !== 'all' && item.collectionId !== filters.category) {
        return false;
      }
      // Medium filter
      if (filters.medium !== 'all') {
        if (!item.medium.toLowerCase().includes(filters.medium.toLowerCase())) {
          return false;
        }
      }
      // Orientation
      if (filters.orientation !== 'all' && item.orientation !== filters.orientation) {
        return false;
      }
      // Price range
      if (item.price < filters.minPrice || item.price > filters.maxPrice) {
        return false;
      }
      // Search text
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesArtist = item.artistName.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesArtist && !matchesTags) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'newest') return b.year - a.year;
      return 0; // featured default
    });
  }, [filters]);

  const activeFilterCount =
    (filters.category !== 'all' ? 1 : 0) +
    (filters.medium !== 'all' ? 1 : 0) +
    (filters.orientation !== 'all' ? 1 : 0) +
    (filters.maxPrice < 150000 || filters.minPrice > 0 ? 1 : 0) +
    (filters.searchQuery ? 1 : 0);

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Title & Editorial Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Gallery Portfolio</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#191817] font-normal tracking-tight mb-4">
          Explore All Artworks
        </h1>
        <p className="text-sm sm:text-base text-[#6E685F] font-sans leading-relaxed">
          Browse our full catalogue of original paintings, fine canvases, and contemporary Indian masterworks. Filter by aesthetic collection, medium, orientation, or price.
        </p>
      </div>

      {/* Main Filter & Search Control Bar */}
      <div className="bg-white border border-[#E2D9C8] p-4 sm:p-5 mb-8 shadow-xs">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8C8578] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
              placeholder="Search by title, artist, or style..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] border border-[#DDD5C5] text-sm text-[#191817] placeholder-[#9E978B] focus:outline-none focus:border-[#C5A059] transition-colors"
            />
            {filters.searchQuery && (
              <button
                onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C8578] hover:text-[#191817]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category */}
            <select
              value={filters.category}
              onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
              className="px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD5C5] text-xs uppercase tracking-wider text-[#191817] focus:outline-none focus:border-[#C5A059]"
            >
              <option value="all">All Collections</option>
              {collections.map((col) => (
                <option key={col.id} value={col.id}>
                  {col.title}
                </option>
              ))}
            </select>

            {/* Medium */}
            <select
              value={filters.medium}
              onChange={(e) => setFilters((prev) => ({ ...prev, medium: e.target.value }))}
              className="px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD5C5] text-xs uppercase tracking-wider text-[#191817] focus:outline-none focus:border-[#C5A059]"
            >
              <option value="all">All Mediums</option>
              {availableMediums.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            {/* Orientation */}
            <select
              value={filters.orientation}
              onChange={(e) => setFilters((prev) => ({ ...prev, orientation: e.target.value }))}
              className="px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD5C5] text-xs uppercase tracking-wider text-[#191817] focus:outline-none focus:border-[#C5A059]"
            >
              <option value="all">All Orientations</option>
              <option value="landscape">Landscape</option>
              <option value="portrait">Portrait</option>
              <option value="square">Square</option>
            </select>

            {/* Sort By */}
            <select
              value={filters.sortBy}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sortBy: e.target.value as any
                }))
              }
              className="px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD5C5] text-xs uppercase tracking-wider text-[#191817] focus:outline-none focus:border-[#C5A059]"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Creations</option>
            </select>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFiltersDrawer(!showFiltersDrawer)}
              className="lg:hidden px-3.5 py-2.5 bg-[#191817] text-white text-xs uppercase tracking-wider flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Price Filter ({activeFilterCount})</span>
            </button>
          </div>
        </div>

        {/* Collapsible / Desktop Price Slider Bar */}
        <div className={`mt-4 pt-4 border-t border-[#EFEBE1] ${showFiltersDrawer ? 'block' : 'hidden lg:block'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 max-w-md">
              <span className="text-xs uppercase tracking-wider text-[#736E65] font-medium shrink-0">
                Max Price:
              </span>
              <input
                type="range"
                min="30000"
                max="150000"
                step="5000"
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))
                }
                className="w-full accent-[#191817] cursor-pointer"
              />
              <span className="font-serif text-sm font-bold text-[#191817] shrink-0">
                Up to {formatPrice(filters.maxPrice)}
              </span>
            </div>

            {/* Reset Button */}
            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs text-[#A38038] hover:text-[#191817] font-medium flex items-center gap-1 self-start sm:self-auto transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Active Filter Pills Bar */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
          <span className="text-[#8C8578] uppercase tracking-wider text-[11px] mr-1">Active:</span>

          {filters.category !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F5F1E8] border border-[#DDD5C5] text-[#191817]">
              Collection: {collections.find((c) => c.id === filters.category)?.title}
              <button
                onClick={() => setFilters((p) => ({ ...p, category: 'all' }))}
                className="hover:text-[#B33939] ml-1"
              >
                ×
              </button>
            </span>
          )}

          {filters.medium !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F5F1E8] border border-[#DDD5C5] text-[#191817]">
              Medium: {filters.medium}
              <button
                onClick={() => setFilters((p) => ({ ...p, medium: 'all' }))}
                className="hover:text-[#B33939] ml-1"
              >
                ×
              </button>
            </span>
          )}

          {filters.orientation !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F5F1E8] border border-[#DDD5C5] text-[#191817]">
              Orientation: {filters.orientation}
              <button
                onClick={() => setFilters((p) => ({ ...p, orientation: 'all' }))}
                className="hover:text-[#B33939] ml-1"
              >
                ×
              </button>
            </span>
          )}

          {filters.maxPrice < 150000 && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F5F1E8] border border-[#DDD5C5] text-[#191817]">
              Under {formatPrice(filters.maxPrice)}
              <button
                onClick={() => setFilters((p) => ({ ...p, maxPrice: 150000 }))}
                className="hover:text-[#B33939] ml-1"
              >
                ×
              </button>
            </span>
          )}

          {filters.searchQuery && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F5F1E8] border border-[#DDD5C5] text-[#191817]">
              Query: "{filters.searchQuery}"
              <button
                onClick={() => setFilters((p) => ({ ...p, searchQuery: '' }))}
                className="hover:text-[#B33939] ml-1"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E8E2D5] text-xs text-[#6E685F]">
        <p>
          Showing <span className="font-semibold text-[#191817]">{filteredList.length}</span> curated artworks
        </p>
      </div>

      {/* Artworks Grid */}
      {filteredList.length === 0 ? (
        <div className="text-center py-24 bg-white border border-[#E2D9C8] p-8 max-w-lg mx-auto">
          <Filter className="w-12 h-12 text-[#C8BCAC] mx-auto mb-4 stroke-[1.5]" />
          <h3 className="font-serif text-2xl text-[#191817] mb-2">No Matching Artworks Found</h3>
          <p className="text-xs text-[#736E65] mb-6 leading-relaxed">
            We couldn't find artworks matching your current filter criteria. Try expanding your price range or resetting the filters.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-3 bg-[#191817] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredList.map((art) => (
            <ArtworkCard key={art.id} artwork={art} />
          ))}
        </div>
      )}
    </div>
  );
};
