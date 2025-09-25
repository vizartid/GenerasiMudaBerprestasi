# GMB Landing Page Project

## Overview
A modern, full-stack TypeScript React application for Generasi Muda Berprestasi (GMB) - an Indonesian youth achievement organization. The project showcases their programs, achievements, and community through a professional, interactive website.

## Technology Stack
- **Frontend**: React 18 + TypeScript
- **Build System**: Webpack 5 with ts-loader
- **Routing**: React Router v6
- **Styling**: CSS3 with responsive design
- **Backend**: Express.js server
- **Data**: JSON-based content management

## Project Architecture

### Frontend Structure
```
src/
├── components/          # Reusable React components
│   ├── Layout.tsx      # Main layout with navbar/footer
│   ├── Navbar.tsx      # Navigation with social links
│   ├── HeroCarousel.tsx # Image slideshow carousel
│   ├── NewsCard.tsx    # News article preview cards
│   ├── TeamCard.tsx    # Team member cards  
│   └── Footer.tsx      # Site footer
├── pages/              # Main application pages
│   ├── Home.tsx        # Landing page
│   ├── Activities.tsx  # News with filtering
│   ├── Achievements.tsx # Achievements showcase
│   └── NewsDetail.tsx  # Individual news articles
├── data/               # JSON data files
│   ├── news.json       # News articles with categories
│   ├── team.json       # Team member profiles
│   └── heroSlides.json # Hero carousel slides
├── types/              # TypeScript type definitions
│   └── index.ts        # All interface definitions
└── styles/             # CSS stylesheets
    ├── GMBLandingPage.css # Main styles
    └── additional.css  # Component-specific styles
```

### Backend
- **Express.js server** serving React SPA and API endpoints
- **Static file serving** from public directory
- **API routes** for data (news, team, hero slides)
- **SPA routing support** for React Router deep links

## Key Features Implemented

### ✅ Navigation & UI Improvements
- **Smaller navbar** with improved styling and blur effects
- **Social media icons** with CDN links (Facebook, Instagram, LinkedIn, Twitter)
- **Responsive design** optimized for all screen sizes
- **Loading animations** and smooth scroll effects

### ✅ New Pages & Routing
- **Activities page** with news filtering by category and search
- **Achievements page** with statistics and timeline showcase
- **Individual news detail pages** with dynamic routing
- **React Router integration** for seamless navigation

### ✅ Enhanced Content Management
- **JSON-based data** structure for easy content updates
- **TypeScript types** ensuring type safety across components
- **Category filtering** (Prestasi, Sosial & Lingkungan, Seni & Budaya, Pendidikan)
- **Search functionality** for finding specific articles

### ✅ Hero Section Enhancements
- **Carousel implementation** with multiple background images
- **Smooth transitions** between slides with navigation dots
- **Auto-play functionality** with manual controls
- **Responsive image handling** for all screen sizes

## Data Structure

### News Articles
```typescript
interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Prestasi' | 'Sosial & Lingkungan' | 'Seni & Budaya' | 'Pendidikan';
  date: string;
  image: string;
  featured?: boolean;
}
```

### Team Members
```typescript
interface TeamMember {
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
```

## Development & Build

### Scripts
- `npm run dev` - Development mode with watch
- `npm run build` - Production build
- `npm start` - Start production server
- `npm run webpack-build` - Build React app

### Build System
- **Webpack 5** with TypeScript compilation
- **CSS loading** with style-loader and css-loader
- **Asset management** for images and fonts
- **Bundle optimization** for production

## Current Status
- ✅ Complete restructuring from monolithic HTML to React SPA
- ✅ TypeScript implementation with proper type safety
- ✅ All user requirements implemented and tested
- ✅ Professional full-stack architecture
- ✅ Responsive design with modern UI/UX
- ✅ Production-ready build system
- ✅ Server configured for React Router
- ✅ Deployment ready for autoscale

## Recent Major Changes (September 25, 2025)
- **Complete architecture restructure** from single HTML to full-stack TypeScript React
- **Implemented React Router** for multi-page navigation
- **Created 8 dummy news articles** across different categories
- **Built responsive Activities page** with filtering and search
- **Developed Achievements showcase** with statistics and timeline
- **Enhanced hero section** with carousel functionality
- **Improved navbar design** with social media integration
- **Set up professional build system** with Webpack and TypeScript

## Deployment Setup
- **Target**: Autoscale (suitable for React SPAs)
- **Build Command**: npm run build
- **Start Command**: npm start
- **Port**: 5000

## User Experience Features
- **Fast loading** with optimized bundle
- **Smooth animations** and transitions
- **Intuitive navigation** between sections
- **Mobile-first responsive design**
- **Professional UI** with consistent branding
- **Social media integration** with real placeholder links
- **Content filtering** and search capabilities
- **Individual article pages** with sharing functionality