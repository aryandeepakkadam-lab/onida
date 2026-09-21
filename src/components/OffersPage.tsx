import React from 'react';
import { Tag, CreditCard, RefreshCw, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProductCategory } from '../types';

interface OffersPageProps {
  onExploreCategory: (category: ProductCategory) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onExploreCategory }) => {
  return (
    <div className="bg-[#F7F5F0] min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-[#E2DFD7] pb-8">
          <span className="text-xs font-semibold text-[#D2141E] uppercase tracking-wider">
            Current Brand Promotions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mt-2">
            Onida Home Offers
          </h1>
          <p className="text-base sm:text-lg text-[#6B6B6B] mt-2">
            Direct-from-manufacturer benefits, flexible financing, and hassle-free upgrade programs.
          </p>
        </div>

        {/* Featured Offer Banner */}
        <div className="rounded-3xl bg-white border border-[#E2DFD7] p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF3F3] text-[#D2141E] text-xs font-semibold">
              <Tag className="w-3.5 h-3.5" />
              <span>Limited Time Seasonal Upgrade</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight leading-snug">
              Exchange & Upgrade: Get up to ₹8,000 on your old appliance.
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-xl">
              Upgrade to an Onida 5-Star Dual-Inverter AC, Nexg 4K TV, or Frost-Free Refrigerator. Free doorstep pickup of your old working or non-working electronics across 450+ cities.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onExploreCategory('Air Conditioners')}
                className="px-6 py-3 rounded-full bg-[#D2141E] hover:bg-[#b01018] text-white text-xs font-semibold transition-colors flex items-center gap-2"
              >
                <span>View Inverter ACs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onExploreCategory('Televisions')}
                className="px-6 py-3 rounded-full bg-white border border-[#111111] text-[#111111] text-xs font-semibold hover:bg-[#111111] hover:text-white transition-colors"
              >
                View Smart TVs
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-[#EAE7E0] border border-[#E2DFD7]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Onida television exchange promotion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-[#E2DFD7] space-y-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#D2141E]">
              <CreditCard className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#111111]">No-Cost EMI Options</h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              Available with 0% interest and zero processing fee on HDFC, ICICI, SBI, Axis Bank, and Bajaj Finserv cards for 3, 6, and 9 month tenures.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#111111]">
              Starts at ₹1,050/month
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#E2DFD7] space-y-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#D2141E]">
              <Shield className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#111111]">Extended Warranty Bundle</h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              Enjoy complimentary 1-year additional comprehensive protection when purchasing directly through authorized Onida channels.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#111111]">
              Included with select models
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#E2DFD7] space-y-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#D2141E]">
              <RefreshCw className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#111111]">Free Doorstep Installation</h3>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              All Onida smart televisions and inverter split air conditioners include complimentary professional installation by certified brand engineers.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#111111]">
              Zero hidden technician fees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
