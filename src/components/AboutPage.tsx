import React from 'react';
import { OnidaLogo } from './OnidaLogo';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Leaf } from 'lucide-react';

interface AboutPageProps {
  onExploreProducts: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onExploreProducts }) => {
  return (
    <div className="bg-[#F7F5F0] min-h-screen py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Editorial Hero Header */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <OnidaLogo height={20} />
            <span className="text-xs font-semibold text-[#7D7871] uppercase tracking-wider">
              • Our Story & Brand Evolution
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1]">
            ONE ONIDA.<br />
            Everywhere you meet us.
          </h1>
          <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed font-normal">
            For over four decades, Onida has been a part of millions of Indian homes. Today, we are evolving from a fragmented electronics maker into one coherent contemporary brand system.
          </p>
        </div>

        {/* Core Visual Principle Card */}
        <div className="rounded-3xl overflow-hidden bg-white border border-[#E2DFD7] p-8 sm:p-14 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D2141E]">
              The Central Principle
            </span>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] leading-snug tracking-tight">
              “Technology should live inside the home — not replace the home.”
            </blockquote>
            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
              We reject the cold, sterile vision of appliances floating in sci-fi CGI environments. Electronics are not monuments to technology; they are quiet companions in people's morning chai, evening cricket cheers, and restful nights.
            </p>
            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
              Our products are designed to harmonize with warm teakwood, linen curtains, brass accents, and the natural sunlight that illuminates Indian residences.
            </p>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[4/3] bg-[#EAE7E0] border border-[#E2DFD7]">
            <img
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
              alt="Warm contemporary Indian home interior with natural wood and light"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4 Brand Pillars Grid */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
              What We Stand For
            </h2>
            <p className="text-sm text-[#6B6B6B] mt-1">
              Warm • Modern • Human • Indian • Confident • Clear
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-[#E2DFD7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#D2141E]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#111111]">Human First</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Intuitive controls, natural sound profiles, and easy-to-clean materials that respect daily family living.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E2DFD7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#D2141E]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#111111]">Indian Resilience</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Toughened to endure 54°C summers, monsoon humidity, coastal salinity, and wide voltage swings (90V–300V).
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E2DFD7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#D2141E]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#111111]">Disciplined Design</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                One visual language across TVs, ACs, and kitchen appliances. No loud badge clutter or arbitrary colors.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E2DFD7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#D2141E]">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#111111]">Energy & Longevity</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Inverter efficiency, eco-friendly R32 refrigerants, and e-waste take-back programs across all pin codes.
              </p>
            </div>
          </div>
        </div>

        {/* 40+ Years Milestones */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2DFD7] space-y-8">
          <div>
            <span className="text-xs font-semibold text-[#D2141E] uppercase tracking-wider">
              1981 to 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1">
              Four Decades of Innovation in Indian Homes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              {
                year: '1981',
                title: 'The Television Revolution',
                desc: 'Founded in Mumbai, introducing color television to millions of Indian drawing rooms with pristine CRT clarity.',
              },
              {
                year: '1995',
                title: 'Acoustic Mastery',
                desc: 'Pioneered custom high-wattage box sound enclosures engineered for Indian music and cinema dialogue.',
              },
              {
                year: '2010',
                title: 'Full Home Ecosystem',
                desc: 'Expanded into heavy-duty air conditioning, washing machines, and frost-free refrigeration tailored for India.',
              },
              {
                year: '2026',
                title: 'One Onida Rebrand',
                desc: 'Evolving into ONE unified brand system — modern, human, and thoughtfully designed for connected homes.',
              },
            ].map((m, idx) => (
              <div key={m.year} className="space-y-2 border-t-2 border-[#E2DFD7] pt-4">
                <span className="text-xl font-bold text-[#D2141E]">{m.year}</span>
                <h3 className="text-sm font-bold text-[#111111]">{m.title}</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-8 space-y-4">
          <p className="text-base text-[#111111] font-semibold">
            Experience the new generation of Onida appliances.
          </p>
          <button
            onClick={onExploreProducts}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D2141E] hover:bg-[#b01018] text-white text-sm font-semibold transition-all shadow-xs"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
