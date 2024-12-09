'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

type DarkSectionContextType = {
  isOverDarkSection: boolean;
};

const DarkSectionContext = createContext<DarkSectionContextType>({ isOverDarkSection: false });

export function DarkSectionProvider({ children }: { children: React.ReactNode }) {
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          // Check if the top of the section is in the nav area (0-80px from top)
          const isInNavArea = rect.top <= 80 && rect.bottom > 80;

          // console.log('Section:', entry.target.classList.contains('bg-dark'), 'Top:', rect.top, 'isInNavArea:', isInNavArea);

          if (isInNavArea && entry.target.classList.contains('bg-dark')) {
            // console.log('Setting to dark mode');
            setIsOverDarkSection(true);
          } else if (isInNavArea) {
            // console.log('Setting to light mode');
            setIsOverDarkSection(false);
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1], // More threshold points for smoother detection
        rootMargin: '-80px 0px 0px 0px' // Matches nav height
      }
    );

    const sections = document.querySelectorAll('section');
    // console.log('Found sections:', sections.length);
    sections.forEach((section) => {
      // console.log('Observing section:', section.classList.contains('bg-dark'), section);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <DarkSectionContext.Provider value={{ isOverDarkSection }}>
      {children}
    </DarkSectionContext.Provider>
  );
}

export const useDarkSection = () => useContext(DarkSectionContext);