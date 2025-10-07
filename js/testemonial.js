document.addEventListener("DOMContentLoaded", function () {
  const testimonialTrack = document.querySelector(".testimonial-track");
  const testimonialSlides = document.querySelectorAll(".testimonial-slide");
  const testimonialIndicators = document.querySelectorAll(".testimonial-indicator");
  const testimonialCarousel = document.querySelector(".testimonial-carousel");

  // Check if required elements exist before proceeding
  if (!testimonialTrack || !testimonialSlides.length || !testimonialCarousel) {
    console.warn("Testimonial carousel elements not found");
    return;
  }

  let testimonialCurrentIndex = 0;
  const testimonialTotalSlides = testimonialSlides.length;
  let testimonialAutoAdvance;

  // Function to update carousel position - FIXED the transform calculation
  function updateTestimonialCarousel() {
    testimonialTrack.style.transform = `translateX(-${testimonialCurrentIndex * 100}%)`;
    
    // Update indicators if they exist
    if (testimonialIndicators.length) {
      testimonialIndicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === testimonialCurrentIndex);
      });
    }
  }

  // Indicator click - only if indicators exist
  if (testimonialIndicators.length) {
    testimonialIndicators.forEach((indicator) => {
      indicator.addEventListener("click", function () {
        testimonialCurrentIndex = parseInt(this.getAttribute("data-index"));
        updateTestimonialCarousel();
        resetAutoAdvance();
      });
    });
  }

  // Auto-advance carousel every 5 seconds
  function startAutoAdvance() {
    testimonialAutoAdvance = setInterval(function () {
      testimonialCurrentIndex = (testimonialCurrentIndex + 1) % testimonialTotalSlides;
      updateTestimonialCarousel();
    }, 5000);
  }

  // Reset auto-advance timer
  function resetAutoAdvance() {
    clearInterval(testimonialAutoAdvance);
    startAutoAdvance();
  }

  // Start auto-advance
  startAutoAdvance();

  // Pause auto-advance on hover
  testimonialCarousel.addEventListener("mouseenter", function () {
    clearInterval(testimonialAutoAdvance);
  });
  
  testimonialCarousel.addEventListener("mouseleave", function () {
    startAutoAdvance();
  });
});