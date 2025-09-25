import React, { useState, useEffect } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import NewsCard from '../components/NewsCard';
import TeamCard from '../components/TeamCard';
import { NewsArticle, TeamMember, HeroSlide } from '../types';

// Import data
import newsDataRaw from '../data/news.json';
import teamDataRaw from '../data/team.json';
import heroSlidesDataRaw from '../data/heroSlides.json';

const newsData = newsDataRaw as NewsArticle[];
const teamData = teamDataRaw as TeamMember[];
const heroSlidesData = heroSlidesDataRaw as HeroSlide[];

const Home: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [featuredNews, setFeaturedNews] = useState<NewsArticle[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);

  useEffect(() => {
    setFeaturedNews(newsData.filter(article => article.featured).slice(0, 6));
    setTeamMembers(teamData);
    setHeroSlides(heroSlidesData);
  }, []);

  const faqData = [
    {
      id: 1,
      question: "Bagaimana cara bergabung dengan GMB?",
      answer: "Untuk bergabung dengan GMB, kamu bisa mendaftar melalui website resmi kami atau menghubungi admin di media sosial. Proses pendaftaran sangat mudah dan gratis!"
    },
    {
      id: 2,
      question: "Apa saja program yang tersedia di GMB?",
      answer: "GMB menyediakan berbagai program seperti workshop kepemimpinan, seminar nasional, kompetisi prestasi, program beasiswa, dan kegiatan sosial kemasyarakatan."
    },
    {
      id: 3,
      question: "Apakah GMB berbayar?",
      answer: "Tidak, keanggotaan GMB sepenuhnya gratis! Kami berkomitmen untuk memberikan akses pendidikan dan pengembangan diri tanpa biaya kepada seluruh generasi muda Indonesia."
    },
    {
      id: 4,
      question: "Siapa saja yang bisa bergabung dengan GMB?",
      answer: "GMB terbuka untuk semua pelajar SMA/SMK dan mahasiswa di seluruh Indonesia yang memiliki semangat untuk berprestasi dan berkontribusi positif."
    }
  ];

  const toggleFAQ = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="home-page">
      {/* Hero Section with Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="about-title">Tentang Generasi Muda Berprestasi</h2>
          <p className="about-subtitle">
            GMB adalah lembaga pengembangan sumber daya manusia dengan fokus mengasah bakat dan minat generasi muda Indonesia. Kami berkomitmen menjadi wadah positif untuk kamu mengembangkan potensi diri secara optimal
          </p>
          
          <div className="stats-cards">
            <div className="stats-card large enhanced-hover">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/1f18a975ef636d7dd7f0471236a01f529ca4392f?width=1192" 
                alt="Indonesia Map"
                className="stats-image"
              />
              <h3 className="stats-title">Tersebar di 22 Provinsi di Indonesia</h3>
            </div>
            
            <div className="stats-card enhanced-hover">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ef4f908546ab4b7242cbcfbfc79de9fcef476637?width=600" 
                alt="Members"
                className="stats-image"
              />
              <h3 className="stats-title">Jumlah Anggota Lebih dari 700+</h3>
            </div>
            
            <div className="stats-card enhanced-hover">
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
            <div className="benefit-card enhanced-hover">
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
            
            <div className="benefit-card enhanced-hover">
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
            
            <div className="benefit-card enhanced-hover">
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

      {/* Featured News Section */}
      <section id="activities" className="featured-news-section">
        <div className="news-container">
          <h2 className="news-main-title">Berita & Kegiatan Terbaru GMB</h2>
          <p className="news-subtitle">Lihat Langsung Dampak dan Cerita Inspiratif dari Komunitas Kami.</p>
          
          <div className="featured-grid">
            {featuredNews.map((article, index) => (
              <NewsCard 
                key={article.id} 
                article={article} 
                featured={index === 0} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="team-container">
          <h2 className="team-title">Temui Tim Mentor, Inovator, dan Pemimpin Muda di Balik GMB.</h2>
          
          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Temukan jawaban untuk pertanyaan yang paling sering ditanyakan tentang GMB.</p>
          
          <div className="faq-list">
            {faqData.map((faq) => (
              <div key={faq.id} className={`faq-item ${activeFAQ === faq.id ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span>{faq.question}</span>
                  <div className={`faq-icon ${activeFAQ === faq.id ? 'active' : ''}`}>
                    <span>+</span>
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
    </div>
  );
};

export default Home;