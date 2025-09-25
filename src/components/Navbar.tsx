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
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
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
          <button className="nav-cta-btn">
            Gabung Sekarang!
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;