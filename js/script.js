"use strict";
const searchInput = document.querySelector('.search__input');
const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.nav-header-right');
const page = document.querySelector('.page')
const messagesAdd = document.querySelectorAll('.card__message');
const bactToTop =document.querySelector('.footer__btn')
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

bactToTop.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
})


page.addEventListener('click',function(e){
    if(e.target.closest('.card__btn')){
        console.log(e.target.previousElementSibling)
        e.target.previousElementSibling.classList.add('__active');
        setTimeout(()=>{
           e.target.previousElementSibling.classList.remove('__active')
        },1.3*1000)
    }
})