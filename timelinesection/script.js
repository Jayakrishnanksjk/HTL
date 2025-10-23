// gsap.registerPlugin(ScrollTrigger);

// const lenis = new Lenis({
//   smoothWheel: true,
//   smoothTouch: false,
// });

// Sync Lenis + GSAP

const historyWrapper = document.getElementById("histroyWrapper");
const historyYears = document.getElementById("historyYears");

historyYears.style.opacity = 0;

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// After DOM ready
window.addEventListener("load", () => {
  document
    .querySelectorAll(".history-trigger .history-item")
    .forEach((item) => {
      const id = item.id;

      // Collect all linked elements: year, detail, and image
      const related = document.querySelectorAll(
        `[data-id="${id}"], #${id}, .history-images [data-id="${id}"]`
      );

      gsap.to(historyYears, {
        scrollTrigger: {
          trigger: historyWrapper,
          start: "top center",
          end: "bottom center",
          toggleClass: { targets: historyYears, className: "visible" },
          onEnter: () => (historyYears.style.opacity = 1),
          onLeave: () => (historyYears.style.opacity = 0),
          onEnterBack: () => (historyYears.style.opacity = 1),
          onLeaveBack: () => (historyYears.style.opacity = 0),
        },
      });

      // Create ScrollTrigger for each history item
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top center",
          end: "bottom center",
          toggleClass: { targets: related, className: "active" },
        },
      });
    });
});
