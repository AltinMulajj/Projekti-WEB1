document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".signup-form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "../index.html";
  });
});
