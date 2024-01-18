"use strict";
const btnCloseMenu = document.getElementById("btn-close-menu");
const burger = document.getElementById("burger");
const aside = document.getElementById("menu");
const menuItem = document.querySelectorAll(".aside-nav-menu-item");

function openMenu() {
  burger.addEventListener("click", () => {
    aside.classList.add("aside-active");
  });
}
openMenu();

function closeMenu() {
  btnCloseMenu.addEventListener("click", () => {
    aside.classList.remove("aside-active");
  });
}
closeMenu();

function clickMenuItem() {
   menuItem.forEach((item) => {
      item.addEventListener("click", () => {
        menuItem.forEach((el) => {
          el.classList.remove("aside-nav-menu-item-active");
        });
        item.classList.add("aside-nav-menu-item-active");
      });
    });
    
}
clickMenuItem()




