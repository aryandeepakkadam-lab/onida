import React, { useState } from 'react';
import { Play, MapPin, Quote } from 'lucide-react';
import { HUMAN_STORIES } from '../data/products';

interface HumanStoryProps {
  onWatchFilm: () => void;
}

export const HumanStory: React.FC<HumanStoryProps> = ({ onWatchFilm }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const currentStory = HUMAN_STORIES[activeStoryIndex];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
            Real homes.<br />
            Real stories.
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B] mt-4 leading-relaxed">
            See how Onida is a part of modern homes across India.
          </p>
        </div>

        {/* Cinematic Documentary Presentation matching Split Section 1 in wireframe */}
        <div className="rounded-2xl overflow-hidden border border-[#E2DFD7] bg-[#F7F5F0] grid grid-cols-1 lg:grid-cols-12 shadow-xs items-stretch">
          {/* Left: Documentary Editorial Details & Watch the Film CTA */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE7E0] text-xs font-medium text-[#111111]">
                <span>Documentary Feature</span>
                <span>•</span>
                <span className="text-[#D2141E]">{currentStory.product}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-snug">
                "{currentStory.title}"
              </h3>

              <div className="relative pl-6 pt-1">
                <Quote className="w-4 h-4 text-[#D2141E] absolute left-0 top-1" />
                <p className="text-sm sm:text-base text-[#6B6B6B] italic leading-relaxed">
                  {currentStory.quote}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#111111]">
                <MapPin className="w-4 h-4 text-[#D2141E]" />
                <span className="font-semibold">{currentStory.location}</span>
                <span className="text-[#6B6B6B]">•</span>
                <span className="text-[#6B6B6B]">{currentStory.family}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onWatchFilm}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#D2141E] hover:bg-[#b51019] text-white font-medium text-sm transition-all shadow-xs cursor-pointer whitespace-nowrap"
              >
                <Play className="w-4 h-4 fill-white translate-x-0.5" />
                <span>Watch the film</span>
              </button>
            </div>

            {/* Story Switcher */}
            <div className="pt-6 border-t border-[#E2DFD7] space-y-3">
              <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">
                Select Home Feature
              </p>
              <div className="grid grid-cols-3 gap-2">
                {HUMAN_STORIES.map((story, index) => (
                  <button
                    key={story.id}
                    onClick={() => setActiveStoryIndex(index)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-medium text-left transition-all border cursor-pointer ${
                      activeStoryIndex === index
                        ? 'bg-white border-[#111111] text-[#111111] shadow-xs'
                        : 'bg-transparent border-[#E2DFD7] text-[#6B6B6B] hover:bg-[#EAE7E0]'
                    }`}
                  >
                    <div className="truncate font-semibold">{story.location.split(',')[0]}</div>
                    <div className="text-[10px] text-[#8E8E8E] truncate mt-0.5">{story.family.split(' ')[1] || 'Home'}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Media / Visual with Play Trigger */}
          <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[340px] sm:min-h-[440px] bg-[#111111] overflow-hidden group order-1 lg:order-2">
            <img
              src={currentStory.image}
              alt={currentStory.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] opacity-90"
            />
            {/* Soft documentary gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={onWatchFilm}
                className="group/btn flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/95 hover:bg-white text-[#111111] backdrop-blur-xs shadow-lg transition-all active:scale-95 cursor-pointer"
                aria-label="Play video"
              >
                <div className="w-8 h-8 rounded-full bg-[#D2141E] flex items-center justify-center text-white">
                  <Play className="w-4 h-4 fill-white translate-x-0.5" />
                </div>
                <span className="text-sm font-semibold tracking-tight">Play Documentary</span>
              </button>
            </div>

            {/* Bottom Tag */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex items-center gap-2 text-xs text-white/90">
              <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs border border-white/20">
                4K HDR • 3 min 45 sec
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
