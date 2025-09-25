import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/626c3c4e88a703d4a8541e2f9b61bef4e1ed224d?width=120" 
              alt="GMB Logo"
              className="footer-logo"
            />
            <h3 className="footer-brand-title">GENERASI MUDA BERPRESTASI</h3>
            <p className="footer-description">
              Wadah pengembangan potensi generasi muda Indonesia untuk mencetak prestasi dan berkontribusi positif bagi bangsa.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" width="24" height="24" style={{filter: 'invert(26%) sepia(94%) saturate(1847%) hue-rotate(213deg) brightness(97%) contrast(90%)'}} />
              </a>
              <a href="https://instagram.com/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" width="24" height="24" style={{filter: 'invert(11%) sepia(100%) saturate(7426%) hue-rotate(295deg) brightness(84%) contrast(78%)'}} />
              </a>
              <a href="https://twitter.com/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg" alt="Twitter" width="24" height="24" style={{filter: 'invert(47%) sepia(82%) saturate(2618%) hue-rotate(200deg) brightness(97%) contrast(94%)'}} />
              </a>
              <a href="https://linkedin.com/company/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" width="24" height="24" style={{filter: 'invert(10%) sepia(100%) saturate(3426%) hue-rotate(200deg) brightness(98%) contrast(98%)'}} />
              </a>
              <a href="https://youtube.com/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" width="24" height="24" style={{filter: 'invert(19%) sepia(89%) saturate(6067%) hue-rotate(3deg) brightness(108%) contrast(104%)'}} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-link-group">
              <h4 className="footer-link-title">Tentang GMB</h4>
              <a href="/about" className="footer-link">Tentang Kami</a>
              <a href="/activities" className="footer-link">Kegiatan</a>
              <a href="/achievements" className="footer-link">Prestasi</a>
              <a href="/team" className="footer-link">Tim Kami</a>
            </div>
            <div className="footer-link-group">
              <h4 className="footer-link-title">Program</h4>
              <a href="#" className="footer-link">Beasiswa</a>
              <a href="#" className="footer-link">Workshop</a>
              <a href="#" className="footer-link">Kompetisi</a>
              <a href="#" className="footer-link">Seminar</a>
            </div>
            <div className="footer-link-group">
              <h4 className="footer-link-title">Kontak</h4>
              <a href="mailto:info@gmbindonesia.org" className="footer-link">info@gmbindonesia.org</a>
              <a href="tel:+62811234567" className="footer-link">+62 811 234 567</a>
              <a href="#" className="footer-link">Gabung Sekarang!</a>
              <a href="#" className="footer-link">FAQ</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-credits">
            <p className="footer-copyright">© 2025 Generasi Muda Berprestasi. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;