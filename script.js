// === ULTRA LUXURY CONSOLE THEME ===
console.log(`%c
╔════════════════════════════════════════════════╗
║                                                ║
║           DIVINE ELEGANCE CONSOLE             ║
║              Luxury Experience                ║
║          Crafted by UTSAV BISWAS              ║
║         Full Stack Luxury Artisan            ║
║                                                ║
╚════════════════════════════════════════════════╝
`, 'font-family: "Courier New", monospace; color: #D4AF37; font-weight: bold;');

console.log('%c✨ Luxury JavaScript Initialized Successfully', 'color: #F4D03F; font-size: 16px; font-weight: bold;');

// === ULTRA LUXURY LOADER CLASS ===
class LuxuryLoader {
    constructor() {
        this.loader = document.querySelector('.luxury-loader');
        this.banner = document.querySelector('.luxury-scroll-banner');
        this.header = document.querySelector('.luxury-header');
        this.init();
    }

    init() {
        // Simulate premium loading experience
        this.animateLoader();
        
        setTimeout(() => {
            this.hideLoader();
            this.initializePage();
        }, 3500);
    }

    animateLoader() {
        // Create additional sparkles during loading
        this.createLoadingSparkles();
        
        // Animate loading text
        this.animateLoadingText();
    }

    createLoadingSparkles() {
        const sparkleContainer = this.loader;
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                this.createSparkle(sparkleContainer);
            }, i * 200);
        }
    }

    createSparkle(container) {
        const sparkle = document.createElement('div');
        sparkle.className = 'loading-sparkle';
        
        const x = Math.random() * 80 + 10; // 10% to 90%
        const y = Math.random() * 80 + 10;
        
        sparkle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: #D4AF37;
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            animation: loadingSparkleFloat 2s ease-out forwards;
            box-shadow: 0 0 15px #D4AF37;
        `;

        container.appendChild(sparkle);

        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.remove();
            }
        }, 2000);
    }

    animateLoadingText() {
        const textElement = this.loader.querySelector('.loading-text');
        let text = textElement.textContent;
        let iterations = 0;
        
        const animate = () => {
            if (iterations < 3) {
                textElement.style.transform = 'scale(1.1)';
                textElement.style.letterSpacing = '5px';
                
                setTimeout(() => {
                    textElement.style.transform = 'scale(1)';
                    textElement.style.letterSpacing = '4px';
                    iterations++;
                    setTimeout(animate, 800);
                }, 300);
            }
        };
        
        animate();
    }

    hideLoader() {
        this.loader.style.opacity = '0';
        this.loader.style.visibility = 'hidden';
        
        // Show banner and header
        this.banner.style.opacity = '1';
        this.header.style.opacity = '1';
        
        this.triggerEntranceAnimation();
    }

    triggerEntranceAnimation() {
        // Create grand entrance effect
        this.createEntranceSparkles();
        this.animatePageElements();
    }

    createEntranceSparkles() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createEntranceSparkle();
            }, i * 80);
        }
    }

    createEntranceSparkle() {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: #D4AF37;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            animation: entranceSparkle 1.5s ease-out forwards;
            box-shadow: 0 0 20px #D4AF37;
        `;

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1500);
    }

    animatePageElements() {
        // Animate hero section entrance
        const heroContent = document.querySelector('.hero-content');
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroContent) {
            heroContent.style.animation = 'slideInUp 1s ease-out 0.5s both';
        }
        
        if (heroVisual) {
            heroVisual.style.animation = 'slideInUp 1s ease-out 0.8s both';
        }
    }
}

// === ULTRA LUXURY NAVIGATION CLASS ===
class LuxuryNavigation {
    constructor() {
        this.nav = document.querySelector('.luxury-nav');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.header = document.querySelector('.luxury-header');
        this.lastScrollY = window.scrollY;
        this.init();
    }

    init() {
        this.handleScroll();
        this.handleNavigation();
        this.createLuxuryCursor();
        this.handleHeaderEffects();
    }

    handleScroll() {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY <= 0) {
                this.header.style.background = 'rgba(10, 10, 10, 0.95)';
                this.header.style.transform = 'translateY(0)';
                return;
            }

