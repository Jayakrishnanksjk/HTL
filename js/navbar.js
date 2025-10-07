// function toggleNav() {
//   const navbar = document.getElementById("navbar");
//   const navbody = document.getElementById("navSection"); // Correct with ID
//   const body = document.body;

//   if (!navbar) {
//     console.error("Navbar element not found!");
//     return;
//   }

//   if (!navbody) {
//     console.error("navSection element not found!");
//     return;
//   }

//   const isExpanding = !navbar.classList.contains("expanded");

//   if (isExpanding) {
//     // Expand navbar smoothly
//     gsap.to(navbar, {
//       height: "100vh",
//       duration: 0.4,
//       ease: "power2.inOut",
//     });

//     // Disable body scroll
//     navbar.classList.add("expanded");
//     navbody.classList.add("show"); // This will work now

//     // Update button text
//     const button = document.querySelector(".nav-toggle");
//     button.textContent = "Close";
//   } else {
//     // Collapse navbar smoothly
//     gsap.to(navbar, {
//       height: "64px",
//       duration: 0.4,
//       ease: "power2.inOut",
//     });

//     // Enable body scroll
//     navbar.classList.remove("expanded");
//     navbody.classList.remove("show"); // This will work now

//     // Update button text
//     const button = document.querySelector(".nav-toggle");
//     button.textContent = "Menu";
//   }
// }

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
    navbar.style.height = "100vh";

    // Disable body scroll
    navbar.classList.add("expanded");
    navbody.classList.add("show");
    lenis.stop();

    // Update button text
    const button = document.querySelector(".nav-toggle");
    button.textContent = "Close";
  } else {
    // Collapse navbar using CSS transition
    navbar.style.height = "64px";

    // Enable body scroll
    navbody.classList.remove("show");
    navbar.classList.remove("expanded");
    lenis.start();
    // Update button text
    const button = document.querySelector(".nav-toggle");
    button.textContent = "Menu";
  }
}

