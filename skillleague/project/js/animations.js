// Animation controls
function initAnimations() {
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize section animations
  initSectionAnimations();
  
  // Add animation classes to elements
  addAnimationClasses();
}

// Add animations triggered by scrolling
function initScrollAnimations() {
  // Find all elements to animate on scroll
  const elements = document.querySelectorAll('.section-title, .section-subtitle, .tournament-card, .news-card, .partner-logo, .cta-content');
  
  // Add animation classes
  elements.forEach((element, index) => {
    element.classList.add('animate-on-scroll');
    
    // Add different animations based on element type
    if (element.classList.contains('section-title') || element.classList.contains('section-subtitle')) {
      element.classList.add('fade-up');
    } else if (element.classList.contains('tournament-card') || element.classList.contains('news-card')) {
      element.classList.add('fade-up');
      // Add delay based on index
      element.style.transitionDelay = `${0.1 * (index % 4)}s`;
    } else if (element.classList.contains('partner-logo')) {
      element.classList.add('fade-in');
      element.style.transitionDelay = `${0.1 * (index % 5)}s`;
    } else if (element.classList.contains('cta-content')) {
      element.classList.add('fade-up');
    }
  });
  
  // Trigger check for elements in viewport on page load
  setTimeout(() => {
    handleScrollEvents();
  }, 100);
}

// Add animations to specific sections
function initSectionAnimations() {
  // Hero section animations
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    const heroTitle = heroContent.querySelector('.hero-title');
    const heroSubtitle = heroContent.querySelector('.hero-subtitle');
    const heroButtons = heroContent.querySelector('.hero-buttons');
    
    if (heroTitle) heroTitle.classList.add('fade-in');
    if (heroSubtitle) {
      heroSubtitle.classList.add('fade-in');
      heroSubtitle.style.animationDelay = '0.2s';
    }
    if (heroButtons) {
      heroButtons.classList.add('fade-in');
      heroButtons.style.animationDelay = '0.4s';
    }
  }
}

// Add hover animations and other interactive elements
function addAnimationClasses() {
  // Add hover animations to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.classList.add('hover-lift');
  });
  
  // Add hover effects to cards
  const cards = document.querySelectorAll('.tournament-card, .news-card');
  cards.forEach(card => {
    card.classList.add('hover-lift');
  });
  
  // Add glow effect to primary buttons
  const primaryButtons = document.querySelectorAll('.btn-primary');
  primaryButtons.forEach(button => {
    button.classList.add('hover-glow');
  });
}

// Utility: Handle animations for dynamic content
function animateElement(element, animationClass, delay = 0) {
  // Remove any existing animation classes
  element.classList.remove('fade-in', 'slide-in-right', 'slide-in-left', 'fade-up');
  
  // Reset animation
  void element.offsetWidth;
  
  // Add new animation class
  element.classList.add(animationClass);
  
  // Add delay if specified
  if (delay > 0) {
    element.style.animationDelay = `${delay}s`;
  } else {
    element.style.animationDelay = '0s';
  }
}