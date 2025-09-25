import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import { NewsArticle } from '../types';
import newsDataRaw from '../data/news.json';

const newsData = newsDataRaw as NewsArticle[];

const Activities: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('Semua');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['Semua', 'Prestasi', 'Sosial & Lingkungan', 'Seni & Budaya', 'Pendidikan'];

  useEffect(() => {
    setArticles(newsData);
    setFilteredArticles(newsData);
  }, []);

  useEffect(() => {
    let filtered = articles;

    // Filter by category
    if (activeFilter !== 'Semua') {
      filtered = filtered.filter(article => article.category === activeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  }, [activeFilter, searchTerm, articles]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <div className="activities-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1 className="page-title">Kegiatan & Berita GMB</h1>
          <p className="page-subtitle">
            Ikuti berbagai kegiatan inspiratif dan baca berita terbaru dari komunitas Generasi Muda Berprestasi
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-container">
            <div className="search-container">
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => handleFilterChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="news-grid-section">
        <div className="container">
          {filteredArticles.length > 0 ? (
            <>
              <div className="results-info">
                <p>Menampilkan {filteredArticles.length} artikel {activeFilter !== 'Semua' ? `dalam kategori "${activeFilter}"` : ''}</p>
              </div>
              <div className="news-grid">
                {filteredArticles.map((article, index) => (
                  <NewsCard 
                    key={article.id} 
                    article={article} 
                    featured={index === 0 && searchTerm === '' && activeFilter === 'Semua'} 
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="no-results">
              <h3>Tidak ada artikel yang ditemukan</h3>
              <p>Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Activities;