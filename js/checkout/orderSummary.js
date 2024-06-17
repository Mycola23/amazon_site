"use strict";
import { cart, removeFromCart, updateQuantity, saveToStorage, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/data.js";
import { formatMoneys } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "../checkout/paymentSummary.js";
let contentBox = document.querySelector(".checkout__content");

const orderPayment = document.querySelector(".order-payment__info");
let cartItems = document.createElement("div");
cartItems.className = `checkout__order order`;
export function renderOrderSummary(test) {
    //-------------------------------   only for test        ------------------------------------------------------

    // ----------------------------------------------------------------------------------------------------------------------------
    let itemHTML = "";
    cart.forEach((cartItem) => {
        const productId = cartItem.productId;
        const matchingProduct = getProduct(productId);

        //getProduct(cartItem.productId);
        //------------------------------ calculate the product date delivery
        const deliveryOptionId = cartItem.deliveryOptionId;
        const deliveryOption = getDeliveryOption(deliveryOptionId);

        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
        const dateString = deliveryDate.format("dddd, MMMM D");
        //----------------------------------
        itemHTML += `
            <div class="order__cart cart 
            cart-id-${matchingProduct.id}">
                <div class="cart__delivery-date">Delivery date:<span> ${dateString}</span></div>
                <div class="cart__content">
                    <div class="cart__img">
                        <img src="${matchingProduct.img}" alt="#">
                    </div>
                    <div class="cart__info">
                        <div class="cart__name jstest-product-name-${matchingProduct.id}">${matchingProduct.name}</div>
                        <div class="cart__price jstest-product-price-${matchingProduct.id}">${matchingProduct.getPrice()}</div>
                        <div class="cart__quantity">
                            <div class ='cart__quantity-box jstest-product-quantity-${matchingProduct.id}'>
                                <span>Quantity:</span>
                                <span class="quantity-label">${cartItem.quantity}</span>
                            </div>
                            <input class = 'cart__quantity-change' type="number" value="1">
                            <div class="cart__btn-box">
                                <button data-product-id='${matchingProduct.id}' class="cart__btn cart__btn_up">Update</button>
                                <button data-product-id='${matchingProduct.id}' class="cart__btn cart__btn_del jstest-btn-delete-${matchingProduct.id}">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div class="cart__delivery-options delivery-options">
                        <h3 class="delivery-options__title">Choose a delivery option</h3>
                        ${deliveryOptionsHTML(matchingProduct, cartItem)}
                    </div>
                </div>
            </div>
        `;
        if (test === 1) {
            document.querySelector(".checkout__order").innerHTML = itemHTML;
        } else {
            cartItems.innerHTML = itemHTML;
            // console.log(cartItems);
            // console.log(contentBox);
            contentBox.prepend(cartItems); // !   not comment  this code
        }
        //*complete коли ми на глав сторінці , інших не існує ==>   ми отримуємо null in contentBox we need to deal with it
    });
    // functional of delivery options

    function deliveryOptionsHTML(matchingProduct, cartItem) {
        let html = ``;

        deliveryOptions.forEach((deliveryOption) => {
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
            const dateString = deliveryDate.format("dddd, MMMM D");
            const priceString = deliveryOption.priceCents === 0 ? "Free" : `$${formatMoneys(deliveryOption.priceCents)} -`;
            /* 
                let attributeChecked;
                if (isChecked) {
                    attributeChecked = "checked";
                } else {
                    attributeChecked = "";
                }
                // *complete add to input  ${cartItem.deliveryOptionId === deliveryOption.id ? 'checked' : ''}
                const element = document.getElementById('your-element-id');                        // Replace 'your-element-id' with the actual ID of your element
                    element.checked = false; 
                    
                    ${cartItem.deliveryOptionId === deliveryOption.id ? "checked" : ""}  //* i`ve restored this functional - yess  -\ * .. * /
                    ${attributeChecked}
                
                //console.log(cartItem);
                //console.log(priceString); //*complete it works
            */

            html += `<div class="delivery-option" >
                        <input type="radio" ${cartItem.deliveryOptionId === deliveryOption.id ? "checked" : ""}  class="delivery-option__check" name="delivery-option-${
                matchingProduct.id
            }" data-jstest-delivery-product-${matchingProduct.id} = '${matchingProduct.id}' data-jstest-delivery-option-${matchingProduct.id} = '${
                deliveryOption.id
            }' data-product-id = '${matchingProduct.id}' data-delivery-option-id = '${deliveryOption.id}' >
                        <div class ='delivery-option__content'>
                            <div class="delivery-option__date">
                                ${dateString}
                            </div>
                            <div class="delivery-option__price"> 
                                ${priceString} Shipping
                            </div>
                        </div>
                    </div>
                `;
        }); //for="delivery-option-${matchingProduct.id}-${DeleveriPrices[1]}  id = "delivery-option-${matchingProduct.id}-${DeleveriPrices[1]}
        return html;
    }

    //* -- functional of Update cart
    //------ functional for update btn
    function functionalOfUpdate(updateInput, quantityNumber, button) {
        updateInput.classList.add("__active");
        quantityNumber.classList.add("__hidden");
        //console.log(button);
        button.innerHTML = "Save";
    }
    function functionalOfSave(updateInput, quantityNumber, button, productId) {
        //*complete if newQuantity = 0 , we`ll delete this card of product from cart
        let newQuantity = Number(updateInput.value);
        //console.log(newQuantity);
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
        //console.log(item);
    }

    function UpdateCart(button) {
        let productId = button.dataset.productId;

        // for upd btn
        let updateInput = button.parentElement.previousElementSibling;
        let quantityNumber = button.parentElement.previousElementSibling.previousElementSibling.lastElementChild; //  quantitynumber block // todo change this code om more independent
        //console.log(quantityNumber);
        cartItems.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                functionalOfSave(updateInput, quantityNumber, button, productId);
                UpdateCartQuantityFromCheckout(cart);
                renderPaymentSummary();
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
        if (test === 1) {
            renderPaymentSummary(1);
        } else {
            renderPaymentSummary();
        }
    }
    //----------------------------------

    if (test === 1) {
        let testCartItems = document.querySelector(".checkout__order");
        testCartItems.addEventListener("click", function (e) {
            let target = e.target;
            //console.log(cart);
            //console.log(target);
            if (target.closest(".cart__btn")) {
                let test = 1;
                UpdateCart(target);
            } else if (target.closest(".delivery-option__check")) {
                //addDeliveryPrice(target);
                //console.log(target.dataset);                                             // only for test
                const { productId, deliveryOptionId } = target.dataset; //*complete  це практично працює, залишилось щоб одна помилка не вискакувала і все
                //console.log(productId, deliveryOptionId);
                updateDeliveryOption(productId, deliveryOptionId);
                //console.log(target);
                renderPaymentSummary(1); //*complete оця штук енція ламає мені весь тест,зараза така
                renderOrderSummary(1);
                //console.log(JSON.parse(localStorage.getItem("cart")));
            }
        });
    } else {
        cartItems.addEventListener("click", function (e) {
            let target = e.target;
            //console.log(cart);
            //console.log(target);
            if (target.closest(".cart__btn")) {
                UpdateCart(target);
            } else if (target.closest(".delivery-option__check")) {
                //addDeliveryPrice(target);
                //console.log(target.dataset);
                const { productId, deliveryOptionId } = target.dataset;
                //console.log(productId, deliveryOptionId);
                updateDeliveryOption(productId, deliveryOptionId);
                // console.log(target);
                renderPaymentSummary();
                renderOrderSummary();
                //console.log(JSON.parse(localStorage.getItem("cart")));
            }
        });
    }

    function UpdateCartQuantityFromCheckout(cart) {
        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });
        localStorage.setItem("cart-quantity", JSON.stringify(cartQuantity));
    }

    // Delivety options // not works
}
