import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import refKitchenImg from '../assets/images/onida_refrigerator_kitchen_1790007666674.jpg';

interface ProductLifestyleSplitProps {
  onLearnMore: () => void;
}

export const ProductLifestyleSplit: React.FC<ProductLifestyleSplitProps> = ({ onLearnMore }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Asymmetric Side A: Large warm home/product image matching Split Section 2 in wireframe */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#E2DFD7] bg-white group">
              <img
                src={refKitchenImg}
                alt="Contemporary Indian kitchen with Onida Grandeur Refrigerator"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-lg border border-[#E2DFD7] shadow-xs">
                <span className="text-xs font-semibold text-[#111111]">
                  Technology living inside the home
                </span>
              </div>
            </div>
          </div>

          {/* Asymmetric Side B: Editorial Philosophy matching wireframe */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#D2141E] uppercase">
                Design Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.15]">
                Built for a<br />
                brighter tomorrow.
              </h2>
              <p className="text-lg font-medium text-[#111111] leading-relaxed">
                Smarter technology. A more comfortable home. A better everyday.
              </p>
              <p className="text-base text-[#6B6B6B] leading-relaxed">
                We believe true sophistication lies in restraint. Technology should never overwhelm the living space with complex menus or delicate components that fail when dust accumulates or power fluctuates.
              </p>
              <p className="text-base text-[#6B6B6B] leading-relaxed">
                Every Onida appliance is engineered around the real realities of Indian households: enduring summer heatwaves up to 54°C, intense monsoon humidity, high-TDS tap water, and the natural rhythms of joint families sharing one roof.
              </p>
            </div>

            {/* Quiet human touchpoints */}
            <ul className="space-y-2.5 pt-2 text-sm text-[#111111]">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D2141E] shrink-0" />
                <span>Whisper-quiet acoustic airflow for restful night sleep</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D2141E] shrink-0" />
                <span>Surge-tolerant circuitry tested from 90V to 300V</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D2141E] shrink-0" />
                <span>Tactile, intuitive controls anyone in the family can use</span>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#111111] hover:bg-[#2A2A2A] text-white font-medium text-sm transition-all shadow-xs cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
