// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.service-card, .pet-card, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// CTA Button click handler
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#pets').scrollIntoView({
        behavior: 'smooth'
    });
});

// Pet card interactions
document.querySelectorAll('.adopt-button').forEach(button => {
    button.addEventListener('click', function() {
        const petCard = this.closest('.pet-card');
        const petName = petCard.querySelector('h3').textContent;
        
        // Simple alert for demo - in a real app, this would open a modal or navigate to a detail page
        alert(`Thank you for your interest in ${petName}! In a real application, this would open a detailed adoption form.`);
    });
});

// Add some interactive effects
document.querySelectorAll('.service-card, .pet-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Mobile menu toggle (basic implementation)
const createMobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #333;
    `;
    
    document.querySelector('.nav-container').appendChild(hamburger);
    
    // Show hamburger on mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMobile = (e) => {
        if (e.matches) {
            hamburger.style.display = 'block';
            navMenu.style.display = 'none';
        } else {
            hamburger.style.display = 'none';
            navMenu.style.display = 'flex';
        }
    };
    
    mediaQuery.addListener(handleMobile);
    handleMobile(mediaQuery);
    
    hamburger.addEventListener('click', () => {
        if (navMenu.style.display === 'none') {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '70px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'white';
            navMenu.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navMenu.style.padding = '20px';
        } else {
            navMenu.style.display = 'none';
        }
    });
};

// Initialize mobile menu
createMobileMenu();

console.log('🐾 Pet Store Landing Page loaded successfully!');