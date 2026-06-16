// Initialize Lenis
const lenis = new Lenis({
  duration: 0.8, // moderate smoothness, slightly longer for smoother easing
  easing: (t) => t * (2 - t), // ease-out style: smooth at start, gently slows at end
  smooth: true, // enable smooth scroll
  smoothTouch: false, // disable extra touch smoothing (prevents lag)
  wheelMultiplier: 1, // adjust scroll speed, keep normal
  infinite: false, // document scroll stops at the real end
});

// Sync ScrollTrigger with Lenis
if (typeof ScrollTrigger !== "undefined") {
  lenis.on("scroll", ScrollTrigger.update);
}

// Drive Lenis via GSAP Ticker for perfect synchronization (fixes pin jitter/lag)
if (typeof gsap !== "undefined") {
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoother(0);
} else {
  // Fallback to normal RAF if GSAP is not loaded
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

