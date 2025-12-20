/* ============================================
   ADITYA ELANGO - PORTFOLIO WEBSITE JAVASCRIPT
   ============================================
   
   This file contains all interactive functionality
   and animations for the portfolio website.
   
   TABLE OF CONTENTS:
   1. Projects Data Array (Easily Updatable)
   2. Publications Data Array (Easily Updatable)
   3. Achievements Data Array (Easily Updatable)
   4. Certifications Data Array (Easily Updatable)
   5. Render Functions (Generate HTML from Data)
   6. Navigation Class (Menu & Active Link Tracking)
   7. Scroll Animations Class (Fade-in on Scroll)
   8. Back to Top Button Class
   9. Projects Manager Class (Filtering & Modals)
   10. Publications Manager Class
   11. Achievements Manager Class
   12. Contact Form Class (Validation & Submission)
   13. Resume Downloader Class
   14. Smooth Scroll Class
   15. Lazy Load Images Class
   16. 3D Tilt & Parallax Class
   17. Particles.js Configuration
   18. Event Listeners & Initialization
   
   Author: Aditya Elango
   ============================================ */

// ============================================
// 1. PROJECTS DATA (EASILY UPDATABLE)
// ============================================
// This array contains all project information.
// To add/edit projects: Update the objects below.
// Format: Update the github and demo links below for each project
// featured: true = shows in "Featured Projects" section
// categories: Used for filtering (AI/ML, Full Stack, etc.)
// ============================================

const projects = [
  {
    id: "assistive-learning",
    title: "Smart Assistive Learning System for Dyslexia & Dysgraphia",
    featured: true,
    categories: ["AI/ML", "Full Stack", "Assistive Technology"],
    overview:
      "An AI-driven assistive learning platform designed to identify and analyze learning difficulties such as dyslexia and dysgraphia using multimodal inputs.",
    description:
      "The system processes handwriting samples and speech inputs using deep learning models to detect learning patterns and cognitive challenges. It tracks student progress over time and presents insights through an interactive web dashboard.",
    highlights: [
      "Multimodal analysis combining handwriting and speech data",
      "CNN-based models for pattern recognition",
      "Longitudinal performance tracking for personalized insights"
    ],
    impact:
      "Enabled data-driven learning assessment and early identification of learning difficulties, supporting inclusive and personalized education.",
    techStack: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "Node.js",
      "MongoDB"
    ],
    github: "YOUR_GITHUB_LINK"
  },
  {
    id: "insightify",
    title: "Insightify – Automated Legal & Financial Document Analyzer",
    featured: true,
    categories: ["AI/ML", "NLP", "Cloud", "Full Stack"],
    overview:
      "An AI-powered document intelligence platform built to extract, analyze, and summarize legal and financial documents automatically.",
    description:
      "Uses transformer-based NLP models to identify key entities, clauses, and summaries from complex documents. Deployed as a scalable cloud-based web application with a REST-driven backend.",
    highlights: [
      "NLP-based information extraction and summarization",
      "Full-stack cloud deployment",
      "Scalable architecture for large document volumes"
    ],
    impact:
      "Reduced manual document review effort and improved accuracy in legal and financial analysis workflows.",
    techStack: [
      "Python",
      "NLP",
      "RoBERTa",
      "React",
      "Node.js",
      "MongoDB",
      "Vercel",
      "Render"
    ],
    github: "YOUR_GITHUB_LINK"
  },
  {
    id: "budget-buddy",
    title: "Budget Buddy – Smart Expense Tracker",
    featured: true,
    categories: ["Full Stack"],
    overview:
      "A full-stack web application designed to help users track expenses, manage budgets, and gain insights into personal financial habits.",
    description:
      "Allows users to log income and expenses, categorize transactions, and visualize monthly spending through dashboards with secure authentication.",
    highlights: [
      "Interactive budgeting and analytics dashboards",
      "Secure login and role-based access control",
      "Responsive and user-friendly UI"
    ],
    impact:
      "Helped users improve financial awareness and decision-making through structured expense tracking.",
    techStack: ["React", "Node.js", "MongoDB", "MySQL"],
    github: "YOUR_GITHUB_LINK"
  },
  {
    id: "credit-risk",
    title: "Interpretable Credit Risk Prediction Using PCA & Bayesian Models",
    featured: false,
    categories: ["AI/ML", "Data"],
    overview:
      "Built an interpretable credit risk prediction pipeline using large-scale financial datasets.",
    highlights: [
      "338K+ borrower records processed",
      "64% feature reduction retaining 90% variance",
      "Statistical validation using ANOVA"
    ],
    techStack: [
      "Python",
      "PCA",
      "Bayesian Models",
      "LDA",
      "QDA",
      "Statistical Analysis"
    ],
    github: "YOUR_GITHUB_LINK"
  },
  {
    id: "ride-hailing",
    title: "Ride-Hailing Demand Forecasting & Driver Reallocation System",
    featured: false,
    categories: ["AI/ML", "Big Data"],
    overview:
      "Spark-based forecasting pipeline for zone-level hourly demand and supply prediction.",
    highlights: [
      "RMSE ≈ 2.7 forecasting accuracy",
      "Zone-level demand prediction",
      "Improved demand–supply matching"
    ],
    techStack: ["Python", "Apache Spark", "CatBoost", "Big Data Analytics"],
    github: "YOUR_GITHUB_LINK"
  },
  {
    id: "news-clustering",
    title: "News Article Clustering & Topic Modeling Using Spark",
    featured: false,
    categories: ["NLP", "Big Data"],
    overview:
      "Scalable text analytics pipeline for clustering thousands of news articles.",
    highlights: [
      "Silhouette score up to 0.75 (DBSCAN)",
      "LDA topic modeling",
      "Distributed processing"
    ],
    techStack: [
      "Python",
      "Apache Spark",
      "NLP",
      "LDA",
      "KMeans",
      "DBSCAN"
    ],
    github: "YOUR_GITHUB_LINK"
  },
  {
    id: "exam-attendance",
    title: "Secure & Tamper-Proof Exam Center Attendance System",
    featured: false,
    categories: ["Security", "Distributed Systems"],
    overview:
      "Multi-factor attendance verification using NFC and encrypted QR codes.",
    highlights: [
      "Under 5s validation per student",
      "250+ test cases",
      "Tamper-resistant storage"
    ],
    techStack: [
      "Encryption",
      "Authentication",
      "NFC",
      "IPFS",
      "Distributed Systems"
    ],
    github: "YOUR_GITHUB_LINK"
  },
  {
    id: "medsync",
    title: "MedSync – Secure Distributed Patient Records Platform",
    featured: false,
    categories: ["Blockchain", "Healthcare Systems"],
    overview:
      "Decentralized healthcare data platform using blockchain technology.",
    highlights: [
      "40% faster data retrieval",
      "Immutable auditability",
      "Role-based access control"
    ],
    techStack: ["Ethereum", "Smart Contracts", "IPFS", "Web Security"],
    github: "YOUR_GITHUB_LINK"
  },
  {
    id: "mental-wellness",
    title: "Mental Wellness Website",
    featured: false,
    categories: ["Full Stack"],
    overview:
      "Mental wellness platform offering quizzes, journaling, and meditation tools.",
    highlights: [
      "Multiple interactive features",
      "Responsive UI",
      "Accessibility-focused design"
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    github: "YOUR_GITHUB_LINK"
  }
];

