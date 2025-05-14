import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-gold-500 uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">Book Your Stay</h2>
          <p className="mt-4 text-white/80 text-lg">
            Ready to experience luxury short-term rentals? Contact us to book your stay or learn more about our properties.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-navy-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-gold-500/20 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-gold-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gold-500 mb-1">Our Location</h4>
                    <p className="text-white/80">7484 S Camino Cardal<br />Tucson, AZ 85756-0058</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-gold-500/20 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-gold-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gold-500 mb-1">Email Us</h4>
                    <p className="text-white/80">info@jnabusinesssolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-gold-500/20 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-gold-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gold-500 mb-1">Call Us</h4>
                    <p className="text-white/80">+1 (417) 963-9774</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-navy-700 hover:bg-gold-500 p-3 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-navy-700 hover:bg-gold-500 p-3 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            {isSubmitted ? (
              <div className="bg-green-600/20 text-green-100 p-8 rounded-lg text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-lg mb-4">Your booking inquiry has been sent successfully.</p>
                <p>We'll get back to you within 24 hours to confirm your stay.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-white text-navy-900 px-6 py-2 rounded-md font-medium hover:bg-gold-500 hover:text-white transition-colors"
                >
                  Make Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-navy-800 p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gold-500 mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full bg-navy-700 border ${errors.name ? 'border-red-500' : 'border-navy-600'} rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500`}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gold-500 mb-1">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full bg-navy-700 border ${errors.email ? 'border-red-500' : 'border-navy-600'} rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500`}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  
                  <div className="col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gold-500 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-navy-700 border border-navy-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gold-500 mb-1">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={`w-full bg-navy-700 border ${errors.message ? 'border-red-500' : 'border-navy-600'} rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500`}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your desired dates and any specific requirements..."
                    />
                    {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-6 w-full bg-gold-500 text-white py-3 px-6 rounded-md font-medium hover:bg-gold-600 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Booking Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;