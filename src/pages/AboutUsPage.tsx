import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { ARTIST_CONFIG, getArtworkUrl, getWhatsAppLink } from '../config/artistConfig';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const { navigateToExplore } = useGallery();

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#FFF4D2] text-[#8C6D00] mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6161]" />
          <span>The Artist & Studio</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#2B2623] tracking-tight mb-4">
          About Renuka & {ARTIST_CONFIG.brandName}
        </h1>
        <p className="text-lg text-[#5C5248] leading-relaxed max-w-2xl mx-auto font-medium">
          “{ARTIST_CONFIG.about.shortBio}”
        </p>
      </div>

      {/* Main Two-Column Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
        {/* Left Column: Real Studio Artwork */}
        <div className="lg:col-span-6 relative">
          <div className="p-3.5 sm:p-5 bg-white border-2 border-[#F0E6D8] rounded-3xl shadow-sm overflow-hidden">
            <div className="aspect-4/3 sm:aspect-16/11 bg-[#FAF5ED] rounded-2xl overflow-hidden flex items-center justify-center p-2">
              <img
                src={getArtworkUrl('artworks/lotus-pond.jpg')}
                alt="Lotus Pond by Renuka"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -right-3 sm:-right-5 p-5 bg-[#FFD13B] text-[#2B2623] rounded-2xl shadow-md border-2 border-white hidden sm:block max-w-xs">
            <p className="text-xs font-extrabold">🎨 {ARTIST_CONFIG.brandName}</p>
            <p className="text-[11px] font-medium text-[#453D37] mt-1 leading-relaxed">
              Original acrylic paintings, custom commission pieces, and creative studio process vlogs.
            </p>
          </div>
        </div>

        {/* Right Column: Confirmed Profile Ideas from PDF */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2B2623] leading-tight">
            Art Intended to Connect Personally 🌸
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#5C5248] leading-relaxed">
            <p>
              Welcome to my colorful world! I am <strong className="text-[#2B2623] font-bold">Renuka</strong>, an artist creating original paintings designed to bring beauty, wonder, and emotion into everyday homes.
            </p>
            <p>
              Every artwork I create is <strong className="text-[#2B2623]">intended to connect personally with people</strong>. Paintings shouldn't just be decoration—they should hold quiet conversations, trigger fond memories, and add lasting <strong className="text-[#2B2623]">warmth and meaning to spaces</strong>.
            </p>
            <p>
              At the easel, the creative process brings together <strong className="text-[#FF6161] font-bold">thought and color, chaos and calm, and the artwork and its viewer</strong>. From intricate botanical studies and sunset tides to deeply personal family and child portraits, each piece is painted with genuine care.
            </p>
            <div className="p-4 rounded-2xl bg-[#FFEAE8] border border-[#FFCCD0] text-[#2B2623] space-y-1">
              <strong className="text-[#FF6161] font-bold block text-sm">🎨 Want Custom Art?</strong>
              <p className="text-xs sm:text-sm">
                I love creating unique, personalized portrait and nature pieces tailored just for you! Message me to discuss concepts, colors, canvas sizes, or to book a custom commission.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => navigateToExplore()}
              className="btn-sunshine px-7 py-3.5 text-sm font-bold flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Explore My Paintings</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral px-6 py-3.5 text-sm font-bold flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Custom Art on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Core Philosophical Pillars from PDF */}
      <div className="bg-[#FFF9E6] border-2 border-[#FFE082] rounded-3xl p-8 sm:p-12 mb-16 shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2B2623] mb-2">
            The Philosophy Behind Every Canvas
          </h3>
          <p className="text-xs text-[#7A6F66]">Core principles guiding Renuka's art studio and original works</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#F0E6D8] shadow-xs space-y-2">
            <span className="text-3xl">💛</span>
            <h4 className="font-heading font-bold text-base text-[#2B2623]">Personal Connection</h4>
            <p className="text-xs text-[#5C5248] leading-relaxed">
              Every painting is created with the purpose of forming an intimate, lasting emotional bond with the people who live with it.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#F0E6D8] shadow-xs space-y-2">
            <span className="text-3xl">🏡</span>
            <h4 className="font-heading font-bold text-base text-[#2B2623]">Warmth & Meaning</h4>
            <p className="text-xs text-[#5C5248] leading-relaxed">
              Artwork crafted to transform spaces into uplifting, tranquil sanctuaries filled with radiant color and personal significance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#F0E6D8] shadow-xs space-y-2">
            <span className="text-3xl">🎨</span>
            <h4 className="font-heading font-bold text-base text-[#2B2623]">Thought & Color</h4>
            <p className="text-xs text-[#5C5248] leading-relaxed">
              Uniting chaos and calm through layered brushwork and expressive hues, creating complete harmony between the canvas and its viewer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
