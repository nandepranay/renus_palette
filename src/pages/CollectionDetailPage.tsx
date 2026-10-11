import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { collections } from '../data/collections';
import { artworks } from '../data/artworks';
import { ArtworkCard } from '../components/ArtworkCard';
import { ArrowLeft, Sparkles, ArrowRight } from 'lucide-react';

export const CollectionDetailPage: React.FC = () => {
  const { selectedCollectionId, setPage, navigateToCollection, navigateToExplore } = useGallery();

  const activeCollection =
    collections.find((c) => c.id === selectedCollectionId) || collections[0];

  const collectionArtworks = artworks.filter(
    (a) =>
      a.categorySlug === activeCollection.id ||
      (a.secondaryCategories &&
        a.secondaryCategories.some((sc) => sc.toLowerCase() === activeCollection.title.toLowerCase()))
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
          className="inline-flex items-center gap-2 text-xs font-bold text-[#5C5248] hover:text-[#FF6161] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Collection Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#2B2623] via-[#3D3531] to-[#2B2623] text-white p-8 sm:p-14 mb-16 rounded-3xl border-2 border-[#F0E6D8] shadow-lg">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={activeCollection.imageUrl}
            alt={activeCollection.title}
            className="w-full h-full object-cover opacity-20 scale-105"
          />
        </div>

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs text-[#FFD13B] text-xs font-bold rounded-full border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Collection</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {activeCollection.title}
          </h1>

          <p className="text-xs uppercase tracking-wider text-[#FFD13B] font-bold">
            {activeCollection.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#E2D9D2] leading-relaxed">
            {activeCollection.description}
          </p>

          {/* Curator Note Box */}
          <div className="p-4 bg-white/10 backdrop-blur-xs rounded-2xl border-l-4 border-[#FFD13B] text-xs text-[#FFFDF9] italic leading-relaxed">
            “{activeCollection.curatorNote}”
          </div>
        </div>
      </div>

      {/* Collection Artworks Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F0E6D8]">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2B2623]">
            Paintings in {activeCollection.title}
          </h2>
          <p className="text-xs text-[#7A6F66] mt-1">
            Displaying {collectionArtworks.length} original hand-painted {collectionArtworks.length === 1 ? 'canvas' : 'canvases'}
          </p>
        </div>

        <button
          onClick={() => navigateToExplore()}
          className="text-xs font-bold text-[#FF6161] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>View All Paintings</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Artworks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
        {collectionArtworks.map((art) => (
          <ArtworkCard key={art.id} artwork={art} />
        ))}
      </div>

      {/* Explore Other Collections Bar */}
      <div className="pt-12 border-t border-[#F0E6D8]">
        <h3 className="font-heading text-xl font-bold text-[#2B2623] mb-6">
          Explore Other Collections
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {otherCollections.map((col) => (
            <div
              key={col.id}
              onClick={() => navigateToCollection(col.id)}
              className="p-4 bg-white rounded-2xl border-2 border-[#F0E6D8] hover:border-[#FF6161] cursor-pointer hover-pop transition-all text-center flex flex-col items-center"
            >
              <img
                src={col.imageUrl}
                alt={col.title}
                className="w-16 h-16 rounded-xl object-contain bg-[#FAF5ED] mb-2 p-1 border border-[#F0E6D8]"
              />
              <h4 className="font-heading font-bold text-xs text-[#2B2623] hover:text-[#FF6161]">
                {col.title}
              </h4>
              <span className="text-[10px] text-[#7A6F66] mt-0.5">
                {col.artworkCount} Works
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
