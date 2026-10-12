import React from 'react';
import { ARTIST_CONFIG } from '../config/artistConfig';
import { getArtworkUrl } from '../config/artistConfig';
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';

export const StudioVlogSection: React.FC = () => {
  const vlogs = [
    {
      id: 'vlog-1',
      title: 'Painting Lotus Pond • Acrylic Layering Process',
      duration: 'Studio Process',
      views: 'YouTube Vlog',
      img: getArtworkUrl('artworks/lotus-pond.jpg'),
      tag: 'Acrylics 🎨'
    },
    {
      id: 'vlog-2',
      title: 'Golden Ocean Sunset • Horizon Light & Blending',
      duration: 'Painting Tutorial',
      views: 'Studio Reel',
      img: getArtworkUrl('artworks/ocean-sunset.jpg'),
      tag: 'Landscape 🌿'
    },
    {
      id: 'vlog-3',
      title: 'Behind the Easel • Forest Landscape & Green Shading',
      duration: 'Studio Vlog',
      views: 'Behind The Scenes',
      img: getArtworkUrl('artworks/forest-landscape.jpg'),
      tag: 'Nature 🌿'
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEAE8] text-[#FF6161] text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind the Easel</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2B2623] tracking-tight">
            Studio Vlogs & Process Videos 📺
          </h2>
          <p className="text-sm text-[#7A6F66] mt-2 max-w-xl">
            Watch satisfying painting process videos, layering tutorials, and studio vlogs on my YouTube & Instagram channels.
          </p>
        </div>

        {/* Social Buttons */}
        <div className="flex items-center gap-3 mt-6 md:mt-0">
          <a
            href={ARTIST_CONFIG.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-[#FF0000] text-white text-xs font-bold hover:bg-[#CC0000] transition-colors shadow-xs flex items-center gap-2"
          >
            <YoutubeIcon className="w-4 h-4" />
            <span>Subscribe on YouTube</span>
          </a>

          <a
            href={ARTIST_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-white border border-[#F0E6D8] text-[#2B2623] hover:border-[#E1306C] hover:text-[#E1306C] text-xs font-bold transition-all shadow-xs flex items-center gap-2"
          >
            <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
            <span>{ARTIST_CONFIG.instagramHandle}</span>
          </a>
        </div>
      </div>

      {/* Vlog Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vlogs.map((vlog) => (
          <a
            key={vlog.id}
            href={ARTIST_CONFIG.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl border-2 border-[#F0E6D8] hover:border-[#FF6161] shadow-xs hover-pop p-3.5 sm:p-4 flex flex-col justify-between transition-all"
          >
            {/* Thumbnail */}
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-[#FAF5ED] mb-3.5 flex items-center justify-center p-1">
              <img
                src={vlog.img}
                alt={vlog.title}
                className="w-full h-full object-contain group-hover:scale-106 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-[#2B2623] shadow-xs">
                {vlog.tag}
              </span>

              <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono font-bold text-white">
                {vlog.duration}
              </span>
            </div>

            {/* Info */}
            <div>
              <h3 className="font-heading font-bold text-sm text-[#2B2623] group-hover:text-[#FF6161] transition-colors line-clamp-2 mb-1">
                {vlog.title}
              </h3>
              <div className="flex items-center justify-between text-[11px] text-[#7A6F66] font-medium">
                <span>{vlog.views}</span>
                <span className="text-[#FF6161] font-bold flex items-center gap-1">
                  Watch Video <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
