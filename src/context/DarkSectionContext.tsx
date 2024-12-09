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
        entries.forEach(entry => {
          const rect = entry.boundingClientRect;
          const hasDarkClass = entry.target.classList.contains('bg-dark');
          const isIntersecting = entry.isIntersecting;

          console.log('Section Intersection:', {
            isIntersecting,
            hasDarkClass,
            top: rect.top,
            bottom: rect.bottom,
            classList: Array.from(entry.target.classList),
            ratio: entry.intersectionRatio
          });
        });

        const darkSectionInView = entries.some(entry =>
          entry.isIntersecting &&
          entry.target.classList.contains('bg-dark')
        );

        console.log('Setting isOverDarkSection to:', darkSectionInView);
        setIsOverDarkSection(darkSectionInView);
      },
      {
        // Observe the top 80px of the viewport
        rootMargin: '0px 0px -90% 0px',
        threshold: [0, 0.1]
      }
    );

    // Only observe sections with bg-dark class
    const darkSections = document.querySelectorAll('section.bg-dark');
    console.log('Found dark sections:', darkSections.length);

    darkSections.forEach(section => {
      console.log('Observing section:', {
        classList: Array.from(section.classList),
        id: section.id
      });
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