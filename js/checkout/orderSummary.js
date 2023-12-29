"use strict";
import { cart, removeFromCart, updateQuantity, saveToStorage, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/data.js";
import { formatMoneys } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "../checkout/paymentSummary.js";
export let contentBox = document.querySelector(".checkout__content");

let cartItems = document.createElement("div");
cartItems.className = `checkout__order order`;

const orderPayment = document.querySelector(".order-payment__info");

export function renderOrderSummary() {
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
                        <div class="cart__name">${matchingProduct.name}</div>
                        <div class="cart__price">$${formatMoneys(matchingProduct.priceCents)}</div>
                        <div class="cart__quantity">
                            <div class ='cart__quantity-box'>
                                <span>Quantity:</span>
                                <span class="quantity-label">${cartItem.quantity}</span>
                            </div>
                            <input class = 'cart__quantity-change' type="number" value="1">
                            <div class="cart__btn-box">
                                <button data-product-id='${matchingProduct.id}' class="cart__btn cart__btn_up">Update</button>
                                <button data-product-id='${matchingProduct.id}' class="cart__btn cart__btn_del">Delete</button>
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

        cartItems.innerHTML = itemHTML;
        //console.log(cartItems);
        contentBox.prepend(cartItems); // todo когда мі на гл странице , других страниц не существует по етому мі получаем null in contentBox we need to deal with it
    });
    // functional of delivery options

    function deliveryOptionsHTML(matchingProduct, cartItem) {
        let html = ``;

        deliveryOptions.forEach((deliveryOption) => {
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
            const dateString = deliveryDate.format("dddd, MMMM D");
            const priceString = deliveryOption.priceCents === 0 ? "Free" : `$${formatMoneys(deliveryOption.priceCents)} -`;
            /*let attributeChecked;
            if (isChecked) {
                attributeChecked = "checked";
            } else {
                attributeChecked = "";
            }*/
            // todo add to input  ${cartItem.deliveryOptionId === deliveryOption.id ? 'checked' : ''}
            /*  const element = document.getElementById('your-element-id');                        // Replace 'your-element-id' with the actual ID of your element
                element.checked = false; 
                
                ${cartItem.deliveryOptionId === deliveryOption.id ? "checked" : ""}  //* i`ve restored this functional - yess  -\ * .. * /
                ${attributeChecked}
            */
            //console.log(cartItem);
            //console.log(priceString); //todo it works
            html += `<div class="delivery-option" >
                        <input type="radio" ${cartItem.deliveryOptionId === deliveryOption.id ? "checked" : ""}  class="delivery-option__check" name="delivery-option-${matchingProduct.id}" data-product-id = '${matchingProduct.id}' data-delivery-option-id = '${deliveryOption.id}' >
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
        let quantityNumber = button.parentElement.previousElementSibling.previousElementSibling.lastElementChild; //  quantitynumber block
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
        renderPaymentSummary();
    }
    //----------------------------------
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
            console.log(target);
            renderPaymentSummary();
            console.log(JSON.parse(localStorage.getItem("cart")));
        }
    });

    function UpdateCartQuantityFromCheckout(cart) {
        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });
        localStorage.setItem("cart-quantity", JSON.stringify(cartQuantity));
    }

    // Delivety options // not works
}
