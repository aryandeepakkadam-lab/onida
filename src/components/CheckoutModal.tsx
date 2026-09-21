import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [address, setAddress] = useState({
    name: 'Aakash Mehta',
    phone: '98201 54321',
    addressLine: 'A-402, Green Ridge Towers, JVLR',
    city: 'Mumbai',
    pincode: '400076',
    paymentMethod: 'UPI',
  });

  if (!isOpen) return null;

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-[#E2DFD7] shadow-2xl p-6 sm:p-8 overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#D2141E]" />
            <h2 className="text-lg font-bold text-[#111111]">
              {step === 'details' ? 'Secure Onida Checkout' : 'Order Confirmed'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8E8E8E] hover:text-[#111111] rounded-full bg-[#F7F5F0]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            {/* Delivery Details */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                1. Delivery & Installation Address
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={address.name}
                  onChange={(e) => setAddress({ ...address, name: e.target.value })}
                  placeholder="Full Name"
                  className="px-3 py-2 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  value={address.phone}
                  onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                  placeholder="Mobile Phone"
                  className="px-3 py-2 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none"
                />
              </div>
              <input
                type="text"
                required
                value={address.addressLine}
                onChange={(e) => setAddress({ ...address, addressLine: e.target.value })}
                placeholder="House / Flat No., Building, Street"
                className="w-full px-3 py-2 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  placeholder="City"
                  className="px-3 py-2 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none"
                />
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={address.pincode}
                  onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                  placeholder="PIN Code"
                  className="px-3 py-2 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                2. Payment Method
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['UPI (GPay / PhonePe / Paytm)', 'No-Cost EMI / Card', 'Net Banking', 'Pay on Installation'].map((m) => (
                  <button
                    type="button"
                    key={m}
                    onClick={() => setAddress({ ...address, paymentMethod: m })}
                    className={`p-3 rounded-xl border text-left font-medium transition-all ${
                      address.paymentMethod === m
                        ? 'border-[#D2141E] bg-[#FDF3F3] text-[#D2141E] font-semibold'
                        : 'border-[#E2DFD7] bg-[#F7F5F0] text-[#111111]'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Total summary */}
            <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E2DFD7] flex items-center justify-between">
              <div>
                <p className="text-xs text-[#6B6B6B]">Amount Payable (incl. GST & Delivery):</p>
                <p className="text-xl font-bold text-[#111111]">₹{total.toLocaleString('en-IN')}</p>
              </div>
              <div className="text-right text-[11px] text-green-700 font-semibold flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" />
                <span>Free 2-Day Delivery</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#D2141E] hover:bg-[#b01018] text-white text-sm font-semibold tracking-tight transition-colors shadow-xs"
            >
              Confirm Order & Schedule Installation
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#111111]">
              Thank you, {address.name}!
            </h3>
            <p className="text-xs text-[#6B6B6B] max-w-sm mx-auto leading-relaxed">
              Order #OND-{Math.floor(100000 + Math.random() * 900000)} has been received. Our regional dispatch hub in {address.city} will contact you on {address.phone} to coordinate delivery and complimentary brand installation.
            </p>
            <button
              onClick={() => {
                onOrderSuccess();
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#2A2A2A]"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