            if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
                // Scrolling down
                this.header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                this.header.style.transform = 'translateY(0)';
                this.header.style.background = 'rgba(10, 10, 10, 0.98)';
            }

            this.lastScrollY = currentScrollY;
            
            // Parallax effects
            this.handleParallax();
        });
    }

    handleParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.gradient-orb, .floating-shard');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    handleNavigation() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Create luxury click effect
                this.createLuxuryRipple(e);
                
                const targetUrl = link.getAttribute('href');
                
                // Smooth page transition
                this.luxuryPageTransition(() => {
                    window.location.href = targetUrl;
                });
            });
            
            // Hover effects
            link.addEventListener('mouseenter', () => {
                this.createHoverSparkle(link);
            });
        });
    }

    createLuxuryRipple(event) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: 25px;
            height: 25px;
            background: radial-gradient(circle, #D4AF37, #F4D03F);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transform: translate(-50%, -50%);
            animation: luxuryRipple 0.8s ease-out forwards;
            box-shadow: 0 0 30px #D4AF37;
        `;

        ripple.style.left = `${event.clientX}px`;
        ripple.style.top = `${event.clientY}px`;

        document.body.appendChild(ripple);

        setTimeout(() => ripple.remove(), 800);
    }

    createHoverSparkle(element) {
        const rect = element.getBoundingClientRect();
        const sparkles = 3;
        
        for (let i = 0; i < sparkles; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #F4D03F;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
                animation: hoverSparkle 1s ease-out forwards;
                box-shadow: 0 0 10px #F4D03F;
            `;
            
            const x = Math.random() * rect.width;
            const y = rect.height;
            
            sparkle.style.left = `${x}px`;
            sparkle.style.bottom = `${y}px`;
            
            element.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.remove();
                }
            }, 1000);
        }
    }

    luxuryPageTransition(callback) {
        const transitionOverlay = document.createElement('div');
        transitionOverlay.className = 'luxury-transition';
        transitionOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #000000, #0A0A0A, #000000);
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.6s ease;
        `;

        document.body.appendChild(transitionOverlay);

        setTimeout(() => {
            transitionOverlay.style.opacity = '1';
            setTimeout(callback, 600);
        }, 50);
    }

    createLuxuryCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'luxury-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 12px;
            height: 12px;
            background: #D4AF37;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transform: translate(-50%, -50%);
            transition: transform 0.1s ease, width 0.3s ease, height 0.3s ease;
            mix-blend-mode: difference;
            box-shadow: 0 0 20px #D4AF37;
        `;

        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'cursor-follower';
        cursorFollower.style.cssText = `
            position: fixed;
            width: 40px;
            height: 40px;
            border: 2px solid rgba(212, 175, 55, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: transform 0.15s ease;
            mix-blend-mode: difference;
        `;

        document.body.appendChild(cursor);
        document.body.appendChild(cursorFollower);

        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            // Main cursor
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
            
            // Follower with smooth follow
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            cursorFollower.style.left = `${followerX}px`;
            cursorFollower.style.top = `${followerY}px`;
            
            requestAnimationFrame(animateCursor);
        };
        
        animateCursor();

        // Interactive elements effects
        const interactiveElements = document.querySelectorAll('a, button, .nav-link, .luxury-btn, .feature-card, .product-card');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
                cursor.style.background = '#F4D03F';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.2)';
                cursorFollower.style.borderColor = 'rgba(244, 208, 63, 0.6)';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.background = '#D4AF37';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.borderColor = 'rgba(212, 175, 55, 0.3)';
            });
        });
    }

    handleHeaderEffects() {
        // Header background animation
        setInterval(() => {
            const goldValue = Math.sin(Date.now() * 0.001) * 0.05 + 0.1;
            this.header.style.background = `rgba(10, 10, 10, ${0.95 + goldValue})`;
        }, 100);
    }
}

// === ULTRA LUXURY INTERACTIONS CLASS ===
class LuxuryInteractions {
    constructor() {
        this.actionButtons = document.querySelectorAll('.action-btn');
        this.luxuryButtons = document.querySelectorAll('.luxury-btn');
        this.featureCards = document.querySelectorAll('.feature-card');
        this.productCards = document.querySelectorAll('.product-card');
        this.init();
    }

    init() {
        this.handleActionButtons();
        this.handleLuxuryButtons();
        this.handleFeatureCards();
        this.handleProductCards();
        this.initializeScrollAnimations();
        this.createFloatingAnimations();
    }

