document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const popup = document.getElementById("successPopup");
  const closeBtn = document.getElementById("closePopup");

  if (!form || !popup || !closeBtn) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    popup.classList.add("active");
    form.reset();
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});
