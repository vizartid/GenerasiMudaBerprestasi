# GMB Landing Page

A fully interactive React-based landing page for Generasi Muda Berprestasi (GMB) with modern animations, responsive design, and engaging user interactions.

## 🌟 Interactive Features

### Navigation & Scrolling
- **Smart Navigation Bar**: Transforms with scroll effects and blur backdrop
- **Smooth Scrolling**: Click navigation links for smooth scrolling to sections
- **Scroll Progress Indicator**: Top progress bar shows scroll position
- **Back to Top Button**: Floating button appears when scrolling down
- **Active Navigation States**: Highlights current section in navigation

### Visual Effects
- **Loading Screen**: Animated loading screen with spinner and fade transition
- **Hover Animations**: Cards lift, scale, and show shine effects on hover
- **Parallax Elements**: Subtle mouse movement effects on hero section
- **Scroll Animations**: Elements fade in and slide up when scrolling into view
- **Ripple Effects**: Button clicks create expanding ripple animations

### Interactive Components

#### FAQ Accordion
- Click questions to expand/collapse answers
- Smooth expand/collapse animations
- Rotating plus/minus icons
- Only one FAQ can be open at a time

#### News Filtering
- Interactive category filter buttons
- Active state highlighting for selected category
- Hover effects on filter buttons
- "See All" button with slide animation

#### Team Cards
- Hover effects with image scaling
- Social media link hover states
- Card lift animations
- Shine overlay effects on hover

#### Benefit Cards
- Shimmer effect animation on hover
- Image zoom effects
- Card elevation changes
- Enhanced shadow effects

### Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Adaptive Grid Layouts**: Cards reorganize based on screen size
- **Touch-Friendly**: All interactive elements work on touch devices
- **Flexible Typography**: Font sizes scale appropriately

## 🚀 Features Breakdown

### 1. Hero Section
- **Animated Text**: Staggered fade-in animations for headline elements
- **Interactive Buttons**: Ripple effects and hover states
- **Background Effects**: Parallax movement based on mouse position
- **Call-to-Action**: Primary and secondary button interactions

### 2. About Section
- **Statistics Cards**: Hover animations with scaling and shadow effects
- **Partner Logos**: Logo hover effects with scaling
- **Image Interactions**: Hover zoom effects on all images

### 3. Benefits Section
- **Card Interactions**: Lift animations and shimmer effects
- **Image Overlays**: Hover zoom and overlay effects
- **Responsive Grid**: Adapts from 3-column to single-column layout

### 4. News Section
- **Featured Grid**: Dynamic grid layout with large featured card
- **Filter System**: Interactive category filtering with active states
- **Card Hover Effects**: Image scaling and shadow animations
- **Accent Bars**: Blue accent bars on all news cards

### 5. Team Section
- **Member Cards**: Comprehensive hover effects with image zoom
- **Social Links**: Interactive social media icons with color changes
- **Card Overlays**: Gradient overlays appear on hover

### 6. FAQ Section
- **Accordion Functionality**: Smooth expand/collapse animations
- **Icon Rotation**: Plus icons rotate to X when expanded
- **Staggered Animations**: Questions appear with staggered timing
- **Hover States**: Question buttons have hover highlighting

### 7. Footer
- **Interactive Links**: All links have hover animations
- **Social Icons**: Hover effects with scaling and color changes
- **Contact Links**: Special hover effects for contact information

## 🎨 Animation Details

### CSS Animations Used
- `fadeInUp`: Elements slide up and fade in
- `slideInLeft`/`slideInRight`: Elements slide in from sides
- `spin`: Loading spinner rotation
- `ripple-animation`: Button click ripple effects
- `pulse`: Loading state animations

### Hover Effects
- **Scale Transforms**: Elements scale on hover (1.05x - 1.1x)
- **Shadow Changes**: Dynamic shadow effects increase on hover
- **Color Transitions**: Smooth color changes for interactive elements
- **Transform Origins**: Proper transform origins for natural scaling

### Scroll Effects
- **Intersection Observer**: Triggers animations when elements enter viewport
- **Scroll Progress**: Real-time scroll position tracking
- **Navbar Changes**: Background and shadow changes based on scroll position

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (full layout)
- **Tablet**: 768px - 1023px (adjusted grid layouts)
- **Mobile**: Below 768px (single column layouts, hidden navigation)
- **Small Mobile**: Below 480px (compact spacing and typography)

## 🛠️ Technical Implementation

### React Hooks Used
- `useState`: Managing component states (FAQ, filters, navigation)
- `useEffect`: Handling scroll events and lifecycle effects
- `useRef`: Creating references for section scrolling

### Performance Optimizations
- **Debounced Scroll Events**: Scroll handlers optimized for performance
- **CSS Transforms**: Using GPU-accelerated transforms for animations
- **Intersection Observer**: Efficient viewport detection for animations
- **Conditional Rendering**: Loading screen and state-based rendering

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (ES6+ support required)
- **CSS Grid & Flexbox**: Full support for modern layout systems
- **CSS Variables**: Custom properties for theming
- **Intersection Observer**: Polyfill may be needed for older browsers

## 🎯 Usage Instructions

1. **Open the HTML file** in a modern web browser
2. **Scroll through sections** to see scroll-triggered animations
3. **Click navigation links** for smooth scrolling to sections
4. **Hover over cards and buttons** to see interactive effects
5. **Click FAQ questions** to expand/collapse answers
6. **Try filter buttons** in the news section
7. **Test on mobile devices** for responsive behavior

## 🔧 Customization

### Color Scheme
Colors are defined in CSS variables at the top of the stylesheet:
```css
:root {
  --Primary-Color: #173462;
  --Secondary-Color: #3B82F6;
  --Accent-Color: #FFC000;
}
```

### Animation Timing
Animation durations can be adjusted in the CSS:
```css
transition: all 0.3s ease; /* Change 0.3s to preferred duration */
```

### Responsive Breakpoints
Modify media queries in the CSS for different breakpoints:
```css
@media (max-width: 768px) { /* Adjust breakpoint as needed */ }
```

## 📦 File Structure

```
├── index.html              # Main HTML file with React component
├── GMBLandingPage.jsx      # React component (for reference)
├── GMBLandingPage.css      # Comprehensive stylesheet
└── README.md               # This documentation
```

## 🚀 Getting Started

1. Download all files to a local directory
2. Open `index.html` in a web browser
3. No build process required - uses CDN React and Babel
4. For production, consider setting up a proper React build process

## 🎨 Design System

The component follows the original design specifications:
- **Typography**: Roboto Slab for headings, Inter for body text
- **Spacing**: Consistent padding and margins using CSS variables
- **Colors**: Brand-consistent color scheme throughout
- **Imagery**: All original images preserved with proper aspect ratios

## 🔄 Future Enhancements

Potential additions for enhanced interactivity:
- **Form Validation**: Interactive contact forms with real-time validation
- **Modal Windows**: Popup modals for detailed content
- **Video Integration**: Embedded video players with custom controls
- **Progressive Web App**: Service worker for offline functionality
- **Accessibility**: Enhanced ARIA labels and keyboard navigation

## 📞 Support

For questions or modifications, refer to the component code comments and CSS documentation. The code is well-structured and commented for easy customization.
