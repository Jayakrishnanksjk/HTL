// testimonial-rotator.js
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Big thank you to the HTL Team for superb contingency coordination. Their support was crucial for seamless Risk Mitigation.",
    logo: "./images/Logo/brand-logos/morgan stanly.png",
  },
  {
    text: "Sincere gratitude for the team’s superb support during this mission-critical activity. Their proactive contribution is a benchmark for high performance.",
    logo: "./images/Logo/brand-logos/ncr.svg",
  },
  {
    text: "We commend the collective's exceptional support capacity during Power Shutdown. Their precise orchestration ensured on-time completion.",
    logo: "./images/Logo/brand-logos/tiaa.webp",
  },
  {
    text: "The leadership team's meticulous attention to detail and consistent contributions were instrumental in achieving key performance indicators (KPIs) for the HVAC system deployment across the lab upgrades.",
    logo: "./images/Logo/brand-logos/netflix.webp",

  },
  {
    text: "Appreciation for the Pune HTL Team's five years of outstanding HVAC lifecycle management. Their proactive maintenance sustains system efficiency.",
    logo: "./images/Logo/brand-logos/WeWork 2.svg",
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
