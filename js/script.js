const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggler");

const styleSwitcher = document.getElementById("style-switcher"),
  switcherToggle = document.getElementById("switcher-toggle"),
  switcherClose = document.getElementById("switcher-close");

// Toggle Nav Menu
navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");

  // Close style switcher if open
  styleSwitcher.classList.remove("show-switcher");
});

var servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 32,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1208: {
      slidesPerView: 3,
    },
  },
});

// Toggle Style Switcher
switcherToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  styleSwitcher.classList.add("show-switcher");

  // Close nav menu if open
  navMenu.classList.remove("show-menu");
  navToggle.classList.remove("animate-toggle");
});

// Close style switcher manually
switcherClose.addEventListener("click", () => {
  styleSwitcher.classList.remove("show-switcher");
});

// Theme and Color Switching – ORIGINAL LOGIC
const colors = document.querySelectorAll(".style-switcher-color");

colors.forEach((color) => {
  color.onclick = () => {
    const activeColor = color.style.getPropertyValue("--hue");

    colors.forEach((c) => c.classList.remove("active-color"));
    color.classList.add("active-color");

    document.documentElement.style.setProperty("--hue", activeColor);

    // Auto-close after selection
    styleSwitcher.classList.remove("show-switcher");
  };
});

let currentTheme = "light";
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    currentTheme = input.value;
    document.body.className = currentTheme;

    // Auto-close after theme change
    styleSwitcher.classList.remove("show-switcher");
  });
});

// Close both menus when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("animate-toggle");
  }

  if (!styleSwitcher.contains(e.target) && !switcherToggle.contains(e.target)) {
    styleSwitcher.classList.remove("show-switcher");
  }
});