// ============================================
// 2. PUBLICATIONS DATA (EASILY UPDATABLE)
// ============================================
// This array contains all publication/research paper information.
// Each publication shows: title, conference, institution, summary, tags
// First publication with 'award' field gets special "featured" styling
// To add new publications: Add new objects to this array
// ============================================

const publications = [
  {
    title:
      "Predictive Analytics: A Machine Learning Approach for Food Production and Sales",
    conference: "COMP-SIF 2025",
    institution: "BMSIT&M",
    award: "Best Paper Award",
    summary:
      "Achieved 94% prediction accuracy using LSTM and XGBoost models with Explainable AI.",
    tags: ["LSTM", "XGBoost", "SHAP", "LIME"],
    paperLink: "PAPER_LINK",
    certificateLink: "CERTIFICATE_LINK"
  },
  {
    title: "FlexAssist: Sensor-Based Glove for Hand Function Assessment",
    conference: "STCR 2025",
    institution: "BIT Sathy",
    summary:
      "Developed an ESP32-based glove streaming sensor data into ML models.",
    tags: ["ESP32", "Sensors", "ML"],
    paperLink: "PAPER_LINK"
  },
  {
    title:
      "Secure and Tamper-Proof Exam Center Attendance System Using NFC and Encrypted QR Codes",
    conference: "ICEAMST 2025",
    institution: "IEEE",
    summary:
      "Proposed a multi-factor attendance framework with sub-5 second verification.",
    tags: ["NFC", "Encryption", "IPFS"],
    paperLink: "PAPER_LINK"
  },
  {
    title:
      "MedSync: Secure Distributed Patient Records and Lab Sample Tracking",
    conference: "ICEAMST 2025",
    summary:
      "Presented a blockchain-based healthcare record management system.",
    tags: ["Blockchain", "Healthcare"],
    paperLink: "PAPER_LINK"
  },
  {
    title: "Finite Automata for NPC Behavior Modeling in Video Games",
    conference: "GCAT 2024",
    institution: "NCET Bengaluru",
    summary:
      "Designed adaptive NPC behavior models using finite automata.",
    tags: ["Finite Automata", "Game AI"],
    paperLink: "PAPER_LINK"
  },
  {
    title: "ConfigMaster: Interactive Configuration System",
    conference: "CSITSS 2025",
    institution: "RV College of Engineering",
    summary:
      "Built a Bash-based automation tool for Unix system configuration.",
    tags: ["Bash", "Automation", "DevOps"],
    paperLink: "PAPER_LINK"
  }
];

// ============================================
// 3. RENDER HELPERS FOR PROJECTS & PUBLICATIONS
// ============================================
// These functions dynamically generate HTML from the data arrays above
// and inject it into the DOM (Document Object Model)
// 
// renderProjectsSection() - Creates project cards in two grids:
//   1. Featured projects grid (featured: true)
//   2. All projects grid (shows everything, with filtering)
// 
// filterProjects() - Shows/hides cards based on selected category
// setupProjectFilters() - Adds click handlers to filter buttons
// renderPublicationsSection() - Creates publication cards with timeline
// ============================================

/* Renders all projects into Featured and All Projects grids
   Called automatically on page load */
function renderProjectsSection() {
  const featuredGrid = document.getElementById("featured-projects-grid");
  const allProjectsGrid = document.getElementById("projects-grid");
  if (!featuredGrid || !allProjectsGrid) return;

  featuredGrid.innerHTML = "";
  allProjectsGrid.innerHTML = "";

  projects.forEach((project) => {
    const categoriesAttr = (project.categories || []).join(",");

    // Featured projects
    if (project.featured) {
      const card = document.createElement("div");
      card.className = "project-card card-3d";
      card.dataset.categories = categoriesAttr;
      card.setAttribute("data-scroll", "");

      card.innerHTML = `
        <div class="featured-badge"><i class="fas fa-star"></i> Featured</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.overview}</p>
        <ul class="project-highlights">
          ${(project.highlights || [])
            .map(
              (h) =>
                `<li><i class="fas fa-check-circle"></i> ${h}</li>`
            )
            .join("")}
        </ul>
        <div class="project-tech">
          ${(project.techStack || [])
            .map(
              (t) =>
                `<span class="tech-badge"><i class="fas fa-tag"></i> ${t}</span>`
            )
            .join("")}
        </div>
        <div class="project-buttons">
          ${
            project.github
              ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                   <i class="fab fa-github"></i> GitHub
                 </a>`
              : ""
          }
          <button class="view-details-btn btn btn-secondary">
            <i class="fas fa-eye"></i> View Details
          </button>
        </div>
      `;

      featuredGrid.appendChild(card);
    }

    // All projects grid
    const allCard = document.createElement("div");
    allCard.className = "project-card card-3d";
    allCard.dataset.categories = categoriesAttr;
    allCard.setAttribute("data-scroll", "");

    allCard.innerHTML = `
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.overview}</p>
      <ul class="project-highlights">
        ${(project.highlights || [])
          .map(
            (h) =>
              `<li><i class="fas fa-check-circle"></i> ${h}</li>`
          )
          .join("")}
      </ul>
      <div class="project-tech">
        ${(project.techStack || [])
          .map(
            (t) =>
              `<span class="tech-badge"><i class="fas fa-tag"></i> ${t}</span>`
          )
          .join("")}
      </div>
      <div class="project-buttons">
        ${
          project.github
            ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                 <i class="fab fa-github"></i> GitHub
               </a>`
            : ""
        }
        <button class="view-details-btn btn btn-secondary">
          <i class="fas fa-eye"></i> View Details
        </button>
      </div>
    `;

    allProjectsGrid.appendChild(allCard);
  });
}

/* Filters project cards by category
   @param {string} category - The category to filter by (e.g., 'AI/ML', 'Full Stack', or 'All')
   Shows cards that match the category, hides others */
