import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { ARTIST_CONFIG, getArtworkUrl, getWhatsAppLink } from '../config/artistConfig';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { setPage } = useGallery();

  return (
    <section id="about-renuka" className="py-16 sm:py-24 bg-[#FFF9F0] border-y border-[#F0E6D8] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Real Artwork Image with Framed Overlap */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-3.5 sm:p-5 bg-white border-2 border-[#F0E6D8] rounded-3xl shadow-lg">
              <div className="aspect-4/3 sm:aspect-16/11 overflow-hidden bg-[#FAF5ED] rounded-2xl flex items-center justify-center p-2">
                <img
                  src={getArtworkUrl('artworks/lotus-pond.jpg')}
                  alt="Lotus Pond by Renuka"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating Artist Signature Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[#2B2623] text-[#FFFDF9] p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-[#FFD13B] max-w-xs hidden sm:block">
                <span className="text-[10px] uppercase font-bold text-[#FFD13B] tracking-wider block mb-1">
                  Art Studio • Renuka
                </span>
                <p className="font-heading text-xs italic leading-relaxed text-[#F4EBE0]">
                  “{ARTIST_CONFIG.about.philosophy}”
                </p>
                <p className="text-[10px] text-[#FF6161] font-bold mt-2">— {ARTIST_CONFIG.brandName}</p>
              </div>
            </div>
          </div>

          {/* Right: Authentic Narrative from PDF */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4D2] text-[#8C6D00] text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6161]" />
              <span>About the Artist</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2B2623] tracking-tight leading-tight">
              Art Intended to Connect Personally 🌸
            </h2>

            {/* Core Ideas from PDF */}
            <div className="space-y-4 text-sm sm:text-base text-[#5C5248] leading-relaxed">
              <p>
                Welcome to my colorful world! I am <strong className="text-[#2B2623] font-bold">Renuka</strong>, a painter specializing in vibrant acrylics and dreamy watercolor art focused on beautiful portraits and nature landscapes.
              </p>
              <p>
                My paintings are created to <strong className="text-[#2B2623]">connect personally with people</strong> and to add lasting <strong className="text-[#2B2623]">warmth and meaning to spaces</strong>. Every piece begins with an intention to transform everyday walls into mindful, joyful sanctuaries.
              </p>
              <p>
                At the easel, the creative process brings together <strong className="text-[#FF6161]">thought and color, chaos and calm, and the artwork and its viewer</strong>.
              </p>
            </div>

            {/* 3 Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#F0E6D8]">
              <div className="space-y-1 bg-white p-3.5 rounded-2xl border border-[#F0E6D8]">
                <div className="text-xl">💛</div>
                <h4 className="font-heading text-sm font-bold text-[#2B2623]">Personal Connection</h4>
                <p className="text-xs text-[#7A6F66]">Artworks created to resonate deeply with people and everyday moments.</p>
              </div>

              <div className="space-y-1 bg-white p-3.5 rounded-2xl border border-[#F0E6D8]">
                <div className="text-xl">🏡</div>
                <h4 className="font-heading text-sm font-bold text-[#2B2623]">Warmth in Spaces</h4>
                <p className="text-xs text-[#7A6F66]">Infusing living rooms and bedrooms with peaceful, meaningful colors.</p>
              </div>

              <div className="space-y-1 bg-white p-3.5 rounded-2xl border border-[#F0E6D8]">
                <div className="text-xl">🎨</div>
                <h4 className="font-heading text-sm font-bold text-[#2B2623]">Thought & Color</h4>
                <p className="text-xs text-[#7A6F66]">Uniting chaos and calm to create harmony between canvas and viewer.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setPage('about')}
                className="btn-sunshine px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Renuka</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
