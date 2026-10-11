import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { CheckCircle2, Heart, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useGallery();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#1C1A17] text-[#FAF8F5] border border-[#3E3A34] shadow-2xl rounded-sm p-4 flex items-start gap-3 transition-all duration-300 animate-fade-in"
        >
          {toast.type === 'success' && (
            <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
          )}
          {toast.type === 'favorite' && (
            <Heart className="w-5 h-5 text-[#C08081] fill-[#C08081] shrink-0 mt-0.5" />
          )}
          {toast.type === 'info' && (
            <Info className="w-5 h-5 text-[#A39B8E] shrink-0 mt-0.5" />
          )}
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium tracking-wide text-[#FAF8F5]">{toast.title}</h4>
            {toast.description && (
              <p className="text-xs text-[#B8B1A5] mt-0.5 line-clamp-2 leading-relaxed">{toast.description}</p>
            )}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#8C8578] hover:text-[#FAF8F5] transition-colors p-1"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