function filterProjects(category) {
  const cards = document.querySelectorAll(".all-projects-grid .project-card");

  cards.forEach((card) => {
    const projectCategories = (card.dataset.categories || "").split(",");
    if (category === "All" || projectCategories.includes(category)) {
      card.style.display = "block";
      card.classList.add("fade-in");
    } else {
      card.style.display = "none";
    }
  });
}

/* Sets up event listeners for filter buttons
   Makes filter buttons interactive - clicking a button filters the projects */
function setupProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category || "All";
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterProjects(category);
    });
  });

  // Initial state
  filterProjects("All");
}

function renderPublicationsSection() {
  const container = document.querySelector(".publications-list");
  if (!container) return;

  container.innerHTML = "";

  publications.forEach((pub, index) => {
    const isFeatured = index === 0 && pub.award;
    const item = document.createElement("div");
    item.className = `publication-item card-3d ${isFeatured ? "featured-pub" : ""}`;
    item.setAttribute("data-scroll", "");

    const badgeHTML = pub.award
      ? `<div class="pub-badge award-badge">
           <i class="fas fa-trophy"></i> ${pub.award}
         </div>`
      : "";

    const institutionHTML = pub.institution
      ? `<span class="pub-venue">
           <i class="fas fa-map-marker-alt"></i>
           ${pub.institution}
         </span>`
      : "";

    const tagsHTML = (pub.tags || [])
      .map(
        (tag) =>
          `<span class="highlight-tag"><i class="fas fa-check"></i> ${tag}</span>`
      )
      .join("");

    const linksHTML = `
      <div class="pub-links">
        ${
          pub.paperLink
            ? `<a href="${pub.paperLink}" target="_blank" class="btn btn-outline">View Paper</a>`
            : ""
        }
        ${
          pub.certificateLink
            ? `<a href="${pub.certificateLink}" target="_blank" class="btn btn-primary">View Certificate</a>`
            : ""
        }
      </div>
    `;

    item.innerHTML = `
      <div class="pub-header">
        ${badgeHTML}
        <h3 class="pub-title">${pub.title}</h3>
      </div>
      <div class="pub-meta">
        <span class="pub-conference">
          <i class="fas fa-calendar-alt"></i>
          <strong>${pub.conference}</strong>
        </span>
        ${institutionHTML}
      </div>
      <p class="pub-description">${pub.summary}</p>
      <div class="pub-highlights">
        ${tagsHTML}
      </div>
      ${linksHTML}
    `;

    container.appendChild(item);
  });
}

// ============================================
// 3. ACHIEVEMENTS DATA (EASILY UPDATABLE)
// ============================================
// This array contains all achievements, awards, and leadership roles
// Categories: 'hackathon', 'leadership', 'workshop', 'volunteer'
// Each achievement can have:
//   - description (for hackathons)
//   - highlights array (for leadership/workshop/volunteer)
//   - technologies array (for technical achievements)
// To add new achievements: Add new objects to this array
// ============================================

const achievements = [
    {
        id: 1,
        category: 'hackathon',
        icon: '🏆',
        title: 'Tech Triumph Hackathon 1.0',
        detail: 'CodeChef ASEB | 2023',
        description: 'Developed a Web platform that connects restaurants with surplus food to nearby orphanages and NGOs, reducing food waste and providing essential support to those in need.',
        technologies: ['React.js', 'Node.js', 'MongoDB', 'Google Maps API']
    },
    {
        id: 2,
        category: 'leadership',
        icon: '👨‍💼',
        title: 'Vice President - Computer Society of India',
        detail: '2024 - 2025 | The club for IT Innovation',
        highlights: [
            'Organized Blockchain workshop facilitating student engagement with decentralized technologies',
            'Conducted 3-round quiz competition during Aarohan Science Fest',
            'Led setup of interactive stalls at Prakalp Science Expo with computer-themed games'
        ]
    },
    {
        id: 3,
        category: 'leadership',
        icon: '⚙️',
        title: 'Senior Executive - IEEE Student Branch',
        detail: '2023 - 2024 | The club of collaboration',
        highlights: [
            'Drafted detailed reports for events and activities',
            'Contributed to event design and planning',
            'Coordinated with IEEE sub-chapters for joint initiatives'
        ]
    },
    {
        id: 4,
        category: 'leadership',
        icon: '🏔️',
        title: 'Senior Executive - Squad Club',
        detail: '2023 - 2024 | The Patriotic & Adventure Club',
        highlights: [
            'Participated in hiking expeditions and outdoor adventure activities',
            'Promoted teamwork and camaraderie',
            'Contributed to planning adventure-based events'
        ]
    },
    {
        id: 5,
        category: 'workshop',
        icon: '🤖',
        title: 'Generative AI Workshop',
        detail: 'Anokha Fest 2024 | Amrita Vishwa Vidyapeetham, Coimbatore',
        highlights: [
            'Gained insights into Generative AI technologies and applications',
            'Explored emerging job trends and career opportunities',
            'Prepared for future roles in rapidly evolving AI domain'
        ]
    },
    {
        id: 6,
        category: 'workshop',
        icon: '📸',
        title: 'Photography & Sepia Workshop',
        detail: 'Vidyut Fest 2023 | Amrita Vishwa Vidyapeetham, Amritapuri',
        highlights: [
            'Completed photography workshop on sepia toning',
            'Gained hands-on experience in photographic storytelling',
            'Mastered image composition and editing techniques'
        ]
    },
    {
        id: 7,
        category: 'volunteer',
        icon: '🎓',
        title: 'Volunteer at Shiksha NGO',
        detail: '2025 | Krishnappa School, Bengaluru',
        highlights: [
            'Enhanced student learning by integrating sports, music, and art',
            'Facilitated interactive games: kabaddi, dance, puzzles, and debates',
            'Fostered creativity, teamwork, and critical thinking'
        ]
    }
];

// ============================================
// 4. CERTIFICATIONS DATA (EASILY UPDATABLE)
// ============================================
// This array contains all professional certifications
// Each certification includes: title, issuer, year, icon emoji
// certificateUrl: Link to view/download the certificate (optional)
// To add new certifications: Add new objects to this array
// ⭐ UPDATE certificateUrl fields with your actual certificate links
// ============================================

