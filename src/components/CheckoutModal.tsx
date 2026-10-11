import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { X, ShieldCheck, CheckCircle2, Lock, CreditCard } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount?: number;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, clearCart, formatPrice, setIsCartOpen, setPage, addToast } = useGallery();
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmed'>('shipping');

  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: 'Priya Sengupta',
    email: 'priya.collector@example.com',
    phone: '+91 98200 45678',
    address: '42, Altamount Road, Cumballa Hill',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400026',
    notes: 'Please crate with corner foam protectors. Elevator available on 4th floor.'
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'wire'>('upi');
  const [orderId, setOrderId] = useState('');

  const cartTotal = cart.reduce((sum, item) => sum + (item.artwork.price || 0) * item.quantity, 0);

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleCompleteOrder = () => {
    const generatedId = `RP-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('confirmed');
    clearCart();
    addToast({
      type: 'success',
      title: 'Order Confirmed!',
      description: `Acquisition ${generatedId} placed successfully.`
    });
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div
        className="bg-[#FAF8F5] border border-[#E2D9C8] w-full max-w-2xl rounded-none shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D5] bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#C5A059]" />
            <h3 className="font-serif text-xl text-[#191817]">
              {step === 'confirmed' ? 'Acquisition Receipt' : 'Curated Checkout'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#736E65] hover:text-[#191817] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Disclaimer Banner */}
        <div className="bg-[#EFE7D8] px-6 py-2 border-b border-[#DDD3C0] text-[11px] text-[#6E685F] flex items-center justify-between">
          <span>🔒 256-Bit SSL Encrypted Art Acquisition</span>
          <span className="font-medium text-[#A38038]">Demonstration Checkout</span>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {step === 'shipping' && (
            <form onSubmit={handleSubmitShipping} className="space-y-4">
              <div className="border-b border-[#EFEBE1] pb-3">
                <h4 className="font-serif text-lg text-[#191817]">Collector & Delivery Address</h4>
                <p className="text-xs text-[#736E65]">Artworks are packed in custom wooden crates for insured transit.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="text-xs">
                <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="text-xs">
                <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">Delivery Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">PIN Code</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="text-xs">
                <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">Special Curatorial Instructions</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD5C5] text-xs text-[#191817] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#E8E2D5]">
                <span className="font-serif text-lg text-[#191817]">Total: {formatPrice(cartTotal)}</span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#191817] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <div className="space-y-5">
              <div className="border-b border-[#EFEBE1] pb-3">
                <h4 className="font-serif text-lg text-[#191817]">Select Payment Arrangement</h4>
                <p className="text-xs text-[#736E65]">Demonstration environment: choose your preferred simulated payment mode.</p>
              </div>

              <div className="space-y-3">
                <label
                  onClick={() => setPaymentMethod('upi')}
                  className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${
                    paymentMethod === 'upi' ? 'border-[#191817] bg-[#F5F1E8]' : 'border-[#DDD5C5] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2 py-1 bg-[#191817] text-white">UPI</span>
                    <div>
                      <p className="font-medium text-xs text-[#191817]">Instant UPI / QR / Google Pay / PhonePe</p>
                      <p className="text-[11px] text-[#736E65]">Zero transaction fee for art patrons</p>
                    </div>
                  </div>
                  <span className={`w-4 h-4 rounded-full border-2 ${paymentMethod === 'upi' ? 'border-[#191817] bg-[#191817]' : 'border-[#DDD5C5]'}`} />
                </label>

                <label
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${
                    paymentMethod === 'card' ? 'border-[#191817] bg-[#F5F1E8]' : 'border-[#DDD5C5] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-[#C5A059]" />
                    <div>
                      <p className="font-medium text-xs text-[#191817]">Credit / Debit Card (Visa, Mastercard, Amex)</p>
                      <p className="text-[11px] text-[#736E65]">Full transit insurance included</p>
                    </div>
                  </div>
                  <span className={`w-4 h-4 rounded-full border-2 ${paymentMethod === 'card' ? 'border-[#191817] bg-[#191817]' : 'border-[#DDD5C5]'}`} />
                </label>

                <label
                  onClick={() => setPaymentMethod('wire')}
                  className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${
                    paymentMethod === 'wire' ? 'border-[#191817] bg-[#F5F1E8]' : 'border-[#DDD5C5] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#4A6B5D]" />
                    <div>
                      <p className="font-medium text-xs text-[#191817]">Gallery Escrow Wire Transfer</p>
                      <p className="text-[11px] text-[#736E65]">Recommended for acquisitions above ₹1,00,000</p>
                    </div>
                  </div>
                  <span className={`w-4 h-4 rounded-full border-2 ${paymentMethod === 'wire' ? 'border-[#191817] bg-[#191817]' : 'border-[#DDD5C5]'}`} />
                </label>
              </div>

              <div className="p-4 bg-[#F3EFE6] border border-[#E2D9C8] space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#736E65]">Recipient:</span>
                  <span className="font-medium text-[#191817]">renus_palette Private Collection</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736E65]">Total Amount:</span>
                  <span className="font-bold text-[#191817] font-serif text-sm">{formatPrice(cartTotal)}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep('shipping')}
                  className="text-xs text-[#736E65] underline hover:text-[#191817]"
                >
                  ← Back to Address
                </button>
                <button
                  type="button"
                  onClick={handleCompleteOrder}
                  className="px-6 py-3 bg-[#191817] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors"
                >
                  Confirm & Acquire Artwork
                </button>
              </div>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#EBF2EE] text-[#4A6B5D] flex items-center justify-center mx-auto border border-[#BBD3C5]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="font-serif text-2xl text-[#191817]">Congratulations on Your Acquisition</h4>
                <p className="text-xs text-[#736E65] mt-1">
                  Reference: <span className="font-mono font-bold text-[#191817]">{orderId}</span>
                </p>
              </div>

              <div className="p-5 bg-white border border-[#E2D9C8] text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#F0EBE0] pb-2">
                  <span className="text-[#736E65]">Patron:</span>
                  <span className="font-medium text-[#191817]">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#F0EBE0] pb-2">
                  <span className="text-[#736E65]">Delivery Destination:</span>
                  <span className="font-medium text-[#191817]">{formData.city}, {formData.state}</span>
                </div>
                <div className="flex justify-between border-b border-[#F0EBE0] pb-2">
                  <span className="text-[#736E65]">Transit Method:</span>
                  <span className="font-medium text-[#4A6B5D]">Custom Art Crate (Insured)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#736E65]">Authenticity:</span>
                  <span className="font-medium text-[#A38038]">Physical Hand-Signed Certificate</span>
                </div>
              </div>

              <p className="text-xs text-[#736E65] max-w-md mx-auto leading-relaxed">
                A formal provenance dossier and courier tracking tracking updates will be dispatched to{' '}
                <span className="font-medium text-[#191817]">{formData.email}</span>.
              </p>

              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setPage('explore');
                  }}
                  className="px-6 py-2.5 bg-[#191817] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors"
                >
                  Explore More Artworks
                </button>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setPage('home');
                  }}
                  className="px-6 py-2.5 bg-[#F5F1E8] border border-[#DDD5C5] text-xs uppercase tracking-widest font-medium text-[#191817] hover:bg-[#EAE5D9] transition-colors"
                >
                  Return to Gallery
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
