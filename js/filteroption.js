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




// const projects = document.querySelectorAll(".new-project-card");
// const sectorDropdown = document.getElementById("projectSectorDropdown");
// const serviceDropdown = document.getElementById("projectServiceDropdown");
// const clearBtn = document.getElementById("clearProjectFilters");

// let selectedSectors = [];
// let selectedServices = [];


// document.querySelectorAll(".project-dropdown-btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const parent = btn.parentElement;
//     parent.classList.toggle("open");
//     document.querySelectorAll(".project-dropdown").forEach((d) => {
//       if (d !== parent) d.classList.remove("open");
//     });
//   });
// });


// document.addEventListener("click", (e) => {
//   if (!e.target.closest(".project-dropdown")) {
//     document.querySelectorAll(".project-dropdown")
//       .forEach((d) => d.classList.remove("open"));
//   }
// });


// function applyFilters() {
//   projects.forEach((p) => {

//     const cardSectors = p.dataset.sector.split(" ");
//     const sectorMatch =
//       selectedSectors.length === 0 ||
//       cardSectors.some((s) => selectedSectors.includes(s));


//     const cardServices = p.dataset.service.split(" ");
//     const serviceMatch =
//       selectedServices.length === 0 ||
//       cardServices.some((s) => selectedServices.includes(s));


//     if (sectorMatch && serviceMatch) {
//       p.classList.remove("hidden");
//     } else {
//       p.classList.add("hidden");
//     }
//   });


//   const params = new URLSearchParams();
//   if (selectedSectors.length)
//     params.set("sector", selectedSectors.join(","));
//   if (selectedServices.length)
//     params.set("service", selectedServices.join(","));
  
//   history.replaceState({}, "", `${location.pathname}?${params.toString()}`);
// }








// function handleCheckboxChange(list, e) {
//   const value = e.target.value;
//   if (e.target.checked) list.push(value);
//   else list.splice(list.indexOf(value), 1);

//   applyFilters();
// }

// if (sectorDropdown) {
//   sectorDropdown.querySelectorAll("input").forEach((cb) => {
//     cb.addEventListener("change", (e) =>
//       handleCheckboxChange(selectedSectors, e)
//     );
//   });
// }


// serviceDropdown.querySelectorAll("input").forEach((cb) => {
//   cb.addEventListener("change", (e) =>
//     handleCheckboxChange(selectedServices, e)
//   );
// });


// clearBtn.addEventListener("click", () => {
//   selectedSectors = [];
//   selectedServices = [];

//   document.querySelectorAll(".project-dropdown-content input")
//     .forEach((cb) => (cb.checked = false));

//   applyFilters();
// });


// window.addEventListener("DOMContentLoaded", () => {
//   const params = new URLSearchParams(location.search);

//   const s1 = params.get("sector")?.split(",") || [];
//   const s2 = params.get("service")?.split(",") || [];

//   if (sectorDropdown) {
//     document.querySelectorAll("#projectSectorDropdown input").forEach((cb) => {
//       if (s1.includes(cb.value)) {
//         cb.checked = true;
//         selectedSectors.push(cb.value);
//       }
//     });
//   }

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

// Dropdown open/close for buttons
document.querySelectorAll(".project-dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const parent = btn.parentElement;
    parent.classList.toggle("open");
    document.querySelectorAll(".project-dropdown").forEach((d) => {
      if (d !== parent) d.classList.remove("open");
    });
  });
});

// Close dropdown on outside click (but NOT when clicking inside dropdown content)
document.addEventListener("click", (e) => {
  // Only close if clicking outside ALL dropdown elements
  if (!e.target.closest(".project-dropdown")) {
    document.querySelectorAll(".project-dropdown")
      .forEach((d) => d.classList.remove("open"));
  }
});

// Close dropdowns when clear filter is clicked
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".project-dropdown")
      .forEach((d) => d.classList.remove("open"));
  });
}

function applyFilters() {
  projects.forEach((p) => {
    // Sector logic
    const cardSectors = p.dataset.sector.split(" ");
    const sectorMatch =
      selectedSectors.length === 0 ||
      cardSectors.some((s) => selectedSectors.includes(s));

    // Service logic
    const cardServices = p.dataset.service.split(" ");
    const serviceMatch =
      selectedServices.length === 0 ||
      cardServices.some((s) => selectedServices.includes(s));

    // Final condition → must match BOTH
    if (sectorMatch && serviceMatch) {
      p.classList.remove("hidden");
    } else {
      p.classList.add("hidden");
    }
  });

  // Update URL
  const params = new URLSearchParams();
  if (selectedSectors.length)
    params.set("sector", selectedSectors.join(","));
  if (selectedServices.length)
    params.set("service", selectedServices.join(","));
  
  if (params.toString()) {
    history.replaceState({}, "", `${location.pathname}?${params.toString()}`);
  } else {
    history.replaceState({}, "", location.pathname);
  }
}

function handleCheckboxChange(list, e) {
  const value = e.target.value;
  
  // IMPORTANT: Prevent event from bubbling up to document
  e.stopPropagation();
  
  if (e.target.checked) {
    if (!list.includes(value)) list.push(value);
  } else {
    const index = list.indexOf(value);
    if (index > -1) list.splice(index, 1);
  }

  applyFilters();
  // Do NOT close the dropdown here
}

// Sector listener - prevent closing when clicking checkbox
if (sectorDropdown) {
  sectorDropdown.querySelectorAll("input[type='checkbox']").forEach((cb) => {
    cb.addEventListener("click", (e) => e.stopPropagation());
    cb.addEventListener("change", (e) => handleCheckboxChange(selectedSectors, e));
  });
}

// Service listener - prevent closing when clicking checkbox
if (serviceDropdown) {
  serviceDropdown.querySelectorAll("input[type='checkbox']").forEach((cb) => {
    cb.addEventListener("click", (e) => e.stopPropagation());
    cb.addEventListener("change", (e) => handleCheckboxChange(selectedServices, e));
  });
}

// Clear button - updated to close dropdowns
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation(); // Also stop propagation for clear button
  
  selectedSectors = [];
  selectedServices = [];

  document
    .querySelectorAll(".project-dropdown-content input")
    .forEach((cb) => (cb.checked = false));

  // Close all dropdowns when clearing
  document.querySelectorAll(".project-dropdown")
    .forEach((d) => d.classList.remove("open"));
    
  applyFilters();
});

// Load from URL
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);

  const s1 = params.get("sector")?.split(",") || [];
  const s2 = params.get("service")?.split(",") || [];

  if (sectorDropdown) {
    document.querySelectorAll("#projectSectorDropdown input[type='checkbox']").forEach((cb) => {
      if (s1.includes(cb.value)) {
        cb.checked = true;
        selectedSectors.push(cb.value);
      }
    });
  }

  if (serviceDropdown) {
    document.querySelectorAll("#projectServiceDropdown input[type='checkbox']").forEach((cb) => {
      if (s2.includes(cb.value)) {
        cb.checked = true;
        selectedServices.push(cb.value);
      }
    });
  }

  applyFilters();
});