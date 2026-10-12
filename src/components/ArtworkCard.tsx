import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import type { Artwork } from '../types';
import { getWhatsAppLink } from '../config/artistConfig';
import { Heart, Eye, MessageCircle, Maximize2, ImageOff } from 'lucide-react';

interface ArtworkCardProps {
  artwork: Artwork;
  layout?: 'standard' | 'compact';
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, layout = 'standard' }) => {
  const {
    navigateToArtwork,
    toggleWishlist,
    isInWishlist,
    openRoomView
  } = useGallery();

  const [imageError, setImageError] = useState(false);
  const isFavorited = isInWishlist(artwork.id);

  const whatsappInquiryUrl = artwork.isSoldOut
    ? getWhatsAppLink(
        `Hi Renuka! I saw that your original painting "${artwork.title}" (${artwork.category}) is marked Sold Out. I love this piece and would like to commission a similar original artwork for my home. Could you please share the commission pricing and details?`
      )
    : getWhatsAppLink(
        `Hi Renuka! I am interested in your original painting "${artwork.title}" (${artwork.category}). Could you please share more details and price quote?`
      );

  return (
    <div className={`group bg-white rounded-3xl border-2 ${artwork.isSoldOut ? 'border-[#EAE2D7]' : 'border-[#F0E6D8] hover:border-[#FF6161]'} shadow-xs hover-pop p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 relative`}>
      {/* Artwork Image Frame - Preserves Aspect Ratio */}
      <div className="relative overflow-hidden rounded-2xl bg-[#FAF5ED] aspect-4/5 mb-3.5 flex items-center justify-center p-2">
        {imageError ? (
          <div className="flex flex-col items-center justify-center text-center p-4 text-[#8C8075]">
            <ImageOff className="w-8 h-8 mb-2 opacity-50" />
            <span className="text-xs font-semibold">Image Preview Unavailable</span>
            <span className="text-[10px] text-[#A8987E] mt-1">{artwork.imageFileName}</span>
          </div>
        ) : (
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            loading="lazy"
            onError={() => setImageError(true)}
            onClick={() => navigateToArtwork(artwork.id)}
            className="w-full h-full object-contain cursor-pointer group-hover:scale-104 transition-transform duration-500 drop-shadow-sm"
          />
        )}

        {/* Category & Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none z-10">
          {artwork.isSoldOut ? (
            <span className="px-2.5 py-0.5 rounded-full bg-[#E03131] text-white text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Sold Out
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full bg-[#16A34A] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm w-fit">
              Available ✨
            </span>
          )}
          <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#2B2623] text-[10px] font-extrabold uppercase tracking-wider shadow-xs border border-[#F0E6D8] w-fit">
            {artwork.category}
          </span>
          {artwork.isOfficialTitle && !artwork.isSoldOut && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#FFD13B] text-[#2B2623] text-[10px] font-extrabold uppercase tracking-wider shadow-xs w-fit">
              Signature Work ✨
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
            className="flex-1 py-2 px-3 bg-[#2B2623] hover:bg-[#FF6161] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Artwork</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openRoomView(artwork);
            }}
            className="p-2 bg-white text-[#2B2623] hover:bg-[#FFF4D2] rounded-xl border border-[#F0E6D8] transition-colors shadow-md cursor-pointer"
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

          <div className="flex items-center justify-between text-xs text-[#7A6F66] mb-1.5 font-medium">
            <span>By Renuka</span>
            <span>{artwork.medium || 'Original Painting'}</span>
          </div>

          {layout === 'standard' && (
            <p className="text-xs text-[#8C8075] line-clamp-2 mb-3 leading-relaxed">
              {artwork.description}
            </p>
          )}
        </div>

        {/* Price & Inquire Action */}
        <div className="pt-2.5 border-t border-[#F4EBE0] flex items-center justify-between gap-2">
          <div>
            <span className={`font-heading text-sm sm:text-base font-extrabold block ${artwork.isSoldOut ? 'text-[#8C8075]' : 'text-[#FF6161]'}`}>
              {artwork.priceDisplay}
            </span>
            <span className={`text-[10px] font-bold block ${artwork.isSoldOut ? 'text-[#DC2626]' : 'text-[#16A34A]'}`}>
              {artwork.isSoldOut ? 'Sold • Commission Similar' : 'Available • Ready to Ship'}
            </span>
          </div>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 shadow-xs border ${
              artwork.isSoldOut
                ? 'bg-[#FEE2E2] hover:bg-[#FCA5A5] text-[#991B1B] border-[#FECACA]'
                : 'bg-[#FFF4D2] hover:bg-[#FFD13B] text-[#2B2623] border-[#FFE082]'
            }`}
          >
            <MessageCircle className={`w-3.5 h-3.5 ${artwork.isSoldOut ? 'text-[#DC2626]' : 'text-[#1E7E34]'}`} />
            <span>{artwork.isSoldOut ? 'Commission' : 'Inquire'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
