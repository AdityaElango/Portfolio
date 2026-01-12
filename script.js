
/* =====================================================
    PORTFOLIO WEBSITE - JAVASCRIPT BEHAVIOR & INTERACTIONS
    =====================================================
    
    Purpose:
    Centralized interactive behavior for the entire portfolio.
    Handles navigation, filtering, modals, forms, and UX polish
    without external dependencies (vanilla JS only).

    Organization (in execution order):
    ──────────────────────────────────────────────────────────
    A) CORE FUNCTIONALITY (runs on DOMContentLoaded)
       1. Navigation Progress Bar – scroll position indicator
       2. Mobile Menu Toggle – hamburger/drawer
       3. Project Filtering – category filters + mobile drawer
       4. Modal System – project detail popups
       5. Scroll Effects – section title animation, timeline dots
       6. Education/Experience/Skills – responsive toggles
       7. Active Navigation Highlighting – scroll-based current section
       8. Contact Form – validation, error states, submission UX

    B) UTILITY CLASSES (mix-in features for enhanced UX)
       9. SmoothScroll – anchor link smooth scrolling
      10. LazyLoadImages – progressive image loading (data-src)
      11. BackToTop – "scroll to top" button
      12. TiltParallax – 3D card tilt on hover

    C) ACCESSIBILITY & POLISH
      13. Image error handling & motion preference respect

    ──────────────────────────────────────────────────────────
    Key Design Principles:
    • No globals—all code scoped inside DOMContentLoaded
    • Selectors match index.html classes precisely
    • Comments explain WHY, not just WHAT
    • Minimal logic per handler; delegated where possible
    • Accessibility: ESC closes modals, touch-friendly, motion respected
    • Performance: IntersectionObserver for scroll effects, lazy images

    Dependencies: None (vanilla JS only)
    Browser Support: ES6+, modern APIs (IntersectionObserver, etc.)
    ===================================================== */

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Progress Bar
    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    /**
     * Toggles the mobile drawer in and out of view.
     * Bound to hamburger, close button, and menu link clicks.
     */
    const toggleMenu = () => {
        mobileMenu.classList.toggle('translate-x-full');
    };

    menuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // 3. Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('#project-grid .project-card');

    // References used by filtering UI (keep defined before usage)
    const filterToggle = document.getElementById('filter-toggle');
    const filterContainer = document.getElementById('project-filters');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = JSON.parse(card.getAttribute('data-categories'));
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.classList.remove('hidden-project');
                } else {
                    card.classList.add('hidden-project');
                }
            });

            // Auto-close filter panel on mobile after selection
            if (window.innerWidth < 768 && filterContainer) {
                filterContainer.classList.remove('show');
            }
        });
    });

    // Mobile filter toggle
    if (filterToggle && filterContainer) {
        filterToggle.addEventListener('click', () => {
            filterContainer.classList.toggle('show');
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                filterContainer.classList.remove('show');
                filterContainer.style.display = '';
            }
        });
    }

    // 4. Modal System Data
    const projectDetails = {
        'project-dyslexia': {
            title: "Smart Assistive Learning System for Dyslexia & Dysgraphia",
            meta: "AI / ML · Full-Stack · Assistive  •  2024",
            desc: "Multimodal AI platform integrating handwriting and speech analysis to detect dyslexia and dysgraphia in early childhood. Tracks 5+ learning metrics with longitudinal analytics to guide personalized intervention strategies.",
            features: [
                "Built multimodal assessment system using handwriting and speech pattern analysis to detect learning difficulties accurately",
                "Implemented CNN-based deep learning models for pattern recognition, achieving high sensitivity and specificity",
                "Designed longitudinal tracking dashboard to visualize progress across 5+ metrics for data-driven interventions",
                "Integrated Node.js + MongoDB backend enabling real-time analytics and seamless educator dashboards"
            ],
            impact: "Detects dyslexia/dysgraphia with 92% accuracy while tracking 5+ learning metrics per student over time",
            tags: ["Python", "CNNs", "Deep Learning", "Node.js", "MongoDB"],
            github: "https://github.com/AdityaElango"
        },
        'project-insightify': {
            title: "Insightify – AI Document Analyzer",
            meta: "NLP · AI / ML · Full-Stack  •  2025",
            desc: "Enterprise document intelligence platform leveraging transformer-based NLP for legal and financial analysis. Extracts key entities and attributes from unstructured documents at scale, enabling automated compliance and risk assessment workflows.",
            features: [
                "Built transformer-based NLP pipeline using RoBERTa to extract 10+ entity types with 94% F1-score accuracy",
                "Engineered automated attribute extraction system enabling legal teams to process 100+ documents daily",
                "Developed REST-based full-stack web application with real-time processing and responsive analytics UI",
                "Deployed on Vercel + Render with horizontal scaling, handling 10k+ monthly API requests with <200ms latency"
            ],
            impact: "Extracts 10+ legal & financial attributes per document with 94% F1-score using transformer-based NLP",
            tags: ["Python", "RoBERTa", "NLP", "React.js", "Node.js", "MongoDB"],
            github: "https://github.com/AdityaElango"
        },
        'project-budget': {
            title: "Budget Buddy – Expense Tracker",
            meta: "Full-Stack · Web · Cloud  •  2025",
            desc: "Personal finance platform enabling automated expense tracking and budget management with real-time insights. Built with modern full-stack architecture for reliability and seamless user experience across devices.",
            features: [
                "Designed full-stack expense management system processing 100+ transactions per user with predictive analytics",
                "Built interactive dashboards visualizing spending patterns and budget anomalies in real-time",
                "Implemented JWT-based authentication with role-based access control protecting sensitive financial data",
                "Deployed scalable cloud architecture on Node.js + MongoDB handling concurrent users with <100ms response times"
            ],
            impact: "Analyzes 100+ transactions per user with real-time anomaly detection and predictive budget recommendations",
            tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
            github: "https://github.com/AdityaElango"
        },
        'project-spark': {
            title: "News Article Clustering & Topic Modeling",
            desc: "A distributed NLP pipeline designed to process and cluster large-scale unstructured news data. Topic modeling techniques were applied to uncover latent themes. Clustering quality was evaluated using multiple metrics.",
            features: [
                "Clustered thousands of news articles using Apache Spark",
                "Applied LDA-based topic modeling",
                "Evaluated clustering using KMeans and DBSCAN"
            ],
            tags: ["Python", "Apache Spark", "NLP", "LDA", "MongoDB"],
            github: "https://github.com/AdityaElango"
        },
        'project-exam': {
            title: "Secure & Tamper-Proof Attendance System",
            desc: "A secure attendance verification system designed to eliminate impersonation and tampering. Combines cryptography with distributed storage to ensure integrity. Enables fast verification in exam environments.",
            features: [
                "Implemented AES-256 encrypted QR codes and NFC authentication",
                "Integrated Kerberos-based access control",
                "Achieved <5s verification per student"
            ],
            tags: ["Cryptography", "NFC", "QR Codes", "IPFS", "Node.js"],
            github: "https://github.com/AdityaElango"
        },
        'project-medsync': {
            title: "MedSync – Distributed Patient Records",
            desc: "A blockchain-based healthcare records system ensuring data integrity and access control. Designed to provide transparent auditability. Enables secure and efficient medical data retrieval.",
            features: [
                "Developed Ethereum smart contracts for access control",
                "Integrated IPFS for decentralized storage",
                "Improved record retrieval speed by 40%"
            ],
            tags: ["Blockchain", "Ethereum", "Smart Contracts", "IPFS", "Security"],
            github: "https://github.com/AdityaElango"
        },
        'project-ride': {
            title: "Ride-Hailing Demand Forecasting",
            desc: "A data-driven forecasting system predicting zone-level ride demand and supply. Designed to optimize driver allocation and reduce unmet demand. Evaluated using real-world simulation metrics.",
            features: [
                "Built Spark-based demand forecasting pipelines",
                "Implemented driver reallocation strategies",
                "Achieved RMSE ≈ 2.7"
            ],
            tags: ["Python", "Apache Spark", "CatBoost", "Machine Learning"],
            github: "https://github.com/AdityaElango"
        },
        'project-credit': {
            title: "Interpretable Credit Risk Prediction",
            desc: "A hybrid credit risk modeling framework focused on interpretability. Combines dimensionality reduction with Bayesian estimation. Validated using rigorous statistical testing.",
            features: [
                "Processed 338K+ borrower records",
                "Reduced dimensions using PCA",
                "Validated with ANOVA & Cronbach’s Alpha"
            ],
            tags: ["Machine Learning", "PCA", "Bayesian Models", "Statistics"],
            github: "https://github.com/AdityaElango"
        },
        'project-npc': {
            title: "Finite Automata NPC Behavior Modeling",
            desc: "A formal AI framework modeling dynamic NPC behaviors. Designed adaptive state transitions driven by player actions. Improved realism and interactivity in gameplay.",
            features: [
                "Modeled multiple NPC behavior types",
                "Designed state transition algorithms",
                "Enhanced gameplay realism"
            ],
            tags: ["Finite Automata", "Game AI", "Algorithms"],
            github: "https://github.com/AdityaElango"
        },
        'project-config': {
            title: "ConfigMaster – Interactive Configuration",
            desc: "A menu-driven system configuration tool simplifying Unix administration. Automates repetitive configuration tasks. Improves usability for system management.",
            features: [
                "Built an interactive Bash-based CLI tool",
                "Automated network and software configuration",
                "Simplified Unix system management"
            ],
            tags: ["Bash", "Linux", "System Automation", "DevOps"],
            github: "https://github.com/AdityaElango"
        }
    };

    const modalContainer = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    /**
     * Opens the project modal and injects content for the given ID.
     * @param {string} projectId - Key inside projectDetails map.
     */
    window.openModal = (projectId) => {
        const data = projectDetails[projectId];
        if (!data) return;

        modalContent.innerHTML = `
            <h2 class="modal-title text-4xl font-bold mb-4 text-red-600">${data.title}</h2>
            <p class="modal-meta">${data.meta}</p>
            <p class="modal-desc">${data.desc}</p>
            
            <div class="mb-8">
                <h4 class="text-lg font-bold text-white flex items-center gap-2 mb-5">
                    <i class="fas fa-list-check text-red-600"></i> Key Features
                </h4>
                <ul class="space-y-3.5 list-disc pl-6 text-sm text-gray-300">
                    ${data.features.map(f => `<li class="leading-relaxed">${f}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-impact">
                <p class="text-sm text-red-200 flex items-center gap-2">
                    <i class="fas fa-chart-line text-red-500"></i>
                    <span class="font-bold">Impact:</span> ${data.impact}
                </p>
            </div>

            <div class="mt-8 mb-10">
                <h4 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">Tech Stack</h4>
                <div class="flex flex-wrap gap-3">
                    ${data.tags.map(t => `<span class="modal-tech-pill px-3 bg-white/8 text-xs rounded-full border border-white/15 text-gray-300">${t}</span>`).join('')}
                </div>
            </div>

            <div class="flex items-center justify-between pt-6 border-t border-white/10">
                <a href="${data.github}" target="_blank" class="modal-cta bg-red-600 text-white font-bold rounded-lg transition-all flex items-center gap-2">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        `;

        modalContainer.classList.remove('hidden');
        modalContainer.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    /**
     * Closes modal with a brief hide animation and restores scroll.
     */
    const closeModal = () => {
        modalContainer.classList.add('hide');
        setTimeout(() => {
            modalContainer.classList.add('hidden');
            modalContainer.classList.remove('show', 'hide');
            document.body.style.overflow = 'auto';
        }, 300);
    };

    modalClose.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('show')) {
            closeModal();
        }
    });


    // 6. Navigation Link Highlighting
    const sections = document.querySelectorAll('section');
    // Align with index.html: top nav anchors use class "nav-link"
    const navItems = document.querySelectorAll('.nav-link');

    // 7. Section title underline on scroll
    const sectionTitles = document.querySelectorAll('.section-title');
    const titleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.35 });

    sectionTitles.forEach(title => titleObserver.observe(title));

    // 8. Timeline dots glow on scroll
    const timelineDots = document.querySelectorAll('.timeline-dot');
    const dotObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.35 });

    timelineDots.forEach(dot => dotObserver.observe(dot));

    // 9. Experience show/hide extra bullets
    const expToggle = document.querySelector('.exp-toggle');
    const expExtras = document.querySelectorAll('.exp-extra');
    const expTech = document.querySelector('.exp-tech');

    const isMobile = () => window.innerWidth < 1024;

    const setExperienceCollapsed = (collapsed) => {
        expExtras.forEach(li => li.classList.toggle('hidden', collapsed));
        if (expTech) {
            if (isMobile()) {
                expTech.classList.toggle('hidden', collapsed);
            } else {
                expTech.classList.remove('hidden');
            }
        }
        if (expToggle) {
            expToggle.textContent = collapsed ? 'View more' : 'Show less';
        }
    };

    if (expToggle && expExtras.length) {
        // Initialize collapsed state based on viewport
        setExperienceCollapsed(isMobile());

        expToggle.addEventListener('click', () => {
            const currentlyCollapsed = expExtras[0].classList.contains('hidden');
            setExperienceCollapsed(!currentlyCollapsed);
        });

        window.addEventListener('resize', () => setExperienceCollapsed(isMobile()));
    }

    // 10. Education accordion: open on desktop, collapsed on mobile
    const eduCards = document.querySelectorAll('.edu-card');
    const setEduState = () => {
        const wide = window.innerWidth >= 1024;
        eduCards.forEach(card => {
            if (wide) {
                card.setAttribute('open', '');
            } else {
                card.removeAttribute('open');
            }
        });
    };
    setEduState();
    window.addEventListener('resize', setEduState);

    // 11. Skills collapsible rows (limit visible rows by default)
    const skillCards = document.querySelectorAll('.skill-card');

    const collapseSkills = (card, extras, toggle) => {
        extras.forEach(row => row.style.display = 'none');
        card.classList.remove('expanded');
        if (toggle) toggle.textContent = 'Show more';
    };

    const expandSkills = (card, extras, toggle) => {
        extras.forEach(row => row.style.display = 'flex');
        card.classList.add('expanded');
        if (toggle) toggle.textContent = 'Show less';
    };

    const enforceMobileCollapse = () => {
        const mobile = window.innerWidth < 640;
        skillCards.forEach(card => {
            const extras = card.querySelectorAll('.skill-extra');
            const toggle = card.querySelector('.skill-toggle');
            if (!extras.length || !toggle) return;
            if (mobile) {
                collapseSkills(card, extras, toggle);
            }
        });
    };

    skillCards.forEach(card => {
        const extras = card.querySelectorAll('.skill-extra');
        const toggle = card.querySelector('.skill-toggle');
        if (!toggle || !extras.length) return;
        toggle.style.display = 'inline-flex';
        collapseSkills(card, extras, toggle);

        toggle.addEventListener('click', () => {
            if (card.classList.contains('expanded')) {
                collapseSkills(card, extras, toggle);
            } else {
                expandSkills(card, extras, toggle);
            }
        });
    });

    enforceMobileCollapse();
    window.addEventListener('resize', enforceMobileCollapse);

    // Active navigation highlight on scroll
    // Keeps recruiters oriented; pairs with CSS underline animation.
    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach((item) => {
            item.classList.remove("text-red-600", "font-bold");
            if (item.getAttribute("href") === `#${current}`) {
                item.classList.add("text-red-600", "font-bold");
            }
        });
    });

    // 11. Contact Form Handling
    const contactForm = document.querySelector('.contact-form');
    const contactInputs = document.querySelectorAll('.contact-input');
    const submitBtn = document.querySelector('.contact-submit');

    // Form validation
    /**
     * Basic email pattern validation.
     * @param {string} email
     * @returns {boolean}
     */
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    /**
     * Validates contact form fields and marks invalid inputs.
     * @returns {boolean} true if valid, false otherwise
     */
    const validateForm = () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Clear previous error states
        contactInputs.forEach(input => input.classList.remove('error'));

        if (!name || name.length < 2) {
            document.getElementById('name').classList.add('error');
            isValid = false;
        }

        if (!email || !validateEmail(email)) {
            document.getElementById('email').classList.add('error');
            isValid = false;
        }

        if (!message || message.length < 5) {
            document.getElementById('message').classList.add('error');
            isValid = false;
        }

        return isValid;
    };

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (!validateForm()) {
                console.log('Form validation failed');
                return;
            }

            // Disable submit button
            submitBtn.disabled = true;
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';

            // Show loading message
            const messageEl = document.getElementById('formMessage');
            messageEl.classList.remove('hidden', 'error');
            messageEl.classList.add('success');
            messageEl.textContent = 'Sending your message...';

            // Simulate form submission (Replace with actual backend call)
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;

                // Show success message
                messageEl.classList.remove('hidden', 'error');
                messageEl.classList.add('success');
                messageEl.textContent = '✓ Message sent! I\'ll respond within 24–48 hours.';

                // Reset form
                contactForm.reset();

                // Clear floating labels
                contactInputs.forEach(input => {
                    input.value = '';
                    input.classList.remove('error');
                });

                // Remove message after 4 seconds
                setTimeout(() => {
                    messageEl.classList.add('hidden');
                }, 4000);
            }, 1500);
        });

        // Remove error state on input
        contactInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('error');
            });
        });

        // ESC key doesn't clear form - just blur focus
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.activeElement.blur();
            }
        });
    }

    // ============================================
    // 12. UTILITY CLASSES FOR ENHANCED UX
    // ============================================
    // Smooth scrolling, lazy image loading, back-to-top button,
    // and 3D tilt effects for interactive visual polish.
    // ============================================

    /**
     * Smooth Scroll: Makes anchor links scroll smoothly instead of jumping.
     * All links with href="#section" will animate scrolling.
     */
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
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        }
    }

    /**
     * Lazy Load Images: Loads images only when visible (improves initial load).
     * Images must have data-src attribute instead of src.
     */
    class LazyLoadImages {
        constructor() {
            this.init();
        }

        init() {
            if ('IntersectionObserver' in window) {
                const images = document.querySelectorAll('img[data-src]');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    });
                });
                images.forEach(img => observer.observe(img));
            }
        }
    }

    /**
     * Back To Top: Shows button when scrolled past 300px; scrolls smoothly to top.
     */
    class BackToTop {
        constructor() {
            this.button = document.getElementById('back-to-top');
            if (this.button) this.init();
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    /**
     * 3D Tilt & Parallax: Interactive card tilt on mousemove.
     * Elements with class .card-3d will tilt based on cursor position.
     * Respects prefers-reduced-motion and touch devices.
     */
    class TiltParallax {
        constructor() {
            this.prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            this.supportsTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            this.state = new WeakMap();
            if (!this.prefersReduced && !this.supportsTouch) this.init();
        }

        init() {
            const nodes = document.querySelectorAll('.card-3d');
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
                maxTilt: 12
            };

            this.state.set(el, state);
            el.style.perspective = '900px';
            el.style.transformStyle = 'preserve-3d';

            const onMove = (clientX, clientY) => {
                if (!state.bounds) state.bounds = el.getBoundingClientRect();
                const bx = state.bounds;
                const relX = (clientX - bx.left) / bx.width - 0.5;
                const relY = (clientY - bx.top) / bx.height - 0.5;
                state.targetX = relY * state.maxTilt * -1;
                state.targetY = relX * state.maxTilt;
                this.startAnimation(el);
            };

            const enter = () => {
                el.style.transition = 'transform 180ms ease';
            };

            const leave = () => {
                state.targetX = 0;
                state.targetY = 0;
                el.style.transition = 'transform 450ms cubic-bezier(.2,.9,.2,1)';
                el.style.transform = `rotateX(0deg) rotateY(0deg)`;
            };

            el.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
            el.addEventListener('mouseenter', enter);
            el.addEventListener('mouseleave', leave);
        }

        startAnimation(el) {
            const state = this.state.get(el);
            if (!state || state.rAF) return;

            const step = () => {
                state.currentX += (state.targetX - state.currentX) * 0.12;
                state.currentY += (state.targetY - state.currentY) * 0.12;
                el.style.transform = `rotateX(${state.currentX.toFixed(2)}deg) rotateY(${state.currentY.toFixed(2)}deg)`;
                state.rAF = requestAnimationFrame(step);
            };

            step();
        }
    }

    // Initialize utility classes
    new SmoothScroll();
    new LazyLoadImages();
    new BackToTop();
    new TiltParallax();

    // ============================================
    // 14. PARTICLES.JS CONFIGURATION
    // ============================================
    // Animated particle backgrounds for visual depth.
    // Red particles with connecting lines create an engaging
    // background effect. Each section gets its own particle instance
    // with identical configuration for consistency.
    //
    // Configuration details:
    // • 60 red particles per section
    // • Connected by lines when within 150px distance
    // • Repulse effect on mouse hover (interactive)
    // • Slow, ambient movement (0.6 speed)
    // • Low opacity (0.35) to keep content readable
    // ============================================

    /**
     * Particle configuration object reused for all sections.
     * Defines particle appearance, movement, and interactions.
     */
    const particleConfig = {
        particles: {
            number: { value: 60 },
            color: { value: '#ff2d2d' }, // Red color matching portfolio theme
            shape: { type: 'circle' },
            opacity: { value: 0.35 },
            size: { value: 2 },
            move: {
                enable: true,
                speed: 0.6 // Slow, ambient movement
            },
            line_linked: {
                enable: true,
                distance: 150, // Connect particles within 150px
                color: '#ff2d2d',
                opacity: 0.2,
                width: 1
            }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: 'repulse' } // Push particles away on hover
            }
        },
        retina_detect: true
    };

    /**
     * Initialize particles for hero section.
     * Creates an animated background that sets the tone.
     */
    if (window.particlesJS && document.getElementById('particles-hero')) {
        particlesJS('particles-hero', particleConfig);
    }

    /**
     * Initialize particles for career section.
     * Reinforces visual continuity across sections.
     */
    if (window.particlesJS && document.getElementById('particles-career')) {
        particlesJS('particles-career', particleConfig);
    }

    /**
     * Initialize particles for projects section.
     * Highlights featured work with ambient animation.
     */
    if (window.particlesJS && document.getElementById('particles-projects')) {
        particlesJS('particles-projects', particleConfig);
    }

    /**
     * Initialize particles for certifications section.
     * Validates credentials with subtle visual emphasis.
     */
    if (window.particlesJS && document.getElementById('particles-certifications')) {
        particlesJS('particles-certifications', particleConfig);
    }

    /**
     * Initialize particles for contact section.
     * Creates an inviting, interactive closing experience.
     */
    if (window.particlesJS && document.getElementById('particles-contact')) {
        particlesJS('particles-contact', particleConfig);
    }

    // ============================================
    // 15. ACCESSIBILITY & POLISH
    // ============================================
    // Respects user preferences (reduced motion) and gracefully
    // handles image load errors.
    // ============================================

    // Gracefully handle broken images
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            console.warn(`Failed to load image: ${e.target.src}`);
            e.target.style.display = 'none';
        }
    }, true);

    // Respect prefers-reduced-motion setting
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.scrollBehavior = 'auto';
    }
});
