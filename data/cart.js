"use strict";

export let cart;
loadFromStorage();
export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem("cart")) || [
        {
            productId: "e47638ce-6aa0-4b85-b27f-e1d07eb671d1",
            quantity: 1,
            price: 999,
            deliveryOptionId: "1",
        },
        {
            productId: "e47638ce-6aa0-4b85-b27f-e1d07eb671d2",
            quantity: 6,
            price: 999,
            deliveryOptionId: "1",
        },
        {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 3,
            price: 999,
            deliveryOptionId: "1",
        },
    ];
}
export function addToCart(productId, productPrice) {
    // check id -------------------------------------------------
    let savedId;
    cart.forEach((item) => {
        if (productId === item.productId) {
            // chehk if array cart has the same element if yes => save it and quantity++ , else just add this product to cart
            savedId = item;
        }
    });
    if (savedId) {
        savedId.quantity++;
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
            price: productPrice,
            deliveryOptionId: "1",
        });
    }
    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((item) => {
        if (item.productId !== productId) {
            newCart.push(item);
        }
    });
    cart = newCart;
    saveToStorage();
}

export function saveToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart)); // record cart to local storage
}

export function updateQuantity(productId, number) {
    cart.forEach((item) => {
        if (item.productId === productId) {
            item.quantity = number;
        }
    });
    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let savedId;
    cart.forEach((item) => {
        if (productId === item.productId) {
            // chehk if array cart has the same element if yes => save it and quantity++ , else just add this product to cart
            savedId = item;
        }
    });
    savedId.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}
