const WHATSAPP_PHONE = "918248504272";

const projects = {
  tiles: [
    {
      title: "Living Room Large-Format Tiles",
      location: "Living room · Tile fitting",
      image: "photo-1600210492486-724fe5c67fb0",
      alt: "Bright open-plan living room with a pale stone tile floor",
    },
    {
      title: "Bathroom Wall & Floor Tiling",
      location: "Bathroom · Wall and floor tile",
      image: "photo-1600566753190-17f0baa2a6c3",
      alt: "Modern bathroom with refined stone surfaces and tile detail",
    },
    {
      title: "Marble Flooring Installation",
      location: "Residential · Marble flooring",
      image: "photo-1600607687939-ce8a6c25118c",
      alt: "Contemporary home interior with a large-format stone floor",
    },
  ],
  epoxy: [
    {
      title: "Glossy Epoxy Grout Finish",
      location: "Tile joints · Epoxy grouting",
      image: "photo-1600566753086-00f18fb6b3ea",
      alt: "Cleanly finished bathroom tile joints and grout lines",
    },
    {
      title: "Epoxy Grout Application",
      location: "Floor finish · Grout application",
      image: "photo-1600607687920-4e2a09cf159d",
      alt: "Close interior view of a carefully grouted tile installation",
    },
    {
      title: "Stain-Resistant Kitchen Floor",
      location: "Kitchen · Joint finishing",
      image: "photo-1600607687644-c7171b42498f",
      alt: "Modern kitchen with clean tile lines and finished surfaces",
    },
  ],
  cleaning: [
    {
      title: "Deep Tile Floor Cleaning",
      location: "Residential · Floor cleaning",
      image: "photo-1600607687939-ce8a6c25118c",
      alt: "Light stone floor in a bright, freshly cleaned home",
    },
    {
      title: "Tile & Grout Restoration",
      location: "Bathroom · Grout cleaning",
      image: "photo-1600566753190-17f0baa2a6c3",
      alt: "Refreshed tiled bathroom with a clean grout finish",
    },
    {
      title: "Marble Polishing",
      location: "Residential · Floor restoration",
      image: "photo-1600210492486-724fe5c67fb0",
      alt: "Clean tiled floor in a finished residential interior",
    },
  ],
};

const tileProcedures = {
  "1-3": {
    index: "01",
    title: "Small-format tiles · 1–3 ft",
    intro: "A careful, consistent layout helps smaller tiles create a neat finish with even joints.",
    steps: [
      "Check the floor or wall is sound, clean, dry and suitable for tiling; repair uneven areas before starting.",
      "Measure the space and mark guide lines so tile cuts are balanced at the edges.",
      "Spread tile adhesive recommended for the tile and surface, working in manageable sections.",
      "Set tiles along the guide lines, using spacers to keep joints even and checking alignment as you go.",
      "Allow the adhesive to cure as directed, then grout the joints and clean the tile faces.",
    ],
  },
  "3-6": {
    index: "02",
    title: "Medium-format tiles · 3–6 ft",
    intro: "Larger pieces need deliberate setting-out and consistent adhesive coverage for a smooth, aligned result.",
    steps: [
      "Check the substrate is stable, clean and flat enough for the selected tile; correct high and low spots first.",
      "Dry-lay and mark the layout, accounting for grout joints, edges and openings before cutting.",
      "Use an adhesive approved for the tile size and substrate; apply it evenly in small working areas.",
      "Set each tile carefully with consistent spacers and leveling aids where appropriate, checking for lippage.",
      "Respect the adhesive cure time before grouting, then clean and protect the finished surface.",
    ],
  },
  "6-8": {
    index: "03",
    title: "Large-format tiles · 6–8 ft",
    intro: "Large-format work calls for a flatter substrate, careful handling and close attention to adhesive coverage.",
    steps: [
      "Verify substrate flatness against the tile and adhesive requirements; prepare and level the surface before installation.",
      "Plan the layout and movement joints for the room, following the tile and installation-system guidance.",
      "Select a compatible large-format adhesive and application method for the tile and substrate.",
      "Handle and position tiles with suitable lifting tools; achieve the specified adhesive coverage and alignment.",
      "Allow the full recommended cure time before grouting or loading the floor.",
    ],
  },
  "8-12": {
    index: "04",
    title: "Extra-large tiles · 8–12 ft",
    intro: "Extra-large panels require specialist planning, a highly prepared substrate and safe multi-person handling.",
    steps: [
      "Confirm the substrate, room access and tile handling plan are suitable before work begins.",
      "Prepare a very flat, stable surface to the tile and installation-system tolerances.",
      "Set out panel positions, cuts and movement joints in advance; use the adhesive system specified for the tile.",
      "Use trained installers and appropriate panel-lifting equipment to place panels safely and achieve full specified support.",
      "Protect the installation while it cures, then finish joints and clean according to the product instructions.",
    ],
  },
};

