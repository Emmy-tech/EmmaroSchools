document.addEventListener("DOMContentLoaded", function() {
  console.log("School website loaded successfully!");

  // Contact form handling
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for contacting us! We will get back to you soon.");
      form.reset();
    });
  }

  // Mobile navigation
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav ul");

  if (menuToggle) {
    menuToggle.addEventListener("click", function() {
      nav.classList.toggle("showing");
    });
  }
});

