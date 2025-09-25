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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" alt="Facebook" width="24" height="24" />
              </a>
              <a href="https://instagram.com/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <radialGradient id="instagram-gradient" cx="32%" cy="100%" r="145%">
                      <stop offset="0%" stopColor="#833ab4"/>
                      <stop offset="50%" stopColor="#fd1d1d"/>
                      <stop offset="100%" stopColor="#fcb045"/>
                    </radialGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#instagram-gradient)"/>
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                </svg>
              </a>
              <a href="https://twitter.com/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#1DA1F2"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="2" fill="#0077B5"/>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white"/>
                </svg>
              </a>
              <a href="https://youtube.com/gmbindonesia" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="3" fill="#FF0000"/>
                  <path d="M19.615 6.455c-.145-.465-.573-.83-1.006-.973C17.702 5.2 12 5.2 12 5.2s-5.702 0-6.609.282c-.433.143-.861.508-1.006.973C4.1 7.453 4.1 12 4.1 12s0 4.547.285 5.545c.145.465.573.83 1.006.973.907.282 6.609.282 6.609.282s5.702 0 6.609-.282c.433-.143.861-.508 1.006-.973C19.9 16.547 19.9 12 19.9 12s0-4.547-.285-5.545z" fill="#FF0000"/>
                  <path d="M10.4 15.13l4.16-2.63-4.16-2.63v5.26z" fill="white"/>
                </svg>
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