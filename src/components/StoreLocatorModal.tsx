import React, { useState } from 'react';
import { X, MapPin, Phone, Clock, Search, CheckCircle2, Navigation } from 'lucide-react';
import { Product } from '../types';

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
}

interface StoreItem {
  id: string;
  name: string;
  type: 'Onida Exclusive Brand Hub' | 'Authorized Retail Partner';
  address: string;
  city: string;
  pincode: string;
  phone: string;
  hours: string;
  stockStatus: 'Available Today' | 'Order for Next-Day Demo';
}

const STORES_DATA: StoreItem[] = [
  {
    id: 'store-1',
    name: 'Onida Brand Experience Hub',
    type: 'Onida Exclusive Brand Hub',
    address: 'Unit 12, Ground Floor, Phoenix Marketcity, Kurla West',
    city: 'Mumbai',
    pincode: '400070',
    phone: '+91 22 2503 1111',
    hours: '10:30 AM – 9:00 PM (All 7 Days)',
    stockStatus: 'Available Today',
  },
  {
    id: 'store-2',
    name: 'Vijay Sales Electronics — Dadar',
    type: 'Authorized Retail Partner',
    address: 'Near Plaza Cinema, NC Kelkar Road, Dadar West',
    city: 'Mumbai',
    pincode: '400028',
    phone: '+91 22 2430 5566',
    hours: '11:00 AM – 8:30 PM',
    stockStatus: 'Available Today',
  },
  {
    id: 'store-3',
    name: 'Onida Flagship Gallery — Indiranagar',
    type: 'Onida Exclusive Brand Hub',
    address: '84/2, 100 Feet Road, Near Domlur Flyover, Indiranagar',
    city: 'Bengaluru',
    pincode: '560038',
    phone: '+91 80 4125 7788',
    hours: '10:00 AM – 8:30 PM',
    stockStatus: 'Available Today',
  },
  {
    id: 'store-4',
    name: 'Reliance Digital — Connaught Place',
    type: 'Authorized Retail Partner',
    address: 'Block F, Inner Circle, Connaught Place',
    city: 'New Delhi',
    pincode: '110001',
    phone: '+91 11 2341 9900',
    hours: '10:00 AM – 9:00 PM',
    stockStatus: 'Available Today',
  },
  {
    id: 'store-5',
    name: 'Girias Home Appliances — T. Nagar',
    type: 'Authorized Retail Partner',
    address: 'Pondy Bazaar, Sir Thyagaraya Road, T. Nagar',
    city: 'Chennai',
    pincode: '600017',
    phone: '+91 44 2815 4433',
    hours: '10:30 AM – 9:00 PM',
    stockStatus: 'Order for Next-Day Demo',
  },
  {
    id: 'store-6',
    name: 'Great Eastern Trading Co. — Park Street',
    type: 'Authorized Retail Partner',
    address: 'Park Mansions, 57A Park Street',
    city: 'Kolkata',
    pincode: '700016',
    phone: '+91 33 2229 8811',
    hours: '10:30 AM – 8:00 PM',
    stockStatus: 'Available Today',
  },
];

export const StoreLocatorModal: React.FC<StoreLocatorModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
}) => {
  const [searchCity, setSearchCity] = useState('');
  const [bookedStore, setBookedStore] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredStores = STORES_DATA.filter((s) => {
    if (!searchCity.trim()) return true;
    const q = searchCity.toLowerCase();
    return (
      s.city.toLowerCase().includes(q) ||
      s.pincode.includes(q) ||
      s.name.toLowerCase().includes(q) ||
      s.address.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-[#E2DFD7] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-6 border-b border-[#E2DFD7] bg-[#F7F5F0] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#D2141E]" />
              <h2 className="text-xl font-bold text-[#111111]">Find in Store</h2>
            </div>
            {selectedProduct && (
              <p className="text-xs text-[#6B6B6B] mt-0.5">
                Checking authorized stockists for: <span className="font-semibold text-[#111111]">{selectedProduct.name}</span>
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6B6B6B] hover:text-[#111111] rounded-full bg-white border border-[#E2DFD7]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 sm:p-6 border-b border-[#E2DFD7] bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8E8E8E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              placeholder="Enter your City or PIN Code (e.g. Mumbai, 400070, Bengaluru, Delhi)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] placeholder-[#8E8E8E] focus:outline-none focus:border-[#111111]"
            />
          </div>
          <div className="flex items-center gap-2 mt-3 text-xs text-[#6B6B6B]">
            <span>Quick pick:</span>
            {['Mumbai', 'Bengaluru', 'New Delhi', 'Chennai', 'Kolkata'].map((city) => (
              <button
                key={city}
                onClick={() => setSearchCity(city)}
                className="underline hover:text-[#D2141E]"
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Store Results List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {filteredStores.length > 0 ? (
            filteredStores.map((store) => (
              <div
                key={store.id}
                className="p-5 rounded-2xl border border-[#E2DFD7] bg-[#F7F5F0] hover:border-[#111111] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        store.type.includes('Exclusive')
                          ? 'bg-[#111111] text-white'
                          : 'bg-white text-[#111111] border border-[#E2DFD7]'
                      }`}
                    >
                      {store.type}
                    </span>
                    <span className="text-[11px] font-semibold text-green-700 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                      {store.stockStatus}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#111111]">{store.name}</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed max-w-md">
                    {store.address}, {store.city} — {store.pincode}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B6B6B] pt-1">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" />
                      {store.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {store.hours}
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                  <button
                    onClick={() => setBookedStore(store.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                      bookedStore === store.id
                        ? 'bg-green-700 text-white'
                        : 'bg-[#D2141E] hover:bg-[#b01018] text-white'
                    }`}
                  >
                    {bookedStore === store.id ? 'Demo Reserved' : 'Book Showroom Demo'}
                  </button>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      store.name + ' ' + store.address + ' ' + store.city
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#111111] font-semibold hover:underline"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 space-y-2">
              <p className="text-sm font-semibold text-[#111111]">
                No dealer found in "{searchCity}"
              </p>
              <p className="text-xs text-[#6B6B6B]">
                We deliver to over 19,000+ PIN codes directly through Onida Online with free installation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
