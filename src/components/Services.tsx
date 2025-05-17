import React from 'react';
import { Home, Key, Briefcase, PenTool as Tool } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow group">
      <div className="bg-gold-500/10 p-4 rounded-full inline-flex mb-6 group-hover:bg-gold-500 transition-colors">
        <div className="text-gold-500 group-hover:text-white transition-colors">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
      <p className="text-navy-700">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Luxury Short-Term Rentals",
      description: "Experience premium living in our fully furnished properties, perfect for both short stays and extended vacations.",
      icon: <Home size={24} />
    },
    {
      title: "Flexible Booking",
      description: "Easy booking process with flexible terms to accommodate your schedule, from weekend getaways to monthly stays.",
      icon: <Key size={24} />
    },
    {
      title: "Corporate Housing",
      description: "Ideal solutions for business travelers and professionals seeking comfortable, well-equipped accommodations.",
      icon: <Briefcase size={24} />
    },
    {
      title: "Concierge Services",
      description: "Tailored support for the modern professional — including streamlined check-ins and 24/7 on-call assistance to ensure a seamless, stress-free stay.",
      icon: <Tool size={24} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2">Premium Rental Solutions</h2>
          <p className="mt-4 text-navy-700 text-lg">
            Discover our range of short-term rental services designed to provide you with an exceptional stay experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;