const certifications = [
    {
        id: 1,
        title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
        issuer: 'Oracle University',
        year: 2025,
        icon: '☁️',
        // ⭐ UPDATE THIS: Replace with your certificate link (if available online)
        certificateUrl: ''
    },
    {
        id: 2,
        title: 'DevOps & CI/CD Certification',
        issuer: 'Industry Certification Body',
        year: 2024,
        icon: '⚙️',
        // ⭐ UPDATE THIS: Replace with your certificate link
        certificateUrl: ''
    },
    {
        id: 3,
        title: 'AWS Academy Graduate – Cloud Foundations',
        issuer: 'Amazon Web Services',
        year: 2024,
        icon: '🏫',
        // ⭐ UPDATE THIS: Replace with your certificate link
        certificateUrl: ''
    },
    {
        id: 4,
        title: 'Introduction to Git & GitHub',
        issuer: 'GitHub Learning',
        year: 2023,
        icon: '📚',
        // ⭐ UPDATE THIS: Replace with your certificate link
        certificateUrl: ''
    }
];

// ============================================
// 3. NAVIGATION FUNCTIONALITY
// ============================================
// This class handles all navigation menu behavior:
//   - Hamburger menu toggle (mobile)
//   - Active link highlighting based on scroll position
//   - Closing menu when a link is clicked
// ============================================

/* Navigation menu controller class
   Manages responsive menu and active link tracking */
class Navigation {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        // Toggle menu on hamburger click
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu when a link is clicked
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Handle active nav link on scroll
        window.addEventListener('scroll', () => this.updateActiveLink());
    }

    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }

    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (rect.top <= 150 && rect.bottom >= 150) {
                this.navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }
}

// ============================================
// 4. SCROLL ANIMATIONS
// ============================================
// This class uses IntersectionObserver API to detect when elements
// enter the viewport and triggers fade-in animations.
// Elements with [data-scroll] attribute will animate when visible.
// Provides fallback for browsers without IntersectionObserver.
// ============================================

/* Scroll-triggered animation controller
   Makes elements fade in as user scrolls down the page */
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-scroll]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scroll-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            this.elements.forEach(element => {
                observer.observe(element);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            this.elements.forEach(element => {
                element.classList.add('scroll-visible');
            });
        }
    }
}

// ============================================
// 5. BACK TO TOP BUTTON
// ============================================
// This class controls the "back to top" button that appears
// when user scrolls down. Button shows after 300px of scrolling.
// Clicking it smoothly scrolls back to top of page.
// ============================================

/* Back to top button controller
   Shows/hides button based on scroll position */
