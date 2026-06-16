gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.defaults({
  anticipatePin: 1
});


createHorizontalScrollById(
  "projectHomePageSection",
  "projectHomePageSectionInner"
);

createHorizontalScrollById("projectSectorSection", "projectSectorSectionInner");

createHorizontalScrollById(
  "projectTeamPageManagement",
  "projectTeamPageManagementInner"
);

createHorizontalScrollById(
  "teamManagement",
  "teamManagementInner"
);

createHorizontalScrollById(
  "teamMembers",
  "teamMembersInner"
);


createHorizontalScrollById(
  "timelinemobilescroll",
  "timelinemobilescrollInner"
);

createHorizontalScrollById("newsHomePageSection", "newsHomePageSectionInner");

// Calculate scroll distance (total width - viewport)
const scrollWidth = inner.scrollWidth;
const viewportWidth = window.innerWidth;

function createHorizontalScrollById(sectionId, innerId) {
  const section = document.getElementById(sectionId);
  const inner = document.getElementById(innerId);
  if (!section || !inner) return;

  const style = getComputedStyle(inner);
  const marginLeft = parseFloat(style.marginLeft) || 0;
  const marginRight = parseFloat(style.marginRight) || 0;
  const extra = marginLeft + marginRight;
  const scrollDistance = inner.scrollWidth + extra - window.innerWidth;

  gsap.to(inner, {
    x: -scrollDistance,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: `+=${scrollDistance}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}

function createHorizontalScroll(sectionSelector, innerSelector) {
  const section = document.querySelector(sectionSelector);
  const inner = section.querySelector(innerSelector);
  const style = getComputedStyle(inner);
  const marginLeft = parseFloat(style.marginLeft) || 0;
  const marginRight = parseFloat(style.marginRight) || 0;
  const extra = marginLeft + marginRight;
  const scrollDistance = inner.scrollWidth + extra - window.innerWidth;

  gsap.to(inner, {
    x: -scrollDistance,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: `+=${scrollDistance}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}
