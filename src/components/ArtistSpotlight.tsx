import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { artists } from '../data/artists';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

export const ArtistSpotlight: React.FC = () => {
  const { navigateToArtist, setPage } = useGallery();
  const featuredArtists = artists.filter((a) => a.featured).slice(0, 4);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E8E2D5]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Crafts</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] font-normal tracking-tight">
            Artist Spotlight
          </h2>
        </div>
        <p className="text-sm text-[#6E685F] max-w-md mt-4 md:mt-0 font-sans leading-relaxed">
          Behind every brushstroke is a lifetime of dedicated studio practice. Discover the visionaries shaping contemporary Indian canvas culture.
        </p>
      </div>

      {/* Editorial Artist Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredArtists.map((artist) => (
          <div
            key={artist.id}
            onClick={() => navigateToArtist(artist.id)}
            className="group cursor-pointer flex flex-col justify-between bg-white border border-[#E2D9C8] p-6 transition-all duration-300 hover:shadow-xl hover:border-[#C5A059]"
          >
            <div>
              {/* Portrait Image with subtle circular or museum frame */}
              <div className="relative aspect-square overflow-hidden bg-[#EFE8DA] mb-6 border border-[#DDD5C5]">
                <img
                  src={artist.profileImage}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 grayscale-20 group-hover:grayscale-0"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-[#191817] flex items-center gap-1 border border-[#DDD5C5]">
                  <MapPin className="w-3 h-3 text-[#C5A059]" />
                  <span>{artist.location.split(',')[0]}</span>
                </div>
              </div>

              {/* Title & Name */}
              <h3 className="font-serif text-2xl text-[#191817] group-hover:text-[#C5A059] transition-colors mb-1 font-medium">
                {artist.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#A38038] font-medium mb-3">
                {artist.title}
              </p>

              {/* Short Bio */}
              <p className="text-xs text-[#6E685F] line-clamp-3 leading-relaxed mb-4 font-sans">
                {artist.bio}
              </p>
            </div>

            {/* View Artist Link */}
            <div className="pt-4 border-t border-[#F0EBE0] flex items-center justify-between">
              <span className="text-xs text-[#8C8578] font-mono">{artist.artworksCount} Works in Gallery</span>
              <span className="text-xs uppercase tracking-wider text-[#191817] group-hover:text-[#C5A059] font-medium flex items-center gap-1 transition-colors">
                <span>View Artist</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View all artists button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => setPage('artists')}
          className="text-xs uppercase tracking-[0.2em] text-[#6E685F] hover:text-[#191817] border-b border-[#C5A059] pb-1 font-medium transition-colors"
        >
          Explore All Gallery Artists →
        </button>
      </div>
    </section>
  );
};
