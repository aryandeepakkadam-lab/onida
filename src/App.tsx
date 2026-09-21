import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { CategoryRange } from './components/CategoryRange';
import { HumanStory } from './components/HumanStory';
import { ProductLifestyleSplit } from './components/ProductLifestyleSplit';
import { TechnologySection } from './components/TechnologySection';
import { SupportSection } from './components/SupportSection';
import { FinalStatement } from './components/FinalStatement';
import { ProductListingPage } from './components/ProductListingPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { SupportPage } from './components/SupportPage';
import { AboutPage } from './components/AboutPage';
import { OffersPage } from './components/OffersPage';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { VideoModal } from './components/VideoModal';
import { StoreLocatorModal } from './components/StoreLocatorModal';
import { AccountModal } from './components/AccountModal';
import { CheckoutModal } from './components/CheckoutModal';
import { QuickViewModal } from './components/QuickViewModal';
import { ONIDA_PRODUCTS } from './data/products';
import { ActivePage, ProductCategory, Product, CartItem } from './types';
import { Check } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product>(ONIDA_PRODUCTS[0]);
  const [supportInitialTab, setSupportInitialTab] = useState<string>('registration');

  // Modals & Drawers
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [storeLocatorOpen, setStoreLocatorOpen] = useState(false);
  const [storeLocatorProduct, setStoreLocatorProduct] = useState<Product | null>(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Cart State
  const [cart, setCart] = useState<CartItem[]>([
    { product: ONIDA_PRODUCTS[0], quantity: 1 }
  ]);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage, selectedProduct]);

  // Navigation handlers
  const handleNavigate = (page: ActivePage, category?: ProductCategory) => {
    setActivePage(page);
    if (category) {
      setSelectedCategory(category);
    }
  };

  const handleSelectCategoryFromRange = (category: ProductCategory) => {
    setSelectedCategory(category);
    setActivePage('products');
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setActivePage('product-detail');
  };

  // Cart actions
  const handleAddToCart = (product: Product, quantity = 1, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.name}" to cart`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleOpenStoreLocator = (product?: Product) => {
    setStoreLocatorProduct(product || selectedProduct);
    setStoreLocatorOpen(true);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#111111]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111111] text-white px-5 py-3 rounded-full text-xs font-semibold shadow-xl border border-[#333333] flex items-center gap-2 animate-fade-in">
          <span className="w-5 h-5 rounded-full bg-[#D2141E] flex items-center justify-center text-white">
            <Check className="w-3 h-3" />
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAccount={() => setAccountOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            {/* SECTION 01 — HERO */}
            <Hero
              onExplore={() => {
                setSelectedCategory('All');
                setActivePage('products');
              }}
              onWatchStory={() => setVideoOpen(true)}
            />

            {/* SECTION 02 — TRUST / BRAND VALUES */}
            <TrustStrip />

            {/* SECTION 03 — EXPLORE OUR RANGE */}
            <CategoryRange
              onSelectCategory={handleSelectCategoryFromRange}
              onViewAll={() => {
                setSelectedCategory('All');
                setActivePage('products');
              }}
            />

            {/* SECTION 04 — HUMAN STORY */}
            <HumanStory onWatchFilm={() => setVideoOpen(true)} />

            {/* SECTION 05 — PRODUCT + LIFESTYLE */}
            <ProductLifestyleSplit
              onLearnMore={() => {
                setSelectedCategory('Air Conditioners');
                setActivePage('products');
              }}
            />

            {/* SECTION 06 — TECHNOLOGY */}
            <TechnologySection />

            {/* SECTION 07 — SUPPORT / CONFIDENCE */}
            <SupportSection
              onSelectService={(serviceId) => {
                setSupportInitialTab(serviceId);
                setActivePage('support');
              }}
            />

            {/* SECTION 08 — FINAL BRAND STATEMENT */}
            <FinalStatement
              onExplore={() => {
                setSelectedCategory('All');
                setActivePage('products');
              }}
            />
          </>
        )}

        {activePage === 'products' && (
          <ProductListingPage
            products={ONIDA_PRODUCTS}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onSelectProduct={handleSelectProduct}
            onAddToCart={(prod, e) => handleAddToCart(prod, 1, e)}
            onQuickView={(prod, e) => {
              e.stopPropagation();
              setQuickViewProduct(prod);
            }}
          />
        )}

        {activePage === 'product-detail' && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setActivePage('products')}
            onAddToCart={(prod, qty) => handleAddToCart(prod, qty)}
            onFindInStore={(prod) => handleOpenStoreLocator(prod)}
          />
        )}

        {activePage === 'support' && (
          <SupportPage initialTab={supportInitialTab} />
        )}

        {activePage === 'about' && (
          <AboutPage
            onExploreProducts={() => {
              setSelectedCategory('All');
              setActivePage('products');
            }}
          />
        )}

        {activePage === 'offers' && (
          <OffersPage
            onExploreCategory={(cat) => {
              setSelectedCategory(cat);
              setActivePage('products');
            }}
          />
        )}
      </main>

      {/* Global Structured Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenServiceTab={(tabId) => {
          setSupportInitialTab(tabId);
        }}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={ONIDA_PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      {/* Video Documentary Story Modal */}
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />

      {/* Store Locator Modal */}
      <StoreLocatorModal
        isOpen={storeLocatorOpen}
        onClose={() => setStoreLocatorOpen(false)}
        selectedProduct={storeLocatorProduct}
      />

      {/* Account / Warranty Portal Modal */}
      <AccountModal
        isOpen={accountOpen}
        onClose={() => setAccountOpen(false)}
        onNavigateSupport={() => {
          setActivePage('support');
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cart}
        onOrderSuccess={() => {
          setCart([]);
          showToast('Order confirmed! Our dispatch team will contact you shortly.');
        }}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onSelectFull={handleSelectProduct}
        onAddToCart={(prod) => handleAddToCart(prod, 1)}
      />
    </div>
  );
}
