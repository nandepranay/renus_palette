import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const { addToast } = useGallery();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitted(true);
    addToast({
      type: 'success',
      title: 'Welcome to the Sanctuary',
      description: 'You are now subscribed to curatorial drops and salon invitations.'
    });
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-[#E8E2D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex p-3 rounded-full bg-[#F3EFE6] text-[#C5A059] mb-5 border border-[#DDD5C5]">
          <Mail className="w-5 h-5 stroke-[1.5]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl text-[#191817] font-normal tracking-tight mb-4">
          A Little Art in Your Inbox
        </h2>

        <p className="font-sans text-sm sm:text-base text-[#6E685F] max-w-xl mx-auto mb-8 leading-relaxed">
          Discover new collections, featured artists, and inspiration for your walls.
        </p>

        {isSubmitted ? (
          <div className="p-6 bg-[#F3EFE6] border border-[#DDD5C5] max-w-md mx-auto animate-fade-in flex items-center justify-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#4A6B5D] shrink-0" />
            <div className="text-left">
              <p className="font-serif text-base text-[#191817] font-medium">You are on the Guest List</p>
              <p className="text-xs text-[#736E65]">
                Curator dispatches sent monthly. No promotional clutter.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3.5 bg-white border border-[#DDD5C5] text-sm text-[#191817] placeholder-[#9E978B] focus:outline-none focus:border-[#191817] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#191817] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {errorMessage && (
              <p className="text-xs text-[#B33939] text-left">{errorMessage}</p>
            )}

            <p className="text-[11px] text-[#8C8578] font-sans">
              We respect your privacy. Unsubscribe at any time with a single click.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
