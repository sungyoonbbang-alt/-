import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="bg-secondary text-accent shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-300">
          방성윤 슈팅 마스터
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `font-semibold text-lg hover:text-primary transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-accent'
                }`
              }
              onClick={() => {
                if (link.href === '/') {
                  // For the main page, handle section scrolling
                  const currentPath = window.location.hash.substring(1); // Get current path from hash
                  if (currentPath === '/') {
                    // If already on main page, scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                  // Otherwise, navigating to main page will reset scroll automatically
                }
              }}
            >
              {link.name}
            </NavLink>
          ))}
          {/* Main page section links for scrolling */}
          <button
            onClick={() => handleScrollToSection('authority')}
            className="font-semibold text-lg text-accent hover:text-primary transition-colors duration-300"
          >
            코치 소개
          </button>
          <button
            onClick={() => handleScrollToSection('testimonials')}
            className="font-semibold text-lg text-accent hover:text-primary transition-colors duration-300"
          >
            후기
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-primary pt-2 pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `font-semibold text-xl hover:text-primary transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-accent'
                  }`
                }
                onClick={() => {
                  setIsOpen(false);
                  if (link.href === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={() => handleScrollToSection('authority')}
              className="font-semibold text-xl text-accent hover:text-primary transition-colors duration-300"
            >
              코치 소개
            </button>
            <button
              onClick={() => handleScrollToSection('testimonials')}
              className="font-semibold text-xl text-accent hover:text-primary transition-colors duration-300"
            >
              후기
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
