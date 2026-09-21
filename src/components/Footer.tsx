import React, { useState } from 'react';
import { OnidaLogo } from './OnidaLogo';
import { ActivePage, ProductCategory } from '../types';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: ActivePage, category?: ProductCategory) => void;
  onOpenServiceTab?: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenServiceTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const productLinks: { label: string; cat?: ProductCategory }[] = [
    { label: 'Televisions', cat: 'Televisions' },
    { label: 'Air Conditioners', cat: 'Air Conditioners' },
    { label: 'Refrigerators', cat: 'Refrigerators' },
    { label: 'Washing Machines', cat: 'Washing Machines' },
    { label: 'Air Coolers', cat: 'Air Coolers' },
    { label: 'Accessories', cat: undefined },
  ];

  const supportLinks = [
    { label: 'Product Registration', id: 'registration' },
    { label: 'Service Centre', id: 'service-centers' },
    { label: 'Warranty', id: 'warranty' },
    { label: 'FAQs', id: 'faqs' },
    { label: 'Downloads', id: 'downloads' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const aboutLinks = [
    { label: 'Our Story' },
    { label: 'Innovation' },
    { label: 'Sustainability' },
    { label: 'Careers' },
    { label: 'Media' },
    { label: 'Investors' },
  ];

  return (
    <footer className="bg-[#111111] text-[#E8E5DE] pt-20 pb-12 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#2A2A2A]">
          {/* LEFT: Brand Statement */}
          <div className="lg:col-span-2 space-y-6 pr-4">
            <OnidaLogo color="#FFFFFF" height={30} onClick={() => onNavigate('home')} />
            <p className="text-xl sm:text-2xl font-light text-white leading-snug tracking-tight max-w-sm">
              Technology for<br />
              a brighter tomorrow.
            </p>
            <p className="text-sm text-[#8E8E8E] leading-relaxed max-w-sm">
              Designed for real Indian homes, everyday living conditions, and enduring reliability since 1981.
            </p>
          </div>

          {/* COL 1: Products */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate('products', item.cat)}
                    className="text-[#A3A09A] hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 2: Support */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase">
              Support
            </h3>
            <ul className="space-y-2.5 text-sm">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      onNavigate('support');
                      if (onOpenServiceTab) onOpenServiceTab(item.id);
                    }}
                    className="text-[#A3A09A] hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: About & Newsletter */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-white tracking-wider uppercase">
                About
              </h3>
              <ul className="space-y-2.5 text-sm">
                {aboutLinks.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => onNavigate('about')}
                      className="text-[#A3A09A] hover:text-white transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-semibold text-white tracking-wider uppercase mb-2">
                Stay updated
              </h4>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex rounded-full overflow-hidden border border-[#3A3A3A] focus-within:border-[#D2141E] bg-[#1C1C1C]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-transparent px-4 py-2 text-xs text-white placeholder-[#707070] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#D2141E] hover:bg-[#b01018] text-white px-3 py-2 flex items-center justify-center transition-colors"
                    aria-label="Subscribe"
                  >
                    {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {subscribed && (
                  <p className="text-[11px] text-[#A3A09A]">Thank you for subscribing to Onida updates.</p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM: Brand Core Slogan & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8E8E]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span className="text-white font-medium tracking-wide">
              ONE ONIDA. EVERYWHERE YOU MEET US.
            </span>
            <div className="flex items-center justify-center gap-4">
              <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                Privacy
              </button>
              <span>•</span>
              <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                Terms
              </button>
              <span>•</span>
              <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                Site Map
              </button>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <p>© 2026 Onida. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
