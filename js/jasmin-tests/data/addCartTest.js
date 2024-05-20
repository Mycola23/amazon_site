import { addToCart, cart, loadFromStorage } from "../../../data/cart.js";
const productId1 = "e47638ce-6aa0-4b85-b27f-e1d07eb671d1";
const productId2 = "e47638ce-6aa0-4b85-b27f-e1d07eb671d2";
describe("test suite: addToCart", () => {
    beforeEach(() => {
        spyOn(localStorage, "setItem");
    });
    it("adds an exicting product to the cart", () => {
        spyOn(localStorage, "getItem").and.callFake(() => {
            return JSON.stringify([
                {
                    productId: productId1,
                    quantity: 1,
                    price: 999,
                    deliveryOptionId: "1",
                },
            ]);
        });
        loadFromStorage();

        addToCart(productId1);
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "cart",
            JSON.stringify([
                {
                    productId: productId1,
                    quantity: 2,
                    price: 999,
                    deliveryOptionId: "1",
                },
            ])
        ); // it checks if  setItem recieved correct valuse
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual("e47638ce-6aa0-4b85-b27f-e1d07eb671d1");
        expect(cart[0].quantity).toEqual(2);
    });
    it("adds a new product to the cart", () => {
        spyOn(localStorage, "getItem").and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();
        console.log(localStorage.getItem("cart"));

        addToCart("e47638ce-6aa0-4b85-b27f-e1d07eb671d1");
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "cart",
            JSON.stringify([
                {
                    productId: productId1,
                    quantity: 1,
                    deliveryOptionId: "1",
                },
            ])
        ); // it checks if  setItem recieved correct valuse
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual("e47638ce-6aa0-4b85-b27f-e1d07eb671d1");
        expect(cart[0].quantity).toEqual(1); // flaky  test that sometimes passes and sometimes failes
    });
});
