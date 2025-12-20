# Portfolio Website - Code Documentation

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── photos/            # Image assets
│   ├── Aditya.jpg
│   ├── Aditya_Photo.jpg
│   └── ...
└── Aditya_Elango_Resume.pdf
```

---

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0b0b0b` (Deep Black)
- **Secondary Background**: `#0f0f0f` (Lighter Black)
- **Accent Red**: `#ff2d2d` (Vivid Red) - Main brand color
- **Accent Dark Red**: `#b81b1b` (Darker Red) - For gradients
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#d1d1d1` (Light Gray)
- **Text Muted**: `#a0a0a0` (Medium Gray)

### Typography
- **Headings**: Poppins (Bold, 700-800 weight)
- **Body Text**: Inter (Regular, 400 weight)
- **Font Sizes**: Responsive with `clamp()` function

### Spacing Scale
- `--spacing-xs`: 0.5rem (8px)
- `--spacing-sm`: 1rem (16px)
- `--spacing-md`: 1.5rem (24px)
- `--spacing-lg`: 2rem (32px)
- `--spacing-xl`: 3rem (48px)
- `--spacing-2xl`: 4rem (64px)

---

## 📄 HTML Structure (index.html)

### Major Sections

1. **Navigation Bar** (`<nav class="navbar">`)
   - Fixed top position
   - Scroll progress indicator
   - Hamburger menu for mobile
   - Active link highlighting

2. **Hero Section** (`<section id="home" class="hero">`)
   - Profile image with 3D tilt effect
   - Name, title, and tagline
   - Call-to-action buttons
   - Particles.js background
   - Scroll indicator

3. **About Section** (`<section id="about" class="about">`)
   - Bio text
   - Statistics (projects, publications, certifications)
   - Professional photo

4. **Career & Education** (`<section id="career" class="career">`)
   - Two-column timeline
   - Education history (left)
   - Work experience (right)
   - Animated timeline dots

5. **Skills Section** (`<section id="skills" class="skills">`)
   - Grid of 6 skill categories
   - Technology tags with icons

6. **Projects Section** (`<section id="projects" class="projects">`)
   - **Featured Projects**: 3 best projects in 3-column grid
   - **All Projects**: Filterable grid by category
   - Each card: title, description, highlights, tech stack, buttons

7. **Publications Section** (`<section id="publications" class="publications">`)
   - Timeline of research papers
   - Conference details
   - Awards and recognitions

8. **Achievements Section** (`<section id="achievements" class="achievements">`)
   - Hackathon wins
   - Leadership roles
   - Workshop participation
   - Volunteer work

9. **Certifications Section** (`<section id="certifications" class="certifications">`)
   - Professional certification cards
   - Issuer and year

10. **Contact Section** (`<section id="contact" class="contact">`)
    - Contact information
    - Social media links
    - Contact form

11. **Footer** (`<footer class="footer">`)
    - Copyright
    - Back to top button

---

## 🎨 CSS Organization (styles.css)

### File Structure

```
1. Filter Buttons & Project Controls
   - Category filter buttons
   - Technology badges
   - Project buttons

2. CSS Variables & Root Styles
   - Color palette
   - Spacing scale
   - Typography
   - Border radius
   - Transitions
   - Shadows

3. Design Additions & Layout Helpers
   - Grid layouts
   - Card styling (glassmorphism)
   - Timeline styling
   - 3D tilt effects
   - Red glow effects

4. Global Reset & Base Styles
   - Box sizing reset
   - Body defaults
   - Custom scrollbar

5. Typography
   - Heading styles (h1-h6)
   - Paragraph styles
   - Link styles

6. Utility Classes
   - .container (max-width wrapper)
   - .section-title (gradient text)
   - .btn classes (buttons)

7. Navigation Bar
   - Fixed positioning
   - Scroll progress bar
   - Active link indicator
   - Hamburger menu

8. Hero Section
   - Profile image styling
   - Text layout
   - Button grid
   - Scroll indicator animation

9. About Section
   - Two-column grid
   - Stats display
   - Image effects

10. Career & Education Section
    - Timeline layout
    - Vertical line
    - Animated dots
    - Card styling

11. Skills Section
    - Grid layout
    - Category cards
    - Skill tags with hover

12. Projects Section
    - Featured grid (3 columns)
    - All projects grid
    - Filter tabs
    - Card hover effects
    - Button positioning

13. Publications Section
    - Timeline layout
    - Card styling
    - Featured badge
    - Tag display

14. Achievements Section
    - Grid layout
    - Card styling

15. Certifications Section
    - Grid layout
    - Card styling

16. Contact Section
    - Form styling
    - Input validation states

17. Responsive Media Queries
    - Mobile breakpoints
    - Tablet adjustments
```

