import React from 'react';
import { ShieldCheck, Home, MapPin, Zap } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Trusted for 40+ years',
      detail: 'Serving generations of Indian families since 1981',
    },
    {
      icon: Home,
      title: 'Made for Indian homes',
      detail: 'Engineered for regional climates, power, and habits',
    },
    {
      icon: MapPin,
      title: 'Wide service network',
      detail: '600+ authorized centers across 450+ cities',
    },
    {
      icon: Zap,
      title: 'Energy efficient',
      detail: 'BEE 5-star certified dual-inverter technologies',
    },
  ];

  return (
    <section className="bg-white border-y border-[#E2DFD7] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#EFECE6]">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 pt-4 lg:pt-0 ${
                  index !== 0 ? 'lg:pl-8' : ''
                }`}
              >
                <div className="shrink-0 p-2.5 rounded-lg bg-[#F7F5F0] text-[#111111]">
                  <Icon className="w-5 h-5 text-[#111111]" strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h2 className="text-sm font-semibold text-[#111111] tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