class BackToTop {
    constructor() {
        this.button = document.getElementById('back-to-top');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.toggleButton());
        this.button.addEventListener('click', () => this.scrollTop());
    }

    toggleButton() {
        if (window.scrollY > 300) {
            this.button.classList.add('show');
        } else {
            this.button.classList.remove('show');
        }
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ============================================
// 6. PROJECTS & CERTIFICATIONS NOW IN HTML
// ============================================
// Projects and certifications are now rendered as static HTML
// for better 3D performance and control

// ============================================
// 6. PROJECTS MANAGER - HANDLES FILTERING & MODALS
// ============================================
// This class manages the projects section interactivity:
//   - Category filtering (AI/ML, Full Stack, etc.)
//   - Filter button active states
//   - Show/hide project cards based on selected category
//   - Modal dialog for "View Details" buttons
// ============================================

/* Projects filtering and modal controller
   Handles category buttons and card visibility */
class ProjectsManager {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.allProjectsGrid = document.getElementById('projects-grid');
        this.projectCards = document.querySelectorAll('.all-projects-grid .project-card');
        this.currentFilter = 'all';
        
        if (this.filterBtns.length > 0) {
            this.init();
        }
    }

    init() {
        // Add click listeners to filter buttons
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterClick(e));
        });

        // Add click listeners to "View Details" buttons
        this.addModalListeners();
    }

    handleFilterClick(e) {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        const filter = btn.getAttribute('data-filter');
        
        // Update active button styling
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        this.currentFilter = filter;
        this.filterProjects(filter);
    }

    filterProjects(category) {
        // Get all project cards (get fresh collection)
        const cards = Array.from(document.querySelectorAll('.all-projects-grid .project-card'));
        
        cards.forEach(card => {
            const projectCategory = card.getAttribute('data-category');
            let shouldShow = true;

            if (category !== 'all' && projectCategory !== category) {
                shouldShow = false;
            }

            if (shouldShow) {
                // Fade in animation
                card.style.animation = 'none';
                card.offsetHeight; // Trigger reflow
                card.style.animation = 'fadeInUp 0.5s ease forwards';
                card.style.display = 'block';
            } else {
                // Fade out animation
                card.style.animation = 'fadeOutDown 0.3s ease forwards';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    addModalListeners() {
      // Use event delegation so buttons added dynamically will still open modals
      document.addEventListener('click', (e) => {
        const btn = e.target.closest && e.target.closest('.view-details-btn');
        if (!btn) return;
        e.preventDefault();
        const projectCard = btn.closest('.project-card');
        if (projectCard) this.openProjectModal(projectCard);
      });
    }

    openProjectModal(projectCard) {
      // Prefer canonical project data from the `projects` array (falls back to DOM)
      const title = projectCard.querySelector('.project-title')?.innerText?.trim();
    // Use a more flexible match or a data-id attribute

      const projectData = projects.find(p => p.title === title) || {};

      const description = (projectData.description || projectData.overview || projectCard.querySelector('.project-description')?.textContent || '').trim();

      // Ensure exactly three highlights (use project data when available)
      let highlights = [];
      if (projectData.highlights && projectData.highlights.length > 0) {
        highlights = projectData.highlights.slice(0, 3);
      } else {
        highlights = Array.from(projectCard.querySelectorAll('.project-highlights li'))
          .map(li => li.textContent.replace(/^\s*[✓✔]/g, '').trim())
          .slice(0, 3);
      }

      const techStack = (projectData.techStack && projectData.techStack.length > 0)
        ? projectData.techStack
        : Array.from(projectCard.querySelectorAll('.project-tech .tech-badge')).map(b => b.textContent.trim());

      const githubLink = projectData.github || projectCard.querySelector('a[href*="github"]')?.href || '';

      // Create and show modal
      this.showModal({
        title,
        description,
        highlights,
        techStack,
        githubLink
      });
    }

    showModal(data) {
        // Check if modal already exists
        let modal = document.getElementById('project-modal');
        
        if (!modal) {
            // Create modal element
            modal = document.createElement('div');
            modal.id = 'project-modal';
            modal.className = 'modal';
            modal.innerHTML = `
              <div class="modal-overlay"></div>
              <div class="modal-content">
                <button class="modal-close"><i class="fas fa-times"></i></button>
                <div class="modal-body">
                  <h2 id="modal-title"></h2>
                  <div id="modal-description"></div>
                  <h3>Key Highlights</h3>
                  <ul id="modal-highlights" class="modal-highlights"></ul>
                  <h3>Technologies Used</h3>
                  <div id="modal-tech" class="modal-tech"></div>
                  <div class="modal-buttons">
                    <a id="modal-github" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display:none;">
                      <i class="fab fa-github"></i> View GitHub
                    </a>
                  </div>
                </div>
              </div>
            `;
            document.body.appendChild(modal);

            // Add close event listeners
            modal.querySelector('.modal-close').addEventListener('click', () => this.closeModal());
            modal.querySelector('.modal-overlay').addEventListener('click', () => this.closeModal());
            // No modal particles — keep modal content simple and opaque
        }

        // Populate modal with data
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-description').innerHTML = `<p>${data.description}</p>`;
        
        const highlightsList = document.getElementById('modal-highlights');
        highlightsList.innerHTML = '';
        data.highlights.forEach(highlight => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle"></i> ${highlight}`;
            highlightsList.appendChild(li);
        });

        const techDiv = document.getElementById('modal-tech');
        techDiv.innerHTML = '';
        data.techStack.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'tech-badge';
            span.innerHTML = `<i class="fas fa-tag"></i> ${tech}`;
            techDiv.appendChild(span);
        });

        if (data.githubLink) {
            const githubBtn = document.getElementById('modal-github');
            githubBtn.href = data.githubLink;
            githubBtn.style.display = 'inline-block';
        }

        // Show modal
        modal.style.display = 'flex';
        modal.offsetHeight; // Trigger reflow
        modal.classList.add('active');
    }

    closeModal() {
        const modal = document.getElementById('project-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    }
}

// ============================================
// 7. PUBLICATIONS MANAGER - RENDERS PUBLICATION CARDS
// ============================================
// This class dynamically generates publication cards from
// the publications array and inserts them into the DOM.
// Handles timeline styling and featured badges.
// ============================================

/* Publications renderer
   Generates publication cards with timeline styling */
class PublicationsManager {
    constructor() {
        this.publicationsContainer = document.querySelector('.publications-list');
        if (this.publicationsContainer && publications.length > 0) {
            this.render();
        }
    }

    render() {
        this.publicationsContainer.innerHTML = '';
        
        publications.forEach((pub, index) => {
            const isFirstOrFeatured = index === 0; // First publication is featured
            const pubElement = document.createElement('div');
            pubElement.className = `publication-item ${isFirstOrFeatured ? 'featured-pub' : ''}`;
            pubElement.setAttribute('data-scroll', '');
            
            let badgeHTML = '';
            if (pub.award) {
                badgeHTML = `
                    <div class="pub-badge award-badge">
                        <i class="fas fa-trophy"></i> ${pub.award}
                    </div>
                `;
            }
            
            let institutionHTML = pub.institution ? `
                <span class="pub-venue">
                    <i class="fas fa-map-marker-alt"></i> 
                    ${pub.institution}
                </span>
            ` : '';
            
            let highlightsHTML = pub.highlights ? pub.highlights.map(h => `
                <span class="highlight-tag"><i class="fas fa-check"></i> ${h}</span>
            `).join('') : '';
            
            pubElement.innerHTML = `
                <div class="pub-header">
                    ${badgeHTML}
                    <h3 class="pub-title">${pub.title}</h3>
                </div>
                <div class="pub-meta">
                    <span class="pub-conference">
                        <i class="fas fa-calendar-alt"></i> 
                        <strong>${pub.conference}</strong>
                    </span>
                    ${institutionHTML}
                </div>
                <p class="pub-description">${pub.description}</p>
                <div class="pub-highlights">
                    ${highlightsHTML}
                </div>
            `;
            
            this.publicationsContainer.appendChild(pubElement);
        });
    }
}

// ============================================
// 8. ACHIEVEMENTS MANAGER - RENDERS ACHIEVEMENT CARDS
// ============================================
// This class dynamically generates achievement cards from
// the achievements array. Handles different achievement types:
//   - Hackathons (with description and technologies)
//   - Leadership roles (with highlights)
//   - Workshops (with highlights)
//   - Volunteer work (with highlights)
// ============================================

/* Achievements renderer
   Generates achievement cards with appropriate styling per category */
class AchievementsManager {
    constructor() {
        this.achievementsContainer = document.querySelector('.achievements');
        if (this.achievementsContainer && achievements.length > 0) {
            this.render();
        }
    }

    render() {
        // Group achievements by category
        const grouped = this.groupByCategory();
        
        // Clear and rebuild achievements section (except section title and container)
        const contentWrapper = this.achievementsContainer.querySelector('.container');
        
        // Remove old subsections
        document.querySelectorAll('.achievement-subsection').forEach(el => el.remove());
        document.querySelector('.achievements-summary')?.remove();
        
        // Render each category
        Object.keys(grouped).forEach(category => {
            const subsection = this.createSubsection(category, grouped[category]);
            contentWrapper.appendChild(subsection);
        });
        
        // Render summary
        const summary = this.createSummary();
        contentWrapper.appendChild(summary);
    }

    groupByCategory() {
        const grouped = {
            hackathon: [],
            leadership: [],
            workshop: [],
            volunteer: []
        };
        
        achievements.forEach(achievement => {
            if (grouped[achievement.category]) {
                grouped[achievement.category].push(achievement);
            }
        });
        
        return grouped;
    }

    createSubsection(category, items) {
        const titles = {
            hackathon: '<i class="fas fa-trophy"></i> Hackathon Achievement',
            leadership: '<i class="fas fa-users"></i> Leadership Roles',
            workshop: '<i class="fas fa-graduation-cap"></i> Workshops & Training',
            volunteer: '<i class="fas fa-hands-helping"></i> Volunteer & Community Work'
        };
        
        const subsection = document.createElement('div');
        subsection.className = 'achievement-subsection';
        
        const title = document.createElement('h3');
        title.className = 'achievement-category-title';
        title.innerHTML = titles[category] || category;
        subsection.appendChild(title);
        
        const grid = document.createElement('div');
        grid.className = 'achievements-grid';
        
        items.forEach(achievement => {
            const card = this.createAchievementCard(achievement);
            grid.appendChild(card);
        });
        
        subsection.appendChild(grid);
        return subsection;
    }

    createAchievementCard(achievement) {
        const card = document.createElement('div');
        card.className = achievement.category === 'hackathon' ? 'achievement-card highlight card-3d' : 'achievement-card card-3d';
        card.setAttribute('data-scroll', '');
        
        let highlightsHTML = '';
        if (achievement.highlights) {
            highlightsHTML = `
                <ul class="achievement-highlights">
                    ${achievement.highlights.map(h => `
                        <li><i class="fas fa-check-circle"></i> ${h}</li>
                    `).join('')}
                </ul>
            `;
        }
        
        let techHTML = '';
        if (achievement.technologies) {
            techHTML = `
                <div class="achievement-tech">
                    ${achievement.technologies.map(t => `
                        <span class="tech-badge"><i class="fas fa-tag"></i> ${t}</span>
                    `).join('')}
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <h3>${achievement.title}</h3>
            <p class="achievement-detail">${achievement.detail}</p>
            ${achievement.description ? `<p class="achievement-description">${achievement.description}</p>` : ''}
            ${highlightsHTML}
            ${techHTML}
        `;
        
        return card;
    }

    createSummary() {
        const summary = document.createElement('div');
        summary.className = 'achievements-summary';
        
        const summaryItems = [
            { icon: '🏅', title: '5+ Leadership Positions', desc: 'Across tech clubs and community organizations' },
            { icon: '📚', title: '4+ Workshops Attended', desc: 'In AI, Photography, and Tech Innovation' },
            { icon: '🤝', title: 'Active Community Volunteer', desc: 'Teaching and mentoring 50+ students' },
            { icon: '🎯', title: 'Award-Winning Projects', desc: 'Tech Triumph Hackathon finalist' }
        ];
        
        summaryItems.forEach(item => {
            const summaryItem = document.createElement('div');
            summaryItem.className = 'summary-item';
            summaryItem.setAttribute('data-scroll', '');
            summaryItem.innerHTML = `
                <div class="summary-icon">${item.icon}</div>
                <div class="summary-content">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
            `;
            summary.appendChild(summaryItem);
        });
        
        return summary;
    }
}

// ============================================
// 9. CONTACT FORM VALIDATION & HANDLING
// ============================================
// This class handles the contact form functionality:
//   - Form field validation (name, email, message)
//   - Email format checking with regex
//   - Error message display
//   - Form submission (can be connected to backend)
//   - Success/error notifications
// ============================================

/* Contact form controller
   Validates inputs and handles form submission */
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.messageInput = document.getElementById('message');
        this.successMessage = document.getElementById('success-message');
        
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Real-time validation
        [this.nameInput, this.emailInput, this.messageInput].forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('focus', () => this.clearError(input));
        });
    }

    validateField(field) {
        const errorElement = document.getElementById(`${field.id}-error`);
        let isValid = true;
        let errorMessage = '';

        if (field.id === 'name') {
            if (field.value.trim().length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
        } else if (field.id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        } else if (field.id === 'message') {
            if (field.value.trim().length < 10) {
                isValid = false;
                errorMessage = 'Message must be at least 10 characters';
            }
        }

        if (!isValid) {
            field.classList.add('error');
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
        } else {
            field.classList.remove('error');
            errorElement.classList.remove('show');
        }

        return isValid;
    }

    clearError(field) {
        const errorElement = document.getElementById(`${field.id}-error`);
        field.classList.remove('error');
        errorElement.classList.remove('show');
    }

    handleSubmit(e) {
        e.preventDefault();

        // Validate all fields
        const isNameValid = this.validateField(this.nameInput);
        const isEmailValid = this.validateField(this.emailInput);
        const isMessageValid = this.validateField(this.messageInput);

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            return;
        }

        // Collect form data
        const formData = {
            name: this.nameInput.value,
            email: this.emailInput.value,
            message: this.messageInput.value
        };

        // Log to console (for testing)
        console.log('Form Data:', formData);

        // Show success message
        this.form.style.display = 'none';
        this.successMessage.style.display = 'block';

        // Reset form
        this.form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            this.form.style.display = 'flex';
            this.successMessage.style.display = 'none';
        }, 5000);

        // ⭐ TO SEND TO BACKEND: Uncomment and update the endpoint below
        // fetch('YOUR_BACKEND_ENDPOINT', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => console.log('Success:', data))
        // .catch(error => console.error('Error:', error));
    }
}

