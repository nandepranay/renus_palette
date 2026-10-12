import React from 'react';
import { newArrivalArtworks } from '../data/artworks';
import { ArtworkCard } from './ArtworkCard';
import { Sparkles } from 'lucide-react';

export const NewArrivalsSection: React.FC = () => {
  return (
    <section
      id="new-arrivals"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#F0E6D8] scroll-mt-24"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4D2] text-[#8C6D00] text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6161]" />
            <span>Just Added to the Studio</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2B2623] tracking-tight">
            New Arrivals ✨
          </h2>
          <p className="text-sm text-[#7A6F66] mt-2 max-w-xl">
            Fresh individual hand-painted creations and bespoke canvas commission showcases recently completed by Renuka.
          </p>
        </div>

        <div className="mt-4 md:mt-0 text-xs font-bold text-[#8C8075] bg-[#FAF5ED] px-4 py-2 rounded-full border border-[#F0E6D8]">
          <span className="text-[#FF6161] font-extrabold">{newArrivalArtworks.length}</span> Unique New Works
        </div>
      </div>

      {/* Grid of New Arrival Individual Paintings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newArrivalArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </section>
  );
};
