import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { collections } from '../data/collections';
import { Sparkles } from 'lucide-react';

export const FeaturedCollections: React.FC = () => {
  const { navigateToCollection } = useGallery();

  const collectionEmojis: Record<string, string> = {
    'nature-landscapes': '🌿',
    'spiritual-art': '✨',
    'portraits': '👩‍🎨',
    'floral-botanical': '🌸',
    'custom-art': '💌'
  };

  return (
    <section id="featured-collections" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4D2] text-[#8C6D00] text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Studio Categories</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2B2623] tracking-tight mb-3">
          Explore by Collection 🌸
        </h2>
        <p className="text-sm sm:text-base text-[#6E6359]">
          Discover original paintings grouped by inspiration—from tranquil landscapes to divine spiritual pieces and personalized portraits.
        </p>
      </div>

      {/* Joyful rounded cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {collections.map((col) => (
          <div
            key={col.id}
            onClick={() => navigateToCollection(col.id)}
            className="group cursor-pointer bg-white p-3.5 sm:p-5 rounded-3xl border-2 border-[#F0E6D8] hover:border-[#FF6161] shadow-xs hover-pop text-center flex flex-col items-center justify-between transition-all"
          >
            {/* Circular / Rounded Image */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden mb-3 bg-[#FAF5ED] border border-[#F0E6D8] flex items-center justify-center p-1">
              <img
                src={col.imageUrl}
                alt={col.title}
                className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
              />
              <span className="absolute bottom-1 right-1 text-base bg-white/95 rounded-full w-6 h-6 flex items-center justify-center shadow-xs">
                {collectionEmojis[col.id] || '🎨'}
              </span>
            </div>

            {/* Title & Count */}
            <div className="w-full">
              <h3 className="font-heading font-bold text-xs sm:text-sm text-[#2B2623] group-hover:text-[#FF6161] transition-colors line-clamp-1">
                {col.title}
              </h3>
              <span className="text-[11px] font-semibold text-[#8C8075] mt-0.5 block">
                {col.artworkCount} Original {col.artworkCount === 1 ? 'Work' : 'Works'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
