// Initialize Lenis
const lenis = new Lenis({
  duration: 0.8, // moderate smoothness, slightly longer for smoother easing
  easing: (t) => t * (2 - t), // ease-out style: smooth at start, gently slows at end
  smooth: true, // enable smooth scroll
  smoothTouch: false, // disable extra touch smoothing (prevents lag)
  wheelMultiplier: 1, // adjust scroll speed, keep normal
  infinite: false, // document scroll stops at the real end
});

// RAF loop to drive Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
