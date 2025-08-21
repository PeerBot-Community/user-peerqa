interface PetCard {
  element: HTMLElement;
  name: string;
}

interface FormElements {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  service: HTMLSelectElement;
  message: HTMLTextAreaElement;
}

interface NewsletterElements {
  button: HTMLButtonElement;
  input: HTMLInputElement;
}

interface ScrollToTopButton extends HTMLButtonElement {
  style: CSSStyleDeclaration;
}

document.addEventListener('DOMContentLoaded', function(): void {
    const hamburger: HTMLElement | null = document.querySelector('.hamburger');
    const navMenu: HTMLElement | null = document.querySelector('.nav-menu');
    const header: HTMLElement | null = document.querySelector('.header');
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-menu a');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(): void {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    navLinks.forEach((link: HTMLAnchorElement): void => {
        link.addEventListener('click', function(): void {
            if (navMenu && hamburger) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    if (header) {
        window.addEventListener('scroll', function(): void {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#ffffff';
                header.style.backdropFilter = 'none';
            }
        });
    }

    const scrollToTopBtn: ScrollToTopButton = document.createElement('button') as ScrollToTopButton;
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function(): void {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element): void => {
        const anchorElement = anchor as HTMLAnchorElement;
        anchorElement.addEventListener('click', function (e: Event): void {
            e.preventDefault();
            const href: string | null = this.getAttribute('href');
            if (href) {
                const target: HTMLElement | null = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    const adoptButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn-adopt');
    adoptButtons.forEach((button: HTMLButtonElement): void => {
        button.addEventListener('click', function(): void {
            const petCard: HTMLElement | null = this.closest('.pet-card');
            if (petCard) {
                const petNameElement: HTMLElement | null = petCard.querySelector('h3');
                if (petNameElement) {
                    const petName: string = petNameElement.textContent || 'this pet';
                    alert(`Thank you for your interest in adopting ${petName}! We'll contact you soon with more information.`);
                }
            }
        });
    });

    const contactForm: HTMLFormElement | null = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e: Event): void {
            e.preventDefault();
            
            const nameInput: HTMLInputElement | null = this.querySelector('input[type="text"]');
            const emailInput: HTMLInputElement | null = this.querySelector('input[type="email"]');
            const phoneInput: HTMLInputElement | null = this.querySelector('input[type="tel"]');
            const serviceSelect: HTMLSelectElement | null = this.querySelector('select');
            const messageTextarea: HTMLTextAreaElement | null = this.querySelector('textarea');

            if (!nameInput || !emailInput || !serviceSelect || !messageTextarea) {
                alert('Form elements not found.');
                return;
            }

            const name: string = nameInput.value;
            const email: string = emailInput.value;
            const phone: string = phoneInput?.value || '';
            const service: string = serviceSelect.value;
            const message: string = messageTextarea.value;

            if (!name || !email || !service || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const successMessage: HTMLDivElement = document.createElement('div');
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

            setTimeout((): void => {
                successMessage.remove();
            }, 5000);
        });
    }

    const heroButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.hero-buttons .btn-primary, .hero-buttons .btn-secondary');
    heroButtons.forEach((button: HTMLButtonElement): void => {
        button.addEventListener('click', function(): void {
            const buttonText: string = this.textContent?.trim() || '';
            if (buttonText === 'Browse Pets') {
                const petsSection: HTMLElement | null = document.querySelector('#pets');
                if (petsSection) {
                    petsSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else if (buttonText === 'Learn More') {
                const aboutSection: HTMLElement | null = document.querySelector('#about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const newsletterForm: HTMLElement | null = document.querySelector('.newsletter');
    if (newsletterForm) {
        const newsletterButton: HTMLButtonElement | null = newsletterForm.querySelector('button');
        const newsletterInput: HTMLInputElement | null = newsletterForm.querySelector('input');
        
        if (newsletterButton && newsletterInput) {
            newsletterButton.addEventListener('click', function(e: Event): void {
                e.preventDefault();
                const email: string = newsletterInput.value.trim();
                
                if (!email) {
                    alert('Please enter your email address.');
                    return;
                }
                
                const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                alert(`Thank you for subscribing! We'll send pet care tips and updates to ${email}.`);
                newsletterInput.value = '';
            });
        }
    }

    const observerOptions: IntersectionObserverInit = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer: IntersectionObserver = new IntersectionObserver(function(entries: IntersectionObserverEntry[]): void {
        entries.forEach((entry: IntersectionObserverEntry): void => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                target.style.opacity = '1';
                target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .pet-card, .stat').forEach((el: Element): void => {
        const element = el as HTMLElement;
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });

    const counters: NodeListOf<HTMLElement> = document.querySelectorAll('.stat h3');
    const animateCounters = (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                const finalValue: string = target.textContent || '0';
                const numericValue: number = parseInt(finalValue.replace(/\D/g, ''), 10);
                
                if (!isNaN(numericValue)) {
                    let currentValue: number = 0;
                    const increment: number = numericValue / 50;
                    const timer: number = setInterval((): void => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            target.textContent = finalValue;
                            clearInterval(timer);
                        } else {
                            const suffix: string = finalValue.includes('+') ? '+' : '';
                            target.textContent = Math.floor(currentValue) + suffix;
                        }
                    }, 30);
                }
                counterObserver.unobserve(target);
            }
        });
    };

    const counterObserver: IntersectionObserver = new IntersectionObserver(animateCounters, observerOptions);
    counters.forEach((counter: HTMLElement): void => counterObserver.observe(counter));
});