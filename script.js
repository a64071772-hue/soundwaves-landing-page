// // ==========================
// // Smooth Scroll for Anchor Links
// // ==========================
// const links = document.querySelectorAll('a[href^="#"]');

// links.forEach(link => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const target = document.querySelector(link.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

// // ==========================
// // Scroll Animations
// // ==========================
// const elements = document.querySelectorAll(".section, .card, .hero-inner");

// elements.forEach(el => el.classList.add("hidden"));

// window.addEventListener("scroll", () => {
//   elements.forEach(el => {
//     const top = el.getBoundingClientRect().top;
//     const screenHeight = window.innerHeight;

//     if (top < screenHeight - 100) {
//       el.classList.add("show");
//     }
//   });
// });

// // ==========================
// // Optional: Animated Counter
// // ==========================
// function animateCount(el, target) {
//   let current = 0;
//   const duration = 1200;
//   const start = performance.now();

//   function update(time) {
//     const progress = Math.min((time - start) / duration, 1);
//     const eased = progress * (2 - progress); // ease-out
//     current = Math.floor(eased * target);
//     el.textContent = current;

//     if (progress < 1) requestAnimationFrame(update);
//   }

//   requestAnimationFrame(update);
// }

// // Example usage if you have counters:
// // document.querySelectorAll(".counter").forEach(el => {
// //   animateCount(el, parseInt(el.dataset.target));
// // });





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
