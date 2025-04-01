import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [rotating, setRotating] = useState(false);
  const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Scroll to top when a navbar link is clicked
  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  // Handle theme toggle with animation
  const handleThemeToggle = () => {
    setRotating(true);
    toggleTheme();
    setTimeout(() => setRotating(false), 500);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? `py-2 md:py-3 shadow-lg ${isDarkMode ? 'bg-dark-900/90' : 'bg-white/90'} backdrop-blur-md` 
          : `py-3 md:py-4 ${isDarkMode ? 'bg-dark-900' : 'bg-white'}`
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={handleNavLinkClick} className="z-50">
            <Logo isDarkMode={isDarkMode} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavLinkClick}
                className={`px-3 lg:px-4 py-2 rounded-md transition-colors relative group ${
                  location.pathname === link.path 
                    ? `${isDarkMode ? 'text-primary-400' : 'text-primary-600'} font-medium` 
                    : `${isDarkMode ? 'text-gray-300' : 'text-light-700'} hover:${isDarkMode ? 'text-white' : 'text-primary-600'}`
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDarkMode ? 'bg-primary-400' : 'bg-primary-600'} mt-1 rounded-full`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isDarkMode ? 'bg-primary-400' : 'bg-primary-600'} scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full`} />
              </Link>
            ))}
            <motion.button
              onClick={handleThemeToggle}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-dark-700 hover:bg-dark-600 text-gray-300' 
                  : 'bg-light-100 hover:bg-light-200 text-light-700'
              } transition-colors ml-2`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <motion.div
                animate={{ rotate: rotating ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                className="theme-toggle-icon"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>
            <Link to="/contact" onClick={handleNavLinkClick}>
              <motion.button
                className="btn btn-primary hidden lg:flex ml-2 items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <motion.button
              onClick={handleThemeToggle}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-dark-700 text-gray-300' 
                  : 'bg-light-100 text-light-700'
              } transition-colors mr-2`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <motion.div
                animate={{ rotate: rotating ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                className="theme-toggle-icon"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-dark-700' 
                  : 'text-light-700 hover:bg-light-100'
              } transition-colors z-50`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${isDarkMode ? 'bg-dark-900' : 'bg-white'} border-t ${
              isDarkMode ? 'border-dark-700' : 'border-light-200'
            } absolute w-full left-0 top-full pt-4 pb-6 px-4 shadow-lg`}
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavLinkClick}
                  className={`py-2 px-4 rounded-md ${
                    location.pathname === link.path
                      ? isDarkMode 
                        ? 'bg-dark-800 text-primary-400 font-medium' 
                        : 'bg-primary-50 text-primary-600 font-medium'
                      : isDarkMode 
                        ? 'text-gray-300 hover:bg-dark-800 hover:text-white' 
                        : 'text-light-700 hover:bg-light-50 hover:text-primary-600'
                  } transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={handleNavLinkClick} className="mt-4">
                <button className="btn btn-primary w-full">Get Started</button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;