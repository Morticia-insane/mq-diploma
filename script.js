
let burder = document.querySelector(".header__burger");
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let activeClass = "active";

burder.addEventListener("click", () => {
  nav.classList.toggle(activeClass);
  body.classList.toggle(activeClass);
}) 