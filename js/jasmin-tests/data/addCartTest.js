import { addToCart, cart, loadFromStorage } from "../../../data/cart.js";

describe("test suite: addToCart", () => {
    it("adds an exicting product to the cart", () => {
        spyOn(localStorage, "setItem");
        spyOn(localStorage, "getItem").and.callFake(() => {
            return JSON.stringify([
                {
                    productId: "e47638ce-6aa0-4b85-b27f-e1d07eb671d1",
                    quantity: 1,
                    deliveryOptionId: "1",
                },
            ]);
        });
        loadFromStorage();

        addToCart("e47638ce-6aa0-4b85-b27f-e1d07eb671d1");
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual("e47638ce-6aa0-4b85-b27f-e1d07eb671d1");
        expect(cart[0].quantity).toEqual(2);
    });
    it("adds a new product to the cart", () => {
        spyOn(localStorage, "setItem");
        spyOn(localStorage, "getItem").and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();
        console.log(localStorage.getItem("cart"));

        addToCart("e47638ce-6aa0-4b85-b27f-e1d07eb671d1");
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual("e47638ce-6aa0-4b85-b27f-e1d07eb671d1");
        expect(cart[0].quantity).toEqual(1); // flaky  test that sometimes passes and sometimes failes
    });
});
