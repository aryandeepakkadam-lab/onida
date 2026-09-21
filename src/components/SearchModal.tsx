import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const trendingQueries = [
    '55" 4K Smart TV',
    'Dual Inverter AC',
    'Side by Side Refrigerator',
    'Front Load Washer',
    'Desert Air Cooler',
  ];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.series.toLowerCase().includes(q) ||
        p.keySpecs.toLowerCase().includes(q)
    );
  }, [query, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative max-w-2xl mx-auto bg-white rounded-2xl border border-[#E2DFD7] shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#E2DFD7] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#D2141E] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Onida televisions, ACs, refrigerators..."
            autoFocus
            className="flex-1 text-base sm:text-lg bg-transparent border-none text-[#111111] placeholder-[#8E8E8E] focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8E8E8E] hover:text-[#111111]"
            >
              <X className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="text-xs font-semibold px-2 py-1 rounded bg-[#F7F5F0] text-[#6B6B6B]"
            >
              ESC
            </button>
          )}
        </div>

        {/* Results / Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {query.trim() === '' ? (
            <div className="space-y-4">
              <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {trendingQueries.map((t) => (
                  <button
                    key={t}
                    onClick={() => setQuery(t)}
                    className="text-xs font-medium px-3.5 py-2 rounded-full bg-[#F7F5F0] hover:bg-[#EAE7E0] text-[#111111] border border-[#E2DFD7] flex items-center gap-1.5 transition-colors"
                  >
                    <span>{t}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8E8E8E]" />
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">
                Products ({results.length})
              </p>
              <div className="divide-y divide-[#F0EEEA]">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="py-3 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F7F5F0] px-2 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.images[0] || product.lifestyleImg}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover bg-[#EAE7E0] shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-[#111111] group-hover:text-[#D2141E] transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-xs text-[#6B6B6B] line-clamp-1">
                          {product.series} • {product.keySpecs}
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-bold text-[#111111]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                      <span className="text-[11px] text-[#D2141E] font-medium flex items-center justify-end gap-1 group-hover:underline">
                        <span>View</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-2">
              <p className="text-sm font-semibold text-[#111111]">
                No matching products found
              </p>
              <p className="text-xs text-[#6B6B6B]">
                Check for spelling or try searching by category name like "Televisions" or "AC".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