// ============================================
// 9. RESUME DOWNLOAD
// ============================================
// This class handles resume download button clicks.
// Triggers download of PDF resume file.
// Can track downloads via analytics if needed.
// ============================================

/* Resume download handler
   Manages resume PDF download functionality */
class ResumeDownloader {
    constructor() {
        this.resumeBtn = document.getElementById('resume-btn');
        if (this.resumeBtn) {
            this.init();
        }
    }

    init() {
        this.resumeBtn.addEventListener('click', (e) => {
            // Resume download is handled by the anchor tag's download attribute
            // No need for additional logic
        });
    }
}

// ============================================
// 10. SMOOTH SCROLL
// ============================================
// This class adds smooth scrolling behavior to all
// anchor links (e.g., navigation menu links).
// Overrides default jump behavior with animated scroll.
// ============================================

/* Smooth scroll controller for anchor links
   Makes navigation links scroll smoothly instead of jumping */
class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#' || href === '') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    this.scroll(target);
                }
            });
        });
    }

    scroll(target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============================================
// 11. LAZY LOAD IMAGES
// ============================================
// This class implements lazy loading for images.
// Images load only when they're about to enter the viewport.
// Improves initial page load performance.
// Uses IntersectionObserver API for efficient detection.
// ============================================

/* Lazy image loader
   Loads images only when they become visible */
class LazyLoadImages {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            images.forEach(img => imageObserver.observe(img));
        }
    }
}

// ============================================
// 12. INITIALIZE ALL FUNCTIONALITY
// ============================================

// ============================================
// 12.a 3D TILT & PARALLAX INTERACTIONS
// ============================================
// Lightweight 3D tilt effect for cards and images.
// 
// How it works:
//   - Tracks mouse position over elements with .card-3d class
//   - Calculates tilt angles based on cursor position
//   - Applies 3D rotation using CSS transforms
//   - Child elements with data-depth get parallax movement
// 
// Features:
//   - Respects prefers-reduced-motion accessibility setting
//   - Touch-friendly (disables on touch devices)
//   - Smooth transitions with requestAnimationFrame
// 
// Elements targeted:
//   - .scene or .card-3d classes
//   - Child layers with data-depth="number" attribute
// ============================================

/* 3D tilt and parallax effect controller
   Creates interactive 3D card tilting on mouse move */
class TiltParallax {
    constructor() {
        this.elements = [];
        this.prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.supportsTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.raf = null;
        this.state = new WeakMap();
        if (!this.prefersReduced && !this.supportsTouch) this.init();
    }

