"use strict";
import { cart, removeFromCart, updateQuantity } from "../data/cart.js";
import { products } from "../data/data.js";
import { formatMoneys } from "./utils/money.js";
//import { counter, updateCartQuantity } from "./script.js";
export let contentBox = document.querySelector(".checkout__content");

let cartItems = document.createElement("div");
cartItems.className = `checkout__order order`;
let itemHTML = "";
/*export function addToOrder() {
    cart.forEach((elem) => {
        const productId = elem.productId;
        let matchingProduct;
        products.forEach((product) => {
            if (productId === product.id) {
                console.log(productId);
                matchingProduct = product;
                console.log(matchingProduct);
            }
        });
        itemHTML += `
        <div class="order__cart cart">
            <div class="cart__delivery-date">Delivery date:<span> Tuesday,September 26</span></div>
            <div class="cart__content">
                <div class="cart__img">
                    <img src="${matchingProduct.img}" alt="#">
                </div>
                <div class="cart__info">
                    <div class="cart__name">${matchingProduct.name}</div>
                    <div class="cart__price">$${formatMoneys(
                        matchingProduct.priceCents
                    )}</div>
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
                        <input type="radio" class="delivery-option__check" name="delivery-option-${
                            matchingProduct.id
                        }">
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
                        <input type="radio" class="delivery-option__check"  name="delivery-option-${
                            matchingProduct.id
                        }">
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
                        <input type="radio" class="delivery-option__check"  name="delivery-option-${
                            matchingProduct.id
                        }">
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

        cartItems.innerHTML = itemHTML;
        console.log(cartItems);
        //contentBox.prepend(cartItems);  // todo когда мі на гл странице , других страниц не существует по етому мі получаем null in contentBox we need to deal with it
    });
} */ //* wait for new update

console.log(cartItems);

/*document.addEventListener("visibilitychange", () => {
    console.log("Visibility changed!");
    if (!document.hidden) {
        console.log("Document is visible. Prepending cartItems.");
        contentBox.prepend(cartItems);
    }
});*/

// Experements   (тобто ми відкатилися до старої версії // return to old version of website )
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
                        <button data-product-id='${
                            matchingProduct.id
                        }' class="cart__btn cart__btn_up">Update</button>
                        <button data-product-id='${
                            matchingProduct.id
                        }' class="cart__btn cart__btn_del">Delete</button>
                    </div>
                </div>
            </div>
            <div class="cart__delivery-options delivery-options">
                <h3 class="delivery-options__title">Choose a delivery option</h3>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option__check" name="delivery-option-${
                        matchingProduct.id
                    }">
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
                    <input type="radio" class="delivery-option__check"  name="delivery-option-${
                        matchingProduct.id
                    }">
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
                    <input type="radio" class="delivery-option__check"  name="delivery-option-${
                        matchingProduct.id
                    }">
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

    cartItems.innerHTML = itemHTML;
    //console.log(cartItems);
    contentBox.prepend(cartItems); // todo когда мі на гл странице , других страниц не существует по етому мі получаем null in contentBox we need to deal with it
});
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
//----------------------------------------

//----- functional for del btn
function functionalOfDelete(productId) {
    removeFromCart(productId);
    const item = document.querySelector(`.cart-id-${productId}`);
    item.remove();
    console.log(item);
}

//----------------------------------

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
    //updateCartQuantity();
    //todo full functional of  firstbtn    &   second reaction on btn del
}

cartItems.addEventListener("click", function (e) {
    let target = e.target;
    console.log(target); // for experemnts   //todo functional for delivery option
    if (target.closest(".cart__btn")) {
        UpdateCart(target);
    }
});
