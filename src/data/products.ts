import { Product } from '../types';

import tvLivingRoomImg from '../assets/images/onida_tv_living_room_1790007652837.jpg';
import tvAngleImg from '../assets/images/onida_tv_angle_1790007783243.jpg';
import acSplitImg from '../assets/images/onida_air_conditioner_1790007682296.jpg';
import refKitchenImg from '../assets/images/onida_refrigerator_kitchen_1790007666674.jpg';
import refOpenImg from '../assets/images/onida_refrigerator_open_1790007768970.jpg';
import wmFrontImg from '../assets/images/onida_washing_machine_1790007696613.jpg';
import wmTopImg from '../assets/images/onida_top_washer_1790007796437.jpg';
import coolerDesertImg from '../assets/images/onida_desert_cooler_1790007710954.jpg';
import coolerTowerImg from '../assets/images/onida_tower_cooler_1790007810714.jpg';
import familyStoryImg from '../assets/images/onida_family_story_1790007728552.jpg';

export const HERO_SLIDES = [
  {
    id: 'slide-tv',
    category: 'Televisions' as const,
    title: 'Home brings people closer.',
    subtitle: 'Nexg 55" 4K UHD Smart TV',
    caption: 'Bezel-less cinema clarity framed by warm teakwood and natural light.',
    image: tvLivingRoomImg,
    badge: 'Flagship Living Room'
  },
  {
    id: 'slide-ref',
    category: 'Refrigerators' as const,
    title: 'Freshness at the heart of the home.',
    subtitle: 'Grandeur 670L Inverter Refrigerator',
    caption: 'Thoughtful humidity control keeping regional produce crisp for 15 days.',
    image: refKitchenImg,
    badge: 'Modern Kitchen'
  },
  {
    id: 'slide-ac',
    category: 'Air Conditioners' as const,
    title: 'Cool comfort, day and night.',
    subtitle: 'Genio 1.5 Ton 5-Star Tropical Inverter AC',
    caption: 'Whisper-quiet 24dB airflow engineered for relentless 54°C summer afternoons.',
    image: acSplitImg,
    badge: 'Serene Bedroom'
  }
];

