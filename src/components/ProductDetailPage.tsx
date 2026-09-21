import React, { useState } from 'react';
import { Product } from '../types';
import {
  Star,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Truck,
  CreditCard,
  MapPin,
  ArrowLeft,
  ShoppingBag,
  Share2,
  Check
} from 'lucide-react';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onFindInStore: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onAddToCart,
  onFindInStore,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specifications' | 'reviews' | 'support'>('overview');
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const images = product.images.length > 0 ? product.images : [product.lifestyleImg];

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#D2141E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs text-[#6B6B6B] hover:text-[#111111] p-2 rounded-lg bg-white border border-[#E2DFD7]"
            title="Share product link"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copiedLink ? 'Link Copied' : 'Share'}</span>
          </button>
        </div>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DFD7] shadow-xs">
          {/* Gallery Col (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Large Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EAE7E0] border border-[#E2DFD7]">
              <img
                src={images[selectedImageIndex] || product.lifestyleImg}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#111111] text-white">
                  {product.badge}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-[#D2141E] text-white">
                  Save {discountPercent}%
                </span>
              )}
            </div>

            {/* Thumbnail Switcher */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-[#D2141E] shadow-xs'
                        : 'border-[#E2DFD7] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info Col (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-[#D2141E] uppercase tracking-wider">
                  {product.series} • {product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs sm:text-sm font-medium text-[#6B6B6B]">
                  {product.tagline}
                </p>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 text-xs">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-[#111111]">{product.rating}</span>
                <span className="text-[#8E8E8E]">({product.reviewCount} verified ratings)</span>
              </div>

              {/* Price & Savings */}
              <div className="pt-2 border-t border-[#F0EEEA]">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.oldPrice && (
                    <span className="text-base text-[#8E8E8E] line-through">
                      ₹{product.oldPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="text-xs font-bold text-[#D2141E] bg-[#FDF3F3] px-2.5 py-0.5 rounded-full">
                      Save ₹{(product.oldPrice! - product.price).toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#6B6B6B] mt-1">
                  Inclusive of all taxes. No-cost EMI starts at ₹{product.emiStartsAt.toLocaleString('en-IN')}/month.
                </p>
              </div>

              {/* Key Features Bullet List */}
              <div className="pt-2 space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Key Highlights
                </h2>
                <ul className="space-y-2 text-xs text-[#4A4A4A]">
                  {product.keyFeatures.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D2141E] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions & Quantity */}
            <div className="pt-6 border-t border-[#F0EEEA] space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#E2DFD7] rounded-full bg-[#F7F5F0] px-3 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center font-bold text-[#111111] hover:text-[#D2141E]"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#111111]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center font-bold text-[#111111] hover:text-[#D2141E]"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onAddToCart(product, quantity)}
                  className="flex-1 py-3.5 px-6 rounded-full bg-[#D2141E] hover:bg-[#b01018] text-white text-sm font-semibold tracking-tight transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>

              <button
                onClick={() => onFindInStore(product)}
                className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-[#F7F5F0] border border-[#111111] text-[#111111] text-sm font-semibold tracking-tight transition-colors flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#D2141E]" />
                <span>Find in Store</span>
              </button>
            </div>
          </div>
        </div>

        {/* Service / Value Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-6 border border-[#E2DFD7]">
          <div className="flex items-center gap-3 p-2">
            <ShieldCheck className="w-6 h-6 text-[#D2141E] shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-xs font-bold text-[#111111]">1 Year Warranty</p>
              <p className="text-[11px] text-[#6B6B6B]">Comprehensive manufacturer care</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2">
            <Wrench className="w-6 h-6 text-[#D2141E] shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-xs font-bold text-[#111111]">Free Installation</p>
              <p className="text-[11px] text-[#6B6B6B]">Authorized doorstep demo</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2">
            <Truck className="w-6 h-6 text-[#D2141E] shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-xs font-bold text-[#111111]">PAN India Service</p>
              <p className="text-[11px] text-[#6B6B6B]">600+ certified service hubs</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2">
            <CreditCard className="w-6 h-6 text-[#D2141E] shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-xs font-bold text-[#111111]">Easy EMI Options</p>
              <p className="text-[11px] text-[#6B6B6B]">Zero down payment partners</p>
            </div>
          </div>
        </div>

        {/* Tabs: Overview, Specifications, Reviews, Support */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DFD7] space-y-8">
          {/* Tab Bar */}
          <div className="flex items-center gap-6 border-b border-[#E2DFD7] pb-4 overflow-x-auto">
            {(['overview', 'specifications', 'reviews', 'support'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-semibold capitalize pb-2 relative transition-colors ${
                  activeTab === tab
                    ? 'text-[#111111]'
                    : 'text-[#6B6B6B] hover:text-[#111111]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D2141E] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6 max-w-3xl">
              <p className="text-base text-[#4A4A4A] leading-relaxed">
                {product.fullDesc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {product.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E2DFD7] space-y-1">
                    <span className="text-[11px] font-bold text-[#D2141E] uppercase">Feature {idx + 1}</span>
                    <p className="text-xs text-[#111111] leading-relaxed">{feat}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="max-w-3xl">
              <div className="divide-y divide-[#EFECE6] border border-[#E2DFD7] rounded-xl overflow-hidden">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="grid grid-cols-3 py-3.5 px-5 text-xs">
                    <span className="font-semibold text-[#111111]">{spec.label}</span>
                    <span className="col-span-2 text-[#6B6B6B]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6 max-w-3xl">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F7F5F0] border border-[#E2DFD7]">
                <div className="text-3xl font-bold text-[#111111]">{product.rating}</div>
                <div>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">Based on {product.reviewCount} customer reviews across India</p>
                </div>
              </div>

              {/* Sample verified Indian customer reviews */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-[#E2DFD7] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#111111]">Aditya Nair • Kochi</span>
                    <span className="text-[#8E8E8E]">Verified Buyer</span>
                  </div>
                  <p className="text-xs text-[#4A4A4A] leading-relaxed">
                    "Excellent build quality and the picture is warm and natural. It doesn't strain the eyes like some overly bright displays. The sound is remarkably full."
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#E2DFD7] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#111111]">Neha Kulkarni • Pune</span>
                    <span className="text-[#8E8E8E]">Verified Buyer</span>
                  </div>
                  <p className="text-xs text-[#4A4A4A] leading-relaxed">
                    "Installation engineer arrived the next morning. Very polite and set up the wall mount seamlessly. Proud to have an Onida in our new home."
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="space-y-4 max-w-2xl text-xs text-[#6B6B6B]">
              <h3 className="text-sm font-bold text-[#111111]">Onida Care & Warranty Support</h3>
              <p className="leading-relaxed">
                Need help with installation or warranty extension? Our customer care specialists are available Monday through Saturday from 9:00 AM to 8:00 PM IST.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E2DFD7]">
                  <p className="font-bold text-[#111111]">Toll Free</p>
                  <p className="text-sm font-semibold text-[#D2141E] mt-1">1800-209-5500</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E2DFD7]">
                  <p className="font-bold text-[#111111]">WhatsApp Assistance</p>
                  <p className="text-sm font-semibold text-[#111111] mt-1">+91 93248 11111</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Large Editorial Product/Lifestyle Section Underneath */}
        <div className="rounded-3xl overflow-hidden bg-white border border-[#E2DFD7] grid grid-cols-1 lg:grid-cols-12 shadow-xs">
          <div className="lg:col-span-7 h-[360px] sm:h-[420px] bg-[#EAE7E0] overflow-hidden">
            <img
              src={product.lifestyleImg}
              alt={product.roomContext}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center space-y-4">
            <span className="text-xs font-semibold text-[#D2141E] uppercase tracking-wider">
              Inside The Home
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-snug">
              {product.roomContext}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
              Every detail is considered: how light reflects off the matte chassis at noon, how acoustic waves travel around curtains and furniture, and how effortlessly the controls respond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
