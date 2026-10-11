import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { X, Trash2, ShieldCheck, Truck, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { CheckoutModal } from './CheckoutModal';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
    formatPrice,
    navigateToArtwork,
    setPage
  } = useGallery();

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'RENUS10' || promoCode.trim().toUpperCase() === 'FIRSTART10') {
      const discount = Math.round(cartTotal * 0.1);
      setPromoDiscount(discount);
      setPromoApplied(true);
    } else {
      setPromoError('Invalid promo code. Try "RENUS10"');
    }
  };

  const finalTotal = Math.max(0, cartTotal - promoDiscount);

  return (
    <>
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
                <h3 className="font-heading font-extrabold text-xl text-[#2B2623]">Your Art Bag</h3>
                <span className="text-xs font-bold bg-[#FFEAE8] text-[#FF6161] px-2.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-[#7A6F66] hover:text-[#2B2623] transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#EFE8DA]">
              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-[#F3EFE6] flex items-center justify-center mx-auto mb-4 border border-[#E2D9C8]">
                    <ShoppingBag className="w-8 h-8 text-[#A8987E]" />
                  </div>
                  <h4 className="font-serif text-xl text-[#191817] mb-2">Your Art Bag is Empty</h4>
                  <p className="text-xs text-[#736E65] max-w-xs mx-auto mb-6 leading-relaxed">
                    Explore original paintings, contemporary canvas works, and master collections curated for collectors.
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setPage('explore');
                    }}
                    className="px-6 py-3 bg-[#191817] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors"
                  >
                    Explore Artworks
                  </button>
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
                      className="w-20 h-24 object-cover shrink-0 cursor-pointer border border-[#DDD5C5] hover:opacity-90 transition-opacity"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4
                            onClick={() => {
                              setIsCartOpen(false);
                              navigateToArtwork(item.artwork.id);
                            }}
                            className="font-serif text-base text-[#191817] truncate hover:text-[#C5A059] cursor-pointer transition-colors"
                          >
                            {item.artwork.title}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.artwork.id)}
                            className="text-[#999] hover:text-[#B33939] p-1 transition-colors"
                            title="Remove artwork"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-[#736E65]">{item.artwork.artistName}</p>
                        <p className="text-[11px] text-[#8C8578] mt-0.5">{item.artwork.dimensions}</p>
                        <div className="mt-1 flex items-center gap-1.5 text-[11px] text-[#A38038]">
                          <ShieldCheck className="w-3 h-3" />
                          <span>Includes Certificate of Authenticity</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-[#DDD5C5] bg-white">
                          <button
                            onClick={() => updateCartQuantity(item.artwork.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs text-[#555] hover:bg-[#F3EFE6]"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-mono text-[#191817]">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item.artwork.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-[#555] hover:bg-[#F3EFE6]"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-serif font-bold text-sm text-[#191817]">
                          {formatPrice(item.artwork.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer with checkout */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#F5F1E8] border-t border-[#E8E2D5] space-y-4">
                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#8C8578] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code (e.g. RENUS10)"
                      className="w-full pl-8 pr-2 py-2 bg-white border border-[#DDD5C5] text-xs text-[#191817] uppercase tracking-wider focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#191817] text-white text-xs tracking-wider uppercase font-medium hover:bg-[#333]"
                  >
                    Apply
                  </button>
                </form>

                {promoError && <p className="text-[11px] text-[#B33939]">{promoError}</p>}
                {promoApplied && (
                  <p className="text-[11px] text-[#4A6B5D] flex items-center gap-1 font-medium">
                    ✓ 10% Collector Privilege Applied (-{formatPrice(promoDiscount)})
                  </p>
                )}

                {/* Calculation breakdown */}
                <div className="space-y-1.5 text-xs text-[#736E65] pt-2 border-t border-[#E8E2D5]">
                  <div className="flex justify-between">
                    <span>Artwork Subtotal</span>
                    <span className="text-[#191817] font-medium">{formatPrice(cartTotal)}</span>
                  </div>

                  {promoApplied && (
                    <div className="flex justify-between text-[#B3541E]">
                      <span>Collector Discount</span>
                      <span>-{formatPrice(promoDiscount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3 h-3 text-[#4A6B5D]" /> White-Glove Crated Transit
                    </span>
                    <span className="text-[#4A6B5D] font-medium uppercase text-[11px]">Complimentary</span>
                  </div>

                  <div className="flex justify-between">
                    <span>GST (12% Art & Antiques)</span>
                    <span className="text-[#191817] font-medium">Included in Price</span>
                  </div>

                  <div className="flex justify-between text-base font-serif font-bold text-[#191817] pt-2 border-t border-[#DDD5C5]">
                    <span>Total Investment</span>
                    <span>{formatPrice(finalTotal)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="btn-coral w-full py-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Proceed to Checkout 🌸</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-[#7A6F66]">
                  💛 Hand-packed with care • Fully insured transit across India
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isCheckoutOpen && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          totalAmount={finalTotal}
        />
      )}
    </>
  );
};