export const ONIDA_PRODUCTS: Product[] = [
  {
    id: 'tv-55-nexg-4k',
    name: '55" 4K UHD Smart TV',
    series: 'Nexg Series',
    category: 'Televisions',
    tagline: 'Cinema clarity designed for modern Indian living rooms.',
    shortDesc: 'Bezel-less 4K Ultra HD display with Lucida Picture Engine, Dolby Audio, and seamless Fire TV OS built for intuitive Indian streaming.',
    fullDesc: 'Designed to fit naturally into contemporary Indian living spaces, the Onida 55" Nexg Series pairs an ultra-slim metal bezel with our proprietary Lucida Picture Engine. Tuned for Indian lighting conditions, it maintains rich contrast and true-to-life skin tones whether bathed in morning sunlight or enjoying an evening family film. Integrated Dolby Audio delivers crystal clear dialogue without requiring an external soundbar.',
    price: 34990,
    oldPrice: 47990,
    rating: 4.8,
    reviewCount: 428,
    keySpecs: '4K UHD • Bezel-less Metal • Dolby Audio • Fire TV Built-in',
    keyFeatures: [
      'Lucida Picture Engine tuned for natural skin tones and vibrant cricket & sports motion',
      'Ultra-thin 1.2mm minimal bezel that blends into wall textures and console wood',
      '24W Box Speakers with Dolby Audio and Dialogue Enhancement',
      'Dual-Band Wi-Fi (2.4GHz & 5GHz) with seamless voice remote in Hindi and English',
      'Wide Viewing Angle (178°) ensuring no colour fade for extended family gatherings',
      'Energy saving ambient light sensor that adjusts panel brightness automatically'
    ],
    specs: [
      { label: 'Screen Size', value: '55 Inch (139 cm)' },
      { label: 'Resolution', value: '4K Ultra HD (3840 x 2160 Pixels)' },
      { label: 'Refresh Rate', value: '60 Hz with MEMC Motion Smoothing' },
      { label: 'Sound Output', value: '24W High-Fidelity Box Speakers with Dolby Audio' },
      { label: 'Operating System', value: 'Fire TV OS with Alexa Voice Remote' },
      { label: 'Connectivity', value: '3 x HDMI 2.1 (eARC), 2 x USB, Optical Audio, LAN' },
      { label: 'Dimensions (with stand)', value: '122.8 cm x 76.5 cm x 24.1 cm' },
      { label: 'Weight', value: '11.4 kg' },
      { label: 'Warranty', value: '1 Year Comprehensive + 2 Years on Panel' }
    ],
    images: [
      tvLivingRoomImg,
      tvAngleImg,
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=1200&q=80'
    ],
    lifestyleImg: tvLivingRoomImg,
    roomContext: 'Living Room Console in a sunlit contemporary Indian apartment',
    inStock: true,
    energyRating: 5,
    badge: 'Popular',
    emiStartsAt: 1890
  },
  {
    id: 'tv-65-nexg-qled',
    name: '65" 4K Quantum Smart TV',
    series: 'Nexg QLED',
    category: 'Televisions',
    tagline: 'Quantum dot richness and immersive sound for expansive spaces.',
    shortDesc: '65-inch Quantum Dot technology with 100% colour volume, Dolby Vision & Atmos, housed in aerospace-grade brushed aluminium.',
    fullDesc: 'The flagship of Onida home entertainment. Featuring an advanced Quantum Dot layer capable of reproducing over one billion hues with pinpoint accuracy. Whether viewing regional cinema, global documentaries, or sporting matches, the panel balances deep blacks with specular highlights. Designed with hidden cable routing so your living room remains uncluttered and serene.',
    price: 52990,
    oldPrice: 69990,
    rating: 4.9,
    reviewCount: 312,
    keySpecs: 'Quantum Dot • Dolby Vision/Atmos • 120Hz DLG • Hands-free Mic',
    keyFeatures: [
      'Quantum Dot LED panel delivering 100% DCI-P3 cinematic colour volume',
      'Dolby Vision HDR & Dolby Atmos acoustic processing',
      'Far-field quad microphones for hands-free voice commands across the room',
      'Subwoofer integrated sound system (34W) tuned for warm, room-filling sound',
      'Solid brushed metal pedestal with concealed cable conduit',
      'Variable Refresh Rate (VRR) and ALLM for gaming consoles'
    ],
    specs: [
      { label: 'Screen Size', value: '65 Inch (164 cm)' },
      { label: 'Resolution', value: '4K Ultra HD (3840 x 2160 Pixels)' },
      { label: 'Refresh Rate', value: '120 Hz DLG / 60 Hz Native' },
      { label: 'Audio', value: '34W 2.1 Channel with Integrated Subwoofer' },
      { label: 'Operating System', value: 'Google TV with Profile Switching' },
      { label: 'Connectivity', value: '3 x HDMI 2.1, 2 x USB 3.0, Dual-Band Wi-Fi 6' },
      { label: 'Warranty', value: '2 Years Comprehensive Warranty' }
    ],
    images: [
      tvAngleImg,
      tvLivingRoomImg,
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80'
    ],
    lifestyleImg: tvAngleImg,
    roomContext: 'Spacious drawing room with natural teakwood wall panelling',
    inStock: true,
    energyRating: 5,
    badge: 'Flagship',
    emiStartsAt: 2790
  },
  {
    id: 'tv-43-live-fhd',
    name: '43" Full HD Smart TV',
    series: 'Live Series',
    category: 'Televisions',
    tagline: 'Balanced scale and crisp fidelity for bedrooms and studio apartments.',
    shortDesc: 'Vibrant Full HD panel with wide colour enhancer, anti-glare matte coating, and front-firing dual box acoustic chambers.',
    fullDesc: 'Sized perfectly for modern bedrooms, guest lounges, and compact flats. The 43" Live Series provides crisp 1080p resolution with Onida Pixel Boost technology. Engineered with a durable surge-protected power supply that effortlessly handles Indian voltage fluctuations from 90V to 300V.',
    price: 21990,
    oldPrice: 28990,
    rating: 4.7,
    reviewCount: 540,
    keySpecs: 'FHD • Anti-Glare Matte • 20W Box Speakers • Quad-Core CPU',
    keyFeatures: [
      'Pixel Boost engine providing sharp edge definition and noise reduction',
      'Surge and lightning protection up to 4kV built directly into the circuit',
      'Dual 10W box speakers tuned for high speech clarity at lower night volumes',
      'Screen mirroring from iOS, Android, and Windows laptops in one tap',
      'Lightweight frame compatible with slim universal wall mounts'
    ],
    specs: [
      { label: 'Screen Size', value: '43 Inch (108 cm)' },
      { label: 'Resolution', value: 'Full HD (1920 x 1080 Pixels)' },
      { label: 'Sound', value: '20W Stereo with DTS TruSurround' },
      { label: 'Operating System', value: 'Android TV 11' },
      { label: 'Warranty', value: '1 Year Comprehensive' }
    ],
    images: [
      tvLivingRoomImg,
      tvAngleImg
    ],
    lifestyleImg: tvLivingRoomImg,
    roomContext: 'Master bedroom reading nook with ambient morning light',
    inStock: true,
    energyRating: 4,
    emiStartsAt: 1250
  },
  {
    id: 'ac-1-5t-genio-inverter',
    name: '1.5 Ton 5-Star Inverter Split AC',
    series: 'Genio Tropical Series',
    category: 'Air Conditioners',
    tagline: 'Extreme 54°C cooling with whisper-quiet 24dB acoustic airflow.',
    shortDesc: 'Heavy-duty dual rotary inverter compressor with 100% inner grooved copper condenser, PM2.5 micro-filter, and 4-way aerodynamic air swing.',
    fullDesc: 'Built specifically to overcome intense Indian peak summers and humid monsoons. The Genio series maintains stable sub-20°C room temperatures even when outside thermometers touch 54°C. Featuring Blue Fin hydrophilic anti-rust coating to resist saline coastal air and urban pollution, alongside an ultra-low energy draw that keeps electricity bills predictable.',
    price: 36490,
    oldPrice: 48990,
    rating: 4.8,
    reviewCount: 388,
    keySpecs: '1.5 Ton • 5-Star BEE • Heavy Duty 54°C • 100% Copper',
    keyFeatures: [
      'Dual Rotary Inverter Compressor for 60% faster pull-down cooling',
      'Operates reliably up to 54°C ambient outdoor temperature',
      '100% Inner Grooved Copper Condenser and connecting pipes for longevity',
      '4-Way Auto Horizontal & Vertical Airflow distributing uniform chill',
      'PM2.5 Anti-Bacterial Filter removing airborne fine particulate matter',
      'Stabilizer-free operation across 130V to 285V voltage range'
    ],
    specs: [
      { label: 'Cooling Capacity', value: '5250 Watts (1.5 Ton)' },
      { label: 'Energy Rating', value: '5 Star BEE (ISEER: 5.12)' },
      { label: 'Refrigerant', value: 'Eco-Friendly R32 (Zero Ozone Depletion)' },
      { label: 'Noise Level', value: 'Ultra Quiet 24 dB (Indoor)' },
      { label: 'Condenser Coil', value: '100% Copper with Golden Hydrophilic Fin' },
      { label: 'Warranty', value: '1 Year on Machine, 5 Years on PCB, 10 Years on Compressor' }
    ],
    images: [
      acSplitImg,
      'https://images.unsplash.com/photo-1614633833026-0e31e50be062?auto=format&fit=crop&w=1200&q=80'
    ],
    lifestyleImg: acSplitImg,
    roomContext: 'Airy bedroom with natural linen textures and soft window sunlight',
    inStock: true,
    energyRating: 5,
    badge: 'Bestseller',
    emiStartsAt: 1980
  },
  {
    id: 'ac-1-0t-inverter-smart',
    name: '1.0 Ton 3-Star Inverter Split AC',
    series: 'Genio Compact',
    category: 'Air Conditioners',
    tagline: 'Rapid cooling and smart sleep curves for bedrooms up to 120 sq.ft.',
    shortDesc: 'High efficiency variable speed compressor with silent night airflow mode, active dehumidifier, and self-cleaning coil technology.',
    fullDesc: 'Tailored for children\'s rooms, home offices, and bedrooms up to 120 square feet. The Onida 1.0 Ton Genio Inverter automatically balances ambient temperature and moisture during humid monsoon spells. The intelligent sleep curve slowly elevates the temperature by 1°C per hour through the night to ensure deep, undisturbed rest while reducing energy consumption.',
    price: 28990,
    oldPrice: 38490,
    rating: 4.7,
    reviewCount: 219,
    keySpecs: '1.0 Ton • 3-Star BEE • Active Dehumidifier • Self Clean',
    keyFeatures: [
      'Rapid Jet Cool cooling a 120 sq.ft room in under 5 minutes',
      'Independent Dehumidifier mode for comfortable non-chilly monsoon days',
      'Self-Cleaning Frost Wash function that washes dust off internal fins',
      'Hidden LED temperature display on matte off-white chassis',
      '100% pure copper interconnecting tubing with anti-corrosion armor'
    ],
    specs: [
      { label: 'Cooling Capacity', value: '3500 Watts (1.0 Ton)' },
      { label: 'Energy Rating', value: '3 Star BEE (ISEER: 3.85)' },
      { label: 'Refrigerant', value: 'R32' },
      { label: 'Indoor Dimensions', value: '80.5 cm x 29.5 cm x 20.0 cm' },
      { label: 'Warranty', value: '1 Year Comprehensive + 10 Years on Compressor' }
    ],
    images: [
      acSplitImg,
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    lifestyleImg: acSplitImg,
    roomContext: 'Minimalist study & workstation filled with calm morning daylight',
    inStock: true,
    energyRating: 3,
    emiStartsAt: 1590
  },
  {
    id: 'ref-side-by-side-670',
    name: '670L Side-by-Side Inverter Refrigerator',
    series: 'Grandeur Series',
    category: 'Refrigerators',
    tagline: 'Expansive storage, intelligent moisture control, and matte metal warmth.',
    shortDesc: 'Dual Inverter Technology with Multi Air Flow, convertible freezer zones, deodorizing carbon matrix, and toughened glass shelves.',
    fullDesc: 'Refined for the generous entertaining and fresh produce needs of Indian households. The Grandeur 670L provides dedicated humidity-controlled crisper drawers that keep regional leafy greens and delicate herbs crisp for up to 15 days. With an understated dark matte stainless exterior that resists fingerprint smears, it becomes a seamless architectural centerpiece in contemporary modular kitchens.',
    price: 59990,
    oldPrice: 79990,
    rating: 4.9,
    reviewCount: 194,
    keySpecs: '670 Litres • Dual Inverter • Convertible Zones • Anti-Odour Tech',
    keyFeatures: [
      'Dual Inverter motor and fan adapting speed precisely to door openings',
      'Twin Crisper Drawers with adjustable humidity membranes for Indian greens',
      'Convertible bottom-right compartment toggleable between chill and freeze',
      'Active Carbon Deodorizer preventing spice odor cross-contamination',
      'Extra-wide 4-deep door balconies holding large 2L beverage bottles easily',
      'Toughened spill-proof glass shelves tested up to 175 kg load'
    ],
    specs: [
      { label: 'Gross Capacity', value: '670 Litres' },
      { label: 'Defrosting Type', value: 'Frost Free Multi Air Flow' },
      { label: 'Compressor', value: 'Variable Frequency Smart Inverter' },
      { label: 'Exterior Finish', value: 'Matte Titanium Anti-Fingerprint Steel' },
      { label: 'Dimensions', value: '91.2 cm x 177.5 cm x 72.5 cm' },
      { label: 'Warranty', value: '1 Year Comprehensive + 10 Years on Compressor' }
    ],
    images: [
      refKitchenImg,
      refOpenImg,
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1200&q=80'
    ],
    lifestyleImg: refKitchenImg,
    roomContext: 'Open-concept kitchen with warm walnut counters and natural marble',
    inStock: true,
    energyRating: 4,
    badge: 'Premium',
    emiStartsAt: 3250
  },
  {
    id: 'ref-double-door-260',
    name: '260L Frost-Free Double Door Refrigerator',
    series: 'FreshSense Series',
    category: 'Refrigerators',
    tagline: 'Reliable freshness and 10-hour cooling retention during power cuts.',
    shortDesc: '3-Star Inverter refrigerator with Cool Pack emergency cooling retention, farm-fresh fruit bin, and clean geometric exterior handles.',
    fullDesc: 'Designed to tackle everyday Indian kitchen realities. If an unexpected power cut occurs during hot afternoons, the integrated Cool Pack system circulates stored chill for up to 10 hours, preserving dairy, dough, and vegetables safely. Wide door bins comfortably accommodate large curd pots, milk bottles, and tall water carafes.',
    price: 24490,
    oldPrice: 32990,
    rating: 4.8,
    reviewCount: 412,
    keySpecs: '260 Litres • 3-Star Inverter • 10-Hr Cool Retention • Anti-Bacterial',
    keyFeatures: [
      'Smart Inverter compressor with quiet 36dB acoustic operation',
      'Cool Pack retaining sub-zero chill for up to 10 hours during power cuts',
      'Anti-Bacterial gasket easily removable for effortless cleaning',
      'Extra-large 27L vegetable box with moisture balancer lattice',
      'Fast Ice Maker producing fresh ice cubes in just 60 minutes'
    ],
    specs: [
      { label: 'Capacity', value: '260 Litres' },
      { label: 'Energy Rating', value: '3 Star BEE' },
      { label: 'Type', value: 'Double Door Frost Free' },
      { label: 'Shelves', value: 'Heavy Duty Toughened Glass (Adjustable)' },
      { label: 'Warranty', value: '1 Year on Unit, 10 Years on Compressor' }
    ],
    images: [
      refOpenImg,
      refKitchenImg
    ],
    lifestyleImg: refKitchenImg,
    roomContext: 'Bright modern Indian kitchen with terracotta and wood accents',
    inStock: true,
    energyRating: 3,
    emiStartsAt: 1390
  },
  {
    id: 'wm-front-load-8kg',
    name: '8.0 Kg Front Load Smart Inverter Washing Machine',
    series: 'HydroWash Pro',
    category: 'Washing Machines',
    tagline: 'Gentle fabric care and 60°C allergen steam wash for everyday garments.',
    shortDesc: 'Direct Drive Inverter motor with 5-Star efficiency, built-in steam wash, hard-water wash optimization, and diamond drum protection.',
    fullDesc: 'Indian textiles range from delicate raw silks and embroidered kurtas to resilient denim and school cottons. The Onida HydroWash Pro adapts drum rotation and water temperature precisely to fabric types. Its dedicated Hard Water Sense algorithm softens mineral interference, ensuring detergent dissolves completely without leaving chalky deposits on dark clothes.',
    price: 31990,
    oldPrice: 42990,
    rating: 4.8,
    reviewCount: 275,
    keySpecs: '8.0 Kg • 1400 RPM • Steam Hygiene • Hard Water Sense',
    keyFeatures: [
      'Inverter Direct Drive motor eliminating belts for quiet vibration-free spinning',
      'Allergen Steam cycle penetrating fibers at 60°C to eliminate 99.9% bacteria',
      'Hard Water algorithm optimizing detergent lathering in high-TDS regions',
      'Express 15-minute quick wash for lightly soiled daily workwear',
      'Self-cleaning drum cycle with hot water flush',
      'Auto Restart with memory backup resuming wash cycle seamlessly'
    ],
    specs: [
      { label: 'Wash Capacity', value: '8.0 Kg (Ideal for families of 4-6)' },
      { label: 'Max Spin Speed', value: '1400 RPM' },
      { label: 'Energy Star Rating', value: '5 Star BEE' },
      { label: 'Wash Programs', value: '14 Custom Programs (Cotton, Wool, Silk, Steam, Quick)' },
      { label: 'Dimensions', value: '59.5 cm x 85.0 cm x 56.5 cm' },
      { label: 'Warranty', value: '2 Years Comprehensive, 10 Years on Motor' }
    ],
    images: [
      wmFrontImg,
      wmTopImg,
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80'
    ],
    lifestyleImg: wmFrontImg,
    roomContext: 'Sunlit modern balcony utility nook with clean ceramic tiles',
    inStock: true,
    energyRating: 5,
    badge: 'Popular',
    emiStartsAt: 1720
  },
  {
    id: 'wm-top-load-7-5kg',
    name: '7.5 Kg Top Load Fully Automatic Washer',
    series: 'AquaJet Series',
    category: 'Washing Machines',
    tagline: 'Ergonomic top access with deep waterfall pulsating action.',
    shortDesc: 'Zero pressure water fill, magic lint filter, stainless steel scrub drum, and soft-close toughened glass lid.',
    fullDesc: 'Convenient, durable, and engineered for homes with low municipal water pressure. The Onida AquaJet fills smoothly even with tank pressures as low as 0.02 MPa. The soft-close transparent hydraulic glass lid closes gently with zero clatter, and the child lock ensures complete safety around young children.',
    price: 18490,
    oldPrice: 24990,
    rating: 4.7,
    reviewCount: 360,
    keySpecs: '7.5 Kg • 5-Star BEE • Low Water Pressure Fill • Soft Close Lid',
    keyFeatures: [
      'Zero Pressure technology fills the tub even at extremely low water pressure',
      'Dual Magic Lint Filters trapping loose threads and micro-fibers thoroughly',
      'Dynamic Waterfall ensures rapid detergent dissolution and deep stain lifting',
      'Soft-close tempered glass lid with anti-pinch hinge',
      'Memory backup that resumes seamlessly when power returns'
    ],
    specs: [
      { label: 'Capacity', value: '7.5 Kg' },
      { label: 'Spin Speed', value: '750 RPM' },
      { label: 'Energy Star', value: '5 Star BEE' },
      { label: 'Tub Material', value: '100% Stainless Steel Diamond Pattern' },
      { label: 'Warranty', value: '2 Years Comprehensive, 5 Years on Motor' }
    ],
    images: [
      wmTopImg,
      wmFrontImg
    ],
    lifestyleImg: wmTopImg,
    roomContext: 'Organized Indian home utility zone with warm wooden shelving',
    inStock: true,
    energyRating: 5,
    emiStartsAt: 1050
  },
  {
    id: 'cooler-desert-70l',
    name: '70L Desert Air Cooler',
    series: 'Tornado Desert Series',
    category: 'Air Coolers',
    tagline: 'High air delivery with dense honeycomb pads for dry, hot plains.',
    shortDesc: 'Heavy-duty 4500 m³/hr air delivery, 3-side dense antibacterial honeycomb pads, ice chamber, and fully collapsible louvers to prevent dust.',
    fullDesc: 'Engineered for the intense dry heat of northern and central India. The Onida Tornado 70L features an aerodynamic 3-blade composite fan that throws refreshing cool air up to 45 feet across large verandahs and living halls. When the season changes, the fully collapsible louvers seal tightly to keep dust and insects out without requiring fabric covers.',
    price: 9990,
    oldPrice: 13990,
    rating: 4.6,
    reviewCount: 520,
    keySpecs: '70 Litres • 4500 m³/hr Air Throw • Honeycomb Pads • Inverter Compatible',
    keyFeatures: [
      'Powerful 45 ft air throw covering expansive rooms up to 550 sq.ft',
      '3-Side high-density antibacterial honeycomb cooling pads',
      'Dedicated Top Ice Chamber for rapid temperature drop on scorching days',
      'Inverter compatible drawing only 185W during load shedding',
      'Multi-directional lockable castor wheels for effortless room-to-room gliding',
      'Dust and insect protection louvers that seal flush when powered down'
    ],
    specs: [
      { label: 'Tank Capacity', value: '70 Litres with Water Level Indicator' },
      { label: 'Air Delivery', value: '4500 m³/hr' },
      { label: 'Power Consumption', value: '185 Watts' },
      { label: 'Fan Type', value: '16 Inch Aerodynamic Engineered Blades' },
      { label: 'Warranty', value: '1 Year Comprehensive Warranty' }
    ],
    images: [
      coolerDesertImg,
      coolerTowerImg
    ],
    lifestyleImg: coolerDesertImg,
    roomContext: 'Spacious Indian family hall with cross-ventilation and sunlight',
    inStock: true,
    energyRating: 5,
    badge: 'Seasonal Pick',
    emiStartsAt: 580
  },
  {
    id: 'cooler-tower-35l',
    name: '35L Slim Tower Air Cooler',
    series: 'Breeze Tower Series',
    category: 'Air Coolers',
    tagline: 'Quiet vertical cooling with compact footprint for bedrooms and studies.',
    shortDesc: 'Slim vertical tower profile with motorized auto-swing, dust filter net, silent blower system, and sleek touch controls.',
    fullDesc: 'Space-conscious cooling without compromising comfort. Standing tall and slender, the Onida Breeze Tower cooler slips into compact bedroom corners or next to study desks. The multi-speed centrifugal blower operates at a gentle hum, providing consistent refreshing breezes throughout warm summer afternoons.',
    price: 7490,
    oldPrice: 10490,
    rating: 4.7,
    reviewCount: 238,
    keySpecs: '35 Litres • Tower Profile • Low Noise Blower • Touch Controls',
    keyFeatures: [
      'Ultra-compact vertical footprint occupying less than 1.2 sq.ft of floor space',
      'Centrifugal blower technology delivering quiet, targeted air current',
      'Collapsible air louvers and anti-mosquito water inlet flap',
      'Operates seamlessly on home UPS inverters with 120W consumption',
      'Convenient cord winder and feather-touch control panel'
    ],
    specs: [
      { label: 'Tank Capacity', value: '35 Litres' },
      { label: 'Air Delivery', value: '1800 m³/hr' },
      { label: 'Power Draw', value: '120 Watts' },
      { label: 'Dimensions', value: '31.0 cm x 98.0 cm x 31.0 cm' },
      { label: 'Warranty', value: '1 Year Comprehensive' }
    ],
    images: [
      coolerTowerImg,
      coolerDesertImg
    ],
    lifestyleImg: coolerTowerImg,
    roomContext: 'Cozy study corner with books, plants, and natural wood finishes',
    inStock: true,
    energyRating: 4,
    emiStartsAt: 420
  }
];

export const CATEGORIES_DATA = [
  {
    name: 'Televisions' as const,
    headline: 'Cinema clarity for every living room',
    supportingLine: 'Bezel-less displays tuned for natural skin tones and vibrant motion.',
    image: tvLivingRoomImg,
    count: '3 Models'
  },
  {
    name: 'Air Conditioners' as const,
    headline: 'Extreme tropical cooling, quiet comfort',
    supportingLine: 'Dual-inverter heavy duty cooling engineered for 54°C summers.',
    image: acSplitImg,
    count: '2 Models'
  },
  {
    name: 'Refrigerators' as const,
    headline: 'Freshness preserved with thoughtful care',
    supportingLine: 'Deep humidity control and 10-hour cooling retention during power cuts.',
    image: refKitchenImg,
    count: '2 Models'
  },
  {
    name: 'Washing Machines' as const,
    headline: 'Tough on stains, gentle on Indian fabrics',
    supportingLine: 'Smart inverter motors and hard-water sense for delicate and heavy loads.',
    image: wmFrontImg,
    count: '2 Models'
  },
  {
    name: 'Air Coolers' as const,
    headline: 'Natural cross-breeze for dry summers',
    supportingLine: 'High-throw aerodynamic fans with dense antibacterial honeycomb pads.',
    image: coolerDesertImg,
    count: '2 Models'
  }
];

export const SERVICE_CARDS = [
  {
    id: 'registration',
    title: 'Product Registration',
    desc: 'Register your new Onida appliance in under 60 seconds to activate your warranty and unlock dedicated doorstep support.',
    actionText: 'Register Appliance',
    iconName: 'ShieldCheck'
  },
  {
    id: 'service-centers',
    title: 'Service Centre',
    desc: 'Over 600+ authorized service centers covering 450+ cities across India with certified brand technicians.',
    actionText: 'Find Nearest Centre',
    iconName: 'MapPin'
  },
  {
    id: 'warranty',
    title: 'Warranty',
    desc: 'Comprehensive warranty protection up to 10 years on compressors and inverter motors. Transparent coverage terms.',
    actionText: 'Check Warranty Status',
    iconName: 'FileText'
  },
  {
    id: 'contact',
    title: 'Contact Us',
    desc: 'Call our toll-free customer care at 1800-209-5500, chat on WhatsApp, or book a technician visit directly.',
    actionText: 'Get in Touch',
    iconName: 'Headphones'
  }
];

export const HUMAN_STORIES = [
  {
    id: 'story-1',
    title: 'Sunday cricket with three generations',
    location: 'Bandra, Mumbai',
    family: 'The Kulkarni Household',
    product: '55" Nexg 4K Smart TV',
    quote: 'Our Sunday afternoons are sacred. The television isn\'t a shiny gadget in our home; it\'s the gathering place where my grandfather and my ten-year-old daughter cheer together.',
    image: familyStoryImg
  },
  {
    id: 'story-2',
    title: 'Quiet cooling during relentless summers',
    location: 'Indiranagar, Bengaluru',
    family: 'Priya & Arjun, Design Consultants',
    product: '1.5 Ton Genio Inverter AC',
    quote: 'We work from home and need silence and consistent comfort. The Onida AC runs with this gentle, almost undetectable hum. It feels like an organic part of the room rather than an appliance.',
    image: acSplitImg
  },
  {
    id: 'story-3',
    title: 'Fresh herbs and morning chai rituals',
    location: 'Lajpat Nagar, New Delhi',
    family: 'Sushma & Rajiv Sharma',
    product: '670L Grandeur Refrigerator',
    quote: 'In our kitchen, fresh coriander, mint, and ginger need to stay crisp through intense heat. The humidity drawer genuinely works wonders. It just makes daily life simpler.',
    image: refKitchenImg
  }
];

export const TECH_PILLARS = [
  {
    id: 'tropical-inverter',
    title: 'Tropical Inverter Architecture',
    desc: 'Engineered with heavy-duty twin-rotary compressors calibrated for 54°C Indian ambient summers without thermal tripping.',
    material: 'Brushed Aluminium & Pure Copper Coils'
  },
  {
    id: 'voltage-resilience',
    title: '90V–300V Wide Voltage Shield',
    desc: 'Integrated power surge protection and heavy copper chokes that safeguard delicate silicon against regional power fluctuations.',
    material: 'Surge-Protected PCB with 4kV Isolation'
  },
  {
    id: 'lucida-colour',
    title: 'Lucida True-Tone Engine',
    desc: 'Calibrated specifically for natural warm skin tones and high-speed motion clarity without artificial sharpening or oversaturation.',
    material: 'Anti-Glare Matte Film & 10-Bit Colour DAC'
  },
  {
    id: 'anti-rust-climate',
    title: 'Coastal Climate Anti-Rust Finish',
    desc: 'Double-dipped galvanized chassis with golden hydrophilic fin coatings built to resist high humidity, dust, and coastal salinity.',
    material: 'Dual-Layer Zinc Plated Structural Steel'
  }
];
