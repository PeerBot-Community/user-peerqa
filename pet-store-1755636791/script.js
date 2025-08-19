// Sample pet data
const pets = [
    {
        id: 1,
        name: "Buddy",
        type: "dogs",
        breed: "Golden Retriever",
        age: "2 years",
        gender: "Male",
        description: "Friendly and energetic, loves playing fetch and swimming. Great with kids!",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "Luna",
        type: "cats",
        breed: "Persian",
        age: "1 year",
        gender: "Female",
        description: "Calm and affectionate, enjoys cuddling and quiet environments. Perfect lap cat!",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=300&fit=crop&crop=face"
    },
    {
        id: 3,
        name: "Max",
        type: "dogs",
        breed: "German Shepherd",
        age: "3 years",
        gender: "Male",
        description: "Loyal and intelligent, well-trained and protective. Excellent family dog.",
        image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=300&fit=crop&crop=face"
    },
    {
        id: 4,
        name: "Whiskers",
        type: "cats",
        breed: "Maine Coon",
        age: "4 years",
        gender: "Male",
        description: "Gentle giant with a playful personality. Gets along well with other pets.",
        image: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=300&h=300&fit=crop&crop=face"
    },
    {
        id: 5,
        name: "Bella",
        type: "dogs",
        breed: "Labrador",
        age: "1 year",
        gender: "Female",
        description: "Young and playful, loves learning new tricks. Very social and outgoing.",
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=300&fit=crop&crop=face"
    },
    {
        id: 6,
        name: "Shadow",
        type: "cats",
        breed: "Black Cat",
        age: "2 years",
        gender: "Female",
        description: "Mysterious and elegant, enjoys watching from high places. Very independent.",
        image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=300&h=300&fit=crop&crop=face"
    },
    {
        id: 7,
        name: "Charlie",
        type: "dogs",
        breed: "Beagle",
        age: "5 years",
        gender: "Male",
        description: "Gentle senior dog, loves walks and treats. Perfect for a quiet household.",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=300&fit=crop&crop=face"
    },
    {
        id: 8,
        name: "Milo",
        type: "cats",
        breed: "Orange Tabby",
        age: "3 years",
        gender: "Male",
        description: "Friendly and curious, loves exploring and meeting new people. Very social cat.",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=300&h=300&fit=crop&crop=face"
    },
    {
        id: 9,
        name: "Coco",
        type: "exotic",
        breed: "Cockatiel",
        age: "2 years",
        gender: "Female",
        description: "Beautiful and intelligent bird, can learn to whistle tunes. Very social and interactive.",
        image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=300&h=300&fit=crop&crop=face"
    },
    {
        id: 10,
        name: "Nibbles",
        type: "exotic",
        breed: "Holland Lop Rabbit",
        age: "1 year",
        gender: "Male",
        description: "Adorable and gentle rabbit, loves fresh vegetables and hopping around. Great for apartments.",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=300&h=300&fit=crop&crop=face"
    },
    {
        id: 11,
        name: "Rocky",
        type: "dogs",
        breed: "Bulldog",
        age: "4 years",
        gender: "Male",
        description: "Calm and laid-back, enjoys short walks and lots of naps. Great apartment companion.",
        image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=300&h=300&fit=crop&crop=face"
    },
    {
        id: 12,
        name: "Princess",
        type: "cats",
        breed: "Siamese",
        age: "2 years",
        gender: "Female",
        description: "Vocal and affectionate, loves attention and conversation. Very intelligent and interactive.",
        image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=300&h=300&fit=crop&crop=face"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const filterButtons = document.querySelectorAll('.filter-btn');
const petsGrid = document.getElementById('petsGrid');

// Mobile navigation toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Pet filtering functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        filterPets(filter);
    });
});

// Filter pets based on type
function filterPets(filter) {
    const filteredPets = filter === 'all' ? pets : pets.filter(pet => pet.type === filter);
    displayPets(filteredPets);
}

// Display pets in the grid
function displayPets(petsToShow) {
    petsGrid.innerHTML = '';
    
    petsToShow.forEach(pet => {
        const petCard = createPetCard(pet);
        petsGrid.appendChild(petCard);
    });
    
    // Add fade-in animation
    setTimeout(() => {
        document.querySelectorAll('.pet-item').forEach(item => {
            item.classList.add('fade-in-up');
        });
    }, 100);
}

// Create individual pet card
function createPetCard(pet) {
    const petCard = document.createElement('div');
    petCard.className = 'pet-item';
    petCard.setAttribute('data-type', pet.type);
    
    petCard.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}" onerror="this.src='https://via.placeholder.com/300x250/FF6B6B/FFFFFF?text=Pet+Photo'">
        <div class="pet-info">
            <h3>${pet.name}</h3>
            <div class="pet-details">
                <span>${pet.breed}</span>
                <span>${pet.age}</span>
                <span>${pet.gender}</span>
            </div>
            <p>${pet.description}</p>
            <button class="adopt-btn" onclick="adoptPet('${pet.name}')">
                Adopt ${pet.name}
            </button>
        </div>
    `;
    
    return petCard;
}

// Adopt pet function
function adoptPet(petName) {
    alert(`Thank you for your interest in adopting ${petName}! Please contact us at (555) 123-PETS to schedule a meet and greet.`);
}

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

// Contact form handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const interest = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all required fields (Name, Email, and Message).');
        return;
    }
    
    // Simulate form submission
    alert(`Thank you ${name}! We've received your message and will get back to you within 24 hours.`);
    this.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Display all pets initially
    displayPets(pets);
    
    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add loading animation to hero
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('fade-in-up');
        document.querySelector('.hero-image').classList.add('fade-in-up');
    }, 300);
});

// Add some interactive effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Hero buttons functionality
document.querySelector('.btn-primary').addEventListener('click', () => {
    document.getElementById('pets').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Add some easter eggs
let clickCount = 0;
document.querySelector('.nav-logo').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        alert('🐾 Woof! You found our secret! Use code PAWSOME for 10% off your first adoption fee! 🐾');
        clickCount = 0;
    }
});

// Auto-update copyright year
document.querySelector('.footer-bottom p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Paws & Whiskers Pet Store. All rights reserved. Made with ❤️ for pets and their families.`;