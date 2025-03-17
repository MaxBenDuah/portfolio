const menuBtn = document.querySelector(".mobile-nav-btn");
const header = document.querySelector(".header");

function toggleBtnFunction() {
  header.classList.toggle("nav-open");
}

menuBtn.addEventListener("click", toggleBtnFunction);
