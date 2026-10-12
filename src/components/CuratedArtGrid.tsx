import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { artworks } from '../data/artworks';
import { ArtworkCard } from './ArtworkCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CuratedArtGrid: React.FC = () => {
  const { navigateToExplore } = useGallery();
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Paintings 🎨' },
    { id: 'nature-landscapes', label: 'Nature & Landscapes 🌿' },
    { id: 'spiritual-art', label: 'Spiritual Art ✨' },
    { id: 'floral-botanical', label: 'Floral & Botanical 🌸' },
  ];

  const filteredArtworks =
    activeTab === 'all'
      ? artworks
      : artworks.filter(
          (a) =>
            a.categorySlug === activeTab ||
            (a.secondaryCategories &&
              a.secondaryCategories.some(
                (c) =>
                  (activeTab === 'nature-landscapes' && c === 'Nature & Landscapes') ||
                  (activeTab === 'floral-botanical' && c === 'Floral & Botanical Art')
              ))
        );

  return (
    <section id="studio-gallery" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F0E6D8] scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEAE8] text-[#FF6161] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hand-painted Originals</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2B2623] tracking-tight">
            Fresh from the Studio 🎨
          </h2>
          <p className="text-sm text-[#7A6F66] mt-2 max-w-xl">
            Renuka's authentic acrylics, watercolor landscapes, and spiritual compositions. All paintings shown are original works from her portfolio.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-6 md:mt-0 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#FF6161] text-white shadow-xs'
                  : 'bg-[#FFF4D2] text-[#6E5500] hover:bg-[#FFE082]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Artwork Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => navigateToExplore()}
          className="btn-sunshine px-8 py-4 text-sm font-bold inline-flex items-center gap-2 cursor-pointer shadow-md"
        >
          <span>Explore All {artworks.length} Original Paintings</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
