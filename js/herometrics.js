gsap.registerPlugin(ScrollTrigger);

function createStatCycle(
  containerId,
  altTitle,
  altNumber,
  baseTitle,
  baseNumber,
  duration = 4
) {
  const stat = document.getElementById(containerId);
  if (!stat) return;

  const title = stat.querySelector(".stats-title");
  const number = stat.querySelector("h2");
  const hr = stat.querySelector("hr");

  let toggled = false;

  function loop() {
    gsap.fromTo(
      hr,
      { width: "0%" },
      {
        width: "100%",
        duration,
        ease: "power1.inOut",
        onComplete: () => {
          toggled = !toggled;

          gsap.to([title, number], {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
              title.textContent = toggled ? altTitle : baseTitle;
              number.textContent = toggled ? altNumber : baseNumber;
              gsap.fromTo(
                [title, number],
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
              );
            },
          });

          gsap.to(hr, { width: "0%", duration: 0.2, onComplete: loop });
        },
      }
    );
  }

  loop();
}

window.addEventListener("DOMContentLoaded", () => {
  createStatCycle(
    "statClients",
    "Team Strength",
    "3000",
    "Clients served",
    "100+"
  );
  createStatCycle(
    "statProjects",
    "HP",
    "12,000+",
    "Sq. Ft. Covered",
    "20M+"
  );
  createStatCycle(
    "statCountries",
    "IT Loads",
    "200 MW",
    "CSAT Score",
    "96%"
  );
  createStatCycle(
    "statYears",
    "Presence",
    "30+",
    "Team Strength",
    "500+"
  );
});
