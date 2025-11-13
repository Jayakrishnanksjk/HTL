// const projects = document.querySelectorAll(".new-project-card");
// const sectorDropdown = document.getElementById("projectSectorDropdown");
// const serviceDropdown = document.getElementById("projectServiceDropdown");
// const clearBtn = document.getElementById("clearProjectFilters");

// let selectedSectors = [];
// let selectedServices = [];


// document.querySelectorAll(".project-dropdown-btn").forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const parent = btn.parentElement;
//     parent.classList.toggle("open");
//     document.querySelectorAll(".project-dropdown").forEach((d) => {
//       if (d !== parent) d.classList.remove("open");
//     });
//   });
// });


// document.addEventListener("click", (e) => {
//   if (!e.target.closest(".project-dropdown")) {
//     document
//       .querySelectorAll(".project-dropdown")
//       .forEach((d) => d.classList.remove("open"));
//   }
// });

// function applyFilters() {
//   projects.forEach((p) => {
//     const serviceMatch =
//       selectedServices.length === 0 ||
//       selectedServices.includes(p.dataset.service);
//     const sectorMatch =
//       selectedSectors.length === 0 ||
//       selectedSectors.includes(p.dataset.sector);
//     p.style.display = serviceMatch && sectorMatch ? "block" : "none";
//   });

//   const params = new URLSearchParams();
//   if (selectedServices.length)
//     params.set("service", selectedServices.join(","));
//   if (selectedSectors.length) params.set("sector", selectedSectors.join(","));
//   history.replaceState({}, "", `${location.pathname}?${params.toString()}`);
// }

// function handleCheckboxChange(list, e) {
//   const value = e.target.value;
//   if (e.target.checked) {
//     list.push(value);
//   } else {
//     const index = list.indexOf(value);
//     if (index > -1) list.splice(index, 1);
//   }
//   applyFilters();
// }


// sectorDropdown.querySelectorAll("input").forEach((cb) => {
//   cb.addEventListener("change", (e) =>
//     handleCheckboxChange(selectedSectors, e)
//   );
// });

// serviceDropdown.querySelectorAll("input").forEach((cb) => {
//   cb.addEventListener("change", (e) =>
//     handleCheckboxChange(selectedServices, e)
//   );
// });

// clearBtn.addEventListener("click", () => {
//   selectedSectors = [];
//   selectedServices = [];
//   document
//     .querySelectorAll(".project-dropdown-content input")
//     .forEach((cb) => (cb.checked = false));
//   applyFilters();
// });


// window.addEventListener("DOMContentLoaded", () => {
//   const params = new URLSearchParams(location.search);
//   const s1 = params.get("sector")?.split(",") || [];
//   const s2 = params.get("service")?.split(",") || [];

//   document.querySelectorAll("#projectSectorDropdown input").forEach((cb) => {
//     if (s1.includes(cb.value)) {
//       cb.checked = true;
//       selectedSectors.push(cb.value);
//     }
//   });

//   document.querySelectorAll("#projectServiceDropdown input").forEach((cb) => {
//     if (s2.includes(cb.value)) {
//       cb.checked = true;
//       selectedServices.push(cb.value);
//     }
//   });

//   applyFilters();
// });




const projects = document.querySelectorAll(".new-project-card");
const sectorDropdown = document.getElementById("projectSectorDropdown");
const serviceDropdown = document.getElementById("projectServiceDropdown");
const clearBtn = document.getElementById("clearProjectFilters");

let selectedSectors = [];
let selectedServices = [];

// Dropdown open/close
document.querySelectorAll(".project-dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    parent.classList.toggle("open");
    document.querySelectorAll(".project-dropdown").forEach((d) => {
      if (d !== parent) d.classList.remove("open");
    });
  });
});

// Close dropdown on outside click
document.addEventListener("click", (e) => {
  if (!e.target.closest(".project-dropdown")) {
    document.querySelectorAll(".project-dropdown")
      .forEach((d) => d.classList.remove("open"));
  }
});

// function applyFilters() {
//   projects.forEach((p) => {
//     const serviceMatch =
//       selectedServices.length === 0 ||
//       selectedServices.includes(p.dataset.service);

//     if (serviceMatch) {
//       p.classList.remove("hidden");
//     } else {
//       p.classList.add("hidden");
//     }
//   });

//   const params = new URLSearchParams();
//   if (selectedServices.length)
//     params.set("service", selectedServices.join(","));

//   history.replaceState({}, "", `${location.pathname}?${params.toString()}`);
// }

function applyFilters() {
  projects.forEach((p) => {
    // Split card's services into array → ["virtual", "interior"]
    const cardServices = p.dataset.service.split(" ");

    // Check if ANY service matches the selected ones
    const serviceMatch =
      selectedServices.length === 0 ||
      cardServices.some((s) => selectedServices.includes(s));

    if (serviceMatch) {
      p.classList.remove("hidden");  // SHOW the card
    } else {
      p.classList.add("hidden");     // HIDE the card
    }
  });

  // Update URL
  const params = new URLSearchParams();
  if (selectedServices.length)
    params.set("service", selectedServices.join(","));
  history.replaceState({}, "", `${location.pathname}?${params.toString()}`);
}







function handleCheckboxChange(list, e) {
  const value = e.target.value;
  if (e.target.checked) list.push(value);
  else list.splice(list.indexOf(value), 1);

  applyFilters();
}

// ✔ Safe sector listener
if (sectorDropdown) {
  sectorDropdown.querySelectorAll("input").forEach((cb) => {
    cb.addEventListener("change", (e) =>
      handleCheckboxChange(selectedSectors, e)
    );
  });
}

// Service listener
serviceDropdown.querySelectorAll("input").forEach((cb) => {
  cb.addEventListener("change", (e) =>
    handleCheckboxChange(selectedServices, e)
  );
});

// Clear button
clearBtn.addEventListener("click", () => {
  selectedSectors = [];
  selectedServices = [];

  document.querySelectorAll(".project-dropdown-content input")
    .forEach((cb) => (cb.checked = false));

  applyFilters();
});

// Load from URL
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);

  const s1 = params.get("sector")?.split(",") || [];
  const s2 = params.get("service")?.split(",") || [];

  if (sectorDropdown) {
    document.querySelectorAll("#projectSectorDropdown input").forEach((cb) => {
      if (s1.includes(cb.value)) {
        cb.checked = true;
        selectedSectors.push(cb.value);
      }
    });
  }

  document.querySelectorAll("#projectServiceDropdown input").forEach((cb) => {
    if (s2.includes(cb.value)) {
      cb.checked = true;
      selectedServices.push(cb.value);
    }
  });

  applyFilters();
});
