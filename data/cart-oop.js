"use strict";
function CreateCart(localStorageKey) {
    const cart = {
        cartItems: undefined, // its variable that before called cart
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [
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
        },
        addToCart(productId, productPrice) {
            // check id -------------------------------------------------
            let savedId;
            this.cartItems.forEach((item) => {
                if (productId === item.productId) {
                    // chehk if array cart has the same element if yes => save it and quantity++ , else just add this product to cart
                    savedId = item;
                }
            });
            if (savedId) {
                savedId.quantity++;
            } else {
                this.cartItems.push({
                    productId: productId,
                    quantity: 1,
                    price: productPrice,
                    deliveryOptionId: "1",
                });
            }
            this.saveToStorage();
        },
        removeFromCart(productId) {
            const newCart = [];
            this.cartItems.forEach((item) => {
                if (item.productId !== productId) {
                    newCart.push(item);
                }
            });
            this.cartItems = newCart;
            this.saveToStorage();
        },
        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
        updateQuantity(productId, number) {
            this.cartItems.forEach((item) => {
                if (item.productId === productId) {
                    item.quantity = number;
                }
            });
            this.saveToStorage();
        },
        updateDeliveryOption(productId, deliveryOptionId) {
            let savedId;
            this.cartItems.forEach((item) => {
                if (productId === item.productId) {
                    // chehk if array cart has the same element if yes => save it and quantity++ , else just add this product to cart
                    savedId = item;
                }
            });
            if (!savedId) {
                return;
            }
            if (deliveryOptionId !== "1" && deliveryOptionId !== "2" && deliveryOptionId !== "3") {
                return;
            }
            savedId.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        },
    };
    return cart;
}

const cart = CreateCart("cart-oop");
const businessCart = CreateCart("cart-business");
cart.loadFromStorage();
cart.addToCart("e47638ce-6aa0-4b85-b27f-e1d07eb678c7");
businessCart.loadFromStorage();
//console.log(cart);
//console.log(businessCart);
