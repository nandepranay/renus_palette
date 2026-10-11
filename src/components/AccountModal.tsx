import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { X, User, Heart, ShieldCheck, Mail, MapPin } from 'lucide-react';

export const AccountModal: React.FC = () => {
  const { isAccountOpen, setIsAccountOpen, wishlist, setPage } = useGallery();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'advisory'>('profile');
  const [isCollectorRegistered, setIsCollectorRegistered] = useState(true);
  const [collectorName, setCollectorName] = useState('Priya Sengupta');
  const [collectorEmail, setCollectorEmail] = useState('priya.collector@example.com');

  if (!isAccountOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="bg-[#FAF8F5] border border-[#E2D9C8] w-full max-w-lg rounded-none shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D5] bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif text-xl text-[#191817]">Collector Sanctuary</h3>
          </div>
          <button
            onClick={() => setIsAccountOpen(false)}
            className="p-1 text-[#6E685F] hover:text-[#191817] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#E8E2D5] bg-[#F5F1E8]">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 text-xs tracking-wider uppercase font-medium border-b-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-[#191817] text-[#191817] bg-[#FAF8F5]'
                : 'border-transparent text-[#736E65] hover:text-[#191817]'
            }`}
          >
            My Profile
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-3 text-xs tracking-wider uppercase font-medium border-b-2 transition-colors ${
              activeTab === 'orders'
                ? 'border-[#191817] text-[#191817] bg-[#FAF8F5]'
                : 'border-transparent text-[#736E65] hover:text-[#191817]'
            }`}
          >
            Acquisitions (1)
          </button>
          <button
            onClick={() => setActiveTab('advisory')}
            className={`flex-1 py-3 text-xs tracking-wider uppercase font-medium border-b-2 transition-colors ${
              activeTab === 'advisory'
                ? 'border-[#191817] text-[#191817] bg-[#FAF8F5]'
                : 'border-transparent text-[#736E65] hover:text-[#191817]'
            }`}
          >
            Art Advisor
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#F5F1E8] border border-[#E8E2D5]">
                <div className="w-12 h-12 rounded-full bg-[#191817] text-[#C5A059] flex items-center justify-center font-serif text-xl font-bold">
                  {collectorName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#191817]">{collectorName}</h4>
                  <p className="text-xs text-[#736E65] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" /> Verified Patron of the Arts
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <label className="text-xs uppercase text-[#8C8578] font-medium block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={collectorName}
                    onChange={(e) => setCollectorName(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase text-[#8C8578] font-medium block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={collectorEmail}
                    onChange={(e) => setCollectorEmail(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase text-[#8C8578] font-medium block mb-1">Delivery Sanctuary</label>
                  <div className="flex items-start gap-2 p-2.5 bg-white border border-[#DDD5C5] text-xs text-[#6E685F]">
                    <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Altamount Road, Cumballa Hill, Mumbai, Maharashtra 400026</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#E8E2D5]">
                <button
                  onClick={() => {
                    setIsAccountOpen(false);
                    setPage('wishlist');
                  }}
                  className="text-xs font-medium text-[#191817] hover:text-[#C5A059] flex items-center gap-1.5 transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 text-[#C08081]" /> Saved Artworks ({wishlist.length})
                </button>
                <button
                  onClick={() => setIsCollectorRegistered(!isCollectorRegistered)}
                  className="text-xs text-[#8C8578] underline hover:text-[#191817]"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="p-4 bg-white border border-[#E2D9C8] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#736E65]">#RP-82914-IN</span>
                  <span className="px-2 py-0.5 bg-[#E8DCC4] text-[#191817] text-[11px] font-medium uppercase tracking-wider">
                    White-Glove Delivered
                  </span>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <img
                    src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=300&q=80"
                    alt="Acquired painting"
                    className="w-12 h-12 object-cover border border-[#DDD5C5]"
                  />
                  <div>
                    <h5 className="font-serif text-sm text-[#191817] font-medium">Symphony in Ochre & Deep Cobalt</h5>
                    <p className="text-xs text-[#736E65]">By Ananya Deshmukh • Belgian Linen</p>
                  </div>
                </div>
                <div className="text-xs text-[#8C8578] pt-2 border-t border-[#F0EBE0] flex justify-between">
                  <span>Delivered to Mumbai</span>
                  <span className="font-medium text-[#191817]">₹68,000</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'advisory' && (
            <div className="space-y-3">
              <div className="p-4 bg-[#F5F1E8] border border-[#E2D9C8]">
                <h4 className="font-serif text-base text-[#191817] mb-1">Complimentary Art Advisory</h4>
                <p className="text-xs text-[#736E65] leading-relaxed">
                  Looking for bespoke curation for a private residence, luxury apartment, or boardroom? Our senior curators assist with space staging, scale matching, and lighting consultations.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[#191817]">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>curator@renuspalette.com</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
