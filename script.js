// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // You can add your form submission logic here
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation to project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, options);

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Dynamic navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    }
});

// Typing animation for hero section
const heroText = document.querySelector('.hero-content h1');
if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    let index = 0;

    function typeText() {
        if (index < text.length) {
            heroText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    // Start typing animation when page loads
    window.addEventListener('load', typeText);
}

// Add hover effect to skill items
const skillItems = document.querySelectorAll('.skills li');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = '#ff0000';
        item.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.color = '#ffffff';
        item.style.transform = 'translateX(0)';
    });
});