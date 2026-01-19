
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6 transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#e1c28c]' : 'text-[#1a2b56] group-hover:text-[#e1c28c]'}`}>
          {question}
        </span>
        <div className={`p-1 rounded-full transition-all ${isOpen ? 'bg-[#e1c28c] rotate-180' : 'bg-slate-100 rotate-0 group-hover:bg-slate-200'}`}>
          <svg 
            className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-slate-500'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0 overflow-hidden'}`}>
        <div className="min-h-0 text-slate-600 leading-relaxed text-base font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
};
