import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { HUMAN_STORIES } from '../data/products';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeStory, setActiveStory] = useState(0);

  if (!isOpen) return null;

  const current = HUMAN_STORIES[activeStory];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Video Container */}
      <div className="relative w-full max-w-4xl bg-[#111111] rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-2xl">
        {/* Top Bar */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#222222] bg-[#161616]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D2141E]" />
            <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
              Documentary Film: Real Homes. Real Stories.
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8E8E8E] hover:text-white rounded-full bg-[#222222]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Stage / Visual Canvas */}
        <div className="relative aspect-[16/9] bg-black overflow-hidden group">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover opacity-85"
          />

          {/* Documentary Narrative Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-6 sm:p-8">
            <div className="self-start px-3 py-1 rounded-full bg-black/60 text-white/90 text-xs backdrop-blur-xs">
              Act {activeStory + 1}: {current.location}
            </div>

            <div className="max-w-xl space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                "{current.title}"
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 italic">
                {current.quote}
              </p>
              <p className="text-xs text-[#D2141E] font-semibold pt-1">
                Featuring {current.family} • {current.product}
              </p>
            </div>
          </div>

          {/* Center Play/Pause button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-[#111111] flex items-center justify-center shadow-lg active:scale-95 transition-all"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-[#111111]" />
              ) : (
                <Play className="w-6 h-6 fill-[#111111] translate-x-0.5" />
              )}
            </button>
          </div>
        </div>

        {/* Player Controls Bar */}
        <div className="p-4 sm:p-5 bg-[#161616] border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:text-[#D2141E] transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-[#8E8E8E] hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            <div className="flex-1 sm:w-64 h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#D2141E] transition-all duration-300"
                style={{ width: `${((activeStory + 1) / HUMAN_STORIES.length) * 100}%` }}
              />
            </div>
            <span className="text-[11px] text-[#8E8E8E] font-mono">03:45 / 05:20</span>
          </div>

          {/* Chapter Selector */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-xs text-[#8E8E8E] mr-1 hidden sm:inline">Stories:</span>
            {HUMAN_STORIES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveStory(idx)}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                  activeStory === idx
                    ? 'bg-[#D2141E] text-white'
                    : 'bg-[#262626] text-[#A3A09A] hover:bg-[#333333]'
                }`}
              >
                {s.location.split(',')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
