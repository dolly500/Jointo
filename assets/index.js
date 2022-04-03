const menu = document.querySelector(".menu");
const menubutton = menu.querySelector("button");
const menuspan = menubutton.querySelector("span");
const menulist = document.getElementById("menu-list");
menubutton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menulist.classList.contains("open")) {
    menulist.classList.remove("open");
    menulist.classList.add("close");
    menuspan.innerText = "🌮";
  } else {
    menulist.classList.add("open");
    menulist.classList.remove("close");
    menuspan.innerText = "X";
  }
}
