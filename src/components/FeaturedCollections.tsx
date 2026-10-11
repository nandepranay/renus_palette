import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { collections } from '../data/collections';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const FeaturedCollections: React.FC = () => {
  const { navigateToCollection } = useGallery();

  return (
    <section id="featured-collections" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#E8E2D5] pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curatorial Focus</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] font-normal tracking-tight">
            Explore Our Collections
          </h2>
        </div>
        <p className="text-sm text-[#6E685F] max-w-md mt-4 md:mt-0 font-sans leading-relaxed">
          Traverse distinct aesthetic realms, from contemplative minimalism and subcontinental heritage pigments to monumental abstract canvases.
        </p>
      </div>

      {/* Collections Grid - Editorial Asymmetry */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {collections.map((col, index) => {
          // Add subtle height variations for editorial elegance
          const isTall = index === 0 || index === 3;
          return (
            <div
              key={col.id}
              onClick={() => navigateToCollection(col.id)}
              className="group relative cursor-pointer overflow-hidden bg-white border border-[#DDD5C5] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container with Smooth Zoom */}
              <div className={`overflow-hidden relative ${isTall ? 'h-96 sm:h-[420px]' : 'h-80 sm:h-96'}`}>
                <img
                  src={col.imageUrl}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Subtle dark gradient overlay at bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Badge top right */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-[#191817] border border-[#DDD5C5] uppercase tracking-wider">
                  {col.artworkCount} Works
                </div>

                {/* Bottom card content */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white transform transition-transform duration-300">
                  <p className="text-xs uppercase tracking-widest text-[#E8DCC4] mb-1 font-medium">
                    {col.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-[#E8DCC4] transition-colors">
                      {col.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-xs text-white/80 line-clamp-2 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {col.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
