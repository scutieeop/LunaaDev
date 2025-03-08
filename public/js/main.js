/* LunaDevs - Minecraft Plugin Marketplace - Enhanced JavaScript */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Initialize popovers
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
  
  // Generate random appealing colors for placeholder plugin images
  const pluginPlaceholders = document.querySelectorAll('.placeholder-image.plugin');
  const pluginColors = [
    { primary: '#5f43b2', secondary: '#7a5fc8' },
    { primary: '#1db9c3', secondary: '#2ed1db' },
    { primary: '#2ecc71', secondary: '#4cd786' },
    { primary: '#e74c3c', secondary: '#f16354' },
    { primary: '#3498db', secondary: '#5faee3' },
    { primary: '#f39c12', secondary: '#f8bc5c' },
    { primary: '#9b59b6', secondary: '#b07cc6' },
    { primary: '#16a085', secondary: '#1abc9c' }
  ];
  
  pluginPlaceholders.forEach(placeholder => {
    const colorSet = pluginColors[Math.floor(Math.random() * pluginColors.length)];
    placeholder.style.background = `linear-gradient(135deg, ${colorSet.primary}, ${colorSet.secondary})`;
  });
  
  // Animate elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementPosition < window.innerHeight - elementVisible) {
        element.classList.add('animated');
      }
    });
  };
  
  // Add animate-on-scroll class to certain elements if not already added
  const elementsToAnimate = document.querySelectorAll('.card, .feature-icon, h1, h2, h3, .btn-lg');
  elementsToAnimate.forEach(element => {
    if (!element.classList.contains('animate-on-scroll') && !element.classList.contains('no-animation')) {
      element.classList.add('animate-on-scroll');
      
      // Add different animation classes based on element type
      if (element.classList.contains('card')) {
        element.dataset.animation = 'fade-up';
      } else if (element.classList.contains('feature-icon')) {
        element.dataset.animation = 'zoom-in';
      } else if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3') {
        element.dataset.animation = 'fade-right';
      } else if (element.classList.contains('btn-lg')) {
        element.dataset.animation = 'fade-up';
      }
    }
  });
  
  // Run the animation check on load and scroll
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
  
  // Back to top button functionality
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });
    
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Navbar scroll behavior
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }
  
  // Command line typewriter effect (for minecraft commands)
  const commandElements = document.querySelectorAll('.plugin-command-typewriter');
  commandElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    element.style.display = 'block';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    // Start typing when element comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter();
          observer.unobserve(element);
        }
      });
    });
    
    observer.observe(element);
  });
  
  // Form validation enhancement
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
  
  // Copy to clipboard functionality for code blocks
  document.querySelectorAll('.copy-code').forEach(button => {
    button.addEventListener('click', function() {
      const codeBlock = this.closest('.code-block').querySelector('code');
      const textArea = document.createElement('textarea');
      textArea.value = codeBlock.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      this.innerHTML = '<i class="fas fa-check"></i> Kopyalandı';
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-copy"></i> Kopyala';
      }, 2000);
    });
  });
  
  // Search functionality enhancement
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('focus', function() {
      this.parentElement.classList.add('search-focused');
    });
    
    searchInput.addEventListener('blur', function() {
      if (this.value.length === 0) {
        this.parentElement.classList.remove('search-focused');
      }
    });
  }
  
  // Plugin detail image gallery functionality
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryModal = document.getElementById('galleryModal');
  
  if (galleryItems.length > 0 && galleryModal) {
    const modalImage = galleryModal.querySelector('.modal-image');
    
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const imgSrc = this.getAttribute('data-src') || this.querySelector('img').src;
        const imgAlt = this.getAttribute('data-alt') || this.querySelector('img').alt;
        
        modalImage.src = imgSrc;
        modalImage.alt = imgAlt;
        
        const galleryModalObj = new bootstrap.Modal(galleryModal);
        galleryModalObj.show();
      });
    });
  }
  
  // Counter animation
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace(/,/g, '');
      const increment = target / 200;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment).toLocaleString();
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(counter);
        }
      });
    });
    
    observer.observe(counter);
  });
  
  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
      document.body.classList.add('dark-mode');
      darkModeToggle.checked = true;
    }
    
    darkModeToggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});

// Function to switch between light and dark mode (added for feature completeness)
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  
  // Update button text
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.innerHTML = isDarkMode 
      ? '<i class="fas fa-sun"></i> Açık Mod'
      : '<i class="fas fa-moon"></i> Koyu Mod';
  }
} 