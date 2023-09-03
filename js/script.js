"use strict";
//top
const searchInput = document.querySelector('.search__input');
const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.nav-header-right');
//main
const page = document.querySelector('.page');
const mainContainer = document.querySelector('.main__container')
const messagesAdd = document.querySelectorAll('.card__message');
const cards =document.querySelector('.cards');

//bottom
const bactToTop =document.querySelector('.footer__btn');

    //* Don`t forget repair my code and learn  writing tests for js

// top
document.addEventListener('click', (e)=>{
    if(e.target.closest('.search__input')){
        searchInput.parentElement.classList.add('__active');
    }else{
        searchInput.parentElement.classList.remove('__active');
    };

   
});
burgerMenu.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('__active');
    menu.classList.toggle('__active');

});



// main page





let productsHtml = '';
const item = document.createElement('div');
item.className ='cards';

products.forEach((product)=>{
    productsHtml += ` 
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
                        <li class="rating__star">
                            ${product.rating.stars}
                        </li>
                        <li class="rating__star">
                            <img src="img/icons/star.svg" alt="">
                        </li>
                    </div>
                    <div class="rating__votes">
                        ${product.rating.count}
                    </div>
                </div>
                <div class="card__price">$${(product.priceCents/100).toFixed(2)}</div>
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
            <button class="card__btn" data-product-name ="${product.name}" data-product-id ="${product.id}"-> Add to list</button>
        </div>`
    
});
if(productsHtml){
    item.innerHTML = productsHtml;
    mainContainer.append(item);
}

page.addEventListener('click',function(e){
    let target = e.target
    if(target.closest('.card__btn')){
        target.previousElementSibling.lastElementChild.classList.add('__active');
        const productName = target.dataset.productName;
        const productId = target.dataset.productId;
        console.log(target.dataset)
    // check id ------------------------------------------------- 
        let savedId ;
        cart.forEach((item)=>{
            if(productId === item.productId){ // chehk if array cart has the same element if yes => save it and quantity++ , else just add this product to cart
                savedId = item;
            }
            
        });
        if(savedId){
            savedId.quanity++;
        }else{
            cart.push({
                productName: productName,
                productId: productId,
                quanity: 1,
            });
        }
    //--------------------------------------------------------------------
        console.log(cart);
        setTimeout(()=>{
            target.previousElementSibling.lastElementChild.classList.remove('__active');
        },1.3*1000)
    }
});








/// bottom

bactToTop.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});




