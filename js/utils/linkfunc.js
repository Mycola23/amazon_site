"use strict";
// func of burger menu

export function ObserveBurgerMenu() {
    const burgerMenu = document.querySelector(".header__burger");
    const menu = document.querySelector(".nav-header-right");
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("__active");
        menu.classList.toggle("__active");
    });
}

export function backToTop() {
    document.querySelector(".footer__btn").addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
}
// todo make that this code work on each file where  i will import it
