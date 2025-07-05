// Navigation functionality
function initNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.querySelector('.overlay');
  const mobileDropdownTriggers = document.querySelectorAll('.mobile-dropdown-trigger');
  
  // Toggle mobile menu
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
  
  // Close mobile menu when clicking overlay
  overlay.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
  
  // Mobile dropdown menus
  mobileDropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const dropdownMenu = this.nextElementSibling;
      const dropdownIcon = this.querySelector('.dropdown-icon');
      
      // Close all other dropdown menus
      document.querySelectorAll('.mobile-dropdown-menu').forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.classList.remove('active');
          const icon = menu.previousElementSibling.querySelector('.dropdown-icon');
          icon.style.transform = 'rotate(0deg)';
        }
      });
      
      // Toggle current dropdown menu
      dropdownMenu.classList.toggle('active');
      
      // Toggle dropdown icon rotation
      if (dropdownMenu.classList.contains('active')) {
        dropdownIcon.style.transform = 'rotate(180deg)';
      } else {
        dropdownIcon.style.transform = 'rotate(0deg)';
      }
    });
  });
  
  // Close menu on window resize (if switching to desktop view)
  window.addEventListener('resize', function() {
    if (window.innerWidth > 991 && mobileNav.classList.contains('active')) {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
  
  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        
        // Close mobile menu if open
        if (mobileNav.classList.contains('active')) {
          menuToggle.classList.remove('active');
          mobileNav.classList.remove('active');
          overlay.classList.remove('active');
          document.body.classList.remove('no-scroll');
        }
        
        // Scroll to target
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}




// ...existing code...

// Mobile dropdown toggle
document.querySelectorAll('.mobile-dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', function () {
    const menu = this.nextElementSibling;
    if (menu && menu.classList.contains('mobile-dropdown-menu')) {
      menu.classList.toggle('open');
    }
  });
});

// Optional: Close other dropdowns when one is opened
document.querySelectorAll('.mobile-dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', function () {
    document.querySelectorAll('.mobile-dropdown-menu').forEach(menu => {
      if (menu !== this.nextElementSibling) {
        menu.classList.remove('open');
      }
    });
  });
});

// ...existing code...