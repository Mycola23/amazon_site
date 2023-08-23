"use strict";
const searchInput = document.querySelector('.search__input');
const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.nav-header-right');
document.addEventListener('click', (e)=>{
    if(e.target.closest('.search__input')){
        searchInput.parentElement.classList.add('__active')
    }else{
        searchInput.parentElement.classList.remove('__active')
    }
})
burgerMenu.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('__active');
    menu.classList.toggle('__active');

})