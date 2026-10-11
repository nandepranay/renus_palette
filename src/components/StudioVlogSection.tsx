import React from 'react';
import { Play, Sparkles } from 'lucide-react';

export const StudioVlogSection: React.FC = () => {
  const vlogs = [
    {
      title: 'Satisfying Acrylic Texture Palette Knife Painting 🎨',
      views: 'Process Video',
      img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
      duration: 'Studio Reel'
    },
    {
      title: 'Painting Dreamy Watercolor Nature Landscapes 🌿',
      views: 'Tutorial & Vlog',
      img: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=600&q=80',
      duration: 'Full Process'
    },
    {
      title: 'Custom Anniversary Portrait Commission from Scratch 👩‍🎨',
      views: 'Commission Vlog',
      img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&q=80',
      duration: 'Studio Vlog'
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEAE8] text-[#FF6161] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Scenes</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2B2623] tracking-tight">
            Inside Renuka's Studio 🎥
          </h2>
          <p className="text-sm text-[#7A6F66] mt-2 max-w-xl">
            Subscribe for a front-row seat in my studio, featuring satisfying process videos, painting tutorials, and behind-the-scenes vlogs.
          </p>
        </div>

        <div className="flex items-center gap-3 mt-6 md:mt-0">
          <a
            href="https://www.youtube.com/@renus_palette"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#FF0000] text-white text-xs font-bold hover:bg-[#CC0000] transition-colors flex items-center gap-2 shadow-xs"
          >
            <span>Subscribe on YouTube</span>
          </a>

          <a
            href="https://www.instagram.com/renus_palette?mdxt=Z2o0YWZvZjlvNGhj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#E1306C] text-white text-xs font-bold hover:bg-[#C1275B] transition-colors flex items-center gap-2 shadow-xs"
          >
            <span>Instagram Reels</span>
          </a>
        </div>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vlogs.map((vlog, idx) => (
          <a
            key={idx}
            href="https://www.youtube.com/@renus_palette"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-3xl border-2 border-[#F0E6D8] hover:border-[#FF6161] overflow-hidden p-3 shadow-xs hover-pop transition-all"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#FAF5ED] mb-3">
              <img
                src={vlog.img}
                alt={vlog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/15 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              <span className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded-full bg-black/70 text-white text-[10px] font-bold">
                {vlog.duration}
              </span>
            </div>

            <div className="px-1 pb-1">
              <span className="text-[11px] font-bold text-[#FF6161] block mb-0.5">
                {vlog.views}
              </span>
              <h3 className="font-heading font-bold text-sm text-[#2B2623] group-hover:text-[#FF6161] transition-colors line-clamp-2 leading-snug">
                {vlog.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
