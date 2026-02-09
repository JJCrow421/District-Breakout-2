
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: Page.Home, label: 'Home' },
    { id: Page.OurTeam, label: 'Our Team' },
    { id: Page.Careers, label: 'Careers' },
    { id: Page.Appeals, label: 'Appeals' },
    { id: Page.Guidelines, label: 'Guidelines' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-center z-50 bg-transparent border-none pointer-events-none">
      {/* 
        Adaptive Navigation Pill: 
        Max-width ensures it doesn't hit screen edges on small devices.
        Overflow-x-auto allows horizontal swiping on mobile if items don't fit.
      */}
      <div className="pointer-events-auto flex items-center p-1 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 max-w-full">
        <div className="flex items-center overflow-x-auto custom-scrollbar whitespace-nowrap px-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`relative px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                currentPage === item.id
                  ? 'text-white bg-white/10 shadow-inner'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
