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
  
  // For future implementation: more complex sliders with navigation
//   const heroSection = document.querySelector('.hero-section');
//   if (heroSection) {
//     // Initialize hero background animations
//     initHeroBackground(heroSection);
//   }
// }

// // Animated hero background
// function initHeroBackground(heroSection) {
//   const heroBackground = heroSection.querySelector('.hero-background');
  
//   // Add parallax effect
//   window.addEventListener('scroll', function() {
//     const scrollPosition = window.scrollY;
//     const translateY = scrollPosition * 0.3;
    
//     heroBackground.style.transform = `translateY(${translateY}px)`;
//   });
  
//   // Add subtle zoom animation
//   heroBackground.classList.add('pulse');

const carouselItems = document.querySelectorAll(".carousel_item"); 
let i = 1;

setInterval(() => {
// Accessing All the carousel Items
 Array.from(carouselItems).forEach((item,index) => {

   if(i < carouselItems.length){
    item.style.transform = `translateX(-${i*100}%)`
   }
  })


  if(i < carouselItems.length){
    i++;
  }
  else{
    i=0;
  }
},2000)
}