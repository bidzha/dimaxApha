const hamburger = document.querySelector(".header__burger");
const navLinks = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});