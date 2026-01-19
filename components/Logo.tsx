
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

/**
 * Logo component that renders the official Legal Advocacy Pro brand mark.
 * Uses the image provided in the root/public directory.
 */
export const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", showText = false }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <img 
        src="logo.png" 
        alt="Legal Advocacy Pro Logo" 
        className="h-full w-auto object-contain"
      />
      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-[#1a2b56] tracking-tight leading-none text-xl">LEGAL ADVOCACY</span>
          <span className="text-[#e1c28c] font-bold text-sm tracking-[0.3em] leading-none mt-1">PRO</span>
        </div>
      )}
    </div>
  );
};
