// Slider functionality
function initSlider() {
  // Simple auto-scrolling partners slider
  const partnersSlider = document.querySelector('.partners-slider');
  
  if (partnersSlider) {
    // Clone the partner logos for infinite scrolling effect
    const partnerLogos = partnersSlider.querySelectorAll('.partner-logo');
    
    // Only implement slider if there are enough logos
    if (partnerLogos.length > 3) {
      // Add animation class to slider
      partnersSlider.classList.add('slider-animation');
      
      // Clone logos and append to slider
      partnerLogos.forEach(logo => {
        const clone = logo.cloneNode(true);
        partnersSlider.appendChild(clone);
      });
    }
  }
}

// slider 
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsContainer = document.querySelector('.carousel-dots');
  let currentIndex = 0;
  let intervalId;

  // Clone first and last slide for infinite loop effect
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  firstClone.classList.remove('active');
  lastClone.classList.remove('active');
  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  let slideCount = slides.length;
  let slideWidth = slides[0].offsetWidth;
  let isTransitioning = false;

  function updateSlideWidth() {
    slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
  }

  // Create dots
  function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function setActiveDot() {
    const dots = dotsContainer.querySelectorAll('span');
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  function goToSlide(index) {
    if (isTransitioning) return;
    currentIndex = index;
    moveToSlide();
    setActiveDot();
    resetInterval();
  }

  function moveToSlide(transition = true) {
    if (transition) track.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
    else track.style.transition = 'none';
    track.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
  }

  function nextSlide() {
    if (isTransitioning) return;
    currentIndex++;
    moveToSlide();
    setActiveDot();
    resetInterval();
  }

  function prevSlide() {
    if (isTransitioning) return;
    currentIndex--;
    moveToSlide();
    setActiveDot();
    resetInterval();
  }

  function handleTransitionEnd() {
    isTransitioning = false;
    if (currentIndex === slideCount) {
      track.style.transition = 'none';
      currentIndex = 0;
      moveToSlide(false);
    } else if (currentIndex === -1) {
      track.style.transition = 'none';
      currentIndex = slideCount - 1;
      moveToSlide(false);
    }
  }

  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 4000);
  }

  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  track.addEventListener('transitionstart', () => { isTransitioning = true; });
  track.addEventListener('transitionend', handleTransitionEnd);
  window.addEventListener('resize', updateSlideWidth);

  // Initialize
  updateSlideWidth();
  moveToSlide(false);
  createDots();
  intervalId = setInterval(nextSlide, 4000);

  // Pause on hover
  track.parentElement.addEventListener('mouseenter', () => clearInterval(intervalId));
  track.parentElement.addEventListener('mouseleave', resetInterval);
});

