import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [pinCode, setPinCode] = useState('400001');
  const [pinChecked, setPinChecked] = useState(true);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F5F0] border-l border-[#E2DFD7] shadow-xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#E2DFD7] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D2141E]" />
              <h2 className="text-lg font-bold text-[#111111]">Your Cart</h2>
              <span className="text-xs text-[#6B6B6B] font-medium">
                ({items.reduce((acc, item) => acc + item.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#6B6B6B] hover:text-[#111111] rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <ShoppingBag className="w-12 h-12 text-[#8E8E8E] mx-auto" strokeWidth={1.2} />
                <p className="text-base font-semibold text-[#111111]">
                  Your cart is empty
                </p>
                <p className="text-xs text-[#6B6B6B] max-w-xs mx-auto">
                  Explore our range of televisions, air conditioners, and home appliances.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-[#E2DFD7] shadow-2xs"
                >
                  <img
                    src={item.product.images[0] || item.product.lifestyleImg}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg bg-[#EAE7E0] shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xs font-bold text-[#111111] truncate">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#8E8E8E] hover:text-[#D2141E]"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#6B6B6B] truncate">
                        {item.product.series}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-bold text-[#111111]">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>

                      <div className="flex items-center border border-[#E2DFD7] rounded-full bg-[#F7F5F0]">
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.product.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#111111] hover:text-[#D2141E]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#111111]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#111111] hover:text-[#D2141E]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E2DFD7] space-y-4">
              {/* Delivery PIN Code check */}
              <div className="flex items-center justify-between text-xs bg-[#F7F5F0] p-2.5 rounded-lg border border-[#E2DFD7]">
                <span className="text-[#6B6B6B]">Delivery to:</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    maxLength={6}
                    className="w-16 bg-white border border-[#E2DFD7] px-2 py-0.5 rounded text-center font-semibold text-[#111111]"
                  />
                  <span className="text-[10px] text-green-700 font-bold">Free Delivery</span>
                </div>
              </div>

              {/* Subtotal */}
              <div className="space-y-1.5 pt-1 text-xs">
                <div className="flex justify-between text-[#6B6B6B]">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[#6B6B6B]">
                  <span>Installation & Demo</span>
                  <span className="text-green-700 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#111111] pt-2 border-t border-[#F0EEEA]">
                  <span>Total (incl. GST)</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="w-full py-3.5 px-6 rounded-full bg-[#D2141E] hover:bg-[#b01018] text-white text-sm font-semibold tracking-tight transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B6B6B]">
                <ShieldCheck className="w-3.5 h-3.5 text-green-700" />
                <span>100% Genuine Onida Warranty with doorstep installation</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
