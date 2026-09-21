import React, { useState } from 'react';

export const USER_DISCORD_LOGO_URL =
  'https://media.discordapp.net/attachments/1533473677029412899/1551635539504140298/image.png?ex=6ab2b0b4&is=6ab15f34&hm=0db540ba6a3a02d717228db4d0e0a14f7c2c582fed41e6524f932d4d4565c883&=&format=webp&quality=lossless';

interface OnidaLogoProps {
  className?: string;
  color?: string; // e.g. '#FFFFFF' for dark footer
  height?: number | string;
  onClick?: () => void;
  variant?: 'wordmark' | 'badge';
  showTagline?: boolean;
}

export const OnidaLogo: React.FC<OnidaLogoProps> = ({
  className = '',
  color = '#D2141E',
  height = 28,
  onClick,
  variant = 'wordmark',
  showTagline = false,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(() => {
    if (color === '#FFFFFF' || color === 'white') {
      return '/onida_logo_white_trimmed.png';
    }
    return USER_DISCORD_LOGO_URL;
  });

  const isWhite = color === '#FFFFFF' || color === 'white';

  const handleError = () => {
    // If the remote Discord link expires or encounters network restrictions, fall back to locally saved asset
    if (isWhite) {
      setImgSrc('/onida_logo_white_trimmed.png');
    } else {
      setImgSrc('/onida_logo_trimmed.png');
    }
  };

  if (variant === 'badge') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center select-none cursor-pointer bg-[#D2141E] px-3.5 py-1.5 rounded-[4px] shadow-[0_2px_8px_rgba(210,20,30,0.25)] hover:brightness-105 active:scale-[0.98] transition-all duration-150 ${className}`}
        role="banner"
        aria-label="ONIDA Logo"
      >
        <img
          src="/onida_logo_white_trimmed.png"
          alt="ONIDA"
          style={{ height: typeof height === 'number' ? height - 6 : height }}
          className="w-auto object-contain block select-none"
        />
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col select-none cursor-pointer group ${className}`}
      role="banner"
      aria-label="ONIDA Logo"
    >
      <div className="group-hover:opacity-90 transition-opacity">
        <img
          src={imgSrc}
          onError={handleError}
          alt="ONIDA"
          style={{ height }}
          className={`w-auto object-contain block select-none ${
            isWhite
              ? 'brightness-0 invert'
              : 'mix-blend-multiply contrast-105'
          }`}
        />
      </div>
      {showTagline && (
        <span className="text-[9px] uppercase tracking-[0.25em] font-medium text-[#7D7871] mt-0.5">
          Owner&apos;s Pride
        </span>
      )}
    </div>
  );
};
