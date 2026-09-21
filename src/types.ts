export type ProductCategory = 
  | 'Televisions'
  | 'Air Conditioners'
  | 'Refrigerators'
  | 'Washing Machines'
  | 'Air Coolers';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductReview {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface Product {
  id: string;
  name: string;
  series: string;
  category: ProductCategory;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  keySpecs: string; // e.g. "Dolby Audio • 4K Bezel-less • HDR10"
  keyFeatures: string[];
  specs: ProductSpec[];
  images: string[];
  lifestyleImg: string;
  roomContext: string;
  inStock: boolean;
  energyRating?: number; // 1 to 5 stars
  badge?: string;
  emiStartsAt: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type ActivePage = 
  | 'home'
  | 'products'
  | 'product-detail'
  | 'support'
  | 'about'
  | 'offers';
