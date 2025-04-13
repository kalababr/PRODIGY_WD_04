
// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const currentYearElements = document.querySelectorAll('#currentYear');
const contactForm = document.getElementById('contactForm');

// Update current year in footer
currentYearElements.forEach(element => {
  element.textContent = new Date().getFullYear();
});

// Handle navbar scroll effect and animations
function handleScroll() {
  // Add scrolled class to navbar when page is scrolled
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Handle scroll animations - improved implementation
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  animateElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Trigger animation when element is 20% into the viewport
    if (elementTop < windowHeight * 0.8) {
      element.classList.add('animate-fade-in');
    }
  });
  
  // Update active nav link based on scroll position (only for homepage)
  if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;
      
      if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
        setActiveNavLink(section.id);
      }
    });
  }
}

// Toggle mobile navigation
function toggleMobileNav() {
  menuToggle.classList.toggle('active');
  mobileNav.classList.toggle('show');
}

// Set active nav link
function setActiveNavLink(sectionId) {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href && href.includes(sectionId)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  // Simple validation
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert('Please fill out all fields');
    return;
  }
  
  // In a real application, you would send the form data to a server
  alert('Thank you for your message! I will get back to you soon.');
  
  // Reset form
  e.target.reset();
}

// Event Listeners
window.addEventListener('scroll', handleScroll);

// Call handleScroll on initial page load to set up animations for elements already in viewport
document.addEventListener('DOMContentLoaded', function() {
  handleScroll(); // Trigger once on page load
  
  // Add event listeners for mobile menu
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileNav);
  }

  // Close mobile menu when clicking a link
  const mobileNavLinks = document.querySelectorAll('.nav-mobile .nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', toggleMobileNav);
  });

  // Form submission
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // Add smooth scrolling to all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Offset for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
});
