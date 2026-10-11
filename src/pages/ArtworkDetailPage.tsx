import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { artworks } from '../data/artworks';
import { ArtworkCard } from '../components/ArtworkCard';
import { ARTIST_CONFIG, getWhatsAppLink } from '../config/artistConfig';
import {
  Heart,
  Maximize2,
  Share2,
  MessageCircle,
  Sparkles,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export const ArtworkDetailPage: React.FC = () => {
  const {
    selectedArtworkId,
    setPage,
    navigateToCollection,
    navigateToExplore,
    toggleWishlist,
    isInWishlist,
    openRoomView,
    addToast
  } = useGallery();

  const artwork = artworks.find((a) => a.id === selectedArtworkId) || artworks[0];
  const isFavorited = isInWishlist(artwork.id);
  const [imageError, setImageError] = useState(false);

  // Related artworks from the same category
  const relatedArtworks = artworks
    .filter((a) => a.id !== artwork.id && (a.categorySlug === artwork.categorySlug || a.category === artwork.category))
    .slice(0, 4);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast({
      type: 'info',
      title: 'Link Copied',
      description: `Artwork link copied to clipboard.`
    });
  };

  const whatsappInquiryUrl = getWhatsAppLink(
    `Hi Renuka! I am interested in your original painting "${artwork.title}" (${artwork.category}). Could you please share more details and price quote?`
  );

  const scrollToPricing = () => {
    setPage('home');
    setTimeout(() => {
      document.getElementById('canvas-pricing')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs text-[#7A6F66] mb-8 font-medium">
        <button onClick={() => setPage('home')} className="hover:text-[#FF6161] cursor-pointer">
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={() => navigateToExplore()} className="hover:text-[#FF6161] cursor-pointer">
          Shop Paintings
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button
          onClick={() => navigateToCollection(artwork.categorySlug)}
          className="hover:text-[#FF6161] cursor-pointer"
        >
          {artwork.category}
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#2B2623] font-bold truncate max-w-[200px]">{artwork.title}</span>
      </nav>

      {/* Main Two-Column Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
        {/* Left Column: Artwork Image Frame - Preserves Aspect Ratio */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative bg-white border-2 border-[#F0E6D8] rounded-3xl p-4 sm:p-8 shadow-sm flex items-center justify-center min-h-[380px] sm:min-h-[520px]">
            {/* Matting Container */}
            <div className="relative w-full h-full flex items-center justify-center bg-[#FAF5ED] rounded-2xl p-4 sm:p-6 border border-[#F0E6D8]">
              {imageError ? (
                <div className="text-center p-8 text-[#8C8075]">
                  <span className="text-3xl block mb-2">🎨</span>
                  <p className="text-xs font-semibold">Image Preview Unavailable</p>
                  <p className="text-[10px] text-[#A8987E]">{artwork.imageFileName}</p>
                </div>
              ) : (
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  onError={() => setImageError(true)}
                  className="max-h-[460px] w-auto max-w-full object-contain rounded-lg drop-shadow-md transition-all duration-300"
                />
              )}
            </div>

            {/* Badges on artwork */}
            <div className="absolute top-7 left-7 flex flex-col gap-1.5 z-10 pointer-events-none">
              <span className="px-3 py-1 bg-[#2B2623]/95 text-white text-[10px] uppercase tracking-wider font-bold rounded-full shadow-xs">
                100% Hand-Painted Original
              </span>
              {artwork.isOfficialTitle && (
                <span className="px-3 py-1 bg-[#FFD13B] text-[#2B2623] text-[10px] uppercase tracking-wider font-extrabold rounded-full shadow-xs">
                  Official Title from Artist
                </span>
              )}
            </div>

            {/* Top Right Actions */}
            <div className="absolute top-7 right-7 flex items-center gap-2 z-10">
              <button
                onClick={handleCopyLink}
                className="w-9 h-9 rounded-full bg-white/95 border border-[#F0E6D8] text-[#5C5248] hover:text-[#2B2623] flex items-center justify-center transition-transform hover:scale-110 shadow-xs cursor-pointer"
                title="Share artwork"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => toggleWishlist(artwork.id)}
                className="w-9 h-9 rounded-full bg-white/95 border border-[#F0E6D8] flex items-center justify-center transition-transform hover:scale-110 shadow-xs cursor-pointer"
                title={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isFavorited ? 'text-[#FF6161] fill-[#FF6161]' : 'text-[#7A6F66]'
                  }`}
                />
              </button>
            </div>

            {/* Virtual Room View Button */}
            <button
              onClick={() => openRoomView(artwork)}
              className="absolute bottom-7 right-7 px-4 py-2 bg-[#2B2623]/90 hover:bg-[#2B2623] text-white text-xs font-bold rounded-full backdrop-blur-xs flex items-center gap-2 shadow-md transition-transform hover:scale-105 cursor-pointer z-10"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#FFD13B]" />
              <span>Preview on Wall</span>
            </button>
          </div>
        </div>

        {/* Right Column: Title, Artist, Pricing, Custom Quote Request */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6161] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{artwork.category}</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl text-[#2B2623] font-extrabold tracking-tight leading-tight mb-2">
              {artwork.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-[#7A6F66] font-medium">
              <span>By</span>
              <button
                onClick={() => setPage('about')}
                className="font-bold text-[#2B2623] hover:text-[#FF6161] underline underline-offset-4 cursor-pointer"
              >
                {artwork.artistName} ({ARTIST_CONFIG.brandName})
              </button>
              <span>•</span>
              <span>{artwork.medium}</span>
            </div>
          </div>

          {/* Price on Request Callout Block */}
          <div className="p-6 bg-white border-2 border-[#F0E6D8] rounded-3xl space-y-3 shadow-xs">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-black text-[#FF6161]">
                  {artwork.priceDisplay}
                </span>
                <span className="text-xs text-[#8C8075] block mt-0.5 font-medium">
                  Direct inquiry with Renuka
                </span>
              </div>

              <span className="px-3 py-1 bg-[#E8F8F0] text-[#1E7E34] text-xs font-bold rounded-full">
                {artwork.availability || 'Available'}
              </span>
            </div>

            <p className="text-xs text-[#5C5248] leading-relaxed">
              Every original artwork is uniquely valued. You can also commission this concept in your preferred custom canvas dimensions.
            </p>

            {/* Direct WhatsApp Quote Button */}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-full btn-coral text-sm font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Request a Custom Quote on WhatsApp</span>
              </a>

              <button
                onClick={scrollToPricing}
                className="w-full py-3 px-6 rounded-full bg-[#FFF4D2] hover:bg-[#FFE082] text-[#8C6D00] text-xs font-bold transition-all border border-[#FFE082] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Check Canvas Sizes & Pricing Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Description & Artwork Notes */}
          <div className="space-y-3 text-sm text-[#5C5248]">
            <h3 className="font-heading font-bold text-base text-[#2B2623]">About This Painting</h3>
            <p className="leading-relaxed bg-[#FFFDF9] p-4 rounded-2xl border border-[#F0E6D8]">
              {artwork.description}
            </p>
          </div>

          {/* Confirmed Details */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-white rounded-2xl border border-[#F0E6D8]">
              <span className="text-[#8C8075] font-semibold block mb-0.5">Medium</span>
              <span className="font-bold text-[#2B2623]">{artwork.medium}</span>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-[#F0E6D8]">
              <span className="text-[#8C8075] font-semibold block mb-0.5">Dimensions</span>
              <span className="font-bold text-[#2B2623]">
                {artwork.dimensions || 'Custom sizes on request'}
              </span>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-[#F0E6D8]">
              <span className="text-[#8C8075] font-semibold block mb-0.5">Surface</span>
              <span className="font-bold text-[#2B2623]">Stretched Cotton Canvas</span>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-[#F0E6D8]">
              <span className="text-[#8C8075] font-semibold block mb-0.5">Shipping</span>
              <span className="font-bold text-[#2B2623]">Pan-India Protected Transit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Artworks from Renuka's Collection */}
      {relatedArtworks.length > 0 && (
        <div className="border-t border-[#F0E6D8] pt-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2B2623]">
                More from {artwork.category}
              </h3>
              <p className="text-xs sm:text-sm text-[#7A6F66] mt-1">
                Explore more original paintings by Renuka in this collection
              </p>
            </div>

            <button
              onClick={() => navigateToCollection(artwork.categorySlug)}
              className="text-xs sm:text-sm font-bold text-[#FF6161] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedArtworks.map((item) => (
              <ArtworkCard key={item.id} artwork={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
