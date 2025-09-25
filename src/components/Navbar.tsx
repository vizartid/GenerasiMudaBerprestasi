import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/626c3c4e88a703d4a8541e2f9b61bef4e1ed224d?width=120" 
              alt="GMB Logo" 
              className="nav-logo"
            />
            <span className="nav-title">GENERASI MUDA BERPRESTASI</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About Us
          </Link>
          <Link 
            to="/activities" 
            className={`nav-link ${isActive('/activities') ? 'active' : ''}`}
          >
            Activities
          </Link>
          <Link 
            to="/achievements" 
            className={`nav-link ${isActive('/achievements') ? 'active' : ''}`}
          >
            Achievements
          </Link>
        </div>
        <div className="nav-social">
          <a href="https://facebook.com/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/company/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <button className="nav-cta-btn">
          Gabung Sekarang!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;