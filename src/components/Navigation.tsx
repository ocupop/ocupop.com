'use client';

import Image from 'next/image';
import navData from '@/data/nav.json';
import { useTransitionContext } from '../context/TransitionContext';

export default function Navigation() {
  const { startTransition } = useTransitionContext();

  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    startTransition(href);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0" onClick={(e) => handleNavigation(e, '/')}>
            <Image
              src={navData.logo}
              alt="Ocupop Logo"
              width={120}
              height={40}
              priority
            />
          </a>

          {/* Navigation Items */}
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              {navData.items.map((item, index) => (
                <a
                  key={`${item.text}-${index}`}
                  href={item.link}
                  onClick={(e) => handleNavigation(e, item.link)}
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}