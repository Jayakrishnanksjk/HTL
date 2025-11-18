const statGroups = document.querySelectorAll(".stats-group");
let current = 0;

setInterval(() => {
  statGroups[current].classList.remove("active");
  current = (current + 1) % statGroups.length;
  statGroups[current].classList.add("active");
}, 4000); 





const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
    scrollBtn.classList.remove("hide");
  } else {
    scrollBtn.classList.add("hide");
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