const grid = document.querySelector("#project-grid");
const panel = document.querySelector("#portfolio-content");
const aboutPanel = document.querySelector("#portfolio-about");
const tabs = [...document.querySelectorAll(".category-tab")];
const tileSizeExplorer = document.querySelector("#tile-size-explorer");
const tileSizeTabs = [...document.querySelectorAll(".tile-size-tab")];
const epoxyGuidance = document.querySelector("#epoxy-guidance");
const procedurePanel = document.querySelector("#tile-procedure-panel");
const procedureIndex = document.querySelector("#procedure-index");
const procedureTitle = document.querySelector("#procedure-title");
const procedureIntro = document.querySelector("#procedure-intro");
const procedureSteps = document.querySelector("#procedure-steps");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxCaption = document.querySelector(".lightbox-caption");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-navigation");
let revealObserver;
function renderProjects(category) {
  grid.replaceChildren(...projects[category].map((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";
    if (revealObserver) {
      card.classList.add("reveal");
      card.style.setProperty("--reveal-delay", `${index * 90}ms`);
    }

    const imageButton = document.createElement("button");
    imageButton.className = "project-image-button";
    imageButton.type = "button";
    imageButton.setAttribute("aria-label", `View larger image: ${project.title}`);
    imageButton.dataset.image = `https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1800&q=90`;
    imageButton.dataset.alt = project.alt;
    imageButton.dataset.caption = project.title;

    const image = document.createElement("img");
    image.src = `https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=850&q=82`;
    image.alt = project.alt;
    image.loading = "lazy";
    image.decoding = "async";

    const zoomLabel = document.createElement("span");
    zoomLabel.className = "project-zoom";
    zoomLabel.setAttribute("aria-hidden", "true");
    zoomLabel.textContent = "View image ↗";
    imageButton.append(image, zoomLabel);

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;
    const location = document.createElement("p");
    location.className = "project-location";
    location.textContent = project.location;
    card.append(imageButton, title, location);
    return card;
  }));
  if (revealObserver) {
    grid.querySelectorAll(".project-card").forEach((card) => revealObserver.observe(card));
  }
}

function selectCategory(category, shouldScroll = false) {
  const tab = tabs.find((item) => item.dataset.category === category);
  if (!tab) return;

  tabs.forEach((item) => {
    const isSelected = item === tab;
    item.classList.toggle("is-active", isSelected);
    item.setAttribute("aria-selected", String(isSelected));
    item.tabIndex = isSelected ? 0 : -1;
  });
  panel.setAttribute("aria-labelledby", tab.id);
  grid.hidden = category === "about";
  aboutPanel.hidden = category !== "about";
  tileSizeExplorer.hidden = category !== "tiles";
  epoxyGuidance.hidden = category !== "epoxy";
  if (category !== "about") renderProjects(category);
  if (shouldScroll) document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
}

function selectTileSize(size) {
  const tab = tileSizeTabs.find((item) => item.dataset.size === size);
  const procedure = tileProcedures[size];
  if (!tab || !procedure) return;

  tileSizeTabs.forEach((item) => {
    const isSelected = item === tab;
    item.classList.toggle("is-active", isSelected);
    item.setAttribute("aria-selected", String(isSelected));
    item.tabIndex = isSelected ? 0 : -1;
  });
  procedurePanel.setAttribute("aria-labelledby", tab.id);
  procedureIndex.textContent = procedure.index;
  procedureTitle.textContent = procedure.title;
  procedureIntro.textContent = procedure.intro;
  procedureSteps.replaceChildren(...procedure.steps.map((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    return item;
  }));
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectCategory(tab.dataset.category));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home" ? 0
      : event.key === "End" ? tabs.length - 1
        : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    selectCategory(tabs[nextIndex].dataset.category);
  });
});

tileSizeTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTileSize(tab.dataset.size));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home" ? 0
      : event.key === "End" ? tileSizeTabs.length - 1
        : (index + (event.key === "ArrowRight" ? 1 : -1) + tileSizeTabs.length) % tileSizeTabs.length;
    tileSizeTabs[nextIndex].focus();
    selectTileSize(tileSizeTabs[nextIndex].dataset.size);
  });
});

document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => {
    selectCategory(link.dataset.categoryLink, true);
    closeMenu();
  });
});

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  siteNav.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  siteNav.classList.toggle("is-open", !isOpen);
});

document.addEventListener("click", (event) => {
  if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

document.querySelectorAll(".service-action").forEach((button) => {
  button.addEventListener("click", () => selectCategory(button.dataset.category, true));
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".project-image-button");
  if (!button) return;
  lightboxImage.src = button.dataset.image;
  lightboxImage.alt = button.dataset.alt;
  lightboxCaption.textContent = button.dataset.caption;
  lightbox.showModal();
});

document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("close", () => { lightboxImage.src = ""; });

const whatsappMessage = "Hello MK Tiles & Marble, I would like to ask about your services.";
document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMessage)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.querySelector("#enquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const message = [
    `Hello MK Tiles & Marble, my name is ${values.get("name").trim()}.`,
    `My phone number is ${values.get("phone").trim()}.`,
    `Service required: ${values.get("service")}.`,
    `Project details: ${values.get("message").trim()}`,
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  document.querySelector("#form-note").textContent = "Your message is ready in WhatsApp. Review it and press Send there; it has not been sent to the business yet.";
});

selectCategory("tiles");
selectTileSize("1-3");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.documentElement.classList.add("motion-ready");
  document.querySelectorAll(".section-heading, .project-card, .portfolio-about, .service-card, .about-band-image, .about-band-inner, .contact-intro, .enquiry-form").forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
    revealObserver.observe(element);
  });
}