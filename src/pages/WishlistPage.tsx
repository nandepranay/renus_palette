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
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-[#F0E6D8]">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-[#FFEAE8] text-[#FF6161] mb-2 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>My Favorite Canvases</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2B2623] tracking-tight">
            Your Saved Artworks 🌸
          </h1>
        </div>

        <p className="text-xs font-bold text-[#7A6F66] mt-3 sm:mt-0">
          {savedArtworks.length} {savedArtworks.length === 1 ? 'Painting' : 'Paintings'} Saved
        </p>
      </div>

      {/* Content */}
      {savedArtworks.length === 0 ? (
        <div className="text-center py-20 bg-white border-2 border-[#F0E6D8] rounded-3xl p-8 max-w-lg mx-auto shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#FFEAE8] flex items-center justify-center mx-auto mb-4 border border-[#FFCCD0]">
            <Heart className="w-8 h-8 text-[#FF6161]" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-[#2B2623] mb-2">Your Wishlist is Empty</h3>
          <p className="text-xs text-[#7A6F66] mb-6 leading-relaxed max-w-sm mx-auto">
            Click the heart icon on any painting while exploring Renuka's studio gallery to save your favorite original artworks here.
          </p>
          <button
            onClick={() => navigateToExplore()}
            className="btn-sunshine px-8 py-3.5 text-xs font-bold inline-flex items-center justify-center gap-2 mx-auto cursor-pointer shadow-md"
          >
            <span>Explore Paintings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {savedArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
};
