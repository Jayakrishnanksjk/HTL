
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Sync with ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);
gsap.registerPlugin(ScrollTrigger);

createHorizontalScroll(".nextsection", ".innerwarap");

// Calculate scroll distance (total width - viewport)
const scrollWidth = inner.scrollWidth;
const viewportWidth = window.innerWidth;

function createHorizontalScroll(sectionSelector, innerSelector) {
  const section = document.querySelector(sectionSelector);
  const inner = section.querySelector(innerSelector);
  const style = getComputedStyle(inner);
  const marginLeft = parseFloat(style.marginLeft) || 0;
  const marginRight = parseFloat(style.marginRight) || 0;
  const extra = marginLeft + marginRight;
  const scrollDistance = inner.scrollWidth + extra - window.innerWidth;
  // const scrollDistance = inner.scrollWidth - window.innerWidth;

  gsap.to(inner, {
    x: -scrollDistance,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: `+=${scrollDistance}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}
