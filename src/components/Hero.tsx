import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { ARTIST_CONFIG, getWhatsAppLink } from '../config/artistConfig';
import { artworks } from '../data/artworks';
import { ArrowRight, MessageCircle, Tag, Eye, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateToExplore, navigateToArtwork, setPage, toggleWishlist, isInWishlist } = useGallery();

  // Find signature in-stock paintings for hero showcase
  const heroPrimary = artworks.find((a) => a.id === 'water-lily-study') || artworks[0];
  const heroSecondary = artworks.find((a) => a.id === 'tropical-palm-sunset') || artworks[1];
  const heroTertiary = artworks.find((a) => a.id === 'moonlit-wildflower-meadow') || artworks[2];

  const scrollToPricing = () => {
    const el = document.getElementById('canvas-pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setPage('home');
      setTimeout(() => {
        document.getElementById('canvas-pricing')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF4D2]/45 via-[#FFFDF9] to-[#FFFDF9] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#F4EBE0]">
      {/* Playful background doodles & accents */}
      <div className="absolute top-10 left-8 text-4xl opacity-30 select-none pointer-events-none rotate-12">
        ✨
      </div>
      <div className="absolute top-20 right-12 text-4xl opacity-30 select-none pointer-events-none -rotate-12">
        🌸
      </div>
      <div className="absolute bottom-10 left-16 text-3xl opacity-20 select-none pointer-events-none">
        🌿
      </div>
      <div className="absolute bottom-12 right-20 text-4xl opacity-25 select-none pointer-events-none rotate-6">
        🎨
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Brand, Tagline, Introduction, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Friendly Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF4D2] border border-[#FFE082] text-xs font-bold text-[#8C6D00] shadow-xs">
              <span>🎨 Welcome to Renuka's Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6161]" />
              <span className="text-[#FF6161] font-extrabold">{ARTIST_CONFIG.brandName}</span>
            </div>

            {/* Main Headline with Prominent Tagline */}
            <div>
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#2B2623] tracking-tight leading-[1.08] mb-3">
                {ARTIST_CONFIG.brandName} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6161] via-[#FFA000] to-[#FF6161]">
                  {ARTIST_CONFIG.tagline}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C5248] leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                I am <strong className="text-[#2B2623] font-bold">Renuka</strong>, an artist creating original acrylic paintings and custom artworks designed to connect personally with you and bring lasting warmth to your home.
              </p>
            </div>

            {/* Custom Commission Callout Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFEAE8] border border-[#FFCCD0] text-sm text-[#2B2623] max-w-xl mx-auto lg:mx-0 flex items-start gap-3.5 text-left shadow-xs">
              <span className="text-2xl shrink-0 mt-0.5">🎨</span>
              <div className="space-y-1">
                <strong className="text-[#FF6161] block font-bold text-sm sm:text-base">
                  Want Custom Art Tailored for You?
                </strong>
                <p className="text-xs sm:text-sm text-[#453D37] leading-relaxed">
                  I love creating personalized nature landscapes, spiritual art, and floral pieces tailored to your exact concept and wall size.
                </p>
              </div>
            </div>

            {/* Action Buttons: Explore, Pricing, Request Custom Quote */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('new-arrivals');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigateToExplore();
                  }
                }}
                className="btn-sunshine px-7 py-3.5 text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Shop New Arrivals ✨</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToPricing}
                className="px-6 py-3.5 rounded-full bg-white border-2 border-[#FFD13B] text-[#2B2623] hover:bg-[#FFF4D2] text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <Tag className="w-4 h-4 text-[#8C6D00]" />
                <span>View Canvas Pricing</span>
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request a Custom Quote</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs font-semibold text-[#7A6F66]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#FFD13B]">✨</span> 100% Hand-Painted Original Canvases
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#FF6161]">💌</span> Bespoke Nature & Custom Commissions
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#2DD4BF]">📦</span> Safe Transit Packing Pan-India
              </span>
            </div>
          </div>

          {/* Right Column: Hero Artwork Showcase using Renuka's Real Paintings */}
          <div className="lg:col-span-5 relative">
            {/* Primary Featured Card (Lotus Pond) */}
            <div className="relative bg-white p-3.5 sm:p-4 rounded-3xl border-2 border-[#F0E6D8] shadow-lg hover-pop">
              <div
                onClick={() => navigateToArtwork(heroPrimary.id)}
                className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden bg-[#FAF5ED] cursor-pointer group"
              >
                <img
                  src={heroPrimary.imageUrl}
                  alt={heroPrimary.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge on Image */}
                <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/95 text-[#2B2623] text-[10px] font-extrabold uppercase tracking-wider shadow-xs border border-[#F0E6D8]">
                    Featured Hero Canvas ✨
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFD13B] text-[#2B2623] text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                    Original Acrylic 🌸
                  </span>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(heroPrimary.id);
                  }}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs border border-[#F0E6D8] hover:scale-110 transition-transform"
                  aria-label="Save to wishlist"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isInWishlist(heroPrimary.id) ? 'text-[#FF6161] fill-[#FF6161]' : 'text-[#7A6F66]'
                    }`}
                  />
                </button>
              </div>

              {/* Painting Info */}
              <div className="mt-3.5 flex items-center justify-between">
                <div>
                  <h3
                    onClick={() => navigateToArtwork(heroPrimary.id)}
                    className="font-heading font-bold text-base sm:text-lg text-[#2B2623] hover:text-[#FF6161] cursor-pointer transition-colors"
                  >
                    {heroPrimary.title}
                  </h3>
                  <span className="text-xs text-[#7A6F66] font-medium">
                    By Renuka • {heroPrimary.medium}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-[#FF6161] block">
                    {heroPrimary.priceDisplay}
                  </span>
                  <button
                    onClick={() => navigateToArtwork(heroPrimary.id)}
                    className="text-[11px] font-bold text-[#2B2623] hover:text-[#FF6161] inline-flex items-center gap-1 mt-0.5"
                  >
                    <Eye className="w-3 h-3" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Floating Mini Showcase Cards */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {[heroSecondary, heroTertiary].map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigateToArtwork(item.id)}
                  className="bg-white p-2.5 rounded-2xl border-2 border-[#F0E6D8] shadow-xs hover-pop cursor-pointer flex items-center gap-2.5 group"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-xl shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-heading font-bold text-xs text-[#2B2623] truncate group-hover:text-[#FF6161]">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-[#7A6F66] block truncate">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-bold text-[#FF6161]">
                      {item.priceDisplay}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
