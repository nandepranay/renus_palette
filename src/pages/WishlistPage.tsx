import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { artworks } from '../data/artworks';
import { ArtworkCard } from '../components/ArtworkCard';
import { Heart, ArrowRight } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist, navigateToExplore } = useGallery();

  const savedArtworks = artworks.filter((a) => wishlist.includes(a.id));

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[70vh]">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-[#E8E2D5]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C08081] font-medium mb-2">
            <Heart className="w-3.5 h-3.5 fill-[#C08081]" />
            <span>Private Collection</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#191817] font-normal tracking-tight">
            Your Saved Artworks
          </h1>
        </div>

        <p className="text-xs text-[#736E65] mt-3 sm:mt-0 font-mono">
          {savedArtworks.length} {savedArtworks.length === 1 ? 'Canvas' : 'Canvases'} Saved
        </p>
      </div>

      {/* Content */}
      {savedArtworks.length === 0 ? (
        <div className="text-center py-24 bg-white border border-[#E2D9C8] p-8 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#FAF8F5] flex items-center justify-center mx-auto mb-4 border border-[#DDD5C5]">
            <Heart className="w-8 h-8 text-[#C8BCAC]" />
          </div>
          <h3 className="font-serif text-2xl text-[#191817] mb-2">Your Wishlist is Empty</h3>
          <p className="text-xs text-[#736E65] mb-6 leading-relaxed">
            Click the heart icon on any painting or canvas while exploring the gallery to curate your personal collection shortlist.
          </p>
          <button
            onClick={() => navigateToExplore()}
            className="px-8 py-3.5 bg-[#191817] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {savedArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
};
