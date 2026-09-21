import React, { useState } from 'react';
import { X, User, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { OnidaLogo } from './OnidaLogo';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSupport: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onNavigateSupport,
}) => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 4) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-md bg-white rounded-3xl border border-[#E2DFD7] shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <OnidaLogo height={24} />
          <button
            onClick={onClose}
            className="p-1.5 text-[#8E8E8E] hover:text-[#111111] rounded-full bg-[#F7F5F0]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {loggedIn ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F7F5F0] border border-[#E2DFD7]">
              <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold">
                RK
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#111111]">Ramesh Kulkarni</h3>
                <p className="text-xs text-[#6B6B6B]">+91 {mobile || '98200 12345'}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider">
                My Registered Appliances (1)
              </h4>
              <div className="p-4 rounded-xl border border-[#E2DFD7] space-y-2">
                <div className="flex justify-between items-start text-xs">
                  <span className="font-bold text-[#111111]">55" Nexg 4K Smart TV</span>
                  <span className="text-[10px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                    Active Warranty
                  </span>
                </div>
                <p className="text-[11px] text-[#6B6B6B]">Serial: ON-TV-55-984210 • 2 Years Remaining</p>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onNavigateSupport();
                }}
                className="w-full py-3 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#2A2A2A] transition-colors"
              >
                Register Another Product / Book Service
              </button>
              <button
                onClick={() => setLoggedIn(false)}
                className="w-full py-2.5 text-xs text-[#8E8E8E] hover:text-[#111111]"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : !otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#111111]">Sign In to Onida Care</h3>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Access warranty cards, track technician visits, and order genuine parts.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#111111] mb-1">
                Enter Mobile Number
              </label>
              <div className="flex rounded-xl border border-[#E2DFD7] bg-[#F7F5F0] overflow-hidden">
                <span className="px-3 py-2.5 text-xs font-bold text-[#6B6B6B] bg-[#EAE7E0] border-r border-[#E2DFD7] flex items-center">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                  placeholder="98200 12345"
                  className="w-full px-3 py-2.5 text-xs bg-transparent text-[#111111] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full bg-[#D2141E] hover:bg-[#b01018] text-white text-xs font-semibold tracking-tight transition-colors shadow-xs"
            >
              Get OTP
            </button>

            <p className="text-[11px] text-center text-[#8E8E8E]">
              We respect your privacy. Zero spam promise.
            </p>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#111111]">Enter Verification Code</h3>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Enter 4-digit OTP sent to +91 {mobile} (Demo: enter 1234)
              </p>
            </div>

            <div>
              <input
                type="text"
                required
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="• • • •"
                className="w-full py-3 text-center tracking-widest text-lg font-bold bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full bg-[#D2141E] hover:bg-[#b01018] text-white text-xs font-semibold tracking-tight transition-colors shadow-xs"
            >
              Verify & Sign In
            </button>

            <button
              type="button"
              onClick={() => setOtpSent(false)}
              className="w-full text-xs text-[#6B6B6B] hover:text-[#111111]"
            >
              Change Mobile Number
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
