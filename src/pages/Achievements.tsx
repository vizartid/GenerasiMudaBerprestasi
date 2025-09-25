import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import { NewsArticle } from '../types';
import newsDataRaw from '../data/news.json';

const newsData = newsDataRaw as NewsArticle[];

const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<NewsArticle[]>([]);

  useEffect(() => {
    // Filter hanya artikel dengan kategori "Prestasi"
    const prestasiArticles = newsData.filter(article => article.category === 'Prestasi');
    setAchievements(prestasiArticles);
  }, []);

  const stats = [
    {
      number: '700+',
      label: 'Anggota Aktif',
      description: 'Tersebar di 22 provinsi'
    },
    {
      number: '50+',
      label: 'Prestasi Nasional',
      description: 'Kompetisi tingkat nasional'
    },
    {
      number: '100+',
      label: 'Program Terlaksana',
      description: 'Workshop dan seminar'
    },
    {
      number: '22',
      label: 'Provinsi',
      description: 'Jangkauan seluruh Indonesia'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Juara 1 Kompetisi Inovasi Teknologi Nasional',
      description: 'Tim GMB berhasil mengembangkan aplikasi edukasi berbasis AI'
    },
    {
      year: '2024',
      title: 'Program Beasiswa untuk 50 Siswa',
      description: 'Memberikan beasiswa pendidikan untuk siswa berprestasi'
    },
    {
      year: '2023',
      title: 'Ekspansi ke 22 Provinsi',
      description: 'GMB resmi hadir di seluruh provinsi di Indonesia'
    },
    {
      year: '2023',
      title: 'Keanggotaan Mencapai 700+ Anggota',
      description: 'Pertumbuhan komunitas yang pesat di berbagai daerah'
    }
  ];

  return (
    <div className="achievements-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1 className="page-title">Prestasi GMB</h1>
          <p className="page-subtitle">
            Bangga dengan pencapaian dan kontribusi anggota GMB dalam berbagai bidang prestasi
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">GMB dalam Angka</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-description">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="milestones-section">
        <div className="container">
          <h2 className="section-title">Pencapaian Terbaru</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Articles Section */}
      <section className="achievement-articles-section">
        <div className="container">
          <h2 className="section-title">Berita Prestasi Terbaru</h2>
          {achievements.length > 0 ? (
            <div className="news-grid">
              {achievements.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="no-achievements">
              <p>Belum ada berita prestasi yang tersedia.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Achievements;