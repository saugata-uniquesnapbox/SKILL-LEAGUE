// Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modules
  initNavigation();
  initSlider();
  initAnimations();
  initFilters();
  
  // Handle scroll events
  window.addEventListener('scroll', function() {
    handleScrollEvents();
  });
});

// Handle scroll events
function handleScrollEvents() {
  const header = document.getElementById('header');
  const scrollPosition = window.scrollY;
  
  // Add 'scrolled' class to header when scrolled down
  if (scrollPosition > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Check for elements to animate on scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    }
  });
}

// Check if element is in viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
}

// Tournament filters
function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const tournamentCards = document.querySelectorAll('.tournament-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get filter value
      const filterValue = this.getAttribute('data-filter');
      
      // Filter tournament cards
      tournamentCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          // Add animation
          card.classList.add('fade-in');
          setTimeout(() => {
            card.classList.remove('fade-in');
          }, 600);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('toggleViewBtn');
  const extraCards = document.querySelectorAll('.extra-tournament');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      extraCards.forEach(card => card.classList.toggle('hidden'));
      toggleBtn.textContent = toggleBtn.textContent.includes('View All') 
        ? 'View Less Tournaments' 
        : 'View All Tournaments';
    });
  }
});
