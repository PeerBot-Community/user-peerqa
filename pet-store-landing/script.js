document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    });

    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

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

    const adoptButtons = document.querySelectorAll('.btn-adopt');
    adoptButtons.forEach(button => {
        button.addEventListener('click', function() {
            const petName = this.closest('.pet-card').querySelector('h3').textContent;
            alert(`Thank you for your interest in adopting ${petName}! We'll contact you soon with more information.`);
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const service = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;

            if (!name || !email || !service || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const successMessage = document.createElement('div');
            successMessage.innerHTML = `
                <div style="
                    background: #d4edda;
                    border: 1px solid #c3e6cb;
                    color: #155724;
                    padding: 15px;
                    border-radius: 10px;
                    margin-top: 20px;
                    text-align: center;
                ">
                    <i class="fas fa-check-circle" style="margin-right: 10px;"></i>
                    Thank you, ${name}! Your message has been received. We'll get back to you within 24 hours.
                </div>
            `;

            contactForm.insertAdjacentElement('afterend', successMessage);
            contactForm.reset();

            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }

    const heroButtons = document.querySelectorAll('.hero-buttons .btn-primary, .hero-buttons .btn-secondary');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.trim() === 'Browse Pets') {
                document.querySelector('#pets').scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (this.textContent.trim() === 'Learn More') {
                document.querySelector('#about').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const newsletterButton = newsletterForm.querySelector('button');
        const newsletterInput = newsletterForm.querySelector('input');
        
        newsletterButton.addEventListener('click', function(e) {
            e.preventDefault();
            const email = newsletterInput.value.trim();
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            alert(`Thank you for subscribing! We'll send pet care tips and updates to ${email}.`);
            newsletterInput.value = '';
        });
    }

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

    document.querySelectorAll('.service-card, .pet-card, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    const counters = document.querySelectorAll('.stat h3');
    const animateCounters = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                
                if (!isNaN(numericValue)) {
                    let currentValue = 0;
                    const increment = numericValue / 50;
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            target.textContent = finalValue;
                            clearInterval(timer);
                        } else {
                            const suffix = finalValue.includes('+') ? '+' : '';
                            target.textContent = Math.floor(currentValue) + suffix;
                        }
                    }, 30);
                }
                counterObserver.unobserve(target);
            }
        });
    };

    const counterObserver = new IntersectionObserver(animateCounters, observerOptions);
    counters.forEach(counter => counterObserver.observe(counter));
});

function openAddPetModal() {
    document.getElementById('addPetModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAddPetModal() {
    document.getElementById('addPetModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('addPetForm').reset();
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('addPetModal');
    if (event.target === modal) {
        closeAddPetModal();
    }
});

document.getElementById('addPetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const petName = formData.get('petName');
    const petBreed = formData.get('petBreed');
    const petAge = formData.get('petAge');
    const petImage = formData.get('petImage') || 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=300&fit=crop';
    const petDescription = formData.get('petDescription');
    
    if (!petName || !petBreed || !petAge) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const petCard = document.createElement('div');
    petCard.className = 'pet-card';
    petCard.innerHTML = `
        <img src="${petImage}" alt="${petBreed}" onerror="this.src='https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=300&fit=crop'">
        <div class="pet-info">
            <h3>${petName}</h3>
            <p class="breed">${petBreed}</p>
            <p class="age">${petAge}</p>
            <button class="btn-adopt">Adopt Me</button>
        </div>
    `;
    
    const adoptButton = petCard.querySelector('.btn-adopt');
    adoptButton.addEventListener('click', function() {
        const petName = this.closest('.pet-card').querySelector('h3').textContent;
        alert(`Thank you for your interest in adopting ${petName}! We'll contact you soon with more information.`);
    });
    
    petCard.style.opacity = '0';
    petCard.style.transform = 'translateY(30px)';
    petCard.style.transition = 'all 0.6s ease-out';
    
    document.querySelector('.pets-grid').appendChild(petCard);
    
    setTimeout(() => {
        petCard.style.opacity = '1';
        petCard.style.transform = 'translateY(0)';
    }, 100);
    
    closeAddPetModal();
    
    const successMessage = document.createElement('div');
    successMessage.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
            padding: 15px 20px;
            border-radius: 10px;
            z-index: 1001;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        ">
            <i class="fas fa-check-circle" style="margin-right: 10px;"></i>
            ${petName} has been added successfully!
        </div>
    `;
    
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});