const statGroups = document.querySelectorAll(".stats-group");
let current = 0;

setInterval(() => {
  statGroups[current].classList.remove("active");
  current = (current + 1) % statGroups.length;
  statGroups[current].classList.add("active");
}, 4000); // switch every 4 seconds
