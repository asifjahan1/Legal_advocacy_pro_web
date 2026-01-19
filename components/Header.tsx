
import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  onHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onHome }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={onHome} className="flex items-center group focus:outline-none">
          <Logo className="h-12" showText={true} />
        </button>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-[#1a2b56]">
          <button onClick={onHome} className="hover:text-[#e1c28c] transition-colors uppercase tracking-wider">Support Home</button>
          <a href="#frequently-asked-questions" className="hover:text-[#e1c28c] transition-colors uppercase tracking-wider">FAQ</a>
          <a href="#contact-support" className="px-6 py-2.5 bg-[#1a2b56] text-white rounded-lg hover:bg-[#e1c28c] hover:text-[#1a2b56] transition-all duration-300 shadow-md">
            SUPPORT
          </a>
        </nav>
      </div>
    </header>
  );
};
