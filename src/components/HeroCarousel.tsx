import React, { useState, useEffect } from 'react';
import { HeroSlide } from '../types';

interface HeroCarouselProps {
  slides: HeroSlide[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (isAutoPlay && slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <section className="hero-section">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `linear-gradient(rgba(23, 52, 98, 0.7), rgba(23, 52, 98, 0.7)), url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  {slide.title.split(' ').slice(0, 2).join(' ')}.<br />
                  {slide.title.split(' ').slice(2).join(' ')}.
                </h1>
                <p className="hero-subtitle">
                  {slide.subtitle}
                </p>
                <div className="hero-buttons">
                  <button className="hero-btn primary">
                    Gabung Sekarang!
                  </button>
                  <button 
                    className="hero-btn secondary"
                    onClick={() => {
                      const element = document.getElementById('activities');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Lihat Kegiatan Kami
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {slides.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prevSlide}>
              ❮
            </button>
            <button className="carousel-btn next" onClick={nextSlide}>
              ❯
            </button>
            
            <div className="carousel-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroCarousel;