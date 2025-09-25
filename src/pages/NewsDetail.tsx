import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NewsArticle } from '../types';
import newsDataRaw from '../data/news.json';

const newsData = newsDataRaw as NewsArticle[];

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    if (id) {
      const foundArticle = newsData.find(article => article.id === id);
      if (foundArticle) {
        setArticle(foundArticle);
        
        // Get related articles from same category
        const related = newsData
          .filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
          .slice(0, 3);
        setRelatedArticles(related);
      }
    }
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (!article) {
    return (
      <div className="news-detail-page">
        <div className="container">
          <div className="error-message">
            <h2>Artikel tidak ditemukan</h2>
            <p>Artikel yang Anda cari tidak ada atau telah dihapus.</p>
            <Link to="/activities" className="back-link">← Kembali ke Kegiatan</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>→</span>
          <Link to="/activities">Kegiatan</Link>
          <span>→</span>
          <span>{article.title}</span>
        </nav>

        <article className="article-content">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">{article.category}</span>
              <span className="article-date">{formatDate(article.date)}</span>
            </div>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-excerpt">{article.excerpt}</p>
          </header>

          <div className="article-image-container">
            <img 
              src={article.image} 
              alt={article.title}
              className="article-image"
            />
          </div>

          <div className="article-body">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <footer className="article-footer">
            <div className="article-tags">
              <span className="tag">#{article.category.replace(/ /g, '')}</span>
              <span className="tag">#GMB</span>
              <span className="tag">#GenerasiMudaBerprestasi</span>
            </div>
            
            <div className="social-share">
              <h4>Bagikan artikel ini:</h4>
              <div className="share-buttons">
                <a 
                  href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                  Facebook
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${article.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn twitter"
                >
                  <i className="fab fa-twitter"></i>
                  Twitter
                </a>
                <a 
                  href={`https://wa.me/?text=${article.title} ${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn whatsapp"
                >
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp
                </a>
                <button 
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="share-btn copy"
                >
                  <i className="fas fa-copy"></i>
                  Copy Link
                </button>
              </div>
            </div>
          </footer>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="related-articles">
            <h2>Artikel Terkait</h2>
            <div className="related-grid">
              {relatedArticles.map((relatedArticle) => (
                <Link 
                  key={relatedArticle.id} 
                  to={`/news/${relatedArticle.id}`}
                  className="related-card"
                >
                  <img 
                    src={relatedArticle.image} 
                    alt={relatedArticle.title}
                    className="related-image"
                  />
                  <div className="related-content">
                    <h3 className="related-title">{relatedArticle.title}</h3>
                    <p className="related-date">{formatDate(relatedArticle.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="back-to-activities">
          <Link to="/activities" className="back-btn">
            ← Kembali ke Semua Kegiatan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;