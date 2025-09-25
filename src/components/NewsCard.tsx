import React from 'react';
import { Link } from 'react-router-dom';
import { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, featured = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Link to={`/news/${article.id}`} className={`news-card ${featured ? 'featured' : ''}`}>
      <div className="news-image-container">
        <img src={article.image} alt={article.title} className="news-image" />
        <div className="news-category-badge">
          {article.category}
        </div>
      </div>
      <div className="news-content">
        <span className="news-date">{formatDate(article.date)}</span>
        <h3 className="news-title">{article.title}</h3>
        <p className="news-excerpt">{article.excerpt}</p>
        <div className="read-more">
          Baca Selengkapnya →
        </div>
      </div>
      <div className="news-accent"></div>
    </Link>
  );
};

export default NewsCard;