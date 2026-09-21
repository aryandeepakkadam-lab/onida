import React, { useState } from 'react';
import {
  ShieldCheck,
  MapPin,
  FileText,
  Headphones,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Search,
  Download,
  ArrowRight
} from 'lucide-react';

interface SupportPageProps {
  initialTab?: string;
}

export const SupportPage: React.FC<SupportPageProps> = ({ initialTab = 'registration' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [registeredSuccess, setRegisteredSuccess] = useState(false);
  const [requestBooked, setRequestBooked] = useState(false);

  // Registration Form State
  const [regData, setRegData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Televisions',
    serialNo: '',
    purchaseDate: '',
  });

  // Service Booking State
  const [serviceData, setServiceData] = useState({
    name: '',
    phone: '',
    city: '',
    pincode: '',
    appliance: 'Televisions',
    issue: '',
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisteredSuccess(true);
    setTimeout(() => setRegisteredSuccess(false), 6000);
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestBooked(true);
    setTimeout(() => setRequestBooked(false), 6000);
  };

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-[#E2DFD7] pb-8">
          <span className="text-xs font-semibold text-[#D2141E] uppercase tracking-wider">
            Customer Care & Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mt-2">
            Onida Support & Care
          </h1>
          <p className="text-base sm:text-lg text-[#6B6B6B] mt-2">
            Everywhere you meet us — dedicated assistance, genuine parts, and certified doorstep engineers.
          </p>
        </div>

        {/* Support Tab Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { id: 'registration', label: 'Product Registration', icon: ShieldCheck },
            { id: 'service-centers', label: 'Service Network', icon: MapPin },
            { id: 'warranty', label: 'Warranty & Policies', icon: FileText },
            { id: 'contact', label: 'Book Service / Contact', icon: Headphones },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-5 rounded-2xl border text-left transition-all flex items-center gap-3.5 ${
                  isSelected
                    ? 'bg-white border-[#111111] shadow-xs'
                    : 'bg-[#F7F5F0] border-[#E2DFD7] hover:bg-white'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-[#D2141E] text-white' : 'bg-[#EAE7E0] text-[#111111]'
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111111] leading-tight">
                    {item.label}
                  </h3>
                  <span className="text-[11px] text-[#6B6B6B]">
                    {isSelected ? 'Active section' : 'Click to view'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Product Registration */}
        {activeTab === 'registration' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DFD7] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl font-bold text-[#111111]">
                Register Your Appliance
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Activate your manufacturer warranty, unlock priority customer care queues, and receive complimentary software updates for your smart television or inverter appliance.
              </p>
              <div className="space-y-3 pt-4 text-xs text-[#111111]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D2141E]" />
                  <span>Direct door-step engineer verification</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D2141E]" />
                  <span>Automated digital warranty certificate</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D2141E]" />
                  <span>Free preventive maintenance reminder</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {registeredSuccess ? (
                <div className="p-8 rounded-2xl bg-[#F7F5F0] border border-green-300 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-green-700 mx-auto" />
                  <h3 className="text-lg font-bold text-[#111111]">Registration Successful!</h3>
                  <p className="text-xs text-[#6B6B6B] max-w-sm mx-auto">
                    Your Onida appliance warranty has been activated. A confirmation SMS with your warranty ID has been dispatched to {regData.phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={regData.name}
                        onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                        placeholder="e.g. Ramesh Iyer"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={regData.phone}
                        onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                        placeholder="e.g. 98200 12345"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-1">
                        Product Category
                      </label>
                      <select
                        value={regData.category}
                        onChange={(e) => setRegData({ ...regData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none focus:border-[#111111]"
                      >
                        <option>Televisions</option>
                        <option>Air Conditioners</option>
                        <option>Refrigerators</option>
                        <option>Washing Machines</option>
                        <option>Air Coolers</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-1">
                        Serial Number (from rear panel / box)
                      </label>
                      <input
                        type="text"
                        required
                        value={regData.serialNo}
                        onChange={(e) => setRegData({ ...regData, serialNo: e.target.value })}
                        placeholder="e.g. ON-TV-55-984210"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#D2141E] hover:bg-[#b01018] text-white text-xs font-semibold tracking-tight transition-colors shadow-xs"
                  >
                    Complete Product Registration
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Service Network */}
        {activeTab === 'service-centers' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DFD7] space-y-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-[#111111]">
                PAN-India Service Network
              </h2>
              <p className="text-sm text-[#6B6B6B] mt-1">
                With 600+ authorized repair and maintenance hubs across 450+ tier-1, tier-2, and tier-3 cities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  zone: 'West Zone Hub',
                  city: 'Mumbai & Pune Hubs',
                  address: 'MIRC Electronics Ltd, Onida House, G-9 MIDC Mahakali Caves Road, Andheri East, Mumbai 400093',
                  contact: '022-6697 0000',
                  timing: '9:00 AM – 7:30 PM (Mon-Sat)',
                },
                {
                  zone: 'South Zone Hub',
                  city: 'Bengaluru & Chennai Hubs',
                  address: 'Onida Regional Service Centre, 14/1 Cambridge Road, Ulsoor, Bengaluru 560008',
                  contact: '080-4152 3300',
                  timing: '9:00 AM – 7:30 PM (Mon-Sat)',
                },
                {
                  zone: 'North Zone Hub',
                  city: 'Delhi NCR & Lucknow Hubs',
                  address: 'A-24/5 Mohan Cooperative Industrial Area, Mathura Road, New Delhi 110044',
                  contact: '011-4167 8800',
                  timing: '9:00 AM – 7:30 PM (Mon-Sat)',
                },
              ].map((hub) => (
                <div key={hub.zone} className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E2DFD7] space-y-3">
                  <span className="text-[11px] font-bold text-[#D2141E] uppercase">{hub.zone}</span>
                  <h3 className="text-base font-bold text-[#111111]">{hub.city}</h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">{hub.address}</p>
                  <div className="pt-2 text-xs text-[#111111] font-medium space-y-1">
                    <p>Phone: {hub.contact}</p>
                    <p className="text-[#6B6B6B]">Hours: {hub.timing}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Warranty & Policies */}
        {activeTab === 'warranty' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DFD7] space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#111111]">
                Transparent Warranty Coverage
              </h2>
              <p className="text-sm text-[#6B6B6B] mt-1">
                Every Onida product carries manufacturer warranty backed by genuine components.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  cat: 'Smart Televisions',
                  standard: '1 Year Comprehensive',
                  special: '2 Years on Panel (Select Nexg Series)',
                  inclusions: 'Motherboard, Power Supply, Panel, Remote',
                },
                {
                  cat: 'Inverter Air Conditioners',
                  standard: '1 Year Machine + 5 Years on PCB',
                  special: '10 Years on Inverter Compressor',
                  inclusions: '100% Copper Condenser, Gas charge in warranty',
                },
                {
                  cat: 'Refrigerators',
                  standard: '1 Year Comprehensive',
                  special: '10 Years on Smart Inverter Compressor',
                  inclusions: 'Thermostat, Fan Motor, Door Gaskets',
                },
                {
                  cat: 'Washing Machines',
                  standard: '2 Years Comprehensive',
                  special: '10 Years on Direct Drive Motor',
                  inclusions: 'Drum Bearings, Pulsator, Control Board',
                },
                {
                  cat: 'Air Coolers',
                  standard: '1 Year Comprehensive',
                  special: 'Honeycomb Pad Replacement Assist',
                  inclusions: 'Pump, Fan Motor, Castor Assemblies',
                },
                {
                  cat: 'Doorstep Service Promise',
                  standard: '24-48 Hours Turnaround',
                  special: 'Free First-Time Installation',
                  inclusions: 'Certified brand technicians with ID cards',
                },
              ].map((w) => (
                <div key={w.cat} className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E2DFD7] space-y-2">
                  <h3 className="text-base font-bold text-[#111111]">{w.cat}</h3>
                  <div className="text-xs text-[#D2141E] font-semibold">{w.standard}</div>
                  <div className="text-xs font-medium text-[#111111]">{w.special}</div>
                  <p className="text-[11px] text-[#6B6B6B] pt-1">Coverage: {w.inclusions}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Contact / Book Service */}
        {activeTab === 'contact' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DFD7] grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#111111]">
                  Contact Customer Care
                </h2>
                <p className="text-sm text-[#6B6B6B] mt-1">
                  Our specialists are ready to help with product guidance, installation bookings, or repair requests.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E2DFD7] flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D2141E] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#111111]">Toll-Free Customer Care</p>
                    <p className="text-sm font-bold text-[#111111]">1800-209-5500</p>
                    <p className="text-[#6B6B6B] text-[11px]">9:00 AM – 8:00 PM (Monday to Saturday)</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E2DFD7] flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D2141E] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#111111]">Email Support</p>
                    <p className="text-sm font-bold text-[#111111]">care@onida.com</p>
                    <p className="text-[#6B6B6B] text-[11px]">Response within 12 business hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {requestBooked ? (
                <div className="p-8 rounded-2xl bg-[#F7F5F0] border border-green-300 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-green-700 mx-auto" />
                  <h3 className="text-lg font-bold text-[#111111]">Service Request Logged</h3>
                  <p className="text-xs text-[#6B6B6B] max-w-sm mx-auto">
                    Ticket #ON-{Math.floor(100000 + Math.random() * 900000)} generated. An authorized technician will contact you to schedule the visit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleServiceSubmit} className="space-y-4">
                  <h3 className="text-base font-bold text-[#111111]">
                    Book a Doorstep Technician Visit
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={serviceData.name}
                        onChange={(e) => setServiceData({ ...serviceData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={serviceData.phone}
                        onChange={(e) => setServiceData({ ...serviceData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={serviceData.city}
                        onChange={(e) => setServiceData({ ...serviceData, city: e.target.value })}
                        placeholder="e.g. Bengaluru"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#111111] mb-1">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={6}
                        value={serviceData.pincode}
                        onChange={(e) => setServiceData({ ...serviceData, pincode: e.target.value })}
                        placeholder="6-digit PIN"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111111] mb-1">
                      Describe the Assistance Needed
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={serviceData.issue}
                      onChange={(e) => setServiceData({ ...serviceData, issue: e.target.value })}
                      placeholder="e.g. Free wall-mount installation for 55 inch TV, or routine AC service check..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F7F5F0] border border-[#E2DFD7] rounded-xl text-[#111111] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#D2141E] hover:bg-[#b01018] text-white text-xs font-semibold tracking-tight transition-colors shadow-xs"
                  >
                    Submit Service Request
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
