import React from 'react';
import { TECH_PILLARS } from '../data/products';
import { Shield, Cpu, Thermometer, Layers } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const icons = [Thermometer, Shield, Cpu, Layers];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-xs font-semibold text-[#D2141E] uppercase tracking-wider">
            Engineering & Materials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mt-2 leading-tight">
            Technology for everyday<br />
            Indian life.
          </h2>
          <p className="text-base text-[#6B6B6B] mt-4 leading-relaxed">
            Reliable engineering tested against real environmental challenges. Built with brushed alloys, toughened glass, and heavy copper windings designed to perform for decades.
          </p>
        </div>

        {/* Material & Engineering Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={pillar.id}
                className="rounded-xl border border-[#E2DFD7] bg-[#F7F5F0] p-6 flex flex-col justify-between hover:border-[#111111] transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E2DFD7] flex items-center justify-center text-[#111111] group-hover:text-[#D2141E] group-hover:border-[#D2141E] transition-colors">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-[#111111] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2DFD7]/60 text-[11px] font-semibold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D2141E]" />
                  <span>{pillar.material}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Close-up product/material photography strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#EAE7E0] border border-[#E2DFD7]">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
              alt="Matte titanium and stainless steel surfaces"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <span className="text-xs text-white font-medium">Matte Titanium Steel</span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#EAE7E0] border border-[#E2DFD7]">
            <img
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"
              alt="Ultra-slim bezel screen edge"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <span className="text-xs text-white font-medium">1.2mm Minimal Bezel</span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#EAE7E0] border border-[#E2DFD7]">
            <img
              src="https://images.unsplash.com/photo-1614633833026-0e31e50be062?auto=format&fit=crop&w=600&q=80"
              alt="Acoustic airflow vents and pure copper components"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <span className="text-xs text-white font-medium">Aerodynamic Air Vents</span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#EAE7E0] border border-[#E2DFD7]">
            <img
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80"
              alt="Toughened glass and precision tactile dial controls"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <span className="text-xs text-white font-medium">Toughened Glass & Dials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