### Key CSS Techniques

#### 1. **Glassmorphism Effect**
```css
background: linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015));
border: 2px solid rgba(255,45,45,0.6);
backdrop-filter: blur(10px);
```

#### 2. **3D Tilt Transform**
```css
transform: translateY(-20px) rotateX(8deg) rotateY(-2deg) translateZ(40px);
transform-style: preserve-3d;
perspective: 1200px;
```

#### 3. **Gradient Text**
```css
background: linear-gradient(135deg, var(--accent-red), var(--accent-white));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

#### 4. **Timeline Vertical Line**
```css
.timeline::before {
    content: '';
    position: absolute;
    left: 6px;
    width: 2px;
    background: rgba(179, 165, 165, 0.4);
}
```

---

## ⚙️ JavaScript Functionality (script.js)

### Data Arrays (Easily Editable)

All content is stored in JavaScript arrays for easy updates:

#### 1. **Projects Array**
```javascript
const projects = [
  {
    id: "unique-id",
    title: "Project Name",
    featured: true,  // Shows in Featured section
    categories: ["AI/ML", "Full Stack"],  // For filtering
    overview: "Short description",
    highlights: ["bullet 1", "bullet 2"],
    techStack: ["Python", "React"],
    github: "GITHUB_LINK"
  }
];
```

#### 2. **Publications Array**
```javascript
const publications = [
  {
    title: "Paper Title",
    conference: "Conference Name",
    institution: "University",
    award: "Best Paper Award",  // Optional
    summary: "Abstract",
    tags: ["Technology", "Tags"],
    paperLink: "LINK",
    certificateLink: "LINK"
  }
];
```

#### 3. **Achievements Array**
```javascript
const achievements = [
  {
    id: 1,
    category: 'hackathon',  // or 'leadership', 'workshop', 'volunteer'
    icon: '🏆',
    title: "Achievement Title",
    detail: "Organization | Year",
    description: "For hackathons",  // Optional
    highlights: ["For other types"],  // Optional
    technologies: ["Tech stack"]  // Optional
  }
];
```

#### 4. **Certifications Array**
```javascript
const certifications = [
  {
    id: 1,
    title: "Certification Name",
    issuer: "Organization",
    year: 2025,
    icon: '☁️',
    certificateUrl: 'LINK'  // Optional
  }
];
```

### JavaScript Classes

#### **1. Navigation Class**
- Manages hamburger menu toggle
- Updates active link on scroll
- Closes menu when link is clicked

#### **2. ScrollAnimations Class**
- Uses IntersectionObserver API
- Fades in elements with `[data-scroll]` attribute
- Triggers when elements enter viewport

#### **3. BackToTop Class**
- Shows button after 300px scroll
- Smooth scroll to top on click

#### **4. ProjectsManager Class**
- Filters projects by category
- Updates active filter button
- Shows/hides project cards
- Handles modal dialogs

#### **5. PublicationsManager Class**
- Renders publication cards from data array
- Adds timeline styling
- Shows featured badges

#### **6. AchievementsManager Class**
- Renders achievement cards
- Handles different categories (hackathon, leadership, etc.)
- Conditional content display

#### **7. ContactForm Class**
- Validates form inputs
- Checks email format with regex
- Shows error messages
- Handles form submission

#### **8. TiltParallax Class**
- Creates 3D tilt effect on cards
- Tracks mouse position
- Applies rotation transforms
- Respects accessibility settings

### Key Functions

#### **renderProjectsSection()**
Dynamically generates HTML for project cards:
- Creates featured project grid
- Creates all projects grid
- Adds tech badges
- Adds action buttons

#### **filterProjects(category)**
Shows/hides project cards based on selected category:
```javascript
function filterProjects(category) {
  const cards = document.querySelectorAll(".all-projects-grid .project-card");
  cards.forEach((card) => {
    const projectCategories = (card.dataset.categories || "").split(",");
    if (category === "All" || projectCategories.includes(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
```

### Event Listeners

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all classes
  new Navigation();
  new ScrollAnimations();
  new BackToTop();
  new ProjectsManager();
  new PublicationsManager();
  new AchievementsManager();
  new ContactForm();
  new TiltParallax();
});
```

---

## 🎭 Animation Effects

### 1. **Fade In Animations**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 2. **Scroll Indicator**
```css
@keyframes scroll-animation {
  0%, 20%, 100% { opacity: 0; }
  30%, 90% { opacity: 1; }
}
```

### 3. **Star Twinkle**
```css
@keyframes starTwinkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
```

### 4. **Badge Float**
```css
@keyframes badgeFloat {
  0%, 100% { 
    transform: translateY(0px);
    box-shadow: 0 4px 12px rgba(255,45,45,0.25);
  }
  50% { 
    transform: translateY(-6px);
    box-shadow: 0 8px 16px rgba(255,45,45,0.35);
  }
}
```

---

## 🎨 Particles.js Configuration

### Hero Section Particles
```javascript
particlesJS('particles-js', {
  particles: {
    number: { value: 55 },
    color: { value: '#ff2d2d' },
    shape: { type: 'circle' },
    opacity: { value: 0.35 },
    size: { value: 2 },
    move: { enable: true, speed: 0.6 },
    line_linked: {
      enable: true,
      distance: 140,
      color: '#ff2d2d',
      opacity: 0.2,
      width: 1
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' }
    }
  }
});
```

---

## 📱 Responsive Design

### Breakpoints

- **Desktop**: 1200px+
- **Laptop**: 1000px - 1199px
- **Tablet**: 768px - 999px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

### Key Responsive Changes

#### Mobile (< 768px)
- Single column layouts
- Hamburger menu appears
- Stacked hero profile section
- Full-width cards
- Reduced spacing

#### Tablet (768px - 999px)
- 2-column grids
- Condensed navigation
- Adjusted image sizes

---

## 🔄 How Project Cards Work

### Data Flow

```
1. projects array (script.js)
   ↓
2. renderProjectsSection() function
   ↓
3. Generates HTML and inserts into:
   - #featured-projects-grid (featured: true)
   - #projects-grid (all projects)
   ↓
4. Filter buttons call filterProjects()
   ↓
5. Shows/hides cards based on categories
```

### Card Structure

```html
<div class="project-card card-3d" data-categories="AI/ML,Full Stack">
  <!-- Featured badge (if featured) -->
  <div class="featured-badge">
    <i class="fas fa-star"></i> Featured
  </div>
  
  <!-- Title -->
  <h3 class="project-title">Project Name</h3>
  
  <!-- Description -->
  <p class="project-description">Overview text...</p>
  
  <!-- Highlights -->
  <ul class="project-highlights">
    <li><i class="fas fa-check-circle"></i> Highlight 1</li>
  </ul>
  
  <!-- Tech Stack -->
  <div class="project-tech">
    <span class="tech-badge">
      <i class="fas fa-tag"></i> Python
    </span>
  </div>
  
  <!-- Action Buttons -->
  <div class="project-buttons">
    <a href="..." class="btn btn-primary">
      <i class="fab fa-github"></i> GitHub
    </a>
    <button class="btn btn-secondary">
      <i class="fas fa-eye"></i> View Details
    </button>
  </div>
</div>
```

---

## ✏️ How to Update Content

### Add a New Project

1. Open `script.js`
2. Find the `projects` array (line ~8)
3. Add new object:
```javascript
{
  id: "my-new-project",
  title: "My Awesome Project",
  featured: false,  // Set to true for Featured section
  categories: ["AI/ML", "Full Stack"],
  overview: "Brief description",
  highlights: [
    "Key point 1",
    "Key point 2"
  ],
  techStack: ["Python", "React", "MongoDB"],
  github: "https://github.com/yourusername/project"
}
```
4. Save and refresh page

### Add a New Publication

1. Open `script.js`
2. Find the `publications` array (line ~207)
3. Add new object:
```javascript
{
  title: "My Research Paper",
  conference: "ICML 2025",
  institution: "MIT",
  summary: "We achieved 95% accuracy...",
  tags: ["Deep Learning", "NLP"],
  paperLink: "https://...",
  certificateLink: "https://..."  // Optional
}
```
4. Save and refresh page

### Update Colors

1. Open `styles.css`
2. Find `:root` section (line ~171)
3. Modify color variables:
```css
--accent-red: #your-color;
--primary-bg: #your-bg-color;
```
4. Save and colors update site-wide

### Update Profile Images

1. Replace files in `photos/` folder:
   - `Aditya.jpg` (Hero section)
   - `Aditya_Photo.jpg` (About section)
2. Keep same filenames or update in HTML

---

## 🛠️ External Libraries Used

### 1. **Particles.js**
- Creates animated particle backgrounds
- Used in Hero, Career, Projects, Achievements, Contact sections
- CDN: `particles.min.js`

### 2. **VanillaTilt.js**
- 3D tilt effect on cards and images
- Applied to elements with `data-tilt` attribute
- CDN: `vanilla-tilt.min.js`

### 3. **Font Awesome**
- Icon library for all icons
- Version: 6.4.0
- CDN: `font-awesome/6.4.0/css/all.min.css`

### 4. **Google Fonts**
- Poppins: Headings
- Inter: Body text
- Loaded via Google Fonts CDN

---

## ♿ Accessibility Features

1. **Semantic HTML**: Proper heading hierarchy, landmarks
2. **ARIA Labels**: Navigation buttons, links
3. **Keyboard Navigation**: All interactive elements accessible
4. **Reduced Motion**: Respects `prefers-reduced-motion`
5. **Alt Text**: All images have descriptive alt attributes
6. **Color Contrast**: High contrast for readability
7. **Focus Indicators**: Visible focus states

---

## 🚀 Performance Optimizations

1. **Lazy Loading**: Images load only when visible
2. **CSS Variables**: Reduces repetition, improves performance
3. **IntersectionObserver**: Efficient scroll detection
4. **RequestAnimationFrame**: Smooth animations
5. **Minimal Dependencies**: Only essential libraries
6. **Optimized Images**: Compressed for web

---

## 🐛 Browser Support

- **Chrome**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support
- **Edge**: ✅ Full support
- **Opera**: ✅ Full support
- **Mobile Browsers**: ✅ Full support

### Fallbacks
- IntersectionObserver: Immediate display if not supported
- CSS Grid: Flexbox fallback
- CSS Variables: Hardcoded values for older browsers

---

## 📝 Code Style Guide

### HTML
- Semantic tags (header, nav, main, section, footer)
- Descriptive class names
- Comments for major sections
- Proper indentation (2 spaces)

### CSS
- BEM-like naming convention
- Grouped by section
- Comments for complex selectors
- Mobile-first media queries
- CSS variables for consistency

### JavaScript
- ES6+ syntax (classes, arrow functions, const/let)
- Descriptive variable names
- JSDoc-style comments
- Modular class-based architecture
- Event delegation where appropriate

---

## 📞 Support & Contact

For questions or issues with the code:
- Review this documentation
- Check inline code comments
- Refer to section-specific explanations

---

**Last Updated**: December 2025  
**Author**: Aditya Elango  
**Version**: 1.0
