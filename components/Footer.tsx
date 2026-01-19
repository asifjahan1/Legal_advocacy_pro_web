
import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onShowPrivacy?: () => void;
  onShowTerms?: () => void;
  onShowEula?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowPrivacy, onShowTerms, onShowEula }) => {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-12 mb-10">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-3 mb-6 grayscale brightness-200 opacity-80">
              <Logo className="h-8" />
              <span className="font-bold text-white tracking-tight">Legal Advocacy Pro</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed opacity-70">
              Advancing legal education through intelligent feedback and simulated practice. A product of Legal Ed Tech Ltd.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <button onClick={onShowPrivacy} className="text-xs hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={onShowTerms} className="text-xs hover:text-white transition-colors">Terms of Use</button>
              <button onClick={onShowEula} className="text-xs hover:text-white transition-colors">EULA</button>
            </div>
          </div>
          <div className="text-sm space-y-2">
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Compliance</h4>
            <p>&copy; {new Date().getFullYear()} Legal Ed Tech Ltd.</p>
            <p>Registered Office: Birmingham, UK.</p>
          </div>
        </div>
        <div className="text-[10px] leading-relaxed opacity-40 uppercase tracking-tighter">
          <p className="mb-2">
            APPLE, THE APPLE LOGO, AND IPHONE ARE TRADEMARKS OF APPLE INC., REGISTERED IN THE U.S. AND OTHER COUNTRIES. APP STORE IS A SERVICE MARK OF APPLE INC. 
          </p>
          <p>
            THIS PORTAL IS THE MANDATORY SUPPORT URL FOR LEGAL ADVOCACY PRO. ALL CONTENT IS VERIFIED BY COMPLIANCE OFFICERS AT LEGAL ED TECH LTD.
          </p>
        </div>
      </div>
    </footer>
  );
};
