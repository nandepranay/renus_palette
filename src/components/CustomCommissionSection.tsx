import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { ARTIST_CONFIG, getArtworkUrl, getWhatsAppLink } from '../config/artistConfig';
import { MessageCircle, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const CustomCommissionSection: React.FC = () => {
  const { setPage } = useGallery();

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
    <section id="custom-art" className="py-16 sm:py-24 bg-gradient-to-br from-[#FFF4D2] via-[#FFEAE8]/60 to-[#FFFDF9] border-y border-[#F0E6D8] px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Description & Steps */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6161] text-white text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Hand-Painted Canvases</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2B2623] tracking-tight leading-tight">
              🎨 Want Custom Art? <br />
              <span className="text-[#FF6161]">Let's Create Together!</span>
            </h2>

            <p className="text-base text-[#5C5248] leading-relaxed">
              I love creating unique, personalized portrait and nature pieces tailored just for you! Whether it's a family portrait, a couple's anniversary gift, a beloved pet portrait, or a dreamy landscape of your favorite scenery.
            </p>

            {/* 3 Step Process */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/90 p-4 rounded-2xl border border-[#F0E6D8] shadow-xs">
                <span className="w-8 h-8 rounded-full bg-[#FFD13B] text-[#2B2623] font-bold text-xs flex items-center justify-center mb-2">
                  1
                </span>
                <h4 className="font-heading font-bold text-sm text-[#2B2623] mb-1">Share Your Idea 📸</h4>
                <p className="text-xs text-[#7A6F66]">Send your photo, preferred canvas scale, and color ideas.</p>
              </div>

              <div className="bg-white/90 p-4 rounded-2xl border border-[#F0E6D8] shadow-xs">
                <span className="w-8 h-8 rounded-full bg-[#FF6161] text-white font-bold text-xs flex items-center justify-center mb-2">
                  2
                </span>
                <h4 className="font-heading font-bold text-sm text-[#2B2623] mb-1">Renuka Paints 🎨</h4>
                <p className="text-xs text-[#7A6F66]">Hand-painted in professional artist acrylics with heart and care.</p>
              </div>

              <div className="bg-white/90 p-4 rounded-2xl border border-[#F0E6D8] shadow-xs">
                <span className="w-8 h-8 rounded-full bg-[#2DD4BF] text-white font-bold text-xs flex items-center justify-center mb-2">
                  3
                </span>
                <h4 className="font-heading font-bold text-sm text-[#2B2623] mb-1">Delivered Home 📦</h4>
                <p className="text-xs text-[#7A6F66]">Protective multi-layer transit packing shipped safely pan-India.</p>
              </div>
            </div>

            {/* Direct Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral px-6 py-3.5 text-sm font-bold flex items-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp ({ARTIST_CONFIG.phone})</span>
              </a>

              <button
                onClick={scrollToPricing}
                className="px-6 py-3.5 rounded-full bg-white border border-[#EAE0D4] text-[#2B2623] hover:bg-[#FFFDF9] text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <span>View Canvas Sizes & Pricing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card using Renuka's Real Family Portrait */}
          <div className="lg:col-span-5">
            <div className="bg-white p-5 sm:p-6 rounded-3xl border-2 border-[#F0E6D8] shadow-md space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#FAF5ED] flex items-center justify-center p-1">
                <img
                  src={getArtworkUrl('artworks/family-portrait.jpg')}
                  alt="Custom Family Portrait by Renuka"
                  className="w-full h-full object-contain"
                />
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#FFD13B] text-[#2B2623] text-xs font-bold shadow-xs">
                  Commission Example 🌸
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-[#5C5248]">
                <div className="flex items-center gap-2 text-[#1E7E34] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Custom Commissions Open for This Season</span>
                </div>
                <p className="font-medium text-[#2B2623]">
                  Available in Small (12×12 to 18×24"), Medium (24×24 to 30×40"), and Large (36×48 to 48×60") sizes.
                </p>
                <p className="text-[#FF6161] font-semibold">
                  Direct Artist Contact: {ARTIST_CONFIG.phone} | {ARTIST_CONFIG.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
