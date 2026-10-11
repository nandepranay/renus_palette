import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const CustomCommissionSection: React.FC = () => {
  const { setPage } = useGallery();

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#FFF4D2] via-[#FFEAE8]/60 to-[#FFFDF9] border-y border-[#F0E6D8] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Description & Steps */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6161] text-white text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized For You</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2B2623] tracking-tight leading-tight">
              🎨 Want Custom Art? <br />
              <span className="text-[#FF6161]">Let's Create Together!</span>
            </h2>

            <p className="text-base text-[#5C5248] leading-relaxed">
              I love creating unique, personalized portrait and nature pieces tailored just for you! Whether it's a family portrait, a couple's anniversary gift, a beloved pet, or a dreamy landscape of your favorite travel spot.
            </p>

            {/* 3 Step Process (Ru&Chai style playful steps) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/90 p-4 rounded-2xl border border-[#F0E6D8] shadow-xs">
                <span className="w-8 h-8 rounded-full bg-[#FFD13B] text-[#2B2623] font-bold text-xs flex items-center justify-center mb-2">
                  1
                </span>
                <h4 className="font-heading font-bold text-sm text-[#2B2623] mb-1">Share Your Idea 📸</h4>
                <p className="text-xs text-[#7A6F66]">Send your photo, favorite color palette, or wall dimensions.</p>
              </div>

              <div className="bg-white/90 p-4 rounded-2xl border border-[#F0E6D8] shadow-xs">
                <span className="w-8 h-8 rounded-full bg-[#FF6161] text-white font-bold text-xs flex items-center justify-center mb-2">
                  2
                </span>
                <h4 className="font-heading font-bold text-sm text-[#2B2623] mb-1">Renuka Paints 🎨</h4>
                <p className="text-xs text-[#7A6F66]">Hand-painted in vibrant acrylics or dreamy watercolors with love.</p>
              </div>

              <div className="bg-white/90 p-4 rounded-2xl border border-[#F0E6D8] shadow-xs">
                <span className="w-8 h-8 rounded-full bg-[#2DD4BF] text-white font-bold text-xs flex items-center justify-center mb-2">
                  3
                </span>
                <h4 className="font-heading font-bold text-sm text-[#2B2623] mb-1">Delivered Home 📦</h4>
                <p className="text-xs text-[#7A6F66]">Securely packed in custom protection crates and shipped across India.</p>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="https://wa.me/919096932011?text=Hi%20Renuka,%20I%20love%20your%20art%20and%20would%20like%20to%20book%20a%20custom%20portrait/nature%20painting!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral px-6 py-3.5 text-sm font-bold flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 9096932011)</span>
              </a>

              <button
                onClick={() => setPage('contact')}
                className="px-6 py-3.5 rounded-full bg-white border border-[#EAE0D4] text-[#2B2623] hover:bg-[#FFFDF9] text-xs font-bold transition-all shadow-xs"
              >
                Book via Contact Form 💌
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-3xl border-2 border-[#F0E6D8] shadow-md space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF5ED]">
                <img
                  src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80"
                  alt="Custom portrait painting"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#FFD13B] text-[#2B2623] text-xs font-bold shadow-xs">
                  Commission Showcase 🌸
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-[#5C5248]">
                <div className="flex items-center gap-2 text-[#1E7E34] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Currently Accepting Commissions for this Month</span>
                </div>
                <p>Sizes: 10x12", 12x16", 18x24", and large statement canvases.</p>
                <p className="text-[#FF6161] font-semibold">
                  Direct Artist Contact: +91 9096932011 | dhirajtonge1@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
