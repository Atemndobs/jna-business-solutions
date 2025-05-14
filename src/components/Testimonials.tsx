import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role, rating, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-gold-500 fill-gold-500" : "text-gray-300"} 
          />
        ))}
      </div>
      <blockquote className="text-navy-700 italic mb-6 flex-grow">"{quote}"</blockquote>
      <div className="flex items-center mt-auto">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-bold text-navy-900">{author}</div>
          <div className="text-sm text-navy-600">{role}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "J&A Business Solutions exceeded our expectations. Their attention to detail and commitment to excellence made our property investment journey seamless.",
      author: "Sarah Johnson",
      role: "Property Investor",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      quote: "Their property management services are unmatched. I've been able to maximize my rental income while minimizing the stress of property ownership.",
      author: "Michael Thompson",
      role: "Property Owner",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      quote: "The team at J&A is responsive, professional, and truly cares about their clients. They've made managing my multiple properties effortless.",
      author: "Rebecca Chen",
      role: "Real Estate Developer",
      rating: 4,
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2">What Our Clients Say</h2>
          <p className="mt-4 text-navy-700 text-lg">
            Hear from our satisfied clients about their experience working with J&A Business Solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;