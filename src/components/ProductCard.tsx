import React from 'react';
import { Product } from '../types';
import { ArrowRight, Plus, Eye, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onQuickView?: (product: Product, e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
  onQuickView,
}) => {
  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div
      onClick={() => onSelect(product)}
      className="group cursor-pointer rounded-2xl bg-white border border-[#E2DFD7] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#111111] hover:shadow-xs"
    >
      {/* Visual Top */}
      <div>
        <div className="relative aspect-[4/3] bg-[#EAE7E0] overflow-hidden">
          <img
            src={product.images[0] || product.lifestyleImg}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
            {product.badge && (
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#111111] text-white">
                {product.badge}
              </span>
            )}
            {product.energyRating && (
              <span className="text-[10px] font-semibold tracking-tight px-2 py-0.5 rounded-full bg-white/95 text-[#111111] border border-[#E2DFD7] flex items-center gap-1 shadow-2xs">
                <span>{product.energyRating}★ BEE</span>
              </span>
            )}
          </div>

          {/* Red Savings Badge */}
          {discountPercent > 0 && (
            <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#D2141E] text-white shadow-2xs">
              Save {discountPercent}%
            </span>
          )}

          {/* Quick View Hover Action on Desktop */}
          {onQuickView && (
            <button
              onClick={(e) => onQuickView(product, e)}
              className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-[#111111] opacity-0 group-hover:opacity-100 transition-all shadow-xs"
              title="Quick preview"
              aria-label="Quick preview"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Content Details */}
        <div className="p-5 sm:p-6 space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs text-[#6B6B6B]">
              <span className="font-medium text-[#D2141E]">{product.series}</span>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-[#111111]">{product.rating}</span>
                <span className="text-[11px] text-[#8E8E8E]">({product.reviewCount})</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#111111] tracking-tight group-hover:text-[#D2141E] transition-colors leading-snug">
              {product.name}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#6B6B6B] line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Key Spec Badge Strip */}
          <div className="pt-1">
            <span className="inline-block text-[11px] font-medium text-[#111111] bg-[#F7F5F0] border border-[#E2DFD7] px-2.5 py-1 rounded-md max-w-full truncate">
              {product.keySpecs}
            </span>
          </div>
        </div>
      </div>

      {/* Footer & Actions */}
      <div className="p-5 sm:p-6 pt-0 border-t border-[#F0EEEA] mt-2 flex flex-col space-y-4">
        <div className="flex items-baseline justify-between pt-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.oldPrice && (
                <span className="text-xs sm:text-sm text-[#8E8E8E] line-through">
                  ₹{product.oldPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <p className="text-[11px] text-[#6B6B6B] mt-0.5">
              EMI from ₹{product.emiStartsAt.toLocaleString('en-IN')}/mo
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="w-full py-2.5 px-3 rounded-full border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white text-xs font-semibold tracking-tight transition-colors text-center"
          >
            Details
          </button>
          <button
            onClick={(e) => onAddToCart(product, e)}
            className="w-full py-2.5 px-3 rounded-full bg-[#D2141E] hover:bg-[#b01018] text-white text-xs font-semibold tracking-tight transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
