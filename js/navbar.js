function toggleNav() {
  const navbar = document.getElementById("navbar");
  const navbody = document.getElementById("navSection");
  const body = document.body;

  if (!navbar) {
    console.error("Navbar element not found!");
    return;
  }

  if (!navbody) {
    console.error("navSection element not found!");
    return;
  }

  const isExpanding = !navbar.classList.contains("expanded");

  if (isExpanding) {
    // Expand navbar using CSS transition
    lenis.stop();
    navbar.style.height = "100vh";

    // Disable body scroll
    openMenu();
    navbar.classList.add("expanded");
    // navbody.classList.add("show");

    // Wait until CSS transition completes (e.g. 0.3s)
    // Instead of guessing with setTimeout, you can bind to transitionend
    const onTransitionEnd = () => {
      navbody.classList.add("show");
      navbar.removeEventListener("transitionend", onTransitionEnd);
    };
    navbar.addEventListener("transitionend", onTransitionEnd);

    // Update button text
    const button = document.querySelector(".nav-toggle");
    // button.textContent = "Close";
  } else {
    // Collapse navbar using CSS transition
    navbar.style.height = "64px";

    // Enable body scroll
    closeMenu();
    navbody.classList.remove("show");
    navbar.classList.remove("expanded");
    lenis.start();
    // Update button text
    // const button = document.querySelector(".nav-toggle");
    // button.textContent = "Menu";
  }
}
