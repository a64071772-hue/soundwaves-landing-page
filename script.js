// ==========================
// Smooth Scroll for Anchor Links
// ==========================
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ==========================
// Scroll Animations for Sections (not hero)
// ==========================
const elements = document.querySelectorAll(".section:not(#home), .card");

elements.forEach(el => el.classList.add("hidden"));

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      el.classList.add("show");
    }
  });
});

// ==========================
// Show Hero Section Immediately
// ==========================
window.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-inner");
  hero.classList.add("show"); // Immediately show hero section
});

// ==========================
// Optional: Animated Counter
// ==========================
function animateCount(el, target) {
  let current = 0;
  const duration = 1200;
  const start = performance.now();

  function update(time) {
    const progress = Math.min((time - start) / duration, 1);
    const eased = progress * (2 - progress);
    current = Math.floor(eased * target);
    el.textContent = current;

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// ==========================
// Adjust layout for all devices
// ==========================
function adjustLayout() {
  const heroText = document.querySelector(".hero-text");
  const heroInner = document.querySelector(".hero-inner");
  const card1 = document.querySelector(".card1");

  const width = window.innerWidth;

  if (width <= 480) {
    // Mobile
    heroText.style.marginLeft = "20px";
    heroInner.style.flexDirection = "column";
    card1.style.width = "90%";
    card1.style.marginLeft = "auto";
    card1.style.marginRight = "auto";
  } else if (width <= 768) {
    // Tablet
    heroText.style.marginLeft = "40px";
    heroInner.style.flexDirection = "column";
    card1.style.width = "80%";
    card1.style.marginLeft = "auto";
    card1.style.marginRight = "auto";
  } else {
    // Desktop
    heroText.style.marginLeft = "170px";
    heroInner.style.flexDirection = "row";
    card1.style.width = "700px";
    card1.style.marginLeft = "180px";
  }
}

// Run on page load
window.addEventListener("DOMContentLoaded", adjustLayout);

// Run on window resize
window.addEventListener("resize", adjustLayout);
