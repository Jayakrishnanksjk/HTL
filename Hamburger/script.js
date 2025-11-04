const controlit = document.getElementById("burger");
const controlitMobile = document.getElementById("burgerMobile");

const menuToggle = gsap.timeline({ paused: true, reversed: true });

menuToggle
  .to(
    ".top",
    {
      duration: 0.25,
      y: 10,
      transformOrigin: "50% 50%",
      ease: "power2.inOut",
    },
    "burg"
  )
  .to(
    ".bot",
    {
      duration: 0.25,
      y: -10,
      transformOrigin: "50% 50%",
      ease: "power2.inOut",
    },
    "burg"
  )
  .add("rotate")
  .to(
    ".top",
    {
      duration: 0.25,
      rotationZ: 45,
      transformOrigin: "50% 50%",
      ease: "power2.inOut",
    },
    "rotate"
  )
  .to(
    ".bot",
    {
      duration: 0.25,
      rotationZ: -45,
      transformOrigin: "50% 50%",
      ease: "power2.inOut",
    },
    "rotate"
  );

function toggleMenu() {
  if (menuToggle.reversed()) {
    menuToggle.restart();
  } else {
    menuToggle.reverse();
  }
}

function openMenu() {
  menuToggle.restart();
}

function closeMenu() {
  menuToggle.reverse();
}

controlit.addEventListener("click", toggleMenu);
controlitMobile.addEventListener("click", toggleMenu);
