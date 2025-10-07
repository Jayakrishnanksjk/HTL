// Initialize Lenis
const lenis = new Lenis({
  duration: 1.1, // smooth scrolling duration
  easing: (t) => t, // linear easing
  smooth: true, // enable smooth scrolling
  smoothTouch: false, // optional: disable smooth for touch
});

// RAF loop to drive Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
