const menuBtn = document.querySelector(".mobile-nav-btn");
const header = document.querySelector(".header");

function toggleBtnFunction() {
  header.classList.toggle("nav-open");
  header.classList.toggle("sticky");
}

menuBtn.addEventListener("click", toggleBtnFunction);
