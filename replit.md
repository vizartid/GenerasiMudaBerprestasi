# GMB Landing Page Project

## Overview
This is a React-based landing page for Generasi Muda Berprestasi (GMB) - an Indonesian youth achievement organization. The project showcases their programs, achievements, and community.

## Project Structure
- **Technology Stack**: React 18 (via CDN), Express.js server
- **Architecture**: Static website with client-side React components
- **Hosting**: Express server serving static files on port 5000

## Current Status
- ✅ Imported from GitHub repository
- ✅ Set up Node.js environment with Express server
- ✅ Configured frontend workflow on port 5000
- ✅ Deployment configuration set for autoscale
- ✅ Application running successfully

## Recent Changes (September 25, 2025)
- Created package.json with Express dependency
- Set up Express server (server.js) to serve static files on port 5000
- Configured workflow "Frontend Server" to run the application
- Set up deployment configuration for production (autoscale)
- Updated .gitignore for Node.js project

## Project Architecture
### Frontend
- **Main File**: index.html (contains inline React components)
- **Styling**: GMBLandingPage.css
- **Components**: EnhancedGMBLandingPage React component with interactive features
- **Dependencies**: React 18, ReactDOM (loaded via CDN)

### Backend
- **Server**: Express.js serving static files
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 (allows proxy access)

### Features
- Interactive navigation with smooth scrolling
- FAQ accordion functionality  
- News filtering system
- Team member showcase
- Responsive design
- Loading animations and hover effects

## Deployment Setup
- **Target**: Autoscale (suitable for static websites)
- **Command**: node server.js
- **Port**: 5000

## Notes
- Uses React 17 rendering API (shows deprecation warnings but works correctly)
- All images loaded from external CDN (api.builder.io)
- Project designed for Indonesian youth organization GMB
- Fully responsive and interactive design