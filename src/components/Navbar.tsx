import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, ArrowRight } from 'lucide-react';
import { OnidaLogo } from './OnidaLogo';
import { ActivePage, ProductCategory } from '../types';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage, category?: ProductCategory) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: ActivePage }[] = [
    { label: 'Products', page: 'products' },
    { label: 'Support', page: 'support' },
    { label: 'About', page: 'about' },
    { label: 'Offers', page: 'offers' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#F7F5F0]/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-[#E2DFD7]'
          : 'bg-[#F7F5F0] border-b border-[#E2DFD7]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LEFT: ONIDA Wordmark */}
        <div className="flex items-center">
          <OnidaLogo
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            height={26}
          />
        </div>

        {/* CENTER: Main Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#111111] font-semibold'
                    : 'text-[#6B6B6B] hover:text-[#111111]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D2141E] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT: Actions (Search, Account, Cart) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2.5 text-[#111111] hover:text-[#D2141E] hover:bg-[#EAE7E0] rounded-full transition-colors"
            aria-label="Search products"
            title="Search products"
          >
            <Search className="w-5 h-5" strokeWidth={1.75} />
          </button>

          <button
            onClick={onOpenAccount}
            className="hidden sm:flex p-2.5 text-[#111111] hover:text-[#D2141E] hover:bg-[#EAE7E0] rounded-full transition-colors"
            aria-label="My Account"
            title="My Account"
          >
            <User className="w-5 h-5" strokeWidth={1.75} />
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2.5 text-[#111111] hover:text-[#D2141E] hover:bg-[#EAE7E0] rounded-full transition-colors"
            aria-label="Shopping Cart"
            title="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.75} />
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 min-w-[18px] h-[18px] px-1 bg-[#D2141E] text-white text-[11px] font-semibold flex items-center justify-center rounded-full leading-none">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-[#111111] hover:text-[#D2141E] rounded-full"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.75} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2DFD7] bg-[#F7F5F0] px-6 py-6 space-y-4">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => {
                    onNavigate(link.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between py-3 text-base font-medium rounded-lg px-3 transition-colors ${
                    isActive
                      ? 'bg-white text-[#D2141E] font-semibold'
                      : 'text-[#111111] hover:bg-[#EAE7E0]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#E2DFD7] flex items-center justify-between text-sm">
            <button
              onClick={() => {
                onOpenAccount();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 py-2 px-3 text-[#111111] hover:text-[#D2141E]"
            >
              <User className="w-4 h-4" />
              <span>Customer Account & Care</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
