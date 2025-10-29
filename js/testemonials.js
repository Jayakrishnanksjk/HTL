// testimonial-rotator.js
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "HTL delivered beyond expectations on time, on spec,<br>and with unmatched professionalism.",
    logo: "./images/Logo/brand-logos/Amazon_2024 2.svg",
  },
  {
    text: "A flawless experience from start to finish. The team’s technical depth is exceptional.",
    logo: "./images/Logo/brand-logos/IBM.png",
  },
  {
    text: "They turned our complex vision into a seamless digital solution that just works.",
    logo: "./images/Logo/brand-logos/gorej.png",
  },
  {
    text: "Reliable, precise, and truly collaborative — HTL set a new benchmark for our partners.",
    logo: "./images/Logo/brand-logos/netflix.png",
  },
];

const textEl = document.getElementById("testemonialText");
const logoEl = document.getElementById("testemonialLogo");

let index = 0;

function cycleTestimonials() {
  const next = (index + 1) % testimonials.length;
  const nextData = testimonials[next];

  // Fade out current
  gsap.to([textEl, logoEl], {
    opacity: 0,
    y: -10,
    duration: 0.6,
    ease: "power2.out",
    onComplete: () => {
      // Replace content
      textEl.innerHTML = nextData.text;
      logoEl.src = nextData.logo;

      // Fade in new
      gsap.fromTo(
        [textEl, logoEl],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

      index = next;
      // Loop again
      gsap.delayedCall(5, cycleTestimonials); // 5s per slide
    },
  });
}

window.addEventListener("DOMContentLoaded", () => {
  gsap.set([textEl, logoEl], { opacity: 1 });
  gsap.delayedCall(4, cycleTestimonials);
});
