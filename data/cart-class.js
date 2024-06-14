"use strict";
class Cart {
    cartItems;
    #localStorageKey; //* private proprery thta we have access only in the class
    #loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [
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
    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }
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
    }
    removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((item) => {
            if (item.productId !== productId) {
                newCart.push(item);
            }
        });
        this.cartItems = newCart;
        this.saveToStorage();
    }
    updateQuantity(productId, number) {
        this.cartItems.forEach((item) => {
            if (item.productId === productId) {
                item.quantity = number;
            }
        });
        this.saveToStorage();
    }
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
    }
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }
}

const cart = new Cart("cart-oop");
const businessCart = new Cart("cart-business");
cart.addToCart("e47638ce-6aa0-4b85-b27f-e1d07eb678c7");
console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);
