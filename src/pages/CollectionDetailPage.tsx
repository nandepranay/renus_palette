import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { collections } from '../data/collections';
import { artworks } from '../data/artworks';
import { ArtworkCard } from '../components/ArtworkCard';
import { ArrowLeft, Sparkles, Compass } from 'lucide-react';

export const CollectionDetailPage: React.FC = () => {
  const { selectedCollectionId, setPage, navigateToCollection, navigateToExplore } = useGallery();

  const activeCollection =
    collections.find((c) => c.id === selectedCollectionId) || collections[0];

  const collectionArtworks = artworks.filter(
    (a) => a.collectionId === activeCollection.id
  );

  const otherCollections = collections.filter(
    (c) => c.id !== activeCollection.id
  );

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={() => setPage('home')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#6E685F] hover:text-[#191817] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Collection Hero Banner */}
      <div className="relative overflow-hidden bg-[#191817] text-white p-8 sm:p-14 mb-16 border border-[#3E3A34] shadow-xl">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={activeCollection.imageUrl}
            alt={activeCollection.title}
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#191817] via-[#191817]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs text-[#E8DCC4] text-[11px] uppercase tracking-[0.2em] font-mono mb-4 border border-white/15">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>Curated Collection</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight mb-3">
            {activeCollection.title}
          </h1>

          <p className="text-sm uppercase tracking-widest text-[#C5A059] mb-5 font-sans">
            {activeCollection.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#D5CEBF] leading-relaxed mb-6 font-sans">
            {activeCollection.description}
          </p>

          {/* Curator Note Box */}
          <div className="p-4 bg-white/5 backdrop-blur-xs border-l-2 border-[#C5A059] text-xs text-[#E8E2D5] italic font-serif leading-relaxed">
            {activeCollection.curatorNote}
          </div>
        </div>
      </div>

      {/* Collection Artworks Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E2D5]">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#191817]">
            Artworks in {activeCollection.title}
          </h2>
          <p className="text-xs text-[#736E65] mt-1">
            Displaying {collectionArtworks.length} certified original canvases
          </p>
        </div>

        <button
          onClick={() => navigateToExplore()}
          className="text-xs uppercase tracking-wider text-[#191817] hover:text-[#C5A059] font-medium flex items-center gap-1 transition-colors"
        >
          <span>View All Artworks</span>
          <span>→</span>
        </button>
      </div>

      {/* Artworks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-20">
        {collectionArtworks.map((art) => (
          <ArtworkCard key={art.id} artwork={art} />
        ))}
      </div>

      {/* Explore Other Collections Bar */}
      <div className="pt-12 border-t border-[#E8E2D5]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium mb-6">
          <Compass className="w-4 h-4" />
          <span>Explore Other Aesthetic Collections</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {otherCollections.map((col) => (
            <button
              key={col.id}
              onClick={() => navigateToCollection(col.id)}
              className="group p-4 bg-white border border-[#E2D9C8] hover:border-[#C5A059] text-left transition-all hover:shadow-md cursor-pointer"
            >
              <h4 className="font-serif text-base text-[#191817] group-hover:text-[#C5A059] transition-colors truncate">
                {col.title}
              </h4>
              <p className="text-[11px] text-[#8C8578] truncate mt-0.5">{col.subtitle}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
