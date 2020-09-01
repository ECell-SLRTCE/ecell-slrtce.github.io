// Get all nav links
const navigationItems = document.getElementsByClassName("navigation__item");
const toggler = document.querySelector("#nav-toggle");

// Custom function which closes navigation div
function closeNav() {
  toggler.click();
}

// Adding event listeners
for (let i = 0; i < navigationItems.length; i++) {
  navigationItems[i].addEventListener("click", closeNav, false);
}
