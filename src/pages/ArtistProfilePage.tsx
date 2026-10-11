import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { artists } from '../data/artists';
import { artworks } from '../data/artworks';
import { ArtworkCard } from '../components/ArtworkCard';
import { ArrowLeft, MapPin, Award, Palette, Sparkles } from 'lucide-react';

export const ArtistProfilePage: React.FC = () => {
  const { selectedArtistId, setPage, navigateToArtist } = useGallery();

  const artist = artists.find((a) => a.id === selectedArtistId) || artists[0];
  const artistArtworks = artworks.filter((a) => a.artistId === artist.id);
  const otherArtists = artists.filter((a) => a.id !== artist.id);

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={() => setPage('artists')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#6E685F] hover:text-[#191817] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Artists</span>
        </button>
      </div>

      {/* Artist Profile Header Hero */}
      <div className="bg-white border border-[#E2D9C8] p-6 sm:p-12 mb-16 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
            <div className="w-48 sm:w-60 h-48 sm:h-60 overflow-hidden bg-[#EAE5D9] border-2 border-[#DDD5C5] shadow-lg mb-4">
              <img
                src={artist.profileImage}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-[#736E65]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Studio: {artist.location}</span>
            </div>
          </div>

          {/* Bio & Details Column */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gallery Resident Master</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-[#191817] font-normal tracking-tight">
              {artist.name}
            </h1>

            <p className="text-xs uppercase tracking-widest text-[#A38038] font-medium font-sans">
              {artist.title}
            </p>

            <blockquote className="p-4 bg-[#F5F1E8] border-l-2 border-[#C5A059] font-serif text-sm sm:text-base italic text-[#2D2B29] leading-relaxed">
              {artist.statement}
            </blockquote>

            <p className="text-sm text-[#6E685F] leading-relaxed font-sans">
              {artist.bio}
            </p>

            {/* Mediums & Exhibitions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#EFEBE1] text-xs">
              <div>
                <div className="flex items-center gap-1.5 font-semibold text-[#191817] mb-2 uppercase tracking-wider">
                  <Palette className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Signature Mediums</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {artist.mediums.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 bg-[#F5F1E8] border border-[#DDD5C5] text-[#555]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-semibold text-[#191817] mb-2 uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Selected Exhibitions</span>
                </div>
                <ul className="space-y-1 text-[#736E65]">
                  {artist.exhibitions.map((ex, i) => (
                    <li key={i} className="line-clamp-1">
                      • {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artworks by Artist */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E2D5]">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#191817]">
              Available Works by {artist.name}
            </h2>
            <p className="text-xs text-[#736E65] mt-1">
              {artistArtworks.length} certified original canvases currently cataloged
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {artistArtworks.map((art) => (
            <ArtworkCard key={art.id} artwork={art} />
          ))}
        </div>
      </div>

      {/* Other Artists Bar */}
      <div className="pt-12 border-t border-[#E8E2D5]">
        <h3 className="font-serif text-2xl text-[#191817] mb-6">Explore Other Featured Artists</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {otherArtists.map((a) => (
            <div
              key={a.id}
              onClick={() => navigateToArtist(a.id)}
              className="p-3 bg-white border border-[#E2D9C8] hover:border-[#C5A059] transition-all cursor-pointer group text-center"
            >
              <img
                src={a.profileImage}
                alt={a.name}
                className="w-16 h-16 rounded-full mx-auto object-cover mb-2 border border-[#DDD5C5]"
              />
              <h4 className="font-serif text-sm font-medium text-[#191817] group-hover:text-[#C5A059] transition-colors truncate">
                {a.name}
              </h4>
              <p className="text-[10px] text-[#8C8578] truncate">{a.location.split(',')[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
