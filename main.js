const navBar = document.getElementById("navBar");

let isOpen = false;
let ChangeIcon = function(icon) {
  if(!isOpen) {
    icon.classList.toggle("fa-xmark");
    navBar.style.display = "block";
    isOpen = true;
  } else {
    icon.classList.toggle("fa-xmark");
    navBar.style.display = "none";
    isOpen = false;
  }
}