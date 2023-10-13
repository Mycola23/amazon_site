"use strict";
import { cart, removeFromCart, updateQuantity, saveToStorage } from "../data/cart.js";
import { products } from "../data/data.js";
import { formatMoneys } from "./utils/money.js";

export let contentBox = document.querySelector(".checkout__content");

let cartItems = document.createElement("div");
cartItems.className = `checkout__order order`;
let itemHTML = "";

console.log(cartItems);

// Experements   (тобто ми відкатилися до старої версії // return to old version of website )
const DeleveriPrices = {
    1: 0,
    2: 499,
    3: 799,
};
cart.forEach((elem) => {
    const productId = elem.productId;
    let matchingProduct;
    products.forEach((product) => {
        if (productId === product.id) {
            //console.log(productId);
            matchingProduct = product;
            //console.log(matchingProduct);
        }
    });
    itemHTML += `
    <div class="order__cart cart 
      cart-id-${matchingProduct.id}">
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
                    <input class = 'cart__quantity-change' type="number" value="1">
                    <div class="cart__btn-box">
                        <button data-product-id='${matchingProduct.id}' class="cart__btn cart__btn_up">Update</button>
                        <button data-product-id='${matchingProduct.id}' class="cart__btn cart__btn_del">Delete</button>
                    </div>
                </div>
            </div>
            <div class="cart__delivery-options delivery-options">
                <h3 class="delivery-options__title">Choose a delivery option</h3>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option__check" name="delivery-option-${matchingProduct.id}" value="${DeleveriPrices[1]}" id = "delivery-option-${matchingProduct.id}-${DeleveriPrices[1]}">
                    <div class ='delivery-option__content'>
                        <div class="delivery-option__date">
                            Saturday, September 30
                        </div>
                        <label for="delivery-option-${matchingProduct.id}-${DeleveriPrices[1]}" class="delivery-option__price">
                            Free - Shipping
                        </label>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option__check" name="delivery-option-${matchingProduct.id}" value="${DeleveriPrices[2]}" id = "delivery-option-${matchingProduct.id}-${DeleveriPrices[2]}">
                    <div class ='delivery-option__content'>
                        <div class="delivery-option__date">
                            Thursday, September 28
                        </div>
                        <label for="delivery-option-${matchingProduct.id}-${DeleveriPrices[2]}" class="delivery-option__price">
                            $4.99 - Shipping
                        </label>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option__check" name="delivery-option-${matchingProduct.id}" value="${DeleveriPrices[3]}" id = "delivery-option-${matchingProduct.id}-${DeleveriPrices[3]}">
                    <div class ='delivery-option__content'>
                        <div class="delivery-option__date">
                            Tuesday, September 26 
                        </div>
                        <label for="delivery-option-${matchingProduct.id}-${DeleveriPrices[3]}" class="delivery-option__price">
                            $7.99 - Shipping
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    cartItems.innerHTML = itemHTML;
    //console.log(cartItems);
    contentBox.prepend(cartItems); // todo когда мі на гл странице , других страниц не существует по етому мі получаем null in contentBox we need to deal with it
});

//* -- functional of Update cart
//------ functional for update btn
function functionalOfUpdate(updateInput, quantityNumber, button) {
    updateInput.classList.add("__active");
    quantityNumber.classList.add("__hidden");
    console.log(button);
    button.innerHTML = "Save";
}
function functionalOfSave(updateInput, quantityNumber, button, productId) {
    // todo if newQuantity = 0 , we`ll delete this card of product from cart
    let newQuantity = Number(updateInput.value);
    if (newQuantity === 0) {
        functionalOfDelete(productId);
    } else {
        updateQuantity(productId, newQuantity);
        quantityNumber.innerText = `${newQuantity}`;
        updateInput.classList.remove("__active");
        quantityNumber.classList.remove("__hidden");
        button.innerHTML = "Update";
    }
}

//----- functional for del btn
function functionalOfDelete(productId) {
    removeFromCart(productId);
    const item = document.querySelector(`.cart-id-${productId}`);
    item.remove();
    console.log(item);
}

function UpdateCart(button) {
    let productId = button.dataset.productId;

    // for upd btn
    let updateInput = button.parentElement.previousElementSibling;
    let quantityNumber = button.parentElement.previousElementSibling.previousElementSibling;
    console.log(productId);
    cartItems.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            functionalOfSave(updateInput, quantityNumber, button, productId);
        }
    });
    if (button.classList.contains("cart__btn_up")) {
        if (button.innerText === "Save") {
            functionalOfSave(updateInput, quantityNumber, button, productId);
        } else {
            functionalOfUpdate(updateInput, quantityNumber, button);
        }
    } else if (button.classList.contains("cart__btn_del")) {
        // for del btn
        functionalOfDelete(productId);
    }
    UpdateCartQuantityFromCheckout(cart);
}
//----------------------------------
cartItems.addEventListener("click", function (e) {
    let target = e.target;
    console.log(target); // for experemnts   //todo functional for delivery option
    if (target.closest(".cart__btn")) {
        UpdateCart(target);
    } else if (target.closest(".delivery-option__check")) {
        addDeliveryPrice(target);
    }
});

function UpdateCartQuantityFromCheckout(cart) {
    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });
    localStorage.setItem("cart-quantity", JSON.stringify(cartQuantity));
}

// Delivety options

function addDeliveryPrice(deliveryOption) {
    let deliveryPrice = deliveryOption.value;
    let product_Id = deliveryOption.name.replace("delivery-option-", "");
    cart.forEach((elm) => {
        const productId = elm.productId;
        if (productId === product_Id) {
            elm["delivery-price"] = deliveryPrice;
        }
    });
    saveToStorage();
    console.log(cart);
}

function showOrder(params) {
    let orderHtml = `
    
    <h3 class="order-payment__title">Order Summary</h3>
    <div class="order-payment__row">
        <div>items()</div>
        <div class="order-payment__money">0</div>
    </div>
    <div class="order-payment__row">
        <div>Shipping & handling:</div>
        <div class="order-payment__money">0</div>
    </div>
    <div class="order-payment__row">
        <div>Total before tax:</div>
        <div class="order-payment__money">0</div>
    </div>
    <div class="order-payment__row">
        <div>Estimated tax (10%):</div>
        <div class="order-payment__money">0</div>
    </div>
    <div class="order-payment__row">
        <div>Order total</div>
        <div class="order-payment__money">0</div>
    </div>
    `;
}
