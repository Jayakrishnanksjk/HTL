const projects = document.querySelectorAll(".new-project-card");
const sectorDropdown = document.getElementById("projectSectorDropdown");
const serviceDropdown = document.getElementById("projectServiceDropdown");
const clearBtn = document.getElementById("clearProjectFilters");

let selectedSectors = [];
let selectedServices = [];

// Toggle dropdown open/close
document.querySelectorAll(".project-dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parent = btn.parentElement;
    parent.classList.toggle("open");
    document.querySelectorAll(".project-dropdown").forEach((d) => {
      if (d !== parent) d.classList.remove("open");
    });
  });
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".project-dropdown")) {
    document
      .querySelectorAll(".project-dropdown")
      .forEach((d) => d.classList.remove("open"));
  }
});

function applyFilters() {
  projects.forEach((p) => {
    const serviceMatch =
      selectedServices.length === 0 ||
      selectedServices.includes(p.dataset.service);
    const sectorMatch =
      selectedSectors.length === 0 ||
      selectedSectors.includes(p.dataset.sector);
    p.style.display = serviceMatch && sectorMatch ? "block" : "none";
  });

  const params = new URLSearchParams();
  if (selectedServices.length)
    params.set("service", selectedServices.join(","));
  if (selectedSectors.length) params.set("sector", selectedSectors.join(","));
  history.replaceState({}, "", `${location.pathname}?${params.toString()}`);
}

function handleCheckboxChange(list, e) {
  const value = e.target.value;
  if (e.target.checked) {
    list.push(value);
  } else {
    const index = list.indexOf(value);
    if (index > -1) list.splice(index, 1);
  }
  applyFilters();
}

// Watch checkboxes
sectorDropdown.querySelectorAll("input").forEach((cb) => {
  cb.addEventListener("change", (e) =>
    handleCheckboxChange(selectedSectors, e)
  );
});

serviceDropdown.querySelectorAll("input").forEach((cb) => {
  cb.addEventListener("change", (e) =>
    handleCheckboxChange(selectedServices, e)
  );
});

clearBtn.addEventListener("click", () => {
  selectedSectors = [];
  selectedServices = [];
  document
    .querySelectorAll(".project-dropdown-content input")
    .forEach((cb) => (cb.checked = false));
  applyFilters();
});

// Apply URL filters
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const s1 = params.get("sector")?.split(",") || [];
  const s2 = params.get("service")?.split(",") || [];

  document.querySelectorAll("#projectSectorDropdown input").forEach((cb) => {
    if (s1.includes(cb.value)) {
      cb.checked = true;
      selectedSectors.push(cb.value);
    }
  });

  document.querySelectorAll("#projectServiceDropdown input").forEach((cb) => {
    if (s2.includes(cb.value)) {
      cb.checked = true;
      selectedServices.push(cb.value);
    }
  });

  applyFilters();
});