    init() {
        const nodes = document.querySelectorAll('.scene, .card-3d');
        nodes.forEach(node => this.setupElement(node));
    }

    setupElement(el) {
        const state = {
            targetX: 0,
            targetY: 0,
            currentX: 0,
            currentY: 0,
            rAF: null,
            bounds: null,
            maxTilt: 12, // degrees
            perspective: el.dataset.perspective ? parseInt(el.dataset.perspective, 10) : 900
        };

        // store state
        this.state.set(el, state);

        // set perspective on parent if not already
        el.style.perspective = el.style.perspective || `${state.perspective}px`;
        el.style.transformStyle = 'preserve-3d';

        const onMove = (clientX, clientY) => {
            if (!state.bounds) state.bounds = el.getBoundingClientRect();
            const bx = state.bounds;
            const relX = (clientX - bx.left) / bx.width - 0.5; // -0.5..0.5
            const relY = (clientY - bx.top) / bx.height - 0.5;
            state.targetX = relY * state.maxTilt * -1; // rotateX
            state.targetY = relX * state.maxTilt; // rotateY
            this.startAnimation(el);
        };

        const mouseMoveHandler = (e) => onMove(e.clientX, e.clientY);
        const touchMoveHandler = (e) => {
            const t = e.touches && e.touches[0];
            if (t) onMove(t.clientX, t.clientY);
        };

        const enter = () => {
            el.style.transition = 'transform 180ms ease';
            // subtle depth on children
            this.applyLayerTransforms(el, 0);
        };

        const leave = () => {
            // reset
            state.targetX = 0;
            state.targetY = 0;
            this.applyLayerTransforms(el, 0);
            el.style.transition = 'transform 450ms cubic-bezier(.2,.9,.2,1)';
            el.style.transform = `rotateX(0deg) rotateY(0deg)`;
        };

        el.addEventListener('mousemove', mouseMoveHandler);
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);

        if (this.supportsTouch) {
            el.addEventListener('touchstart', (e) => { enter(); touchMoveHandler(e); }, {passive:true});
            el.addEventListener('touchmove', touchMoveHandler, {passive:true});
            el.addEventListener('touchend', () => leave(), {passive:true});
        }

        this.elements.push(el);
    }

    startAnimation(el) {
        const state = this.state.get(el);
        if (!state) return;
        if (state.rAF) return; // already running

        const step = () => {
            // simple lerp for smoothness
            state.currentX += (state.targetX - state.currentX) * 0.12;
            state.currentY += (state.targetY - state.currentY) * 0.12;

            const rx = state.currentX.toFixed(2);
            const ry = state.currentY.toFixed(2);

            el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
            this.applyLayerTransforms(el, 1 - Math.abs(state.currentX) / state.maxTilt);

            state.rAF = requestAnimationFrame(step);
        };

        step();
    }

    applyLayerTransforms(el, intensity = 1) {
        // intensity 0..1 controls how strongly layers shift
        const layers = el.querySelectorAll('[data-depth], .layer');
        layers.forEach(layer => {
            const depthAttr = layer.getAttribute('data-depth');
            const depth = depthAttr ? parseFloat(depthAttr) : 40; // px
            // compute a small translate based on depth and intensity
            const tx = (depth / 200) * (intensity * 1); // scale factor
            const tz = depth * (intensity);
            layer.style.transform = `translateZ(${tz}px) translateX(${tx}px)`;
            layer.style.transition = 'transform 220ms cubic-bezier(.2,.9,.2,1)';
            layer.style.transformStyle = 'preserve-3d';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing Portfolio Website...');
    
    // Initialize all components
    const navigation = new Navigation();
    const scrollAnimations = new ScrollAnimations();
    const backToTop = new BackToTop();
    console.log('✅ Basic classes initialized');
    
    const resumeDownloader = new ResumeDownloader();
    const smoothScroll = new SmoothScroll();
    const lazyLoadImages = new LazyLoadImages();
    const tiltParallax = new TiltParallax();

    // Initialize VanillaTilt for hero and about images
    const heroImage = document.querySelector('.hero-profile-image[data-tilt]');
    const aboutImage = document.querySelector('.about-image[data-tilt]');
    
    if (heroImage && window.VanillaTilt) {
        VanillaTilt.init(heroImage, {
            max: 25,
            scale: 1.05,
            speed: 400,
            transition: true,
            reset: true
        });
        console.log('✅ VanillaTilt initialized for hero image');
    }
    
    if (aboutImage && window.VanillaTilt) {
        VanillaTilt.init(aboutImage, {
            max: 25,
            scale: 1.05,
            speed: 400,
            transition: true,
            reset: true
        });
        console.log('✅ VanillaTilt initialized for about image');
    }

    // Ensure card-like elements are opt-in to the unified 3D system
    ['.skill-category', '.cert-card', '.project-card', '.achievement-card', '.publication-item', '.certification-card', '.summary-item', '.timeline-card', '.hero-profile-image', '.about-image', '.about-image img'].forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.classList.add('card-3d'));
    });

    // Static HTML sections with minimal JS filtering
    setupProjectFilters();
    // Initialize ProjectsManager so "View Details" buttons work
    const projectsManager = new ProjectsManager();

    console.log('✅ Portfolio website initialized successfully!');
    console.log('   • Projects: Edit the "projects" array in script.js');
    console.log('   • Certifications: Edit the "certifications" array');
    console.log('   • Resume: Update resumeUrl in ResumeDownloader class');
    console.log('   • Images: Ensure photos/Banner.jpg, photos/Aditya.jpg, photos/Aditya_Photo.jpg exist');
});

// ============================================
// 13. IMAGE ERROR HANDLING
// ============================================
// Gracefully handles broken images by replacing them
// with a placeholder or hiding them. Prevents broken
// image icons from showing on the page.
// ============================================

// Handle image loading errors gracefully
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn(`Failed to load image: ${e.target.src}`);
        // Optionally add a placeholder or hide the image
        e.target.style.display = 'none';
    }
}, true);

// ============================================
// 14. PERFORMANCE OPTIMIZATION
// ============================================
// Various optimizations for better user experience:
//   - Respects user's motion preferences (accessibility)
//   - Navbar shrinks on scroll to save space
//   - Scroll progress bar shows reading position
// ============================================

// Reduce motion for users who prefer it (accessibility feature)
// Disables animations if user has "prefers-reduced-motion" enabled
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
}

