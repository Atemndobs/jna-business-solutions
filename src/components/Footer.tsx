import React, { useContext } from 'react';
import { Link } from './ui/Link';
import { ScrollContext } from '../ScrollContext';
import { Phone } from 'react-feather';

const Footer: React.FC = () => {
  const { isScrolled } = useContext(ScrollContext);

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="https://minio.goose-neon.ts.net/curator/assets/Profile_Round_grey.png"
                alt="J&A Business Solutions LLC"
                className="h-12 w-auto mr-3"
              />
              <span className={`font-medium ${isScrolled ? 'text-black-800' : 'text-white'}`}>Business Solutions LLC</span>
            </div>
            <p className="text-white/70 mb-6">
              Providing exceptional corporate rental experiences with unmatched comfort and convenience.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gold-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-gold-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div> */}
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-white/70 hover:text-gold-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-gold-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-gold-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#gallery" className="text-white/70 hover:text-gold-500 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-gold-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-gold-500 transition-colors">Luxury Short-Term Rentals</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold-500 transition-colors">Corporate Housing</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold-500 transition-colors">Flexible Booking</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold-500 transition-colors">Concierge Services</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold-500 transition-colors">24/7 Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-gold-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-white/70">7484 S Camino Cardal<br />Tucson, AZ 85756-0058</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-gold-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:info@jnabusinesssolutions.com" className="text-white/80 hover:text-gold-500 transition-colors">
                  info@jnabusinesssolutions.com
                </a>
              </li>
              <li className="flex items-center mb-2">
                <Phone size={16} className="text-gold-500 mr-2" />
                <a href="tel:5208699777" className="hover:text-gold-500 transition-colors">
                  +1 (520) 869-9777
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} J &A Business Solutions LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-gold-500 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-gold-500 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-gold-500 transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
