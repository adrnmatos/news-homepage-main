const navBar = document.getElementById("navBar");

let isMenuOpen = false;

let ChangeIcon = function(icon) {
  if(!isMenuOpen) {
    icon.classList.toggle("fa-xmark");
    navBar.classList.toggle('active');
    isMenuOpen = true;
  } else {
    icon.classList.toggle("fa-xmark");
    navBar.classList.toggle('active');
    isMenuOpen = false;
  }
}