import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { ARTIST_CONFIG, getArtworkUrl, getWhatsAppLink } from '../config/artistConfig';
import { X, Heart, MessageCircle } from 'lucide-react';

export const AccountModal: React.FC = () => {
  const { isAccountOpen, setIsAccountOpen, wishlist, setPage } = useGallery();
  const [activeTab, setActiveTab] = useState<'profile' | 'inquiries' | 'custom'>('profile');
  const [userName, setUserName] = useState('Art Lover');
  const [userEmail, setUserEmail] = useState('artlover@example.com');

  if (!isAccountOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="bg-[#FFFDF9] border-2 border-[#F0E6D8] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0E6D8] bg-[#FFFDF9]">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎨</span>
            <h3 className="font-heading font-extrabold text-xl text-[#2B2623]">My Art Studio Hub</h3>
          </div>
          <button
            onClick={() => setIsAccountOpen(false)}
            className="p-1.5 text-[#7A6F66] hover:text-[#2B2623] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#F0E6D8] bg-[#FFF4D2]/40">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'profile'
                ? 'border-[#FF6161] text-[#FF6161] bg-[#FFFDF9]'
                : 'border-transparent text-[#7A6F66] hover:text-[#2B2623]'
            }`}
          >
            Profile & Wishlist
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex-1 py-3 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'inquiries'
                ? 'border-[#FF6161] text-[#FF6161] bg-[#FFFDF9]'
                : 'border-transparent text-[#7A6F66] hover:text-[#2B2623]'
            }`}
          >
            Studio Inquiries
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`flex-1 py-3 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'custom'
                ? 'border-[#FF6161] text-[#FF6161] bg-[#FFFDF9]'
                : 'border-transparent text-[#7A6F66] hover:text-[#2B2623]'
            }`}
          >
            Custom Quotes
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#FFF9E6] border border-[#FFE082] rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-[#FFD13B] text-[#2B2623] flex items-center justify-center font-heading font-extrabold text-xl">
                  {userName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#2B2623]">{userName}</h4>
                  <p className="text-xs text-[#7A6F66]">
                    Patron of renus_palette
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-[#5C5248] font-bold block mb-1">Your Name</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#EAE0D4] rounded-xl text-sm text-[#2B2623] focus:outline-none focus:border-[#FF6161]"
                  />
                </div>
                <div>
                  <label className="text-[#5C5248] font-bold block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#EAE0D4] rounded-xl text-sm text-[#2B2623] focus:outline-none focus:border-[#FF6161]"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#F0E6D8]">
                <button
                  onClick={() => {
                    setIsAccountOpen(false);
                    setPage('wishlist');
                  }}
                  className="text-xs font-bold text-[#FF6161] hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>View Wishlist ({wishlist.length})</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <div className="p-4 bg-white border-2 border-[#F0E6D8] rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#7A6F66]">Renuka's Studio Collection</span>
                  <span className="px-2.5 py-0.5 bg-[#E8F8F0] text-[#1E7E34] text-[11px] rounded-full">
                    Active Portfolio
                  </span>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <img
                    src={getArtworkUrl('artworks/lotus-pond.jpg')}
                    alt="Lotus Pond"
                    className="w-14 h-14 object-contain bg-[#FAF5ED] rounded-xl border border-[#F0E6D8] p-1"
                  />
                  <div>
                    <h5 className="font-heading font-bold text-sm text-[#2B2623]">Lotus Pond</h5>
                    <p className="text-xs text-[#7A6F66]">Original Acrylic on Canvas</p>
                  </div>
                </div>
                <div className="text-xs text-[#8C8075] pt-2 border-t border-[#F4EBE0] flex justify-between items-center">
                  <span>Price on request</span>
                  <a
                    href={getWhatsAppLink('Hi Renuka! I am interested in inquiring about Lotus Pond.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E7E34] font-bold hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'custom' && (
            <div className="space-y-3">
              <div className="p-5 bg-[#FFF9E6] border border-[#FFE082] rounded-2xl space-y-2">
                <h4 className="font-heading font-bold text-base text-[#2B2623]">Custom Painting Commissions</h4>
                <p className="text-xs text-[#5C5248] leading-relaxed">
                  Want a customized portrait, family artwork, or dreamy landscape for your space? Renuka personally discusses your concept, canvas dimensions, and provides tailored quotes.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-coral px-4 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Message Renuka ({ARTIST_CONFIG.phone})</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
