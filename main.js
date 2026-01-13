// main.js

// Data for Projects Gallery
const projects = [
    {
        image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
        title: 'Modern Living Room',
        description: 'A sleek, functional living space with minimalist design elements.'
    },
    {
        image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg',
        title: 'Commercial Office',
        description: 'Efficient workspace optimized for productivity and collaboration.'
    },
    {
        image: 'https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg',
        title: 'Luxury Bedroom',
        description: 'Elegant retreat combining comfort and modern aesthetics.'
    },
    {
        image: 'https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg',
        title: 'Kitchen Renovation',
        description: 'Functional kitchen with smart storage and contemporary finishes.'
    }
];

// Data for Testimonials
const testimonials = [
    {
        quote: 'The design exceeded our expectations. Every detail felt intentional and elegant.',
        client: 'Sarah M.',
        project: 'Apartment Design'
    },
    {
        quote: 'Professional, creative, and very easy to work with from start to finish.',
        client: 'David K.',
        project: 'Office Interior'
    },
    {
        quote: 'He transformed our space into something both functional and beautiful.',
        client: 'Lina A.',
        project: 'Residential Project'
    }
];

// Function to render gallery items dynamically
function renderGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear existing content
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <img src="\( {project.image}" alt=" \){project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        gallery.appendChild(card);
    });
}

// Function to render testimonials dynamically
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    testimonialsGrid.innerHTML = ''; // Clear existing content
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.classList.add('testimonial-card');
        card.innerHTML = `
            <p>"${testimonial.quote}"</p>
            <span class="client">— ${testimonial.client}</span>
            <span class="project-type">, ${testimonial.project}</span>
        `;
        testimonialsGrid.appendChild(card);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form validation and submission handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const msg = document.getElementById('message').value.trim();
        
        if (!name || !email || !msg) {
            message.textContent = 'Please fill in all fields.';
            message.style.color = 'red';
            return;
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            message.textContent = 'Please enter a valid email.';
            message.style.color = 'red';
            return;
        }
        
        // Simulate success (no backend)
        message.textContent = 'Message sent successfully!';
        message.style.color = 'green';
        
        // Reset form
        form.reset();
    });
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', function () {
    renderGallery();
    renderTestimonials();
    initSmoothScrolling();
    initContactForm();
});
