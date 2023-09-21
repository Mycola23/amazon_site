"use strict";
import {cart} from '../data/cart.js';
import {products} from '../data/data.js';
import {formatMoneys} from './utils/money.js'
export let contentBox = document.querySelector('.checkout__content');

let cartItem = document.createElement('div');
cartItem.className = `checkout__order order` 
let itemHTML = '';
export function addToOrder(){
    cart.forEach((elem) => {
        const productId = elem.productId;
        let matchingProduct
        products.forEach((product) => {
            if(productId === product.id){
                console.log(productId)
                matchingProduct = product;
                console.log(matchingProduct)
            }
        });
        itemHTML +=  `
        <div class="order__cart cart">
            <div class="cart__delivery-date">Delivery date:<span> Tuesday,September 26</span></div>
            <div class="cart__content">
                <div class="cart__img">
                    <img src="${matchingProduct.img}" alt="#">
                </div>
                <div class="cart__info">
                    <div class="cart__name">${matchingProduct.name}</div>
                    <div class="cart__price">$${formatMoneys(matchingProduct.priceCents)}</div>
                    <div class="cart__quantity">
                        <span>Quantity:</span>
                        <span class="quantity-label">${elem.quantity}</span>
                        <input type="text">
                        <div class="cart__btn-box">
                            <button class="cart__btn cart__btn_up">Update</button>
                            <button class="cart__btn cart__btn_del">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="cart__delivery-options delivery-options">
                    <h3 class="delivery-options__title">Choose a delivery option</h3>
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option__check" name="delivery-option-${matchingProduct.id}">
                        <div>
                            <div class="delivery-option__date">
                                Saturday, September 30
                            </div>
                            <div class="delivery-option__price">
                                Free - Shipping
                            </div>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option__check"  name="delivery-option-${matchingProduct.id}">
                        <div>
                            <div class="delivery-option__date">  
                                Tuesday, September 26
                            </div>
                            <div class="delivery-option__price">
                                $4.99 - Shipping
                            </div>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option__check"  name="delivery-option-${matchingProduct.id}">
                        <div>
                            <div class="delivery-option__date">
                                Thursday, September 28
                            </div>
                            <div class="delivery-option__price">
                                $7.99 - Shipping
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
       
        cartItem.innerHTML = itemHTML;
        console.log(cartItem)
        //contentBox.prepend(cartItem);  // todo когда мі на гл странице , других страниц не существует по етому мі получаем null in contentBox we need to deal with it
        
        
    });
}//* wait for new update

//cartBtn.addEventListener('click',()=>{
  //  contentBox.prepend(cartItem);
//})


