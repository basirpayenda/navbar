/*  navbar variables */
let links = document.querySelectorAll("nav ul li a:not(:only-child)");
let burger = document.querySelector(".nav-toggler");
let dropdown_btns = document.querySelectorAll(".dropdown_btn");
/* Hamburger to X toggle and toggle navbar */
burger.addEventListener("click", e => {
  document.querySelector(".navbar-list").classList.toggle("toggle_navbar");
  e.currentTarget.classList.toggle("active");
});

/*  If a link has a dropdown, add sub menu toggle */
dropdown_btns.forEach(link => {
  link.addEventListener("click", e => {
    e.currentTarget.childNodes[1].classList.toggle("fa-caret-up");
    const ownDropdown = e.currentTarget.nextElementSibling;
    ownDropdown.classList.toggle("show_dropdown");

    document.querySelectorAll(".dropdown_btn + .dropdown-list").forEach(el => {
      if (el !== ownDropdown) {
        el.classList.remove("show_dropdown");
        el.previousElementSibling.childNodes[1].classList.remove("fa-caret-up");
      }
    });
  });
});

/*  Clicking away from dropdown will remove the dropdown class */
window.onclick = function(e) {
  if (!e.target.matches(".dropdown_btn")) {
    var dropdowns = document.getElementsByClassName("dropdown-list");
    for (i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains("show_dropdown")) {
        dropdowns[i].previousElementSibling.childNodes[1].classList.remove(
          "fa-caret-up"
        );
        dropdowns[i].classList.remove("show_dropdown");
      }
    }
  }
};
