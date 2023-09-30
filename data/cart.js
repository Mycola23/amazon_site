"use strict";

export let cart = JSON.parse(localStorage.getItem("cart")) || [
    {
        productId: "e47638ce-6aa0-4b85-b27f-e1d07eb671d1",
        quantity: 1,
    },
    {
        productId: "e47638ce-6aa0-4b85-b27f-e1d07eb671d2",
        quantity: 6,
    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 3,
    },
];
export function addToCart(productId) {
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

function saveToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart)); // record cart to local storage
}
