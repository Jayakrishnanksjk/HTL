const controlit = document.getElementById("burger");

const menuToggle = gsap.timeline({ paused: true, reversed: true });

menuToggle
  .to(".top", { duration: 0.25, y: 10, transformOrigin: "50% 50%", ease: "power2.inOut" }, "burg")
  .to(".bot", { duration: 0.25, y: -10, transformOrigin: "50% 50%", ease: "power2.inOut" }, "burg")
  .add("rotate")
  .to(".top", { duration: 0.25, rotationZ: 45, transformOrigin: "50% 50%", ease: "power2.inOut" }, "rotate")
  .to(".bot", { duration: 0.25, rotationZ: -45, transformOrigin: "50% 50%", ease: "power2.inOut" }, "rotate");

controlit.addEventListener("click", () => {
  if (menuToggle.reversed()) {
    menuToggle.restart();
  } else {
    menuToggle.reverse();
  }
});

 function openMenu() {
    menuToggle.restart(); // play forward
  }

  function closeMenu() {
    menuToggle.reverse(); // play backward
  }
