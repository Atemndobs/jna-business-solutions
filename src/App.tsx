import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import PropertyOwners from './components/PropertyOwners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PWAInstallPrompt from './components/PWAInstallPrompt';
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
          <PropertyOwners />
          <About />
          <Services />
          {/* <Gallery /> */}
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <PWAInstallPrompt />
      </div>
    </ScrollProvider>
  );
}

export default App;