// Navbar shrink on scroll - adds 'shrink' class when user scrolls down
// Makes navbar more compact after scrolling past 50px
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (window.scrollY > 80) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});
// ===== NAV SCROLL PROGRESS =====
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('nav-progress-bar');
    if (!progressBar) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = `${progress}%`;
});
// ============================================
// 15. PARTICLES.JS CONFIGURATION
// ============================================
// Animated particle backgrounds for visual interest.
// Creates network of connected dots that react to cursor.
// 
// Sections with particles:
//   - #particles-js (Hero section)
//   - #career-particles (Career section)
//   - #projects-particles (Projects section)
//   - #achievements-particles (Achievements section)
//   - #contact-particles (Contact section)
// 
// Configuration:
//   - 55 red particles
//   - Connected by lines when close
//   - Repulse on hover
//   - Slow movement speed
// ============================================

// ===== HERO SECTION PARTICLES =====
particlesJS('particles-js', {
  particles: {
    number: { value: 55 },
    color: { value: '#ff2d2d' },
    shape: { type: 'circle' },
    opacity: { value: 0.35 },
    size: { value: 2 },
    move: {
      enable: true,
      speed: 0.6
    },
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
  },
  retina_detect: true
});
particlesJS('career-particles', {
  particles: {
    number: { value: 55 },
    color: { value: '#ff2d2d' },
    shape: { type: 'circle' },
    size: { value: 2 },
    opacity: { value: 0.35 },
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
      onhover: { enable: false,mode: 'repulse' }
    }
  },
  retina_detect: true
});
// ===== PROJECTS PARTICLES (reuse hero/about particle style) =====
particlesJS('projects-particles', {
  particles: {
    number: { value: 55 },
    color: { value: '#ff2d2d' },
    shape: { type: 'circle' },
    opacity: { value: 0.35 },
    size: { value: 2 },
    move: {
      enable: true,
      speed: 0.6
    },
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
  },
  retina_detect: true
});
// ===== ACHIEVEMENTS PARTICLES =====
particlesJS('achievements-particles', {
  particles: {
    number: { value: 55 },
    color: { value: '#ff2d2d' },
    shape: { type: 'circle' },
    opacity: { value: 0.35 },
    size: { value: 2 },
    move: {
      enable: true,
      speed: 0.6
    },
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
  },
  retina_detect: true
});

// ===== CONTACT PARTICLES =====
particlesJS('contact-particles', {
  particles: {
    number: { value: 55 },
    color: { value: '#ff2d2d' },
    shape: { type: 'circle' },
    opacity: { value: 0.35 },
    size: { value: 2 },
    move: {
      enable: true,
      speed: 0.6
    },
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
  },
  retina_detect: true
});

  // ============================================
  // 15. VISUAL EFFECTS: Tilt / Parallax / Timeline dot
  // ============================================

  function initVisualEffects() {
    // Tilt effect for elements with .tilt-card or .card-3d
    document.querySelectorAll('.card-3d, .tilt-card').forEach(el => {
      attachTilt(el);
    });

    // Parallax layers: shift children with data-depth
    document.querySelectorAll('.parallax-parent').forEach(parent => {
      parent.addEventListener('mousemove', (e) => {
        const rect = parent.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        parent.querySelectorAll('[data-depth]').forEach(layer => {
          const depth = parseFloat(layer.getAttribute('data-depth') || '10');
          const tx = -dx * depth;
          const ty = -dy * depth;
          layer.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        });
      });
      parent.addEventListener('mouseleave', () => {
        parent.querySelectorAll('[data-depth]').forEach(layer => layer.style.transform = 'translate3d(0,0,0)');
      });
    });

    // Timeline dot follow: pair timeline span dots with timeline-items in order
    document.querySelectorAll('.timeline').forEach(tl => {
      const items = Array.from(tl.querySelectorAll('.timeline-item'));
      const dots = Array.from(tl.querySelectorAll('span[class^="timeline-dot"]'));
      // position dots to align with their corresponding items
      function positionDots() {
        items.forEach((item, i) => {
          const dot = dots[i];
          if (!dot) return;
          const itemRect = item.getBoundingClientRect();
          const tlRect = tl.getBoundingClientRect();
          // compute top relative to timeline container; push a bit lower to match visual header
          const top = item.offsetTop + 44; // increased offset for better vertical alignment
          dot.style.top = top + 'px';
        });
      }
      positionDots();
      window.addEventListener('resize', positionDots);

      items.forEach((item, i) => {
        const dot = dots[i];
        if (!dot) return;
        item.addEventListener('mousemove', (e) => {
          const rect = item.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          const tx = px * 14; // horizontal small move (increased)
          const ty = py * 14; // vertical small move (increased)
          dot.style.transform = `translateX(calc(-50% + ${tx}px)) translateY(${ty}px)`;
          dot.style.boxShadow = '0 30px 60px rgba(255,45,45,0.32)';
        });
        item.addEventListener('mouseleave', () => {
          dot.style.transform = 'translateX(-50%)';
          dot.style.boxShadow = '';
        });
      });
    });

    // Add red-glow-hover class to hero/about images for stronger hover
    document.querySelectorAll('.about-image, .hero-profile-image, .project-card, .publication-item, .achievement-card, .skill-category').forEach(el => {
      el.classList.add('red-glow-hover');
      el.classList.add('tilt-card');
      // ensure red border for skill categories
      if (el.classList.contains('skill-category')) el.classList.add('red-border');
    });
    // Ensure skill tags have red borders
    document.querySelectorAll('.skill-tag').forEach(tag => tag.classList.add('red-border'));
  }

  function attachTilt(el) {
    let rect = null;
    function onMove(e) {
      rect = rect || el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      // base tilt values
      let rxFactor = 10, ryFactor = 12, tz = 18;
      // stronger tilt for timeline cards
      if (el.classList.contains('timeline-card') || el.closest && el.closest('.timeline-card')) {
        rxFactor = 14; ryFactor = 18; tz = 30;
      }
      const rx = (py * rxFactor); // rotateX
      const ry = (px * -ryFactor); // rotateY
      // slight pop
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${tz}px)`;
      el.style.transition = 'transform 120ms linear';
    }
    function onLeave() {
      el.style.transform = '';
      el.style.transition = 'transform 450ms cubic-bezier(.2,.9,.2,1)';
      rect = null;
    }
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
  }



// Global initialization
  document.addEventListener('DOMContentLoaded', () => {
    try { 
        initVisualEffects(); 
    } catch (e) { 
        console.warn('Visual effects init failed', e); 
    }
    
    // Initialize standard managers
    const navigation = new Navigation();
    const scrollAnimations = new ScrollAnimations();
    const backToTop = new BackToTop();
    const smoothScroll = new SmoothScroll();
    const projectsManager = new ProjectsManager();
    const tiltParallax = new TiltParallax();
});
  