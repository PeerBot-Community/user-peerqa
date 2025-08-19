document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    const serviceCards = document.querySelectorAll('.service-card');
    const productCards = document.querySelectorAll('.product-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    [...serviceCards, ...productCards, ...testimonialCards].forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    const statNumbers = document.querySelectorAll('.stat h3');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = target.textContent.replace(/[^\d]/g, '');
                const increment = Math.ceil(finalNumber / 50);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= finalNumber) {
                        current = finalNumber;
                        clearInterval(timer);
                    }
                    target.textContent = current + target.textContent.replace(/[\d]/g, '');
                }, 50);
                
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const button = form.querySelector('.btn');
            const originalText = button.textContent;
            
            button.textContent = 'Sending...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Message Sent!';
                button.style.background = '#28a745';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.style.background = '';
                    form.reset();
                }, 2000);
            }, 1000);
        });
    }

    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const newsletterButton = newsletterForm.querySelector('.btn');
        const newsletterInput = newsletterForm.querySelector('input');
        
        newsletterButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (newsletterInput.value && newsletterInput.value.includes('@')) {
                const originalText = newsletterButton.textContent;
                newsletterButton.textContent = 'Subscribed!';
                newsletterButton.style.background = '#28a745';
                newsletterInput.value = '';
                
                setTimeout(() => {
                    newsletterButton.textContent = originalText;
                    newsletterButton.style.background = '';
                }, 2000);
            } else {
                newsletterInput.style.borderColor = '#dc3545';
                setTimeout(() => {
                    newsletterInput.style.borderColor = '';
                }, 2000);
            }
        });
    }

    const addToCartButtons = document.querySelectorAll('.product-card .btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const originalText = button.textContent;
            button.textContent = 'Added!';
            button.style.background = '#28a745';
            
            const productCard = button.closest('.product-card');
            productCard.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                productCard.style.transform = '';
            }, 1500);
        });
    });

    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (button.textContent === 'Shop Now') {
                e.preventDefault();
                const productsSection = document.querySelector('#products');
                if (productsSection) {
                    const offsetTop = productsSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            } else if (button.textContent === 'Learn More') {
                e.preventDefault();
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                    const offsetTop = aboutSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    window.addEventListener('load', function() {
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateX(-50px)';
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroImage.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateX(0)';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }, 300);
    });

    let ticking = false;
    
    function updateHeaderOnScroll() {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        
        if (window.innerWidth > 768) {
            const heroImage = document.querySelector('.pet-placeholder');
            if (heroImage && scrolled < window.innerHeight) {
                heroImage.style.transform = `translateY(${rate}px) rotate(${scrolled * 0.1}deg)`;
            }
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeaderOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
});