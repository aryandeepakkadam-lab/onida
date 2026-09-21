import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';
import { ProductCategory } from '../types';

interface CategoryRangeProps {
  onSelectCategory: (category: ProductCategory) => void;
  onViewAll: () => void;
}

export const CategoryRange: React.FC<CategoryRangeProps> = ({
  onSelectCategory,
  onViewAll,
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              Explore Our Range
            </h2>
            <p className="text-sm sm:text-base text-[#6B6B6B] mt-2">
              Five product categories unified by one disciplined design system.
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#D2141E] transition-colors group self-start sm:self-auto"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className="group cursor-pointer rounded-xl bg-white border border-[#E2DFD7] overflow-hidden flex flex-col transition-all duration-300 hover:border-[#111111] hover:shadow-xs"
            >
              {/* Product/lifestyle image */}
              <div className="relative aspect-[4/3] bg-[#EAE7E0] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/90 text-[#111111] border border-[#E2DFD7]">
                  {cat.count}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#111111] tracking-tight group-hover:text-[#D2141E] transition-colors">
                      {cat.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#6B6B6B] opacity-0 group-hover:opacity-100 group-hover:text-[#D2141E] transition-all" />
                  </div>
                  <p className="text-xs text-[#6B6B6B] line-clamp-2 leading-relaxed">
                    {cat.supportingLine}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F0EEEA] flex items-center text-xs font-semibold text-[#111111] group-hover:text-[#D2141E] transition-colors">
                  <span>Explore category</span>
                  <span className="ml-1 text-xs">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
