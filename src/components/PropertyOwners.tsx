import React from 'react';
import { Users, DollarSign, Wrench, Shield, Clock, MessageSquare } from 'lucide-react';

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitItem: React.FC<BenefitProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="bg-gold-500/20 p-3 rounded-full">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-navy-700">{description}</p>
      </div>
    </div>
  );
};

const PropertyOwners: React.FC = () => {
  const benefits: BenefitProps[] = [
    {
      title: "Corporate Guest Portfolio",
      description: "Our tenants are exclusively vetted business professionals, verified through established platforms and subject to background checks who treat the space with care and respect.",
      icon: <Users className="w-5 h-5 text-gold-500" />
    },
    {
      title: "Guaranteed Rental Income",
      description: "Enjoy consistent, predictable income with our guaranteed payment structure, regardless of occupancy fluctuations.",
      icon: <DollarSign className="w-5 h-5 text-gold-500" />
    },
    {
      title: "Proactive Asset Maintenance",
      description: "We implement regular preventative maintenance and swift resolution of any issues to protect your property's value and condition.",
      icon: <Wrench className="w-5 h-5 text-gold-500" />
    },
    {
      title: "Comprehensive Insurance Protection",
      description: "Rest easy with our extensive insurance coverage designed specifically for short-term rental properties.",
      icon: <Shield className="w-5 h-5 text-gold-500" />
    },
    {
      title: "Long-Term Occupancy Stability",
      description: "Our business model focuses on extended stays, reducing turnover and providing more stable, predictable property usage.",
      icon: <Clock className="w-5 h-5 text-gold-500" />
    },
    {
      title: "Professional Communication & Oversight",
      description: "Experience transparent, responsive communication and meticulous oversight of your property at all times.",
      icon: <MessageSquare className="w-5 h-5 text-gold-500" />
    },
  ];

  return (
    <section id="property-owners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">For Property Owners</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2">Strategic Partnership for Property Owners</h2>
          <p className="mt-4 text-navy-700 text-lg">
            J & A Business Solutions LLC offers property owners a unique leasing model that maximizes returns while minimizing hassle.
            Partner with us to transform your property into a premium corporate rental with guaranteed income and professional management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="relative">

              <img
                src="https://minio.goose-neon.ts.net/curator/assets/romain-dancre-doplSDELX7E-unsplash.jpg"
                alt="Luxury Property Management"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="text-gray-500 text-sm mt-2">
                Photo by <a href="https://unsplash.com/@romaindancre?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer">Romain Dancre</a> on <a href="https://unsplash.com/photos/person-in-orange-long-sleeve-shirt-writing-on-white-paper-doplSDELX7E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer">Unsplash</a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {benefits.slice(0, 3).map((benefit, index) => (
              <BenefitItem
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-16">
          <div className="space-y-8 order-2 md:order-1">
            {benefits.slice(3, 6).map((benefit, index) => (
              <BenefitItem
                key={index + 3}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="https://minio.goose-neon.ts.net/curator/assets/pexels-mart-production-7415036.jpg"
                alt="Property Management Services"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="text-gray-500 text-sm mt-2">
                Photo by <a href="https://www.pexels.com/@mart-production/" target="_blank" rel="noopener noreferrer">MART PRODUCTION</a> on <a href="https://www.pexels.com/photo/frau-haus-innen-fenster-7415036/" target="_blank" rel="noopener noreferrer">Pexels</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
        </div>
      </div>
    </section>
  );
};

export default PropertyOwners;
