import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalStatementProps {
  onExplore: () => void;
}

export const FinalStatement: React.FC<FinalStatementProps> = ({ onExplore }) => {
  return (
    <section className="py-20 md:py-32 bg-[#F7F5F0] border-t border-[#E2DFD7] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1]">
          Technology that fits your life.
        </h2>

        <p className="text-lg sm:text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed font-normal">
          Built for real homes, real people<br className="hidden sm:inline" />
          and a more connected India.
        </p>

        <div className="pt-4">
          <button
            onClick={onExplore}
            className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#D2141E] hover:bg-[#b51019] text-white font-medium text-sm transition-all shadow-sm hover:shadow active:scale-[0.99] gap-2 whitespace-nowrap"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
