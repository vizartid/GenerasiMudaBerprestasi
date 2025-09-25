export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Prestasi' | 'Sosial & Lingkungan' | 'Seni & Budaya' | 'Pendidikan';
  date: string;
  image: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
}