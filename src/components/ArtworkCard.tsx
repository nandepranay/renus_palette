import React from 'react';
import { useGallery } from '../context/GalleryContext';
import type { Artwork } from '../types';
import { Heart, ShoppingBag, Eye, Maximize2 } from 'lucide-react';

interface ArtworkCardProps {
  artwork: Artwork;
  layout?: 'standard' | 'compact';
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, layout = 'standard' }) => {
  const {
    navigateToArtwork,
    toggleWishlist,
    isInWishlist,
    addToCart,
    openRoomView,
    formatPrice
  } = useGallery();

  const isFavorited = isInWishlist(artwork.id);

  return (
    <div className="group bg-white rounded-3xl border-2 border-[#F0E6D8] hover:border-[#FF6161] shadow-xs hover-pop p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300">
      {/* Artwork Image Frame */}
      <div className="relative overflow-hidden rounded-2xl bg-[#FAF5ED] aspect-4/5 mb-3.5 flex items-center justify-center">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          loading="lazy"
          onClick={() => navigateToArtwork(artwork.id)}
          className="w-full h-full object-cover cursor-pointer group-hover:scale-106 transition-transform duration-500"
        />

        {/* Labels: Original / Limited Edition */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none z-10">
          {artwork.isOriginal && (
            <span className="px-3 py-1 rounded-full bg-white/95 text-[#2B2623] text-[10px] font-extrabold uppercase tracking-wider shadow-xs border border-[#F0E6D8]">
              Original Canvas ✨
            </span>
          )}
          {artwork.isLimitedEdition && (
            <span className="px-3 py-1 rounded-full bg-[#FFD13B] text-[#2B2623] text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
              Hand-painted 🌸
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(artwork.id);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center transition-all hover:scale-115 z-10 shadow-xs border border-[#F0E6D8]"
          title={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorited ? 'text-[#FF6161] fill-[#FF6161]' : 'text-[#7A6F66] hover:text-[#FF6161]'
            }`}
          />
        </button>

        {/* Hover Quick Actions */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateToArtwork(artwork.id);
            }}
            className="flex-1 py-2 px-3 bg-[#2B2623] hover:bg-[#FF6161] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openRoomView(artwork);
            }}
            className="p-2 bg-white text-[#2B2623] hover:bg-[#FFF4D2] rounded-xl border border-[#F0E6D8] transition-colors shadow-md"
            title="Room visualizer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Card Info */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h4
            onClick={() => navigateToArtwork(artwork.id)}
            className="font-heading font-bold text-base text-[#2B2623] hover:text-[#FF6161] cursor-pointer transition-colors truncate mb-1"
            title={artwork.title}
          >
            {artwork.title}
          </h4>

          <div className="flex items-center justify-between text-xs text-[#7A6F66] mb-2 font-medium">
            <span>By Renuka</span>
            <span>{artwork.dimensions}</span>
          </div>

          {layout === 'standard' && (
            <p className="text-xs text-[#8C8075] line-clamp-1 italic mb-3">
              {artwork.medium}
            </p>
          )}
        </div>

        {/* Price & Add to Bag */}
        <div className="pt-2 border-t border-[#F4EBE0] flex items-center justify-between">
          <span className="font-heading text-lg font-black text-[#FF6161]">
            {formatPrice(artwork.price)}
          </span>

          <button
            onClick={() => addToCart(artwork)}
            className="px-3.5 py-1.5 rounded-full bg-[#FFD13B] hover:bg-[#FFC400] text-[#2B2623] text-xs font-bold transition-all flex items-center gap-1 active:scale-95 shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
