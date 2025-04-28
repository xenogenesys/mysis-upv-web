// Preloader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 1000);
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-frame');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

document.querySelector('.prev-arrow').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.querySelector('.next-arrow').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Auto-slide (opcional)
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Mobile menu
const menuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    this.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});

// Initialize AOS animations
AOS.init({
    duration: 800,
    once: true,
    offset: 120
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
