
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  const id = title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
  
  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-1 w-12 bg-[#e1c28c] rounded-full" />
        <h2 className="text-3xl font-extrabold text-[#1a2b56] tracking-tight">
          {title}
        </h2>
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};
