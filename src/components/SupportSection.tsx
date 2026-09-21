import React from 'react';
import { ShieldCheck, MapPin, FileText, Headphones, ArrowRight } from 'lucide-react';
import { SERVICE_CARDS } from '../data/products';

interface SupportSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const SupportSection: React.FC<SupportSectionProps> = ({ onSelectService }) => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    MapPin,
    FileText,
    Headphones,
  };

  return (
    <section className="py-16 md:py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-semibold text-[#D2141E] uppercase tracking-wider">
            Dedicated Customer Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2">
            Standing with you, long after purchase.
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B] mt-3">
            With 600+ authorized service hubs across India, genuine parts, and certified engineers at your doorstep.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CARDS.map((card) => {
            const Icon = iconMap[card.iconName] || ShieldCheck;
            return (
              <div
                key={card.id}
                onClick={() => onSelectService(card.id)}
                className="group cursor-pointer rounded-xl bg-white border border-[#E2DFD7] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#111111] hover:shadow-xs"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] border border-[#E2DFD7] flex items-center justify-center text-[#111111] group-hover:text-[#D2141E] group-hover:bg-[#FDF3F3] transition-colors">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] tracking-tight group-hover:text-[#D2141E] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B6B6B] mt-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0EEEA] flex items-center justify-between text-xs font-semibold text-[#111111] group-hover:text-[#D2141E]">
                  <span>{card.actionText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
