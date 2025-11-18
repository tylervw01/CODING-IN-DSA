// main.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("DSA 2.0 system loaded ✅");

  // Example: highlight active pagination square
  const currentPath = window.location.pathname;
  document.querySelectorAll(".pagination a").forEach((link) => {
    if (currentPath.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});
