import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, ArrowUpDown, Search, X } from 'lucide-react';

interface ProductListingPageProps {
  products: Product[];
  selectedCategory: ProductCategory | 'All';
  onCategoryChange: (category: ProductCategory | 'All') => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onQuickView?: (product: Product, e: React.MouseEvent) => void;
}

export const ProductListingPage: React.FC<ProductListingPageProps> = ({
  products,
  selectedCategory,
  onCategoryChange,
  onSelectProduct,
  onAddToCart,
  onQuickView,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const categories: (ProductCategory | 'All')[] = [
    'All',
    'Televisions',
    'Air Conditioners',
    'Refrigerators',
    'Washing Machines',
    'Air Coolers',
  ];

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCat =
          selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch =
          searchQuery.trim() === '' ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.keySpecs.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRating =
          filterRating === null || product.rating >= filterRating;

        return matchesCat && matchesSearch && matchesRating;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured default
      });
  }, [products, selectedCategory, searchQuery, filterRating, sortBy]);

  return (
    <div className="py-10 md:py-16 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="border-b border-[#E2DFD7] pb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
            Our Products
          </h1>
          <p className="text-base sm:text-lg text-[#6B6B6B] mt-2">
            Thoughtfully designed for every home.
          </p>
        </div>

        {/* Category Pill Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#D2141E] text-white shadow-2xs'
                    : 'bg-white text-[#111111] hover:bg-[#EAE7E0] border border-[#E2DFD7]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Controls / Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#E2DFD7]">
          {/* Quick Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#8E8E8E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by model, screen size, or feature..."
              className="w-full pl-10 pr-8 py-2 text-xs sm:text-sm bg-[#F7F5F0] border border-[#E2DFD7] rounded-lg text-[#111111] placeholder-[#8E8E8E] focus:outline-none focus:border-[#111111]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8E8E8E] hover:text-[#111111]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort & Rating Filter */}
          <div className="flex items-center gap-3 self-end md:self-auto text-xs">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#6B6B6B]" />
              <span className="text-[#6B6B6B] hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#F7F5F0] border border-[#E2DFD7] rounded-lg px-3 py-2 text-xs font-semibold text-[#111111] focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <span className="text-[#6B6B6B] font-medium hidden sm:inline">
              Showing {filteredProducts.length} items
            </span>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E2DFD7] space-y-4">
            <SlidersHorizontal className="w-8 h-8 text-[#8E8E8E] mx-auto" />
            <h3 className="text-lg font-bold text-[#111111]">No products found</h3>
            <p className="text-sm text-[#6B6B6B] max-w-sm mx-auto">
              We couldn't find any products matching "{searchQuery}". Try selecting another category or clearing filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('All');
              }}
              className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
