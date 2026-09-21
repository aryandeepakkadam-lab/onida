import React from 'react';
import { Product } from '../types';
import { X, Star, ShoppingBag, ArrowRight } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectFull: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onSelectFull,
  onAddToCart,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E2DFD7] shadow-2xl p-6 sm:p-8 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#8E8E8E] hover:text-[#111111] rounded-full bg-[#F7F5F0]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#EAE7E0] border border-[#E2DFD7]">
            <img
              src={product.images[0] || product.lifestyleImg}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-[#D2141E] uppercase tracking-wider">
                {product.series}
              </span>
              <h3 className="text-xl font-bold text-[#111111] mt-1 leading-snug">
                {product.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-1 text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-[#111111]">{product.rating}</span>
                <span className="text-[#8E8E8E]">({product.reviewCount} ratings)</span>
              </div>
            </div>

            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              {product.shortDesc}
            </p>

            <div className="text-xs font-medium text-[#111111] bg-[#F7F5F0] p-2.5 rounded-lg border border-[#E2DFD7]">
              {product.keySpecs}
            </div>

            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-2xl font-bold text-[#111111]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.oldPrice && (
                <span className="text-xs text-[#8E8E8E] line-through">
                  ₹{product.oldPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex-1 py-3 rounded-full bg-[#D2141E] hover:bg-[#b01018] text-white text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => {
                  onSelectFull(product);
                  onClose();
                }}
                className="px-4 py-3 rounded-full border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white text-xs font-semibold flex items-center gap-1"
              >
                <span>Full Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
