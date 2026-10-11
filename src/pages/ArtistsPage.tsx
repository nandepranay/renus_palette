import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { artists } from '../data/artists';
import { artworks } from '../data/artworks';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';

export const ArtistsPage: React.FC = () => {
  const { navigateToArtist, navigateToArtwork, formatPrice } = useGallery();

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Visionaries</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#191817] font-normal tracking-tight mb-4">
          Featured Artists
        </h1>
        <p className="text-sm sm:text-base text-[#6E685F] leading-relaxed font-sans">
          Discover master studio painters from Mumbai, Santiniketan, Jaipur, Bengaluru, and Kochi. Each artist brings uncompromising material mastery and poetic vision to the canvas.
        </p>
      </div>

      {/* Artists Roster */}
      <div className="space-y-16">
        {artists.map((artist, idx) => {
          const sampleWorks = artworks.filter((a) => a.artistId === artist.id).slice(0, 3);
          const isReversed = idx % 2 === 1;

          return (
            <div
              key={artist.id}
              className="bg-white border border-[#E2D9C8] p-6 sm:p-10 shadow-xs hover:border-[#C5A059] transition-all"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Left/Right: Portrait and Bio */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={artist.profileImage}
                      alt={artist.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-[#DDD5C5]"
                    />
                    <div>
                      <h2
                        onClick={() => navigateToArtist(artist.id)}
                        className="font-serif text-2xl sm:text-3xl text-[#191817] hover:text-[#C5A059] cursor-pointer transition-colors"
                      >
                        {artist.name}
                      </h2>
                      <p className="text-xs uppercase tracking-wider text-[#A38038] font-medium">
                        {artist.title}
                      </p>
                      <p className="text-xs text-[#736E65] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#C5A059]" />
                        <span>{artist.location}</span>
                      </p>
                    </div>
                  </div>

                  <blockquote className="p-3.5 bg-[#F5F1E8] border-l-2 border-[#C5A059] text-xs font-serif italic text-[#2D2B29] leading-relaxed">
                    {artist.statement}
                  </blockquote>

                  <p className="text-xs text-[#6E685F] leading-relaxed line-clamp-3">
                    {artist.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {artist.mediums.map((m) => (
                      <span
                        key={m}
                        className="px-2 py-0.5 bg-[#FAF8F5] border border-[#DDD5C5] text-[11px] text-[#555]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => navigateToArtist(artist.id)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#191817] hover:text-[#C5A059] transition-colors"
                    >
                      <span>Explore Artist Profile & Works ({artist.artworksCount})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right/Left: Artwork Preview Carousel / Grid */}
                <div className="lg:col-span-7">
                  <div className="text-[11px] uppercase tracking-wider text-[#8C8578] mb-3 font-mono">
                    Recent Canvases in Gallery:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {sampleWorks.map((work) => (
                      <div
                        key={work.id}
                        onClick={() => navigateToArtwork(work.id)}
                        className="group/work cursor-pointer bg-[#FAF8F5] border border-[#E2D9C8] p-2 hover:border-[#C5A059] transition-all"
                      >
                        <div className="aspect-square overflow-hidden bg-[#EAE5D9] mb-2">
                          <img
                            src={work.imageUrl}
                            alt={work.title}
                            className="w-full h-full object-cover group-hover/work:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <h4 className="font-serif text-xs text-[#191817] truncate font-medium group-hover/work:text-[#C5A059] transition-colors">
                          {work.title}
                        </h4>
                        <p className="text-[11px] font-mono text-[#736E65]">
                          {formatPrice(work.price)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
