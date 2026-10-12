import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { ARTIST_CONFIG, getWhatsAppLink } from '../config/artistConfig';
import { Mail, Phone, MessageCircle, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../components/SocialIcons';

export const ContactUsPage: React.FC = () => {
  const { addToast } = useGallery();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paintingInterest: 'custom-landscape',
    canvasSize: 'medium',
    message: ''
  });
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const interestLabels: Record<string, string> = {
      'custom-landscape': 'Custom Nature & Landscape',
      'lotus-pond': 'Lotus Pond Original',
      'spiritual-art': 'Spiritual Art (Buddha / Radha-Krishna)',
      'floral-botanical': 'Floral & Botanical Art',
      'gallery-inquiry': 'Inquire About Existing Gallery Piece'
    };

    const sizeLabels: Record<string, string> = {
      small: 'Small (12×12 to 18×24")',
      medium: 'Medium (24×24 to 30×40")',
      large: 'Large (36×48 to 48×60")'
    };

    const text = `🎨 *New Artwork Inquiry - renus_palette*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || 'Not provided'}
🖼️ *Interest:* ${interestLabels[formData.paintingInterest] || formData.paintingInterest}
📐 *Canvas Scale:* ${sizeLabels[formData.canvasSize] || formData.canvasSize}

💬 *Message:*
"${formData.message}"
━━━━━━━━━━━━━━━━━━━━`;

    setSubmittedMessage(text);
    setIsSubmitted(true);

    const whatsappUrl = `https://wa.me/${ARTIST_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    addToast({
      type: 'success',
      title: 'Opening WhatsApp...',
      description: 'Your inquiry message is ready to send to Renuka!'
    });
  };

  const faqs = [
    {
      q: 'How does a custom art commission work?',
      a: 'First, share your idea, reference photo, or desired subject (such as a tranquil ocean sunset, lush forest landscape, or sacred spiritual theme). We will discuss your preferred canvas size and color preferences, after which Renuka provides an individual quote and starts painting your original piece.'
    },
    {
      q: 'What canvas sizes are available?',
      a: 'Renuka offers three core canvas categories: Small Canvas (12×12 to 18×24 inches, ₹5,000–₹10,000), Medium Canvas (24×24 to 30×40 inches, ₹10,000–₹20,000), and Large Canvas (36×48 to 48×60 inches, ₹25,000+). Custom dimensions and round/oval canvases are also available upon request.'
    },
    {
      q: 'How are paintings packaged and shipped?',
      a: 'Every painting is carefully wrapped with protective acid-free glassine paper, corner guards, bubble cushioning, and rigid outer protective cartons to ensure completely safe delivery across India.'
    },
    {
      q: 'Can I request a custom landscape from my own travel photograph?',
      a: 'Yes! Clear, vibrant scenic photos work wonderfully. You can send your favorite travel or nature photos directly via WhatsApp or email, and Renuka will craft a stunning custom painting.'
    }
  ];

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#FFF4D2] text-[#8C6D00] mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6161]" />
          <span>Direct Studio Contact</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#2B2623] tracking-tight mb-4">
          Contact Renuka & Inquiries 💌
        </h1>
        <p className="text-sm sm:text-base text-[#5C5248] leading-relaxed">
          Whether you want to inquire about an original painting from the gallery, discuss a custom landscape or spiritual piece, or get a personalized quote, message Renuka directly!
        </p>
      </div>

      {/* Main Grid: Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-white border-2 border-[#F0E6D8] rounded-3xl p-6 sm:p-10 shadow-xs">
          <h2 className="font-heading font-extrabold text-2xl text-[#2B2623] mb-1">Send an Inquiry</h2>
          <p className="text-xs text-[#7A6F66] mb-6">
            Fill out the form below to chat directly with Renuka on WhatsApp with your inquiry details.
          </p>

          {isSubmitted ? (
            <div className="p-8 bg-[#FFF9F0] border-2 border-[#FFE082] rounded-3xl text-center space-y-4 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-[#1E7E34] mx-auto" />
              <h3 className="font-heading font-bold text-2xl text-[#2B2623]">Thank You, {formData.name}!</h3>
              <p className="text-xs text-[#5C5248] max-w-md mx-auto leading-relaxed">
                WhatsApp is opening with your formatted inquiry message. If it didn't open automatically, click the button below to send it to Renuka.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${ARTIST_CONFIG.whatsappNumber}?text=${encodeURIComponent(submittedMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1E7E34] hover:bg-[#166028] text-white text-xs font-bold inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp to Send</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', paintingInterest: 'custom-landscape', canvasSize: 'medium', message: '' });
                  }}
                  className="w-full sm:w-auto px-6 py-3 btn-sunshine text-xs font-bold cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#453D37] font-bold mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-[#FFFDF9] border border-[#EAE0D4] rounded-xl text-[#2B2623] placeholder-[#A8987E] focus:outline-none focus:border-[#FF6161]"
                  />
                </div>

                <div>
                  <label className="block text-[#453D37] font-bold mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 bg-[#FFFDF9] border border-[#EAE0D4] rounded-xl text-[#2B2623] placeholder-[#A8987E] focus:outline-none focus:border-[#FF6161]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#453D37] font-bold mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-[#FFFDF9] border border-[#EAE0D4] rounded-xl text-[#2B2623] placeholder-[#A8987E] focus:outline-none focus:border-[#FF6161]"
                  />
                </div>

                <div>
                  <label className="block text-[#453D37] font-bold mb-1.5">
                    Interest / Painting Type
                  </label>
                  <select
                    value={formData.paintingInterest}
                    onChange={(e) => setFormData({ ...formData, paintingInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FFFDF9] border border-[#EAE0D4] rounded-xl text-[#2B2623] focus:outline-none focus:border-[#FF6161]"
                  >
                    <option value="custom-landscape">Custom Nature & Landscape</option>
                    <option value="lotus-pond">Lotus Pond Original</option>
                    <option value="spiritual-art">Spiritual Art (Buddha / Radha-Krishna)</option>
                    <option value="floral-botanical">Floral & Botanical Art</option>
                    <option value="gallery-inquiry">Inquire About Existing Gallery Piece</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#453D37] font-bold mb-1.5">
                  Preferred Canvas Scale
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, canvasSize: 'small' })}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      formData.canvasSize === 'small'
                        ? 'border-[#FF6161] bg-[#FFEAE8] text-[#FF6161] font-bold'
                        : 'border-[#EAE0D4] bg-[#FFFDF9] text-[#5C5248]'
                    }`}
                  >
                    Small (12×12 to 18×24")
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, canvasSize: 'medium' })}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      formData.canvasSize === 'medium'
                        ? 'border-[#FF6161] bg-[#FFEAE8] text-[#FF6161] font-bold'
                        : 'border-[#EAE0D4] bg-[#FFFDF9] text-[#5C5248]'
                    }`}
                  >
                    Medium (24×24 to 30×40")
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, canvasSize: 'large' })}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      formData.canvasSize === 'large'
                        ? 'border-[#FF6161] bg-[#FFEAE8] text-[#FF6161] font-bold'
                        : 'border-[#EAE0D4] bg-[#FFFDF9] text-[#5C5248]'
                    }`}
                  >
                    Large (36×48 to 48×60")
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[#453D37] font-bold mb-1.5">
                  Your Concept / Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Renuka about your idea, preferred colors, or any questions..."
                  className="w-full px-4 py-3 bg-[#FFFDF9] border border-[#EAE0D4] rounded-xl text-[#2B2623] placeholder-[#A8987E] focus:outline-none focus:border-[#FF6161]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer bg-[#1E7E34] hover:bg-[#166028] text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Studio Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct WhatsApp Callout */}
          <div className="p-6 bg-gradient-to-br from-[#E8F8F0] to-[#FFFDF9] border-2 border-[#C6EFD9] rounded-3xl space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1E7E34]">
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Instant Chat with Artist</span>
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#2B2623]">
              WhatsApp Direct Inquiry
            </h3>
            <p className="text-xs text-[#5C5248] leading-relaxed">
              Send reference photos, ask about custom quotes, or discuss painting ideas directly with Renuka on WhatsApp.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E7E34] hover:bg-[#166028] text-white text-xs font-bold transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp ({ARTIST_CONFIG.phone})</span>
            </a>
          </div>

          {/* Contact Details List */}
          <div className="p-6 bg-white border-2 border-[#F0E6D8] rounded-3xl space-y-4 shadow-xs text-xs">
            <h4 className="font-heading font-bold text-base text-[#2B2623]">Studio Information</h4>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#FF6161] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8C8075] block">Phone / WhatsApp</span>
                <span className="font-bold text-[#2B2623]">{ARTIST_CONFIG.phone}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#FFD13B] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8C8075] block">Email</span>
                <a href={`mailto:${ARTIST_CONFIG.email}`} className="font-bold text-[#2B2623] hover:text-[#FF6161]">
                  {ARTIST_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <InstagramIcon className="w-4 h-4 text-[#E1306C] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8C8075] block">Instagram</span>
                <a
                  href={ARTIST_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#2B2623] hover:text-[#FF6161]"
                >
                  {ARTIST_CONFIG.instagramHandle}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <YoutubeIcon className="w-4 h-4 text-[#FF0000] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#8C8075] block">YouTube</span>
                <a
                  href={ARTIST_CONFIG.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#2B2623] hover:text-[#FF6161]"
                >
                  {ARTIST_CONFIG.youtubeHandle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-3xl mx-auto border-t border-[#F0E6D8] pt-16">
        <div className="text-center mb-8">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#2B2623]">
            Frequently Asked Questions 🌸
          </h3>
          <p className="text-xs text-[#7A6F66] mt-1">
            Common questions about custom paintings, sizing, and transit delivery
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#F0E6D8] rounded-2xl overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm text-[#2B2623] hover:text-[#FF6161] cursor-pointer"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#FF6161] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#7A6F66] shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-[#5C5248] leading-relaxed border-t border-[#F4EBE0] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
