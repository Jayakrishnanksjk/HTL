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

// Toggle entire mobile menu
// Mobile menu functionality with Lenis integration - FIXED VERSION
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  const mobileNavbar = document.getElementById("mobileNavbar");
  const mobileNavHeader = document.querySelector(".mobile-nav-header");

  // Toggle mobile menu
  mobileMenuToggle.addEventListener("click", function () {
    const isOpening = !mobileMenu.classList.contains("active");

    // Toggle menu active state
    openMenu();
    mobileMenu.classList.toggle("active");
    // Toggle navbar full-screen state
    mobileNavbar.classList.toggle("menu-active");
    // Toggle hamburger animation
    mobileMenuToggle.classList.toggle("active");

    if (isOpening) {
      // Pause Lenis when opening menu
      if (typeof lenis !== "undefined") {
        lenis.stop();
      }
      document.body.style.overflow = "hidden";
    } else {
      // Resume Lenis when closing menu
      if (typeof lenis !== "undefined") {
        lenis.start();
      }
      document.body.style.overflow = "";

      // Close all dropdowns when closing menu
      dropdownBtns.forEach((btn) => {
        btn.classList.remove("active");
        btn.nextElementSibling.classList.remove("show");
      });
    }
  });

  // Single dropdown functionality
  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const isActive = this.classList.contains("active");
      const dropdownContent = this.nextElementSibling;
      const isExpanding = !isActive;

      // Close all other dropdowns
      dropdownBtns.forEach((otherBtn) => {
        if (otherBtn !== this) {
          otherBtn.classList.remove("active");
          otherBtn.nextElementSibling.classList.remove("show");
        }
      });

      // Toggle current dropdown
      if (isExpanding) {
        // Pause Lenis when expanding dropdown
        if (typeof lenis !== "undefined") {
          lenis.stop();
        }
        this.classList.add("active");
        dropdownContent.classList.add("show");
      } else {
        // Resume Lenis when collapsing dropdown
        if (typeof lenis !== "undefined") {
          lenis.start();
        }
        this.classList.remove("active");
        dropdownContent.classList.remove("show");
      }
    });
  });

  // Close menu when clicking on links
  const menuLinks = document.querySelectorAll(".dropdown-content a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Resume Lenis when navigating
      if (typeof lenis !== "undefined") {
        lenis.start();
      }

      // Close menu and reset states
      mobileMenu.classList.remove("active");
      mobileNavbar.classList.remove("menu-active");
      mobileMenuToggle.classList.remove("active");
      document.body.style.overflow = "";
      closeMenu();

      // Close all dropdowns
      dropdownBtns.forEach((btn) => {
        btn.classList.remove("active");
        btn.nextElementSibling.classList.remove("show");
      });
    });
  });

  // Close menu when clicking outside (optional)
  document.addEventListener("click", function (event) {
    if (
      !mobileNavbar.contains(event.target) &&
      mobileMenu.classList.contains("active")
    ) {
      // Close menu and reset states
      mobileMenu.classList.remove("active");
      mobileNavbar.classList.remove("menu-active");
      mobileMenuToggle.classList.remove("active");
      document.body.style.overflow = "";

      // Close all dropdowns
      dropdownBtns.forEach((btn) => {
        btn.classList.remove("active");
        btn.nextElementSibling.classList.remove("show");
      });

      // Resume Lenis
      if (typeof lenis !== "undefined") {
        lenis.start();
      }
    }
  });
});
