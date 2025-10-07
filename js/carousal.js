document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".projects-carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const cards = document.querySelectorAll(".project-card");

  // Check if essential elements exist
  if (!carousel || !prevBtn || !nextBtn || cards.length === 0) {
    console.warn("Carousel elements not found");
    return;
  }

  const cardWidth = cards[0].offsetWidth + 30; // width + gap

  let currentPosition = 0;
  const maxPosition = (cards.length - 3) * cardWidth;
  let autoScrollInterval;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentPosition}px)`;

    // Show/hide buttons based on position
    prevBtn.style.opacity = currentPosition === 0 ? "0.5" : "1";
    nextBtn.style.opacity = currentPosition >= maxPosition ? "0.5" : "1";
    prevBtn.disabled = currentPosition === 0;
    nextBtn.disabled = currentPosition >= maxPosition;
  }

  function nextSlide() {
    if (currentPosition < maxPosition) {
      currentPosition += cardWidth;
    } else {
      currentPosition = 0; // Loop back to start
    }
    updateCarousel();
  }

  function prevSlide() {
    if (currentPosition > 0) {
      currentPosition -= cardWidth;
    } else {
      currentPosition = maxPosition; // Loop to end
    }
    updateCarousel();
  }

  function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  // Event listeners for manual controls
  prevBtn.addEventListener("click", function () {
    stopAutoScroll();
    prevSlide();
    startAutoScroll();
  });

  nextBtn.addEventListener("click", function () {
    stopAutoScroll();
    nextSlide();
    startAutoScroll();
  });

  // Pause auto-scroll on hover
  carousel.addEventListener("mouseenter", stopAutoScroll);
  carousel.addEventListener("mouseleave", startAutoScroll);

  // Initialize
  updateCarousel();
  startAutoScroll();
});
