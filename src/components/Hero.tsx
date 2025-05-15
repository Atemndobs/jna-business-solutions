import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-900/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Corporate Rentals for <span className="text-gold-500">Modern Living</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Experience premium corporate accommodations tailored to your lifestyle. J & A Business Solutions LLC provides exceptional rental properties with unmatched comfort and convenience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#services" 
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-md font-medium flex items-center transition-colors"
            >
              View Our Properties
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link 
              href="#contact" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-md font-medium transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;