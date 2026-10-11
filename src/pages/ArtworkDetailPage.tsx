import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { artworks } from '../data/artworks';
import { ArtworkCard } from '../components/ArtworkCard';
import type { CartItem } from '../types';
import {
  Heart,
  Maximize2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  Share2,
  Mail,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const ArtworkDetailPage: React.FC = () => {
  const {
    selectedArtworkId,
    setPage,
    navigateToArtist,
    navigateToCollection,
    navigateToExplore,
    addToCart,
    toggleWishlist,
    isInWishlist,
    openRoomView,
    formatPrice,
    addToast
  } = useGallery();

  const artwork = artworks.find((a) => a.id === selectedArtworkId) || artworks[0];
  const isFavorited = isInWishlist(artwork.id);

  const [activeImage, setActiveImage] = useState<string>(artwork.imageUrl);
  const [framingOption, setFramingOption] = useState<CartItem['framingOption']>('unframed');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);

  const framingPrices: Record<CartItem['framingOption'], number> = {
    unframed: 0,
    'classic-oak': 6500,
    'matte-black': 6500,
    'champagne-gold': 6500
  };

  const currentPrice = artwork.price + framingPrices[framingOption];

  // Related artworks
  const relatedArtworks = artworks
    .filter((a) => a.id !== artwork.id && (a.collectionId === artwork.collectionId || a.artistId === artwork.artistId))
    .slice(0, 4);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast({
      type: 'info',
      title: 'Link Copied',
      description: `Artwork link copied to clipboard.`
    });
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs text-[#736E65] mb-8 font-sans">
        <button onClick={() => setPage('home')} className="hover:text-[#191817]">
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={() => navigateToExplore()} className="hover:text-[#191817]">
          Artworks
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button
          onClick={() => navigateToCollection(artwork.collectionId)}
          className="hover:text-[#191817]"
        >
          {artwork.collectionName}
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#191817] font-medium truncate max-w-[200px]">{artwork.title}</span>
      </nav>

      {/* Main Two-Column Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
        {/* Left Column: Artwork Image Presentation */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Museum Framed Display */}
          <div className="relative bg-white border border-[#E2D9C8] p-4 sm:p-8 shadow-sm flex items-center justify-center min-h-[420px] sm:min-h-[580px]">
            {/* Museum Matting */}
            <div className="relative w-full h-full flex items-center justify-center bg-[#F9F7F2] p-4 border border-[#ECE5D8] shadow-inner">
              <img
                src={activeImage}
                alt={artwork.title}
                className="max-h-[500px] w-auto object-contain transition-all duration-300 shadow-md"
              />
            </div>

            {/* Badges on artwork */}
            <div className="absolute top-8 left-8 flex flex-col gap-1.5 z-10 pointer-events-none">
              {artwork.isOriginal && (
                <span className="px-3 py-1 bg-[#191817]/95 text-white text-[10px] uppercase tracking-widest font-mono">
                  100% Original Canvas
                </span>
              )}
              {artwork.isLimitedEdition && (
                <span className="px-3 py-1 bg-[#C5A059] text-[#191817] text-[10px] uppercase tracking-widest font-mono font-bold">
                  {artwork.editionDetails || 'Limited Edition'}
                </span>
              )}
            </div>

            {/* Top Right Actions */}
            <div className="absolute top-8 right-8 flex items-center gap-2 z-10">
              <button
                onClick={handleCopyLink}
                className="w-9 h-9 rounded-full bg-white/95 border border-[#DDD5C5] text-[#4A4742] hover:text-[#191817] flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                title="Share artwork"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => toggleWishlist(artwork.id)}
                className="w-9 h-9 rounded-full bg-white/95 border border-[#DDD5C5] flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                title={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isFavorited ? 'text-[#C08081] fill-[#C08081]' : 'text-[#6E685F]'
                  }`}
                />
              </button>
            </div>

            {/* Virtual Room View Floating Button */}
            <button
              onClick={() => openRoomView(artwork)}
              className="absolute bottom-8 right-8 px-4 py-2 bg-[#191817]/90 hover:bg-[#191817] text-white text-xs uppercase tracking-wider font-medium backdrop-blur-xs flex items-center gap-2 shadow-lg transition-transform hover:scale-105 cursor-pointer z-10"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>View in a Room</span>
            </button>
          </div>

          {/* Alternate Angle Thumbnails */}
          {artwork.secondaryImageUrl && (
            <div className="flex gap-3">
              <button
                onClick={() => setActiveImage(artwork.imageUrl)}
                className={`w-20 h-20 border-2 overflow-hidden transition-all ${
                  activeImage === artwork.imageUrl ? 'border-[#191817]' : 'border-transparent opacity-70'
                }`}
              >
                <img src={artwork.imageUrl} alt="Primary angle" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setActiveImage(artwork.secondaryImageUrl!)}
                className={`w-20 h-20 border-2 overflow-hidden transition-all ${
                  activeImage === artwork.secondaryImageUrl ? 'border-[#191817]' : 'border-transparent opacity-70'
                }`}
              >
                <img src={artwork.secondaryImageUrl} alt="Detail brushwork" className="w-full h-full object-cover" />
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Title, Artist, Pricing, Framing, Acquisition */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A38038] font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{artwork.collectionName}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191817] font-normal tracking-tight leading-tight mb-2">
              {artwork.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-[#6E685F]">
              <span>By</span>
              <button
                onClick={() => navigateToArtist(artwork.artistId)}
                className="font-medium text-[#191817] hover:text-[#C5A059] underline underline-offset-4"
              >
                {artwork.artistName}
              </button>
              <span>•</span>
              <span>{artwork.artistLocation} ({artwork.year})</span>
            </div>
          </div>

          {/* Price Block */}
          <div className="p-5 bg-white border border-[#E2D9C8] space-y-2">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#191817]">
                  {formatPrice(currentPrice)}
                </span>
                {artwork.originalPrice && (
                  <span className="text-sm text-[#8C8578] line-through ml-3">
                    {formatPrice(artwork.originalPrice)}
                  </span>
                )}
              </div>

              <span className="px-2.5 py-1 bg-[#EBF2EE] text-[#4A6B5D] text-xs font-medium uppercase tracking-wider">
                Available In Stock
              </span>
            </div>
            <p className="text-[11px] text-[#736E65]">
              Price inclusive of all taxes (GST 12%) & bespoke museum wooden crate delivery.
            </p>
          </div>

          {/* Framing Selector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="uppercase tracking-wider font-semibold text-[#191817]">
                Custom Art Framing
              </span>
              <span className="text-[#8C8578]">Archival conservation framing</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {(
                [
                  { id: 'unframed', name: 'Unframed Stretched', price: 'Included' },
                  { id: 'classic-oak', name: 'Solid Natural Oak', price: '+₹6,500' },
                  { id: 'matte-black', name: 'Museum Matte Black', price: '+₹6,500' },
                  { id: 'champagne-gold', name: 'Champagne Gold Leaf', price: '+₹6,500' },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFramingOption(f.id)}
                  className={`p-3 border text-left flex flex-col justify-between transition-all ${
                    framingOption === f.id
                      ? 'border-[#191817] bg-[#F5F1E8] font-medium'
                      : 'border-[#DDD5C5] bg-white text-[#555] hover:border-[#999]'
                  }`}
                >
                  <span className="text-xs text-[#191817]">{f.name}</span>
                  <span className="text-[11px] text-[#A38038] font-mono mt-1">{f.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Acquisition Call To Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={() => addToCart(artwork, framingOption)}
              className="w-full py-4 bg-[#191817] text-[#FAF8F5] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#C5A059] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Add to Art Bag — {formatPrice(currentPrice)}</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  addToCart(artwork, framingOption);
                }}
                className="py-3 bg-transparent border border-[#191817] text-[#191817] text-xs uppercase tracking-wider font-medium hover:bg-[#191817] hover:text-white transition-colors"
              >
                Acquire Now
              </button>

              <button
                onClick={() => setShowInquiryModal(true)}
                className="py-3 bg-white border border-[#DDD5C5] text-[#6E685F] hover:text-[#191817] text-xs uppercase tracking-wider font-medium hover:bg-[#F3EFE6] transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Inquire with Curator</span>
              </button>
            </div>
          </div>

          {/* Collector Assurances */}
          <div className="p-4 bg-[#F5F1E8] border border-[#E8E2D5] divide-y divide-[#E5DEC9] text-xs space-y-2.5">
            <div className="flex items-center gap-3 pt-2 first:pt-0">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <div>
                <span className="font-semibold text-[#191817]">Physical Certificate of Authenticity</span>
                <p className="text-[11px] text-[#736E65]">Signed & sealed by the artist and renus_palette curator.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Truck className="w-4 h-4 text-[#4A6B5D] shrink-0" />
              <div>
                <span className="font-semibold text-[#191817]">Complimentary Insured Art Crate Transit</span>
                <p className="text-[11px] text-[#736E65]">Dispatched within 48-72 business hours across India.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <RotateCcw className="w-4 h-4 text-[#A8987E] shrink-0" />
              <div>
                <span className="font-semibold text-[#191817]">7-Day Curatorial Home-Trial Guarantee</span>
                <p className="text-[11px] text-[#736E65]">Return without hassle if the canvas doesn't complement your sanctuary.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artwork Detailed Specifications & Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-[#E8E2D5] mb-20">
        {/* Editorial Description & Curator Note */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#191817]">About the Artwork</h3>
          <p className="text-sm sm:text-base text-[#6E685F] leading-relaxed font-sans">
            {artwork.description}
          </p>

          {artwork.curatorNote && (
            <div className="p-6 bg-[#F5F1E8] border-l-3 border-[#C5A059] space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#A38038] font-mono font-bold block">
                Curator's Note — Renu Sengupta
              </span>
              <p className="font-serif text-sm italic text-[#2D2B29] leading-relaxed">
                “{artwork.curatorNote}”
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="pt-2">
            <span className="text-xs uppercase tracking-wider text-[#8C8578] font-medium block mb-2">
              Thematic Tags:
            </span>
            <div className="flex flex-wrap gap-2">
              {artwork.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white border border-[#DDD5C5] text-xs text-[#555]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="lg:col-span-5 bg-white border border-[#E2D9C8] p-6 space-y-4">
          <h4 className="font-serif text-xl text-[#191817] border-b border-[#EFEBE1] pb-3">
            Artwork Dossier
          </h4>

          <dl className="divide-y divide-[#F0EBE0] text-xs">
            <div className="py-2.5 flex justify-between">
              <dt className="text-[#736E65]">Medium</dt>
              <dd className="font-medium text-[#191817] text-right">{artwork.medium}</dd>
            </div>
            <div className="py-2.5 flex justify-between">
              <dt className="text-[#736E65]">Surface Support</dt>
              <dd className="font-medium text-[#191817] text-right">{artwork.surface}</dd>
            </div>
            <div className="py-2.5 flex justify-between">
              <dt className="text-[#736E65]">Dimensions (Inches)</dt>
              <dd className="font-mono font-medium text-[#191817]">{artwork.dimensions}</dd>
            </div>
            <div className="py-2.5 flex justify-between">
              <dt className="text-[#736E65]">Dimensions (Metric)</dt>
              <dd className="font-mono font-medium text-[#191817]">{artwork.dimensionsCm}</dd>
            </div>
            <div className="py-2.5 flex justify-between">
              <dt className="text-[#736E65]">Orientation</dt>
              <dd className="font-medium text-[#191817] capitalize">{artwork.orientation}</dd>
            </div>
            <div className="py-2.5 flex justify-between">
              <dt className="text-[#736E65]">Year of Creation</dt>
              <dd className="font-mono font-medium text-[#191817]">{artwork.year}</dd>
            </div>
            <div className="py-2.5 flex justify-between">
              <dt className="text-[#736E65]">Signature</dt>
              <dd className="font-medium text-[#191817]">Signed by Artist on Verso & recto</dd>
            </div>
            <div className="py-2.5 flex justify-between">
              <dt className="text-[#736E65]">Authenticity Certificate</dt>
              <dd className="font-medium text-[#A38038]">Physical Embossed Certificate Included</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Related Artworks Recommendation */}
      {relatedArtworks.length > 0 && (
        <div className="pt-16 border-t border-[#E8E2D5]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#191817]">
              Related Artworks You May Admire
            </h3>
            <button
              onClick={() => navigateToExplore()}
              className="text-xs uppercase tracking-wider text-[#191817] hover:text-[#C5A059] font-medium transition-colors"
            >
              Explore Collection →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedArtworks.map((item) => (
              <ArtworkCard key={item.id} artwork={item} />
            ))}
          </div>
        </div>
      )}

      {/* Inquire with Curator Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF8F5] border border-[#E2D9C8] w-full max-w-lg p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-[#E8E2D5] pb-3">
              <h4 className="font-serif text-xl text-[#191817]">Curatorial Inquiry</h4>
              <button
                onClick={() => setShowInquiryModal(false)}
                className="text-xs text-[#736E65] hover:text-[#191817]"
              >
                Close
              </button>
            </div>

            {inquirySent ? (
              <div className="text-center py-6 space-y-3">
                <Check className="w-10 h-10 text-[#4A6B5D] mx-auto" />
                <p className="font-serif text-lg text-[#191817]">Inquiry Dispatched</p>
                <p className="text-xs text-[#736E65]">
                  Our head curator will respond regarding "{artwork.title}" within 4 business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                  addToast({
                    type: 'success',
                    title: 'Inquiry Received',
                    description: 'Our senior curator has received your inquiry.'
                  });
                }}
                className="space-y-3 text-xs"
              >
                <p className="text-[#6E685F]">
                  Requesting detailed provenance, high-resolution condition reports, or staging advice for <strong className="text-[#191817]">"{artwork.title}"</strong>.
                </p>
                <div>
                  <label className="block text-[#736E65] mb-1 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Collector or Designer Name"
                    className="w-full p-2.5 bg-white border border-[#DDD5C5]"
                  />
                </div>
                <div>
                  <label className="block text-[#736E65] mb-1 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full p-2.5 bg-white border border-[#DDD5C5]"
                  />
                </div>
                <div>
                  <label className="block text-[#736E65] mb-1 uppercase tracking-wider">Inquiry Notes</label>
                  <textarea
                    rows={3}
                    defaultValue={`I am interested in acquiring "${artwork.title}" by ${artwork.artistName}. Please share additional condition images and transit timelines.`}
                    className="w-full p-2.5 bg-white border border-[#DDD5C5]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#191817] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors"
                >
                  Send Inquiry to Gallery
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
