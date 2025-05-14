import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollProvider } from './ScrollContext';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "J&A Business Solutions LLC | Premium Property Services";
    
    // Add smooth scrolling behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <ScrollProvider>
      <div className="font-sans antialiased">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}

export default App;
