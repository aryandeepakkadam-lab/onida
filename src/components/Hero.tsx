import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/products';

interface HeroProps {
  onExplore: () => void;
  onWatchStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onWatchStory }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-advance slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT: Two-column editorial copy matching wireframe */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1] text-balance">
                A brighter tomorrow,<br />
                at home.
              </h1>
              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-xl">
                Technology that fits your life. Built for real homes, real people and a more connected India.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplore}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#D2141E] hover:bg-[#b51019] text-white font-medium text-sm transition-all shadow-sm hover:shadow active:scale-[0.99] gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onWatchStory}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-[#ECEAE4] text-[#111111] border border-[#E2DFD7] font-medium text-sm transition-all shadow-xs gap-2.5 whitespace-nowrap cursor-pointer"
              >
                <Play className="w-4 h-4 fill-[#111111] text-[#111111]" />
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Quiet sub-note */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#6B6B6B]">
              <span className="w-2 h-2 rounded-full bg-[#D2141E]" />
              <span>Engineered for Indian climate, voltage, and everyday routines</span>
            </div>
          </div>

          {/* RIGHT: Hero lifestyle carousel matching wireframe with 01 02 03 indicators and < > controls */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#E2DFD7] bg-white group">
              {/* Slide Image */}
              <div className="relative h-[380px] sm:h-[460px] lg:h-[500px] w-full bg-[#EAE7E0] overflow-hidden">
                <img
                  key={currentSlide.id}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                  loading="eager"
                />
                
                {/* Subtle soft gradient overlay at bottom for caption legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Badge top-left */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-semibold text-[#111111] border border-[#E2DFD7] shadow-xs">
                    {currentSlide.badge}
                  </span>
                </div>

                {/* Slide Title and Caption matching wireframe */}
                <div className="absolute bottom-16 left-4 right-4 sm:bottom-20 sm:left-6 sm:right-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight drop-shadow-xs">
                    {currentSlide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-md line-clamp-2 drop-shadow-xs">
                    {currentSlide.subtitle} — {currentSlide.caption}
                  </p>
                </div>

                {/* Bottom Bar: Carousel Controls with < >, 01 02 03 indicators */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 flex items-center justify-between">
                  {/* Numerical Indicators 01 02 03 */}
                  <div className="flex items-center gap-2 sm:gap-3 bg-black/60 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
                    {HERO_SLIDES.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => setCurrentSlideIndex(idx)}
                        className={`text-xs font-semibold tracking-wider transition-all px-2 py-0.5 rounded-full cursor-pointer ${
                          currentSlideIndex === idx
                            ? 'bg-[#D2141E] text-white shadow-xs'
                            : 'text-white/60 hover:text-white'
                        }`}
                        aria-label={`Go to slide 0${idx + 1}`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>

                  {/* Navigation Arrows < and > */}
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xs p-1 rounded-full border border-white/10">
                    <button
                      onClick={prevSlide}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
