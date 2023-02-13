const mainNav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".btn-mobile-nav");

navToggle.addEventListener("click", function () {
  const visible = mainNav.getAttribute("data-visible");
  if (visible === "false") {
    mainNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visible === "true") {
    mainNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