    handleActionButtons() {
        this.actionButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.animateLuxuryClick(button);
                this.handleButtonFunctionality(button);
            });
            
            // Hover effects
            button.addEventListener('mouseenter', () => {
                this.createButtonHoverEffect(button);
            });
        });
    }

    animateLuxuryClick(button) {
        // Scale animation
        button.style.transform = 'scale(0.92)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);

        // Ripple effect
        this.createButtonRipple(button);
        
        // Micro-interaction particles
        this.createClickParticles(button);
    }

    createButtonRipple(button) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%);
            border-radius: inherit;
            animation: buttonRipple 0.6s ease-out forwards;
            pointer-events: none;
        `;

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    createClickParticles(button) {
        const particleCount = 6;
        const rect = button.getBoundingClientRect();
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: #D4AF37;
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
                animation: clickParticle 1s ease-out forwards;
                box-shadow: 0 0 15px #D4AF37;
            `;
            
            const angle = (i * 2 * Math.PI) / particleCount;
            const distance = 40;
            
            particle.style.setProperty('--endX', `${Math.cos(angle) * distance}px`);
            particle.style.setProperty('--endY', `${Math.sin(angle) * distance}px`);

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 1000);
        }
    }

    createButtonHoverEffect(button) {
        const particles = 4;
        for (let i = 0; i < particles; i++) {
            setTimeout(() => {
                this.createHoverParticle(button);
            }, i * 100);
        }
    }

    createHoverParticle(button) {
        const particle = document.createElement('div');
        const rect = button.getBoundingClientRect();
        
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: #F4D03F;
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            left: ${Math.random() * rect.width}px;
            top: ${Math.random() * rect.height}px;
            animation: hoverParticle 1.2s ease-out forwards;
            box-shadow: 0 0 8px #F4D03F;
        `;

        button.appendChild(particle);
        setTimeout(() => particle.remove(), 1200);
    }

    handleButtonFunctionality(button) {
        const buttonClass = Array.from(button.classList).find(cls => 
            cls.includes('search') || cls.includes('wishlist') || 
            cls.includes('account') || cls.includes('cart')
        );

        switch(buttonClass) {
            case 'search-btn':
                this.openLuxurySearch();
                break;
            case 'wishlist-btn':
                this.toggleLuxuryWishlist(button);
                break;
            case 'account-btn':
                this.openLuxuryAccount();
                break;
            case 'cart-btn':
                this.addToLuxuryCart(button);
                break;
        }
    }

    openLuxurySearch() {
        this.createLuxuryModal(`
            <div class="luxury-modal-overlay">
                <div class="luxury-modal-content">
                    <div class="modal-header">
                        <h3>SEARCH OUR LUXURY COLLECTION</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <input type="text" placeholder="Discover exquisite pieces..." class="luxury-search-input">
                    <div class="search-suggestions">
                        <span>💎 Diamond Rings</span>
                        <span>⌚ Luxury Watches</span>
                        <span>📿 Gold Necklaces</span>
                        <span>✨ Limited Editions</span>
                        <span>🌟 Premium Collections</span>
                    </div>
                </div>
            </div>
        `);
    }

    toggleLuxuryWishlist(button) {
        const heartIcon = button.querySelector('i');
        heartIcon.classList.toggle('fas');
        heartIcon.classList.toggle('far');
        
        // Animation
        button.style.transform = 'scale(1.3)';
        setTimeout(() => {
            button.style.transform = '';
        }, 300);
        
        this.showLuxuryNotification('Added to Luxury Wishlist', 'success');
    }

    addToLuxuryCart(button) {
        const cartCount = document.querySelector('.cart-count');
        let count = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = count + 1;
        
        // Animation
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = '';
        }, 300);
        
        this.animateCartIcon(button);
        this.showLuxuryNotification('Luxury Item Added to Cart', 'success');
    }

    animateCartIcon(button) {
        const icon = button.querySelector('i');
        icon.style.transform = 'rotate(-15deg)';
        setTimeout(() => {
            icon.style.transform = 'rotate(0deg)';
        }, 300);
    }

    handleLuxuryButtons() {
        this.luxuryButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                this.createLuxuryButtonHover(button);
            });

            button.addEventListener('click', (e) => {
                if (button.classList.contains('primary-btn')) {
                    this.animatePrimaryButton(button);
                }
            });
        });
    }

    createLuxuryButtonHover(button) {
        const shineEffect = button.querySelector('.btn-shine');
        if (shineEffect) {
            shineEffect.style.animation = 'btnShine 2s ease-in-out';
        }
    }

    animatePrimaryButton(button) {
        const clone = button.cloneNode(true);
        const rect = button.getBoundingClientRect();
        
        clone.style.cssText = button.style.cssText + `
            position: fixed;
            z-index: 10000;
            pointer-events: none;
            animation: luxuryButtonFly 1.2s ease-in-out forwards;
        `;

        clone.style.left = `${rect.left}px`;
        clone.style.top = `${rect.top}px`;

        document.body.appendChild(clone);
        setTimeout(() => clone.remove(), 1200);
    }

    handleFeatureCards() {
        this.featureCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
            
            card.addEventListener('mouseenter', () => {
                this.animateCardHover(card);
            });

            // Intersection Observer for scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }
                });
            }, { threshold: 0.1 });

            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) scale(0.9)';
            card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            observer.observe(card);
        });
    }

    animateCardHover(card) {
        const elements = card.querySelectorAll('h3, p, .feature-graphic');
        elements.forEach((el, i) => {
            el.style.animation = `elementSlideIn 0.6s ease ${i * 0.1}s both`;
        });
    }

    handleProductCards() {
        this.productCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.animateProductCard(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.resetProductCard(card);
            });
        });
    }

    animateProductCard(card) {
        const visual = card.querySelector('.product-visual');
        const glow = card.querySelector('.product-glow');
        
        if (visual) {
            visual.style.transform = 'translateY(-15px) rotateX(15deg) scale(1.05)';
        }
        
        if (glow) {
            glow.style.opacity = '0.8';
        }
    }

    resetProductCard(card) {
        const visual = card.querySelector('.product-visual');
        const glow = card.querySelector('.product-glow');
        
        if (visual) {
            visual.style.transform = '';
        }
        
        if (glow) {
            glow.style.opacity = '0.5';
        }
    }

    initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    this.animateSectionElements(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('section-hidden');
            observer.observe(section);
        });
    }

    animateSectionElements(section) {
        const animatableElements = section.querySelectorAll('h2, h3, p, .feature-card, .luxury-btn');
        animatableElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-in');
            }, index * 150);
        });
    }

    createFloatingAnimations() {
        // Animate showcase items with staggered delays
        const showcaseItems = document.querySelectorAll('.showcase-item');
        showcaseItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.4}s`;
        });

        // Animate floating elements
        const floatingElements = document.querySelectorAll('.floating-shard, .luxury-particle');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 1.5}s`;
        });
    }

    createLuxuryModal(content) {
        const modal = document.createElement('div');
        modal.innerHTML = content;
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            backdrop-filter: blur(15px);
            animation: modalEntrance 0.5s ease-out;
        `;

        // Close modal on overlay click or close button
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-close')) {
                this.closeLuxuryModal(modal);
            }
        });

        document.body.appendChild(modal);
        
        // Focus search input if exists
        const searchInput = modal.querySelector('.luxury-search-input');
        if (searchInput) {
            setTimeout(() => searchInput.focus(), 300);
        }
    }

    closeLuxuryModal(modal) {
        modal.style.animation = 'modalExit 0.4s ease-in forwards';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
        }, 400);
    }

    showLuxuryNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = 'luxury-notification';
        notification.style.cssText = `
            position: fixed;
            top: 120px;
            right: 30px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #D4AF37, #F4D03F)' : '#ff4444'};
            color: #000;
            padding: 1.2rem 2.5rem;
            border-radius: 15px;
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            font-weight: 700;
            letter-spacing: 1px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.4);
            border: 2px solid #000;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 400);
        }, 3000);
    }
}

// === ULTRA LUXURY PERFORMANCE CLASS ===
class LuxuryPerformance {
    constructor() {
        this.init();
    }

    init() {
        this.optimizeAnimations();
        this.handleResourceLoading();
        this.setupErrorHandling();
    }

    optimizeAnimations() {
        // Use requestAnimationFrame for smooth animations
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = window.webkitRequestAnimationFrame || 
                                         window.mozRequestAnimationFrame || 
                                         window.msRequestAnimationFrame || 
                                         function(callback) { return setTimeout(callback, 1000/60); };
        }

        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = window.webkitCancelAnimationFrame || 
                                        window.mozCancelAnimationFrame || 
                                        function(id) { clearTimeout(id); };
        }
    }

    handleResourceLoading() {
        // Lazy load images and non-critical resources
        document.addEventListener('DOMContentLoaded', () => {
            const lazyElements = document.querySelectorAll('[data-lazy-src]');
            const lazyObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        element.src = element.dataset.lazySrc;
                        lazyObserver.unobserve(element);
                    }
                });
            });
            
            lazyElements.forEach(element => lazyObserver.observe(element));
        });
    }

    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('%c💎 Luxury Error Handler:', 'color: #D4AF37; font-weight: bold;', e.error);
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('%c💎 Luxury Promise Rejection:', 'color: #F4D03F; font-weight: bold;', e.reason);
        });
    }
}

// === INITIALIZE ULTRA LUXURY EXPERIENCE ===
document.addEventListener('DOMContentLoaded', () => {
    // Add luxury CSS animations
    const luxuryStyles = document.createElement('style');
    luxuryStyles.textContent = `
        @keyframes loadingSparkleFloat {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(3); }
        }
        
        @keyframes entranceSparkle {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(4) rotate(180deg); }
        }
        
        @keyframes luxuryRipple {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
            100% { transform: translate(-50%, -50%) scale(25); opacity: 0; }
        }
        
        @keyframes hoverSparkle {
            0% { opacity: 0; transform: translateY(0) scale(0); }
            50% { opacity: 1; transform: translateY(-20px) scale(1); }
            100% { opacity: 0; transform: translateY(-40px) scale(0); }
        }
        
        @keyframes buttonRipple {
            0% { opacity: 0.6; transform: scale(1); }
            100% { opacity: 0; transform: scale(2.5); }
        }
        
        @keyframes clickParticle {
            0% { opacity: 1; transform: translate(0, 0) scale(1); }
            100% { opacity: 0; transform: translate(var(--endX), var(--endY)) scale(0); }
        }
        
        @keyframes hoverParticle {
            0% { opacity: 0; transform: translateY(0) scale(0); }
            50% { opacity: 1; transform: translateY(-15px) scale(1); }
            100% { opacity: 0; transform: translateY(-30px) scale(0); }
        }
        
        @keyframes luxuryButtonFly {
            0% { transform: scale(1) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.2) rotate(5deg); opacity: 0.8; }
            100% { transform: scale(0.5) rotate(10deg); opacity: 0; }
        }
        
        @keyframes modalEntrance {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes modalExit {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.8); }
        }
        
        @keyframes slideInUp {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        .section-hidden { 
            opacity: 0; 
            transform: translateY(60px) scale(0.95); 
        }
        
        .section-visible { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
        }
        
        .animate-in { 
            animation: elementSlideIn 0.8s ease forwards; 
        }
        
        @keyframes elementSlideIn {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .luxury-search-input {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(212, 175, 55, 0.4);
            color: white;
            padding: 1.2rem 1.5rem;
            border-radius: 12px;
            width: 100%;
            margin: 2rem 0;
            font-size: 1.1rem;
            transition: all 0.3s ease;
        }
        
        .luxury-search-input:focus {
            outline: none;
            border-color: #D4AF37;
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
            background: rgba(255, 255, 255, 0.15);
        }
        
        .search-suggestions {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .search-suggestions span {
            background: rgba(212, 175, 55, 0.15);
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid rgba(212, 175, 55, 0.3);
            font-weight: 600;
        }
        
        .search-suggestions span:hover {
            background: rgba(212, 175, 55, 0.25);
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(212, 175, 55, 0.2);
        }
        
        .luxury-modal-content {
            background: rgba(26, 26, 26, 0.95);
            border: 2px solid rgba(212, 175, 55, 0.5);
            border-radius: 20px;
            padding: 3rem;
            max-width: 600px;
            width: 90%;
            backdrop-filter: blur(20px);
            position: relative;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }
        
        .modal-header h3 {
            color: #D4AF37;
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: 2px;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: #D4AF37;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .modal-close:hover {
            background: rgba(212, 175, 55, 0.1);
            transform: rotate(90deg);
        }
    `; // <-- YEH BACKTICK MISSING THA!
    document.head.appendChild(luxuryStyles);

    // Initialize all luxury features
    new LuxuryLoader();
    new LuxuryNavigation();
    new LuxuryInteractions();
    new LuxuryPerformance();

    console.log('%c🎉 Ultra Luxury Experience Fully Loaded', 'color: #D4AF37; font-size: 18px; font-weight: bold;');
}); // <-- YEH CLOSING BRACKET ADD KIYA

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LuxuryLoader,
        LuxuryNavigation,
        LuxuryInteractions,
        LuxuryPerformance
    };
} 