import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { ArrowRight, Award, HeartHandshake, Eye } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { setPage } = useGallery();

  return (
    <section className="py-20 sm:py-28 bg-[#F5F1E8] border-y border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Editorial Artwork Image with Framed Overlap */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-3 sm:p-5 bg-white border border-[#DDD5C5] shadow-2xl">
              <div className="aspect-4/5 sm:aspect-5/6 overflow-hidden bg-[#E2D9C8]">
                <img
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
                  alt="Fine art studio curation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Curatorial Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#191817] text-[#FAF8F5] p-5 sm:p-6 max-w-xs shadow-2xl border border-[#3E3A34] hidden sm:block">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-mono block mb-1">
                  Our Philosophy
                </span>
                <p className="font-serif text-sm italic leading-snug">
                  “Art belongs in living sanctuaries, breathing life into spaces where human stories unfold.”
                </p>
                <p className="text-[10px] text-[#A8987E] mt-2 font-mono uppercase">— Renu Sengupta, Founder</p>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              <span>The Origin of renus_palette</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] font-normal tracking-tight leading-tight">
              Where Emotion Meets Canvas
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6E685F] leading-relaxed font-sans">
              <p>
                At <strong className="text-[#191817] font-medium">renus_palette</strong>, we believe that choosing a piece of original art is not an interior decoration transaction—it is an intimate dialogue between the artist's soul and your sanctuary.
              </p>
              <p>
                Founded as an independent curatorial bridge for exceptional subcontinental and international painters, our gallery champions authenticity, textural depth, and uncompromising studio integrity. We curate works that command presence, spark conversations, and grow richer with every passing year.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E2D9C8]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Award className="w-4 h-4" />
                  <h4 className="font-serif text-sm font-semibold text-[#191817]">100% Original</h4>
                </div>
                <p className="text-xs text-[#736E65]">Physically signed certificate of provenance with every canvas.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Eye className="w-4 h-4" />
                  <h4 className="font-serif text-sm font-semibold text-[#191817]">Direct Studio Access</h4>
                </div>
                <p className="text-xs text-[#736E65]">Fair compensation directly empowering master studio artists.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <HeartHandshake className="w-4 h-4" />
                  <h4 className="font-serif text-sm font-semibold text-[#191817]">White-Glove Care</h4>
                </div>
                <p className="text-xs text-[#736E65]">Custom timber crating and insured transit to your residence.</p>
              </div>
            </div>

            {/* Our Story Button */}
            <div className="pt-4">
              <button
                onClick={() => setPage('about')}
                className="px-8 py-4 bg-[#191817] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] transition-all duration-300 flex items-center gap-3 group"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#DFBA73] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
