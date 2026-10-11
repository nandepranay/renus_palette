import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Send } from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  const { addToast } = useGallery();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'collector',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    addToast({
      type: 'success',
      title: 'Message Sent to Curators',
      description: 'We will respond within 4 business hours.'
    });
  };

  const faqs = [
    {
      q: 'How do you guarantee the authenticity of the artwork?',
      a: 'Every piece at renus_palette is sourced directly from the artist’s studio. Each artwork is accompanied by an embossed, physical Certificate of Authenticity signed by both the artist and our principal curator.'
    },
    {
      q: 'How are the artworks packaged and delivered?',
      a: 'Original canvases are encased in archival acid-free glassine paper, heavy impact-absorbing foam, and secured inside custom-crafted wooden timber crates. We use specialized fine-art transit couriers with full transit insurance.'
    },
    {
      q: 'What is your 7-Day Curatorial Home-Trial policy?',
      a: 'We understand that experiencing art in your own residence is personal. If an artwork does not harmonize with your interior space, you can initiate a return within 7 days of delivery for a full refund.'
    },
    {
      q: 'Can you provide custom framing recommendations?',
      a: 'Yes. Our framing studio works with museum-grade solid oak, teak, matte black, and champagne gold finishes using archival acid-free backings and UV-filtering museum acrylic or glass.'
    },
    {
      q: 'How do I submit artwork as an artist?',
      a: 'We welcome submissions from professional and emerging visual artists. Please select "Artist Portfolio Submission" in the contact form and include a link to your digital portfolio or PDF catalog.'
    }
  ];

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curatorial Concierge</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#191817] font-normal tracking-tight mb-4">
          Contact & Inquiries
        </h1>
        <p className="text-sm sm:text-base text-[#6E685F] leading-relaxed font-sans">
          Whether you seek tailored art advisory for your residence, inquire about a specific canvas, or wish to schedule a private studio viewing, we are at your service.
        </p>
      </div>

      {/* Main Grid: Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-white border border-[#E2D9C8] p-6 sm:p-10 shadow-xs">
          <h2 className="font-serif text-2xl text-[#191817] mb-2">Send an Inquiry</h2>
          <p className="text-xs text-[#736E65] mb-6">
            Complete the form below and our curation desk will assist you promptly.
          </p>

          {isSubmitted ? (
            <div className="p-8 bg-[#F5F1E8] border border-[#DDD5C5] text-center space-y-3 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-[#4A6B5D] mx-auto" />
              <h3 className="font-serif text-2xl text-[#191817]">Thank You, {formData.name}</h3>
              <p className="text-xs text-[#6E685F] max-w-md mx-auto leading-relaxed">
                Your message has reached our curation desk. A senior art specialist will contact you via {formData.email} within 4 business hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', purpose: 'collector', message: '' });
                }}
                className="mt-4 px-6 py-2.5 bg-[#191817] text-white text-xs uppercase tracking-wider font-medium"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200 00000"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="collector">Private Art Acquisition</option>
                    <option value="interior">Architect / Interior Staging</option>
                    <option value="artist">Artist Portfolio Submission</option>
                    <option value="framing">Custom Framing Consultation</option>
                    <option value="general">General Curatorial Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#736E65] uppercase tracking-wider mb-1 font-medium">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details of the artwork you're inquiring about, room dimensions, or specific inquiries..."
                  className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] text-sm text-[#191817] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#191817] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#DFBA73]" />
                <span>Submit Inquiry to Curators</span>
              </button>
            </form>
          )}
        </div>

        {/* Gallery Studios & Concierge Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#F5F1E8] border border-[#E2D9C8] p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-2xl text-[#191817]">Gallery Studios</h3>

            {/* Mumbai Studio */}
            <div className="space-y-1 text-xs">
              <h4 className="font-serif text-base text-[#191817] font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                Mumbai Flagship Studio
              </h4>
              <p className="text-[#6E685F] pl-6">
                4th Floor, Heritage Court, Rampart Row, Kala Ghoda, Colaba, Mumbai 400001
              </p>
              <p className="text-[#8C8578] pl-6">By private appointment only.</p>
            </div>

            {/* Delhi Studio */}
            <div className="space-y-1 text-xs">
              <h4 className="font-serif text-base text-[#191817] font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                New Delhi Viewing Salon
              </h4>
              <p className="text-[#6E685F] pl-6">
                12A, Hauz Khas Village Art Enclave, New Delhi 110016
              </p>
              <p className="text-[#8C8578] pl-6">Tue–Sun, 11:00 AM – 7:00 PM</p>
            </div>

            {/* Direct Lines */}
            <div className="pt-4 border-t border-[#DDD5C5] space-y-2 text-xs text-[#6E685F]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>curator@renuspalette.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>+91 (022) 2284-5900 / +91 98200 45678</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Advisory Hours: 10:00 AM – 7:30 PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="max-w-4xl mx-auto pt-12 border-t border-[#E8E2D5]">
        <div className="text-center mb-10">
          <h3 className="font-serif text-3xl text-[#191817]">Frequently Asked Questions</h3>
          <p className="text-xs text-[#736E65] mt-1">Details on acquisitions, shipping, and authenticity</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2D9C8] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base text-[#191817] hover:text-[#C5A059] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#A38038] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8C8578] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#6E685F] leading-relaxed border-t border-[#F0EBE0] bg-[#FAF8F5]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
