import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / docHeight) * 100;
      
      // Update scroll indicator
      const scrollIndicator = document.getElementById('scrollIndicator');
      if (scrollIndicator) {
        scrollIndicator.style.width = scrollPercent + '%';
      }
      
      // Update navbar
      setIsScrolled(scrollY > 50);
      
      // Update back to top button
      setShowBackToTop(scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app">
      {/* Scroll Indicator */}
      <div className="scroll-indicator" id="scrollIndicator"></div>
      
      {/* Navigation */}
      <Navbar isScrolled={isScrolled} />
      
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        title="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Layout;