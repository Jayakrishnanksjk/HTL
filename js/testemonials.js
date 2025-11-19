// testimonial-rotator.js
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "A big thank you to the HTL Team and their key technical resources for their superb contingency coordination over the weekend. Their support was crucial for the seamless execution of our Risk Mitigation Activity. ",
    logo: "./images/Logo/brand-logos/morgan stanly.png",
  },
  {
    text: "Sincere gratitude for the team's support capacity throughout this mission-critical activity. Their proactive contributions significantly enhanced our overall project velocity and are a benchmark for high performance. ",
    logo: "./images/Logo/brand-logos/ncr.svg",
  },
  {
    text: "We commend the collective's exceptional support capacity demonstrated during the Power Shutdown Activity. The team's precise resource orchestration guaranteed on-time completion within the defined go-live schedule.",
    logo: "./images/Logo/brand-logos/tiaa.png",
  },
  {
    text: "The leadership team's meticulous attention to detail and consistent contributions were instrumental in achieving key performance indicators (KPIs) for the HVAC system deployment across the lab upgrades.",
    logo: "./images/Logo/brand-logos/netflix.png",

  },

  {
    text: "Appreciation for the Pune HTL Team's five years of outstanding HVAC lifecycle management for our portfolio. Their proactive maintenance cadence and commitment to customer-centricity maintain system operational efficiency.",
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
