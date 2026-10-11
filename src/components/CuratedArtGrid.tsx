import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { artworks } from '../data/artworks';
import { ArtworkCard } from './ArtworkCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CuratedArtGrid: React.FC = () => {
  const { navigateToExplore } = useGallery();
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Curations' },
    { id: 'abstract-art', label: 'Abstract' },
    { id: 'modern-indian-art', label: 'Modern Indian' },
    { id: 'contemporary-art', label: 'Contemporary' },
    { id: 'nature-landscapes', label: 'Landscapes' },
    { id: 'minimalist-art', label: 'Minimalist' },
  ];

  const filteredArtworks =
    activeTab === 'all'
      ? artworks.slice(0, 8)
      : artworks.filter((a) => a.collectionId === activeTab).slice(0, 8);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E8E2D5]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handpicked Pieces</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] font-normal tracking-tight">
            Curated For You
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-6 md:mt-0 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#191817] text-[#FAF8F5]'
                  : 'bg-[#F5F1E8] text-[#6E685F] hover:text-[#191817] hover:bg-[#EAE5D9]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Artwork Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>

      {/* Bottom CTA to view full catalog */}
      <div className="mt-14 text-center">
        <button
          onClick={() => navigateToExplore()}
          className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#191817] text-[#191817] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#191817] hover:text-white transition-all duration-300"
        >
          <span>View All 18+ Artworks</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
