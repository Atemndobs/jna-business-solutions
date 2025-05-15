import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from './ui/Link';
import { ScrollContext } from '../ScrollContext';

const Header: React.FC = () => {
  const { isScrolled, setIsScrolled } = useContext(ScrollContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={isScrolled 
              ? "https://minio.goose-neon.ts.net/curator/assets/ja_icon_black.jpeg"
              : "https://minio.goose-neon.ts.net/curator/assets/ja_icon_white.jpeg"
            } 
            alt="J & A Business Solutions LLC" 
            className="h-12 w-auto mr-3"
          />
          {/* <span className={`font-medium ${isScrolled ? 'text-navy-800' : 'text-white'}`}>
            Business Solutions LLC
          </span> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-gold-500 transition-colors ${
                isScrolled ? 'text-navy-800' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:+1234567890" 
            className="ml-4 flex items-center bg-gold-500 text-white px-4 py-2 rounded hover:bg-gold-600 transition-colors"
          >
            <Phone size={16} className="mr-2" />
            <span>(123) 456-7890</span>
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-navy-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-navy-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fadeIn">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-navy-800 font-medium hover:text-gold-500 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="tel:+1234567890" 
                className="flex items-center bg-gold-500 text-white px-4 py-2 rounded hover:bg-gold-600 transition-colors w-full justify-center"
              >
                <Phone size={16} className="mr-2" />
                <span>(123) 456-7890</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
