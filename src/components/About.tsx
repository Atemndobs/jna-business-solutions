import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2">The J & A Difference</h2>
          <p className="mt-4 text-navy-700 text-lg">
            As leaders in the short-term rental market, we've built our reputation on providing 
            exceptional accommodations that combine luxury, comfort, and convenience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Luxury Rental Property" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="text-navy-900 font-serif font-bold text-4xl mb-1">100+</div>
                <div className="text-navy-600 text-sm">Happy Guests</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-gold-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Premium Locations</h3>
                <p className="text-navy-700">
                  Our carefully selected properties are situated in prime locations, offering easy 
                  access to business districts, entertainment, and local attractions.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <Award className="w-6 h-6 text-gold-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Luxury Amenities</h3>
                <p className="text-navy-700">
                  Every property is fully furnished with high-end amenities, ensuring your stay 
                  is comfortable and memorable from day one.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-gold-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">24/7 Support</h3>
                <p className="text-navy-700">
                  Our dedicated team is available around the clock to ensure your stay is 
                  seamless and any needs are promptly addressed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Meet the Founders Section */}
      <div className="mt-24 text-center">
        <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">Our Team</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2 mb-12">Meet the Founders</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Founder 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold-100">
              <img 
                src="https://minio.goose-neon.ts.net/curator/assets/jule_in.jpeg" 
                alt="Juliane Schlegel"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-navy-900">Juliane Schlegel</h3>
            <p className="text-gold-500 mb-4">Co-Founder</p>
            <p className="text-navy-700">With a passion for hospitality and attention to detail, Jule ensures every property meets our high standards of excellence.</p>
          </div>
          
          {/* Founder 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold-100">
              <img 
                src="https://minio.goose-neon.ts.net/curator/assets/atem_in.jpeg" 
                alt="Bertrand Atemkeng"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-navy-900">Bertrand Atemkeng</h3>
            <p className="text-gold-500 mb-4">Co-Founder</p>
            <p className="text-navy-700">Atem brings innovative solutions and strategic vision to create exceptional guest experiences across all our properties.</p>
          </div>
          
          {/* Founder 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold-100">
              <img 
                src="https://minio.goose-neon.ts.net/curator/assets/randals_in.jpeg" 
                alt="Randalls Chabeja"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-navy-900">Randalls Chabeja</h3>
            <p className="text-gold-500 mb-4">Co-Founder</p>
            <p className="text-navy-700">Randals combines business acumen with a commitment to quality, driving our mission to redefine short-term rentals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;