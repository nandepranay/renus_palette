import React, { useState, useEffect } from 'react';
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
  ChevronLeft,
  ArrowRight,
  Layers,
  Info
} from 'lucide-react';

interface ViewOption {
  id: 'front' | 'angled' | 'detail';
  name: string;
  shortLabel: string;
  subtitle: string;
  badge: string;
  badgeClass: string;
  imageUrl: string;
  caption: string;
  isMockup: boolean;
}

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

  // Gallery Views configuration (Never show ungenerated/missing views)
  const availableViews: ViewOption[] = [
    {
      id: 'front',
      name: 'Front View',
      shortLabel: 'Front',
      subtitle: 'Original Photograph',
      badge: 'Original Photo',
      badgeClass: 'bg-[#2B2623] text-white',
      imageUrl: artwork.views?.front || artwork.imageUrl,
      caption: 'Straight-on physical photograph of the original hand-painted artwork with true colors and proportions.',
      isMockup: false
    },
    ...(artwork.views?.angled
      ? [
          {
            id: 'angled' as const,
            name: 'Angled View',
            shortLabel: '3D Depth',
            subtitle: '3/4 Canvas Angle',
            badge: 'Wall Mockup',
            badgeClass: 'bg-[#FFD13B] text-[#2B2623]',
            imageUrl: artwork.views.angled,
            caption: 'Realistic presentation mockup displaying the canvas at a 3/4 angle showing gallery-wrap depth on a studio wall.',
            isMockup: true
          }
        ]
      : []),
    ...(artwork.views?.detail
      ? [
          {
            id: 'detail' as const,
            name: 'Close-up View',
            shortLabel: 'Macro Detail',
            subtitle: 'Brushwork & Texture',
            badge: 'Texture Crop',
            badgeClass: 'bg-[#FF6161] text-white',
            imageUrl: artwork.views.detail,
            caption: 'Macro crop from the high-resolution photo showcasing authentic paint texture, brushstrokes, and color layering.',
            isMockup: false
          }
        ]
      : [])
  ];

  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  // Mobile Touch Swipe Handling
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Reset view to Front View whenever selected artwork changes
  useEffect(() => {
    setActiveViewIndex(0);
    setIsImageLoading(false);
    setHasImageError(false);
  }, [artwork.id]);

  const currentView = availableViews[activeViewIndex] || availableViews[0];

  const handleNextView = () => {
    if (availableViews.length <= 1) return;
    setIsImageLoading(true);
    setHasImageError(false);
    setActiveViewIndex((prev) => (prev + 1) % availableViews.length);
  };

  const handlePrevView = () => {
    if (availableViews.length <= 1) return;
    setIsImageLoading(true);
    setHasImageError(false);
    setActiveViewIndex((prev) => (prev - 1 + availableViews.length) % availableViews.length);
  };

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNextView();
      if (e.key === 'ArrowLeft') handlePrevView();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [availableViews.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNextView();
    } else if (distance < -minSwipeDistance) {
      handlePrevView();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

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

  const whatsappInquiryUrl = artwork.isSoldOut
    ? getWhatsAppLink(
        `Hi Renuka! I saw on your website that your original painting "${artwork.title}" (${artwork.category}) is marked Sold Out. I love this composition and would like to commission a similar custom painting for my home. Could you share commission details & sizing options?`
      )
    : getWhatsAppLink(
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
        {/* Left Column: Interactive Multi-View Product Gallery */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Large Image Frame */}
          <div
            className="relative bg-white border-2 border-[#F0E6D8] rounded-3xl p-4 sm:p-7 shadow-sm flex flex-col items-center justify-center min-h-[400px] sm:min-h-[530px] select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Matting Container */}
            <div className="relative w-full h-full flex items-center justify-center bg-[#FAF5ED] rounded-2xl p-4 sm:p-6 border border-[#F0E6D8] overflow-hidden min-h-[340px] sm:min-h-[460px]">
              {/* Shimmer loading spinner */}
              {isImageLoading && (
                <div className="absolute inset-0 bg-[#FAF5ED]/80 backdrop-blur-xs flex items-center justify-center z-20 transition-opacity">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 border-3 border-[#FFD13B] border-t-[#FF6161] rounded-full animate-spin" />
                    <span className="text-xs font-bold text-[#7A6F66]">Loading view...</span>
                  </div>
                </div>
              )}

              {hasImageError ? (
                <div className="text-center p-8 text-[#8C8075]">
                  <span className="text-3xl block mb-2">🎨</span>
                  <p className="text-xs font-semibold">Image Preview Unavailable</p>
                  <p className="text-[10px] text-[#A8987E]">{artwork.imageFileName}</p>
                  <button
                    onClick={() => {
                      setActiveViewIndex(0);
                      setHasImageError(false);
                    }}
                    className="mt-3 text-xs text-[#FF6161] underline font-bold"
                  >
                    Return to Front View
                  </button>
                </div>
              ) : (
                <img
                  key={currentView.imageUrl}
                  src={currentView.imageUrl}
                  alt={`${artwork.title} - ${currentView.name}`}
                  onLoad={() => setIsImageLoading(false)}
                  onError={() => {
                    setIsImageLoading(false);
                    setHasImageError(true);
                  }}
                  className={`max-h-[460px] w-auto max-w-full object-contain rounded-lg drop-shadow-md transition-all duration-300 ${
                    isImageLoading ? 'opacity-40 scale-98' : 'opacity-100 scale-100'
                  }`}
                />
              )}
            </div>

            {/* Top Left Badges */}
            <div className="absolute top-7 left-7 flex flex-col gap-1.5 z-10 pointer-events-none">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="px-3 py-1 bg-[#2B2623]/95 text-white text-[10px] uppercase tracking-wider font-bold rounded-full shadow-xs">
                  100% Hand-Painted Original
                </span>
                {artwork.isOfficialTitle && (
                  <span className="px-3 py-1 bg-[#FFD13B] text-[#2B2623] text-[10px] uppercase tracking-wider font-extrabold rounded-full shadow-xs">
                    Official Title from Artist
                  </span>
                )}
              </div>

              {/* Active View Badge */}
              <div className="flex items-center gap-1.5">
                <span
                  className={`px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-extrabold rounded-full shadow-xs ${currentView.badgeClass}`}
                >
                  {currentView.badge}
                </span>
                <span className="px-2 py-0.5 bg-white/90 text-[#5C5248] text-[10px] font-bold rounded-full border border-[#F0E6D8]">
                  View {activeViewIndex + 1} of {availableViews.length}
                </span>
              </div>
            </div>

            {/* Top Right Action Icons */}
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

            {/* Previous / Next Arrow Controls */}
            {availableViews.length > 1 && (
              <>
                <button
                  onClick={handlePrevView}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#2B2623] border border-[#F0E6D8] shadow-md flex items-center justify-center transition-all hover:scale-110 cursor-pointer z-10 focus:outline-hidden"
                  title="Previous image view"
                  aria-label="Previous image view"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNextView}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#2B2623] border border-[#F0E6D8] shadow-md flex items-center justify-center transition-all hover:scale-110 cursor-pointer z-10 focus:outline-hidden"
                  title="Next image view"
                  aria-label="Next image view"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Bottom Right: Virtual Room View Button */}
            <button
              onClick={() => openRoomView(artwork)}
              className="absolute bottom-7 right-7 px-4 py-2 bg-[#2B2623]/90 hover:bg-[#2B2623] text-white text-xs font-bold rounded-full backdrop-blur-xs flex items-center gap-2 shadow-md transition-transform hover:scale-105 cursor-pointer z-10"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#FFD13B]" />
              <span>Preview on Wall</span>
            </button>
          </div>

          {/* Clickable Views Thumbnail Selector Bar */}
          {availableViews.length > 1 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-[#2B2623] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#FF6161]" />
                  <span>Available Product Views ({availableViews.length})</span>
                </span>
                <span className="text-[11px] text-[#8C8075] hidden sm:inline">
                  Click thumbnail or use arrow keys
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {availableViews.map((view, index) => {
                  const isActive = index === activeViewIndex;
                  return (
                    <button
                      key={view.id}
                      onClick={() => {
                        if (index !== activeViewIndex) {
                          setIsImageLoading(true);
                          setHasImageError(false);
                          setActiveViewIndex(index);
                        }
                      }}
                      className={`relative flex items-center gap-3 p-2.5 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                        isActive
                          ? 'border-[#FF6161] bg-white shadow-md ring-2 ring-[#FF6161]/20 scale-101'
                          : 'border-[#F0E6D8] bg-[#FFFDF9] hover:border-[#FFD13B] hover:bg-white opacity-85 hover:opacity-100'
                      }`}
                    >
                      {/* Thumbnail Preview */}
                      <div className="w-14 h-14 rounded-xl bg-[#FAF5ED] border border-[#F0E6D8] overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                        <img
                          src={view.imageUrl}
                          alt={view.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      {/* Labels */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1 mb-0.5">
                          <span
                            className={`text-xs font-extrabold truncate ${
                              isActive ? 'text-[#FF6161]' : 'text-[#2B2623]'
                            }`}
                          >
                            {view.name}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#7A6F66] truncate font-medium">{view.subtitle}</p>
                        <span
                          className={`inline-block mt-1 px-1.5 py-0.2 text-[9px] font-bold rounded-xs ${
                            isActive ? 'bg-[#FF6161] text-white' : 'bg-[#FAF5ED] text-[#7A6F66]'
                          }`}
                        >
                          {view.badge}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* View Description & Transparency Banner */}
              <div className="p-3.5 bg-[#FFFDF9] border border-[#F0E6D8] rounded-2xl flex items-start gap-2.5 text-xs text-[#5C5248]">
                <Info className="w-4 h-4 text-[#FF6161] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-bold text-[#2B2623] flex items-center gap-2">
                    <span>{currentView.name}</span>
                    {currentView.isMockup ? (
                      <span className="text-[10px] font-bold text-[#B45309] bg-[#FEF3C7] px-2 py-0.2 rounded-full">
                        Presentation Mockup
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-[#1E7E34] bg-[#E8F8F0] px-2 py-0.2 rounded-full">
                        Authentic Artwork Photo
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#7A6F66] leading-relaxed">
                    {currentView.caption}
                  </p>
                </div>
              </div>
            </div>
          )}
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

              <span
                className={`px-3 py-1 text-xs font-bold rounded-full ${
                  artwork.isSoldOut
                    ? 'bg-[#FEE2E2] text-[#DC2626] border border-[#FECACA]'
                    : 'bg-[#E8F8F0] text-[#1E7E34]'
                }`}
              >
                {artwork.isSoldOut ? 'Original Sold Out' : (artwork.availability || 'Available')}
              </span>
            </div>

            <p className="text-xs text-[#5C5248] leading-relaxed">
              {artwork.isSoldOut
                ? 'This original piece has been acquired. You can commission a custom remake or similar inspired original painting in your preferred canvas size with Renuka!'
                : 'Every original artwork is uniquely valued. You can also commission this concept in your preferred custom canvas dimensions.'}
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
                <span>
                  {artwork.isSoldOut
                    ? 'Commission Similar Painting on WhatsApp'
                    : 'Request a Custom Quote on WhatsApp'}
                </span>
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
