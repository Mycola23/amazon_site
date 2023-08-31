"use strict";
const searchInput = document.querySelector('.search__input');
const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.nav-header-right');
const page = document.querySelector('.page')
const messagesAdd = document.querySelectorAll('.card__message');
const cards =document.querySelector('.cards')
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


// main page


const products = [
    {
        img: "https://images.unsplash.com/photo-1595861021888-e8192a7f774e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        name: 'Basketball ball',
        rating : {
            stars: 4.5,
            count: 56,
        },
        priceCents: 5035,
    },
    {
        img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: 'Gravel',
        rating : {
            stars: 4.7,
            count: 135,
        },
        priceCents: 67790,
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1684952850099-396e7183bc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
        name: 'White socks with rainbow lines',
        rating : {
            stars: 4.0,
            count: 215,
        },
        priceCents: 985,
    },
    {
        img: "https://images.unsplash.com/photo-1539870113056-c6d7439045ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80",
        name: 'Rainbow paper clips',
        rating : {
            stars: 3.8,
            count: 73,
        },
        priceCents: 20,
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1663036970563-99624abc950e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: 'Washing machine',
        rating : {
            stars: 3.5,
            count: 737,
        },
        priceCents: 31045,
    },
    {
        img: "https://images.unsplash.com/photo-1514651029128-173d2e6ea851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
        name: 'Glass for luxury drink',
        rating : {
            stars: 3.5,
            count: 45,
        },
        priceCents: 2199,
    },
    

]


products.forEach((product)=>{
    const productHTML =  ` 
        <div class="card">
            <div class="card__img">
                <img src=${product.img} alt="">
            </div>
            <div class="card__content">
                <div class="card__text">
                    ${product.name}
                </div>
                <div class="card__rating rating">
                    <div class="rating__stars">
                        
                    </div>
                    <div class="rating__votes">
                    ${product.rating.count}
                    </div>
                </div>
                <div class="card__price">$${product.priceCents/100}</div>
                <select class="card__quality">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div class="card__message">
                    <img src="img/icons/complete.svg" alt="">
                    <span>Added</span>
                </div>
            </div>
            <button class="card__btn"> Add to list</button>
        </div>`
        const item = document.createElement('div')
        item.innerHTML = productHTML
        cards.append(item)
})

