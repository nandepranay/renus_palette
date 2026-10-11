import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { ARTIST_CONFIG, getWhatsAppLink } from '../config/artistConfig';
import { X, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    navigateToArtwork,
    setPage
  } = useGallery();

  if (!isCartOpen) return null;

  const bagTitles = cart.map((i) => `"${i.artwork.title}"`).join(', ');
  const whatsappBagInquiry = getWhatsAppLink(
    `Hi Renuka! I am interested in inquiring about these original paintings from your studio: ${bagTitles}. Could you please share quotes and availability?`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] border-l-2 border-[#F0E6D8] shadow-2xl flex flex-col animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0E6D8] bg-[#FFFDF9]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FFD13B] flex items-center justify-center font-bold text-sm">
                🛍️
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#2B2623]">My Art Bag</h3>
              <span className="text-xs font-bold bg-[#FFEAE8] text-[#FF6161] px-2.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#7A6F66] hover:text-[#2B2623] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#F0E6D8]">
            {cart.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FFF4D2] flex items-center justify-center mx-auto mb-2 border border-[#FFE082]">
                  <ShoppingBag className="w-8 h-8 text-[#8C6D00]" />
                </div>
                <h4 className="font-heading font-bold text-xl text-[#2B2623]">Your Art Bag is Empty</h4>
                <p className="text-xs text-[#7A6F66] max-w-xs mx-auto leading-relaxed">
                  Browse Renuka's authentic original acrylics and watercolors to add to your studio inquiry list.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setPage('explore');
                    }}
                    className="btn-sunshine px-6 py-3 text-xs font-bold cursor-pointer"
                  >
                    Explore Paintings
                  </button>
                </div>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.artwork.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  <img
                    src={item.artwork.imageUrl}
                    alt={item.artwork.title}
                    onClick={() => {
                      setIsCartOpen(false);
                      navigateToArtwork(item.artwork.id);
                    }}
                    className="w-20 h-24 object-contain rounded-xl bg-[#FAF5ED] p-1 shrink-0 cursor-pointer border border-[#F0E6D8] hover:opacity-90 transition-opacity"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            setIsCartOpen(false);
                            navigateToArtwork(item.artwork.id);
                          }}
                          className="font-heading font-bold text-base text-[#2B2623] truncate hover:text-[#FF6161] cursor-pointer transition-colors"
                        >
                          {item.artwork.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.artwork.id)}
                          className="text-[#999] hover:text-[#FF6161] p-1 transition-colors cursor-pointer"
                          title="Remove artwork"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-[#7A6F66]">{item.artwork.category}</p>
                      <p className="text-[11px] text-[#8C8075] mt-0.5">{item.artwork.medium}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-heading font-bold text-sm text-[#FF6161]">
                        {item.artwork.priceDisplay}
                      </span>

                      <button
                        onClick={() => {
                          setIsCartOpen(false);
                          navigateToArtwork(item.artwork.id);
                        }}
                        className="text-xs font-bold text-[#2B2623] hover:text-[#FF6161] underline cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Inquiry Actions */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#FFF9E6] border-t border-[#FFE082] space-y-4">
              <div className="space-y-1 text-xs text-[#5C5248]">
                <div className="flex justify-between font-bold text-[#2B2623]">
                  <span>Total Selected Artworks:</span>
                  <span>{cart.length} {cart.length === 1 ? 'Painting' : 'Paintings'}</span>
                </div>
                <p className="text-[11px] text-[#7A6F66]">
                  Every original painting is individually quoted based on composition and scale.
                </p>
              </div>

              {/* Inquiry Action Buttons */}
              <div className="space-y-2 pt-1">
                <a
                  href={whatsappBagInquiry}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-coral w-full py-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire Bag Items on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setPage('contact');
                  }}
                  className="w-full py-3 rounded-full bg-white border border-[#EAE0D4] text-[#2B2623] text-xs font-bold hover:bg-[#FFFDF9] transition-all cursor-pointer"
                >
                  Inquire via Contact Form 💌
                </button>
              </div>

              <p className="text-[11px] text-center text-[#7A6F66]">
                💛 Direct artist contact with Renuka ({ARTIST_CONFIG.phone})
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
