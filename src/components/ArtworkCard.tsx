import React from 'react';
import { useGallery } from '../context/GalleryContext';
import type { Artwork } from '../types';
import { Heart, Eye, Maximize2, ShoppingBag } from 'lucide-react';

interface ArtworkCardProps {
  artwork: Artwork;
  layout?: 'standard' | 'compact';
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, layout = 'standard' }) => {
  const {
    navigateToArtwork,
    navigateToArtist,
    toggleWishlist,
    isInWishlist,
    addToCart,
    openRoomView,
    formatPrice
  } = useGallery();

  const isFavorited = isInWishlist(artwork.id);

  return (
    <div className="group art-card bg-white border border-[#E2D9C8] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#C5A059]">
      {/* Artwork Image Frame */}
      <div className="relative overflow-hidden bg-[#F3EFE6] aspect-4/5 flex items-center justify-center p-3 sm:p-4">
        {/* Museum Matting effect */}
        <div
          onClick={() => navigateToArtwork(artwork.id)}
          className="w-full h-full cursor-pointer overflow-hidden flex items-center justify-center bg-white shadow-xs"
        >
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            loading="lazy"
            className="w-full h-full object-cover art-card-img"
          />
        </div>

        {/* Labels: Original / Limited Edition */}
        <div className="absolute top-5 left-5 flex flex-col gap-1 pointer-events-none z-10">
          {artwork.isOriginal && (
            <span className="px-2.5 py-0.5 bg-[#191817]/90 text-white text-[10px] uppercase tracking-widest font-mono backdrop-blur-xs">
              Original Artwork
            </span>
          )}
          {artwork.isLimitedEdition && (
            <span className="px-2.5 py-0.5 bg-[#C5A059] text-[#191817] text-[10px] uppercase tracking-widest font-mono font-bold">
              Limited Edition
            </span>
          )}
        </div>

        {/* Top Right Wishlist Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(artwork.id);
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs border border-[#DDD5C5] flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 shadow-sm"
          title={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorited ? 'text-[#C08081] fill-[#C08081]' : 'text-[#6E685F] hover:text-[#191817]'
            }`}
          />
        </button>

        {/* Hover Action Overlay */}
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateToArtwork(artwork.id);
            }}
            className="pointer-events-auto px-3.5 py-2 bg-[#191817] text-white text-[11px] uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors flex items-center gap-1.5 shadow-md"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Artwork</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openRoomView(artwork);
            }}
            className="pointer-events-auto p-2 bg-white text-[#191817] hover:text-[#C5A059] border border-[#DDD5C5] transition-colors shadow-md"
            title="View in a room"
            aria-label="View in a room"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(artwork);
            }}
            className="pointer-events-auto p-2 bg-white text-[#191817] hover:text-[#C5A059] border border-[#DDD5C5] transition-colors shadow-md"
            title="Add to art bag"
            aria-label="Add to art bag"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Card Information */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h4
              onClick={() => navigateToArtwork(artwork.id)}
              className="font-serif text-lg text-[#191817] hover:text-[#C5A059] cursor-pointer transition-colors truncate font-medium"
              title={artwork.title}
            >
              {artwork.title}
            </h4>
          </div>

          <div className="flex items-center justify-between text-xs text-[#6E685F] mb-3">
            <button
              onClick={() => navigateToArtist(artwork.artistId)}
              className="hover:text-[#191817] transition-colors hover:underline text-left truncate"
            >
              {artwork.artistName}
            </button>
            <span className="shrink-0 text-[11px] text-[#8C8578]">{artwork.dimensions}</span>
          </div>

          {layout === 'standard' && (
            <p className="text-[11px] text-[#736E65] line-clamp-1 italic mb-3 font-sans">
              {artwork.medium}
            </p>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-[#F0EBE0] flex items-center justify-between">
          <div>
            <span className="font-serif text-base sm:text-lg font-bold text-[#191817]">
              {formatPrice(artwork.price)}
            </span>
            {artwork.originalPrice && (
              <span className="text-xs text-[#8C8578] line-through ml-2">
                {formatPrice(artwork.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => navigateToArtwork(artwork.id)}
            className="text-xs uppercase tracking-wider text-[#191817] hover:text-[#C5A059] font-medium flex items-center gap-1 transition-colors"
          >
            <span>Explore</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
