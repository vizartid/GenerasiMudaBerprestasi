import React, { useState, useEffect } from 'react';
import './GMBLandingPage.css';

const GMBLandingPage = () => {
  const [activeNav, setActiveNav] = useState('');
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeNewsFilter, setActiveNewsFilter] = useState('Prestasi');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "How do I get started with your platform?",
      answer: "Getting started is simple! Just sign up for a free account, complete the onboarding process, and you'll have access to all our basic features. Our step-by-step guide will walk you through setting up your first project in under 5 minutes."
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All transactions are secured with 256-bit SSL encryption to ensure your payment information is safe."
    },
    {
      id: 3,
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, absolutely! You can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll continue to have access to your account until the end of your current billing period."
    },
    {
      id: 4,
      question: "Do you offer customer support?",
      answer: "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team typically responds within 2 hours during business days and 4 hours on weekends."
    },
    {
      id: 5,
      question: "Is my data secure and private?",
      answer: "Data security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with GDPR and SOC 2 standards. Your data is stored in secure data centers and we never share your information with third parties without your consent."
    },
    {
      id: 6,
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the start of your next billing cycle. Any unused credits will be prorated and applied to your account."
    },
    {
      id: 7,
      question: "Do you offer integrations with other tools?",
      answer: "We offer integrations with over 100+ popular tools including Slack, Google Workspace, Microsoft Teams, Salesforce, and many more. You can also use our REST API to build custom integrations with your existing workflow."
    },
    {
      id: 8,
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all premium features. No credit card required to start your trial. You can explore all our capabilities and decide if our platform is right for your needs."
    }
  ];

  const newsCategories = ['Semua', 'Prestasi', 'Sosial & Lingkungan', 'Seni & Budaya', 'Pendidikan'];

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="gmb-landing">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Navigation */}
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <div className="nav-brand">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/626c3c4e88a703d4a8541e2f9b61bef4e1ed224d?width=120" 
                alt="GMB Logo" 
                className="nav-logo"
              />
              <span className="nav-title">GENERASI MUDA BERPRESTASI</span>
            </div>
            <div className="nav-links">
              <a 
                href="#about" 
                className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}
                onClick={() => {
                  setActiveNav('about');
                  scrollToSection('about');
                }}
              >
                About Us
              </a>
              <a 
                href="#activities" 
                className={`nav-link ${activeNav === 'activities' ? 'active' : ''}`}
                onClick={() => {
                  setActiveNav('activities');
                  scrollToSection('news');
                }}
              >
                Activities
              </a>
              <a 
                href="#achievements" 
                className={`nav-link ${activeNav === 'achievements' ? 'active' : ''}`}
                onClick={() => {
                  setActiveNav('achievements');
                  scrollToSection('team');
                }}
              >
                Achievements
              </a>
            </div>
            <button className="nav-cta-btn">
              Gabung Sekarang!
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Wujudkan Prestasimu.<br />
              Gabung Generasi Muda Berprestasi.
            </h1>
            <p className="hero-subtitle">
              Generasi Muda Berprestasi (GMB) adalah ruang bagi pelajar dan mahasiswa Indonesia untuk menggali potensi, menumbuhkan karakter, dan meraih prestasi.
            </p>
            <div className="hero-buttons">
              <button className="hero-btn primary">Gabung Sekarang!</button>
              <button className="hero-btn secondary">Lihat Kegiatan Kami</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="about-title">Tentang Generasi Muda Berprestasi</h2>
          <p className="about-subtitle">
            GMB adalah lembaga pengembangan sumber daya manusia dengan fokus mengasah bakat dan minat generasi muda Indonesia. Kami berkomitmen menjadi wadah positif untuk kamu mengembangkan potensi diri secara optimal
          </p>
          
          <div className="stats-cards">
            <div className="stats-card large">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/1f18a975ef636d7dd7f0471236a01f529ca4392f?width=1192" 
                alt="Indonesia Map"
                className="stats-image"
              />
              <h3 className="stats-title">Tersebar di 22 Provinsi di Indonesia</h3>
            </div>
            
            <div className="stats-card">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ef4f908546ab4b7242cbcfbfc79de9fcef476637?width=600" 
                alt="Members"
                className="stats-image"
              />
              <h3 className="stats-title">Jumlah Anggota Lebih dari 700+</h3>
            </div>
            
            <div className="stats-card">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/63f7251e065a08d6f5ba163b3a9c860979b848a5?width=566" 
                alt="Network"
                className="stats-image"
              />
              <h3 className="stats-title">Bangun Jaringan Nasional</h3>
            </div>
          </div>

          <div className="partners-section">
            <h4 className="partners-title">Didukung & Dinaungi Secara Resmi oleh:</h4>
            <div className="partners-logos">
              <div className="partner">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0bbf8afdad1b1e31c9be69d2bfee5d4a865296d7?width=240" 
                  alt="Partner 1"
                  className="partner-logo"
                />
                <span className="partner-name">YAYASAN SINAR PENJAGA BANGSA</span>
              </div>
              <div className="partner">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8eed9c75e86c33d55eca78835add420630ee8a40?width=332" 
                  alt="Partner 2"
                  className="partner-logo"
                />
                <span className="partner-name">DUTA KOMUNITAS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="benefits-title">Apa Saja Keuntungan Bergabung dengan GMB?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d4c362665cfca1971e8b31d0982da9c824bf987b?width=789" 
                alt="Programs"
                className="benefit-image"
              />
              <div className="benefit-content">
                <h3 className="benefit-title">Buka Potensimu dengan Program Eksklus</h3>
                <p className="benefit-description">
                  Dapatkan akses ke berbagai seminar, kompetisi nasional, dan program pengembangan diri yang dirancang khusus untuk mengasah bakat dan mencetak prestasi.
                </p>
              </div>
            </div>
            
            <div className="benefit-card">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/9a8d287f655c6f84fe02c932bb621bc46d79ff39?width=789" 
                alt="Skills"
                className="benefit-image"
              />
              <div className="benefit-content">
                <h3 className="benefit-title">Asah Keterampilan di Kelas & Workshop Khusus</h3>
                <p className="benefit-description">
                  Ikuti workshop kepemimpinan, bedah buku, dan sesi diskusi interaktif untuk meningkatkan wawasan serta kemampuan berpikir kritismu secara mendalam.
                </p>
              </div>
            </div>
            
            <div className="benefit-card">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c9553def552ef227c6ad221394a55ae21411eff9?width=789" 
                alt="Network"
                className="benefit-image"
              />
              <div className="benefit-content">
                <h3 className="benefit-title">Bangun Jaringan & Relasi Luas</h3>
                <p className="benefit-description">
                  Terhubung dengan ratusan pelajar dan mahasiswa berprestasi dari berbagai daerah di seluruh Indonesia, buka peluang kolaborasi dan persahabatan baru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="news-section">
        <div className="news-container">
          {/* Featured News */}
          <div className="featured-news">
            <h2 className="news-main-title">Berita & Kegiatan Terbaru GMB</h2>
            <p className="news-subtitle">Lihat Langsung Dampak dan Cerita Inspiratif dari Komunitas Kami.</p>
            
            <div className="featured-grid">
              {[
                { 
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/d759ccb982b0ed793be73f88ed873511755f71b3?width=826",
                  title: "Aksi Sosial di Panti Jompo Tresna Werdha",
                  date: "Apr. 02 to Apr. 08, 2023",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur a"
                },
                { 
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/1ee75823e403d8c6b82447a8b1b41903d11d7c62?width=826",
                  title: "Lenten Season",
                  date: "Apr. 02 to Apr. 08, 2023",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur a"
                },
                { 
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/8762bb4daa87f0ef1474d83762c6bfe1630b3f8a?width=826",
                  title: "HelpingHands",
                  date: "Apr. 02 to Apr. 08, 2023",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur a"
                },
                { 
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/0712dce131bf5d00a62977da22194dfa8e958337?width=826",
                  title: "Family is Important",
                  date: "Apr. 02 to Apr. 08, 2023",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur a"
                },
                { 
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/3678707e562bb9669e8d0a676141d939c2274565?width=826",
                  title: "lives of Children",
                  date: "Apr. 02 to Apr. 08, 2023",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur a"
                },
                { 
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/38c8ef5b4c7c03c6e7064cd62da4adb672bf5b37?width=826",
                  title: "The Holy Land",
                  date: "Apr. 02 to Apr. 08, 2023",
                  excerpt: "Lorem ipsum dolor sit amet, consectetur a"
                }
              ].map((news, index) => (
                <div key={index} className={`news-card ${index === 0 ? 'featured' : ''}`}>
                  <img src={news.image} alt={news.title} className="news-image" />
                  <div className="news-content">
                    <span className="news-date">{news.date}</span>
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-excerpt">{news.excerpt}</p>
                  </div>
                  <div className="news-accent"></div>
                </div>
              ))}
            </div>
          </div>

          {/* All News */}
          <div className="all-news">
            <h2 className="section-title">Jelajahi Semua Berita & Kegiatan</h2>
            
            <div className="news-filters">
              {newsCategories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeNewsFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveNewsFilter(category)}
                >
                  {category}
                </button>
              ))}
              <button className="see-all-btn">SEE ALL</button>
            </div>

            <div className="news-list">
              <div className="main-news">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/df4b2102b278193d14c28a05629b337bda82bfb2?width=1300" 
                  alt="Main News"
                  className="main-news-image"
                />
                <div className="main-news-content">
                  <h3 className="main-news-title">
                    Founder Risky Erlangga: Mahasiswa ITERA Inspiratif di Balik 700+ Generasi Muda Berprestasi
                  </h3>
                </div>
              </div>

              <div className="side-news">
                {[
                  {
                    image: "https://api.builder.io/api/v1/image/assets/TEMP/f5a551f89ce4b9d503fa9127d2483ffe89c2ad14?width=330",
                    title: "Aksi GMB Peduli: Berbagi Kasih dan Makanan di Panti Jompo Tresna Werdha"
                  },
                  {
                    image: "https://api.builder.io/api/v1/image/assets/TEMP/fc67dd84725edd0ffbeaab1cf7d306b446c6997f?width=330",
                    title: "Lestarikan Lingkungan Melalui Gerakan Pungut Sampah di Pantai Kunyit"
                  },
                  {
                    image: "https://api.builder.io/api/v1/image/assets/TEMP/3faae03220a1f04d56a822373426874d55472909?width=330",
                    title: "GMB Sukses Gelar Seminar Kepemimpinan Offline di Bandar Lampung"
                  },
                  {
                    image: "https://api.builder.io/api/v1/image/assets/TEMP/750f0af8b8442c33f3b263c9556f05a36d3d3b86?width=330",
                    title: "Menjaga Kearifan Lokal Melalui Pentas Seni dan Budaya Nusantara"
                  }
                ].map((news, index) => (
                  <div key={index} className="side-news-item">
                    <img src={news.image} alt={news.title} className="side-news-image" />
                    <h4 className="side-news-title">{news.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="team-container">
          <h2 className="team-title">Temui Tim Mentor, Inovator, dan Pemimpin Muda di Balik GMB.</h2>
          
          <div className="team-grid">
            {[
              {
                name: "Kezia Njayani Dhiputri",
                role: "Tim PDD Generasi Muda Berprestasi",
                image: "https://api.builder.io/api/v1/image/assets/TEMP/eb262bf74a4b930f2bf57aad95f389d0a635fdf6?width=816",
                description: "Expert in organizing events that inspire and connect young minds."
              },
              {
                name: "Risky Erlangga",
                role: "Founder",
                image: "https://api.builder.io/api/v1/image/assets/TEMP/fe042c6eda51c5820efe5cd4b2be1c92a2acd358?width=816",
                description: "Expert in organizing events that inspire and connect young minds."
              },
              {
                name: "Hafiza Aulia Saputri",
                role: "Generasi Muda Berprestasi",
                image: "https://api.builder.io/api/v1/image/assets/TEMP/1d36dba2a316c07eb56abcc7f6bba5475be441f6?width=816",
                description: "Expert in organizing events that inspire and connect young minds."
              }
            ].map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                  <div className="team-social">
                    <a href="#" className="social-link">
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.1875 4.4585C5.04841 4.4585 4.125 5.3819 4.125 6.521V27.146C4.125 28.285 5.04841 29.2085 6.1875 29.2085H26.8125C27.9515 29.2085 28.875 28.285 28.875 27.146V6.521C28.875 5.3819 27.9515 4.4585 26.8125 4.4585H6.1875ZM11.716 9.96224C11.7238 11.2771 10.7396 12.0873 9.57169 12.0815C8.47147 12.0757 7.51241 11.1997 7.51821 9.96417C7.52401 8.80208 8.44247 7.86815 9.6355 7.89523C10.8459 7.9223 11.7238 8.80982 11.716 9.96224ZM16.8846 13.7559H13.4196H13.4177V25.5257H17.0798V25.2511C17.0798 24.7287 17.0794 24.2062 17.079 23.6836C17.0779 22.2896 17.0767 20.8941 17.0838 19.5006C17.0857 19.1622 17.1011 18.8103 17.1882 18.4873C17.5149 17.2808 18.5998 16.5016 19.8102 16.6931C20.5875 16.8148 21.1017 17.2654 21.3183 17.9983C21.4518 18.4564 21.5117 18.9495 21.5175 19.4272C21.5332 20.8676 21.531 22.3081 21.5288 23.7486C21.528 24.2571 21.5271 24.7659 21.5271 25.2743V25.5238H25.201V25.2415C25.201 24.62 25.2007 23.9986 25.2003 23.3773C25.1996 21.8242 25.1988 20.2711 25.2029 18.7175C25.2048 18.0156 25.1295 17.3234 24.9574 16.6447C24.7002 15.6353 24.1685 14.8 23.3042 14.1968C22.6912 13.7675 22.0183 13.491 21.2662 13.4601C21.1805 13.4565 21.0942 13.4518 21.0074 13.4472C20.6228 13.4264 20.2319 13.4053 19.8642 13.4794C18.8123 13.6902 17.8882 14.1716 17.1901 15.0204C17.109 15.1178 17.0296 15.2166 16.9113 15.3642L16.8846 15.3976V13.7559ZM7.81226 25.5295H11.4571V13.7636H7.81226V25.5295Z" fill="black"/>
                      </svg>
                    </a>
                    <a href="#" className="social-link">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M12 2.2523C15.2041 2.2523 15.5836 2.265 16.849 2.32514C18.019 2.38076 18.6544 2.5844 19.0773 2.75553C19.6373 2.98229 20.0371 3.25321 20.457 3.6906C20.8769 4.12799 21.137 4.54444 21.3546 5.12786C21.519 5.56837 21.7145 6.23024 21.7679 7.44893C21.8256 8.76705 21.8378 9.16237 21.8378 12.5C21.8378 15.8377 21.8256 16.233 21.7679 17.5511C21.7145 18.7698 21.519 19.4317 21.3546 19.8722C21.137 20.4556 20.8769 20.8721 20.457 21.3095C20.0371 21.7468 19.6373 22.0178 19.0773 22.2445C18.6544 22.4157 18.019 22.6193 16.849 22.6749C15.5838 22.7351 15.2043 22.7478 12 22.7478C8.79563 22.7478 8.41613 22.7351 7.15097 22.6749C5.98098 22.6193 5.34559 22.4157 4.92274 22.2445C4.36261 22.0178 3.96282 21.7468 3.54293 21.3095C3.12303 20.8721 2.86295 20.4556 2.64531 19.8722C2.48097 19.4317 2.28548 18.7698 2.23209 17.5511C2.17435 16.233 2.16216 15.8377 2.16216 12.5C2.16216 9.16237 2.17435 8.76705 2.23209 7.44898C2.28548 6.23024 2.48097 5.56837 2.64531 5.12786C2.86295 4.54444 3.12303 4.12799 3.54293 3.6906C3.96282 3.25321 4.36261 2.98229 4.92274 2.75553C5.34559 2.5844 5.98098 2.38076 7.15092 2.32514C8.41632 2.265 8.79582 2.2523 12 2.2523ZM12 0C8.74095 0 8.33234 0.0143895 7.05241 0.0752221C5.77511 0.135956 4.90283 0.347233 4.1395 0.656259C3.35039 0.975705 2.68118 1.40312 2.01406 2.09803C1.34695 2.79294 0.936629 3.49004 0.629961 4.31203C0.333296 5.10717 0.13047 6.01579 0.0721656 7.34632C0.0137662 8.67952 0 9.1052 0 12.5C0 15.8948 0.0137662 16.3205 0.0721656 17.6537C0.13047 18.9843 0.333296 19.8929 0.629961 20.688C0.936629 21.51 1.34695 22.2071 2.01406 22.902C2.68118 23.5969 3.35039 24.0243 4.1395 24.3438C4.90283 24.6528 5.77511 24.8641 7.05241 24.9248C8.33234 24.9857 8.74095 25 12 25C15.259 25 15.6677 24.9857 16.9475 24.9248C18.2248 24.8641 19.0971 24.6528 19.8605 24.3438C20.6496 24.0243 21.3188 23.5969 21.9859 22.902C22.653 22.2071 23.0633 21.51 23.37 20.688C23.6667 19.8929 23.8695 18.9843 23.9278 17.6537C23.9862 16.3205 24 15.8948 24 12.5C24 9.1052 23.9862 8.67952 23.9278 7.34632C23.8695 6.01579 23.6667 5.10717 23.37 4.31203C23.0633 3.49004 22.653 2.79294 21.9859 2.09803C21.3188 1.40312 20.6496 0.975705 19.8605 0.656259C19.0971 0.347233 18.2248 0.135956 16.9475 0.0752221C15.6677 0.0143895 15.259 0 12 0ZM12 6.08109C8.59671 6.08109 5.83779 8.95496 5.83779 12.5C5.83779 16.0451 8.59671 18.919 12 18.919C15.4032 18.919 18.1622 16.0451 18.1622 12.5C18.1622 8.95496 15.4032 6.08109 12 6.08109ZM12 16.6667C9.79085 16.6667 7.99995 14.8012 7.99995 12.5C7.99995 10.1989 9.79085 8.33333 12 8.33333C14.2091 8.33333 16 10.1989 16 12.5C16 14.8012 14.2091 16.6667 12 16.6667ZM19.8456 5.82748C19.8456 6.65592 19.2009 7.32751 18.4056 7.32751C17.6103 7.32751 16.9656 6.65592 16.9656 5.82748C16.9656 4.99905 17.6103 4.32751 18.4056 4.32751C19.2009 4.32751 19.8456 4.99905 19.8456 5.82748Z" fill="#0A0A08"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">FAQs</h2>
          <p className="faq-subtitle">Find answers to the most common questions about our platform and services.</p>
          
          <div className="faq-list">
            {faqData.map((faq) => (
              <div key={faq.id} className={`faq-item ${activeFAQ === faq.id ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span>{faq.question}</span>
                  <div className="faq-icon">
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none">
                      <path d="M18 20.5H0.5V0.5H18V20.5Z" stroke="#E5E7EB"/>
                      <path d="M10.5 3.625C10.5 2.93359 9.94141 2.375 9.25 2.375C8.55859 2.375 8 2.93359 8 3.625V9.25H2.375C1.68359 9.25 1.125 9.80859 1.125 10.5C1.125 11.1914 1.68359 11.75 2.375 11.75H8V17.375C8 18.0664 8.55859 18.625 9.25 18.625C9.94141 18.625 10.5 18.0664 10.5 17.375V11.75H16.125C16.8164 11.75 17.375 11.1914 17.375 10.5C17.375 9.80859 16.8164 9.25 16.125 9.25H10.5V3.625Z" fill="#2563EB"/>
                    </svg>
                  </div>
                </button>
                <div className={`faq-answer ${activeFAQ === faq.id ? 'expanded' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-section">
                <h4 className="footer-label">Alamat:</h4>
                <p className="footer-text">
                  Jl. Pulau Bangka, Gg. Perkutut No. A 10, Sukabumi, Bandar Lampung
                </p>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-label">Contact:</h4>
                <div className="contact-links">
                  <a href="tel:08985264146" className="contact-link">Telp: (0898) 5264146</a>
                  <a href="mailto:info@gmb.org" className="contact-link">info@gmb.org</a>
                </div>
              </div>
              
              <div className="footer-social">
                <a href="#" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.5933 7.20301C21.4794 6.78041 21.2568 6.39501 20.9477 6.08518C20.6386 5.77534 20.2537 5.55187 19.8313 5.43701C18.2653 5.00701 12.0003 5.00001 12.0003 5.00001C12.0003 5.00001 5.73633 4.99301 4.16933 5.40401C3.74725 5.52415 3.36315 5.75078 3.0539 6.06214C2.74464 6.3735 2.52062 6.75913 2.40333 7.18201C1.99033 8.74801 1.98633 11.996 1.98633 11.996C1.98633 11.996 1.98233 15.26 2.39233 16.81C2.62233 17.667 3.29733 18.344 4.15533 18.575C5.73733 19.005 11.9853 19.012 11.9853 19.012C11.9853 19.012 18.2503 19.019 19.8163 18.609C20.2388 18.4943 20.6241 18.2714 20.934 17.9622C21.2439 17.653 21.4677 17.2682 21.5833 16.846C21.9973 15.281 22.0003 12.034 22.0003 12.034C22.0003 12.034 22.0203 8.76901 21.5933 7.20301ZM9.99633 15.005L10.0013 9.00501L15.2083 12.01L9.99633 15.005Z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-link-group">
                <a href="#" className="footer-link">Tentang Kami</a>
                <a href="#" className="footer-link">Benefit Bergabung</a>
                <a href="#" className="footer-link">Program Unggulan</a>
                <a href="#" className="footer-link">Kisah Prestasi</a>
              </div>
              <div className="footer-link-group">
                <a href="#" className="footer-link">Hubungi Kami</a>
                <a href="#" className="footer-link">Gabung Sekarang!</a>
                <a href="#" className="footer-link">Tim Kami</a>
                <a href="#" className="footer-link">FAQ</a>
                <a href="#" className="footer-link">Dukungan & Kemitraan</a>
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
    </div>
  );
};

export default GMBLandingPage;
