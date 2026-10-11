import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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
      title: 'Welcome to the Art Family! 🎨',
      description: 'You are now subscribed to studio drops and new paintings.'
    });
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFF4D2]/60 border-t border-[#F0E6D8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 rounded-3xl bg-[#FFD13B] text-2xl flex items-center justify-center mx-auto mb-5 shadow-xs">
          💌
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2B2623] tracking-tight mb-3">
          Join My Art Family 🌸
        </h2>

        <p className="text-sm sm:text-base text-[#5C5248] max-w-lg mx-auto mb-8 leading-relaxed font-medium">
          Subscribe for a front-row seat in my studio, featuring satisfying process videos, painting tutorials, and early access to new canvas drops.
        </p>

        {isSubmitted ? (
          <div className="p-6 bg-white rounded-3xl border-2 border-[#FFD13B] max-w-md mx-auto flex items-center justify-center gap-3 shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-[#1E7E34] shrink-0" />
            <div className="text-left">
              <p className="font-heading font-bold text-base text-[#2B2623]">You're on the list! 🎉</p>
              <p className="text-xs text-[#7A6F66]">
                Look out for colorful studio updates from Renuka.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                placeholder="Enter your email address..."
                className="flex-1 px-5 py-3.5 bg-white rounded-full border-2 border-[#EAE0D4] text-sm text-[#2B2623] placeholder-[#9E9085] focus:outline-none focus:border-[#FF6161] shadow-xs"
              />
              <button
                type="submit"
                className="btn-coral px-7 py-3.5 text-sm font-bold shrink-0 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {errorMessage && (
              <p className="text-xs text-[#FF6161] text-left font-bold">{errorMessage}</p>
            )}

            <p className="text-xs text-[#8C8075]">
              No spam ever. Only colorful art and warm studio vibes! ✨
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
